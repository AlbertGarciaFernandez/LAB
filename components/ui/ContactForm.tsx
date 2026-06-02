"use client";

import React, { useCallback, useRef, useState } from "react";
import { m } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type ContactFormVariant = "full" | "compact";
type FormState = "idle" | "submitting" | "retrying" | "success" | "error";

interface ContactFormProps {
  variant?: ContactFormVariant;
  onRequestFullForm?: () => void;
}

interface FieldErrors {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  ai_goal?: string;
  budget?: string;
  message?: string;
  project_type?: string;
}

interface ValidationMessages {
  name: string;
  company: string;
  email: string;
  message: string;
  role: string;
  phone: string;
  budget: string;
  aiGoal: string;
  projectType: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\-\s\d]*$/;
const RATE_LIMIT_MS = 5000;
const MAX_RETRIES = 2;
const RETRY_DELAYS = [2000, 4000];

function getPhoneDigits(phone: string): number {
  return phone.replace(/\D/g, "").length;
}

function isCompact(variant: ContactFormVariant) {
  return variant === "compact";
}

function validateForm(
  formData: FormData,
  selectedType: string | null,
  variant: ContactFormVariant,
  messages: ValidationMessages
): FieldErrors {
  const errors: FieldErrors = {};
  const compact = isCompact(variant);

  const name = formData.get("name") as string | null;
  if (!name || name.trim().length < 2) errors.name = messages.name;

  const company = formData.get("company") as string | null;
  if (!company || company.trim().length < 2) {
    errors.company = messages.company;
  }

  const email = formData.get("email") as string | null;
  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.email = messages.email;
  }

  const message = formData.get("message") as string | null;
  if (!message || message.trim().length < 10) {
    errors.message = messages.message;
  }

  if (!compact) {
    const role = formData.get("role") as string | null;
    if (!role || role.trim().length < 2) {
      errors.role = messages.role;
    }

    const phone = formData.get("phone") as string | null;
    if (phone && phone.trim()) {
      const digits = getPhoneDigits(phone);
      if (!PHONE_REGEX.test(phone.trim()) || digits < 8) {
        errors.phone = messages.phone;
      }
    }

    const budget = formData.get("budget") as string | null;
    if (!budget) {
      errors.budget = messages.budget;
    }

    const aiGoal = formData.get("ai_goal") as string | null;
    if (!aiGoal || aiGoal.trim().length < 10) {
      errors.ai_goal = messages.aiGoal;
    }

    if (!selectedType) {
      errors.project_type = messages.projectType;
    }
  }

  return errors;
}

function scrollToFirstError(errors: FieldErrors): void {
  const fieldIds = [
    "name",
    "company",
    "email",
    "role",
    "budget",
    "phone",
    "ai_goal",
    "message",
    "project_type",
  ] as const;

  for (const id of fieldIds) {
    if (errors[id]) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus({ preventScroll: true });
      }
      break;
    }
  }
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
    >
      {children}
    </label>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;

  return (
    <p id={id} className="mt-2 text-sm text-red-500">
      {error}
    </p>
  );
}

function inputClass(hasError?: boolean) {
  return `w-full rounded-2xl border bg-white/[0.03] px-4 py-4 text-base text-white transition-colors placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-hunter-green/50 ${
    hasError
      ? "border-red-500/60 focus:border-red-500"
      : "border-white/10 focus:border-hunter-green"
  }`;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  variant = "full",
  onRequestFullForm,
}) => {
  const t = useTranslations("ContactForm");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [retryAttempt, setRetryAttempt] = useState(0);

  const compact = variant === "compact";
  const projectTypesRaw = t.raw("projectTypes");
  const projectTypes = Array.isArray(projectTypesRaw) ? (projectTypesRaw as string[]) : [];
  const budgetOptionsRaw = t.raw("budgetOptions");
  const budgetOptions = Array.isArray(budgetOptionsRaw) ? (budgetOptionsRaw as string[]) : [];
  const lastSubmitTime = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const clearErrors = useCallback(() => {
    setFieldErrors({});
    setSubmitError(null);
  }, []);

  const clearFieldError = useCallback((field: keyof FieldErrors) => {
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const submitToServer = useCallback(async (data: Record<string, string>): Promise<boolean> => {
    const response = await fetch("https://formsubmit.co/ajax/fdcaf086cf2933714fd96d0622e5525b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  }, []);

  const performSubmit = useCallback(async () => {
    if (!formRef.current) return;

    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setSubmitError(t("errors.rateLimit"));
      setFormState("idle");
      return;
    }

    lastSubmitTime.current = now;
    clearErrors();

    const formData = new FormData(formRef.current);
    const validationMessages: ValidationMessages = {
      name: t("errors.name"),
      company: t("errors.company"),
      email: t("errors.email"),
      message: t("errors.message"),
      role: t("errors.role"),
      phone: t("errors.phone"),
      budget: t("errors.budget"),
      aiGoal: t("errors.aiGoal"),
      projectType: t("errors.projectType"),
    };
    const validationErrors = validateForm(formData, selectedType, variant, validationMessages);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setFormState("idle");
      scrollToFirstError(validationErrors);
      return;
    }

    const data: Record<string, string> = {
      name: (formData.get("name") as string) || "",
      company: (formData.get("company") as string) || "",
      role: compact ? "" : (formData.get("role") as string) || "",
      budget: compact ? "" : (formData.get("budget") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: compact ? "" : (formData.get("phone") as string) || "",
      ai_goal: compact ? "" : (formData.get("ai_goal") as string) || "",
      message: (formData.get("message") as string) || "",
      project_type: compact ? "Quick contact" : selectedType || "Not Specified",
      _subject: compact ? "Quick Lead from CodeHunter Lab" : "New Lead from CodeHunter Lab",
      _template: "table",
    };

    setFormState("submitting");

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const success = await submitToServer(data);
        if (success) {
          setFormState("success");
          return;
        }
        throw new Error("Server returned non-OK response");
      } catch {
        if (attempt < MAX_RETRIES) {
          setFormState("retrying");
          setRetryAttempt(attempt + 1);
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAYS[attempt]));
          setFormState("submitting");
        } else {
          setFormState("error");
          setSubmitError(t("errors.transmission"));
          return;
        }
      }
    }
  }, [clearErrors, compact, selectedType, submitToServer, t, variant]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      void performSubmit();
    },
    [performSubmit]
  );

  const handleRetry = useCallback(() => {
    setSubmitError(null);
    lastSubmitTime.current = 0;
    void performSubmit();
  }, [performSubmit]);

  if (formState === "success") {
    return (
      <m.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto w-full max-w-3xl rounded-[2rem] border border-hunter-green/30 bg-surface-dark/70 p-8 text-center shadow-[0_24px_80px_-40px_rgba(0,230,162,0.45)] md:p-12"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-hunter-green/15 text-3xl text-hunter-green">
          ✓
        </div>
        <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
          {t("success.title")}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
          {t("success.description")}
        </p>
        <button
          type="button"
          onClick={() => {
            setFormState("idle");
            setSelectedType(null);
            formRef.current?.reset();
          }}
          className="mt-8 text-sm text-hunter-green underline underline-offset-4 transition-colors hover:text-white"
        >
          {t("success.reset")}
        </button>
      </m.div>
    );
  }

  const isSubmitting = formState === "submitting" || formState === "retrying";

  return (
    <div className={`mx-auto w-full ${compact ? "max-w-xl" : "max-w-4xl"}`}>
      <div role="status" aria-live="polite" className="sr-only">
        {formState === "submitting" && t("status.submitting")}
        {formState === "retrying" &&
          t("status.retrying", { attempt: retryAttempt, max: MAX_RETRIES })}
        {formState === "error" && t("status.error")}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={compact ? "space-y-6" : "space-y-10"}
        noValidate
      >
        {!compact ? (
          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hunter-green">
                {t("full.projectTypeStep")}
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                {t("full.title")}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
                {t("full.description")}
              </p>
            </div>

            <div
              className="flex flex-wrap gap-3"
              role="radiogroup"
              aria-required="true"
              aria-invalid={fieldErrors.project_type ? "true" : "false"}
              aria-describedby={fieldErrors.project_type ? "project_type-error" : undefined}
            >
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  role="radio"
                  aria-checked={selectedType === type}
                  onClick={() => {
                    setSelectedType(type);
                    clearFieldError("project_type");
                  }}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? "border-hunter-orange bg-hunter-orange text-near-black shadow-[0_0_20px_rgba(255,122,60,0.3)]"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <FieldError id="project_type-error" error={fieldErrors.project_type} />
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-hunter-green">
              {t("compact.eyebrow")}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
              {t("compact.title")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{t("compact.description")}</p>
          </div>
        )}

        <div className={`grid gap-5 ${compact ? "" : "md:grid-cols-2"}`}>
          <div>
            <FieldLabel htmlFor="name">{t("fields.name")}</FieldLabel>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
              aria-required="true"
              aria-invalid={fieldErrors.name ? "true" : "false"}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              onChange={() => clearFieldError("name")}
              className={inputClass(!!fieldErrors.name)}
              placeholder={t("placeholders.name")}
            />
            <FieldError id="name-error" error={fieldErrors.name} />
          </div>

          <div>
            <FieldLabel htmlFor="company">{t("fields.company")}</FieldLabel>
            <input
              type="text"
              name="company"
              id="company"
              required
              autoComplete="organization"
              aria-required="true"
              aria-invalid={fieldErrors.company ? "true" : "false"}
              aria-describedby={fieldErrors.company ? "company-error" : undefined}
              onChange={() => clearFieldError("company")}
              className={inputClass(!!fieldErrors.company)}
              placeholder={t("placeholders.company")}
            />
            <FieldError id="company-error" error={fieldErrors.company} />
          </div>

          <div>
            <FieldLabel htmlFor="email">{t("fields.email")}</FieldLabel>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              aria-required="true"
              aria-invalid={fieldErrors.email ? "true" : "false"}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              onChange={() => clearFieldError("email")}
              className={inputClass(!!fieldErrors.email)}
              placeholder={t("placeholders.email")}
            />
            <FieldError id="email-error" error={fieldErrors.email} />
          </div>

          {!compact ? (
            <div>
              <FieldLabel htmlFor="role">{t("fields.role")}</FieldLabel>
              <input
                type="text"
                name="role"
                id="role"
                required
                aria-required="true"
                aria-invalid={fieldErrors.role ? "true" : "false"}
                aria-describedby={fieldErrors.role ? "role-error" : undefined}
                onChange={() => clearFieldError("role")}
                className={inputClass(!!fieldErrors.role)}
                placeholder={t("placeholders.role")}
              />
              <FieldError id="role-error" error={fieldErrors.role} />
            </div>
          ) : null}

          {!compact ? (
            <div>
              <FieldLabel htmlFor="phone">{t("fields.phone")}</FieldLabel>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-invalid={fieldErrors.phone ? "true" : "false"}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                onChange={() => clearFieldError("phone")}
                className={inputClass(!!fieldErrors.phone)}
                placeholder={t("placeholders.phone")}
              />
              <FieldError id="phone-error" error={fieldErrors.phone} />
            </div>
          ) : null}

          {!compact ? (
            <div>
              <FieldLabel htmlFor="budget">{t("fields.budget")}</FieldLabel>
              <select
                name="budget"
                id="budget"
                required
                defaultValue=""
                aria-required="true"
                aria-invalid={fieldErrors.budget ? "true" : "false"}
                aria-describedby={fieldErrors.budget ? "budget-error" : undefined}
                onChange={() => clearFieldError("budget")}
                className={inputClass(!!fieldErrors.budget)}
              >
                <option value="" disabled>
                  {t("placeholders.budget")}
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option} className="bg-near-black text-white">
                    {option}
                  </option>
                ))}
              </select>
              <FieldError id="budget-error" error={fieldErrors.budget} />
            </div>
          ) : null}

          {!compact ? (
            <div className="md:col-span-2">
              <FieldLabel htmlFor="ai_goal">{t("fields.aiGoal")}</FieldLabel>
              <input
                type="text"
                name="ai_goal"
                id="ai_goal"
                required
                aria-required="true"
                aria-invalid={fieldErrors.ai_goal ? "true" : "false"}
                aria-describedby={fieldErrors.ai_goal ? "ai_goal-error" : undefined}
                onChange={() => clearFieldError("ai_goal")}
                className={inputClass(!!fieldErrors.ai_goal)}
                placeholder={t("placeholders.aiGoal")}
              />
              <FieldError id="ai_goal-error" error={fieldErrors.ai_goal} />
            </div>
          ) : null}

          <div className={compact ? "" : "md:col-span-2"}>
            <FieldLabel htmlFor="message">
              {compact ? t("fields.compactMessage") : t("fields.message")}
            </FieldLabel>
            <textarea
              name="message"
              id="message"
              rows={compact ? 4 : 5}
              required
              aria-required="true"
              aria-invalid={fieldErrors.message ? "true" : "false"}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              onChange={() => clearFieldError("message")}
              className={`${inputClass(!!fieldErrors.message)} min-h-[132px] resize-y`}
              placeholder={compact ? t("placeholders.compactMessage") : t("placeholders.message")}
            />
            <FieldError id="message-error" error={fieldErrors.message} />
          </div>
        </div>

        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {submitError ? (
          <div role="alert" className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-400">{submitError}</p>
            {formState === "error" ? (
              <button
                type="button"
                onClick={handleRetry}
                className="mt-2 text-sm font-medium text-hunter-green underline underline-offset-4 transition-colors hover:text-white"
              >
                {t("actions.retry")}
              </button>
            ) : null}
          </div>
        ) : null}

        <div
          className={`flex ${compact ? "flex-col" : "flex-col md:flex-row md:items-center md:justify-between"} gap-4`}
        >
          <div className="text-sm leading-relaxed text-gray-500">
            {compact ? t("notes.compact") : t("notes.full")}
          </div>

          <div className={`flex ${compact ? "flex-col" : "flex-col-reverse sm:flex-row"} gap-3`}>
            {variant === "compact" && onRequestFullForm ? (
              <button
                type="button"
                onClick={onRequestFullForm}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t("actions.openFullForm")}
              </button>
            ) : null}

            <m.button
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-hunter-green px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-near-black transition-all hover:bg-hunter-orange hover:shadow-[0_0_30px_rgba(255,122,60,0.3)] disabled:cursor-wait disabled:opacity-70"
            >
              <span className="flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    {formState === "retrying" ? (
                      t("actions.retrying", { attempt: retryAttempt, max: MAX_RETRIES })
                    ) : (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("actions.sending")}
                      </>
                    )}
                  </>
                ) : compact ? (
                  t("actions.send")
                ) : (
                  t("actions.book")
                )}
              </span>
            </m.button>
          </div>
        </div>
      </form>
    </div>
  );
};
