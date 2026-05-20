"use client";

import React, { useState, useRef, useCallback } from "react";
import { m } from "framer-motion";
import { Loader2 } from "lucide-react";

const projectTypes = [
  "Web App / Product",
  "Infrastructure / DevOps",
  "AI & Automation",
  "Strategic Consulting",
];

type FormState = "idle" | "submitting" | "retrying" | "success" | "error";

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\-\s\d]*$/;
const RATE_LIMIT_MS = 5000;
const MAX_RETRIES = 2;
const RETRY_DELAYS = [2000, 4000];

function getPhoneDigits(phone: string): number {
  return phone.replace(/\D/g, "").length;
}

function validateForm(formData: FormData, selectedType: string | null): FieldErrors {
  const errors: FieldErrors = {};

  const name = formData.get("name") as string | null;
  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const email = formData.get("email") as string | null;
  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const company = formData.get("company") as string | null;
  if (!company || company.trim().length < 2) {
    errors.company = "Company must be at least 2 characters.";
  }

  const role = formData.get("role") as string | null;
  if (!role || role.trim().length < 2) {
    errors.role = "Role must be at least 2 characters.";
  }

  const phone = formData.get("phone") as string | null;
  if (phone && phone.trim()) {
    const digits = getPhoneDigits(phone);
    if (!PHONE_REGEX.test(phone.trim()) || digits < 8) {
      errors.phone = "Phone must have at least 8 digits.";
    }
  }

  const budget = formData.get("budget") as string | null;
  if (!budget) {
    errors.budget = "Please select a budget range.";
  }

  const message = formData.get("message") as string | null;
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  const aiGoal = formData.get("ai_goal") as string | null;
  if (!aiGoal || aiGoal.trim().length < 10) {
    errors.ai_goal = "Please describe the AI improvement goal in at least 10 characters.";
  }

  if (!selectedType) {
    errors.project_type = "Please select a project type.";
  }

  return errors;
}

function scrollToFirstError(errors: FieldErrors): void {
  const fieldIds = [
    "name",
    "company",
    "role",
    "budget",
    "email",
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

export const ContactForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [retryAttempt, setRetryAttempt] = useState(0);

  const lastSubmitTime = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const clearErrors = useCallback(() => {
    setFieldErrors({});
    setSubmitError(null);
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
      setSubmitError("Please wait a few seconds before trying again.");
      setFormState("idle");
      return;
    }

    lastSubmitTime.current = now;
    clearErrors();

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData, selectedType);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setFormState("idle");
      scrollToFirstError(validationErrors);
      return;
    }

    const data: Record<string, string> = {
      name: (formData.get("name") as string) || "",
      company: (formData.get("company") as string) || "",
      role: (formData.get("role") as string) || "",
      budget: (formData.get("budget") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      ai_goal: (formData.get("ai_goal") as string) || "",
      message: (formData.get("message") as string) || "",
      project_type: selectedType || "Not Specified",
      _subject: "New Lead from CodeHunter Lab",
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
          setSubmitError("Transmission failed. Please try again or email us directly.");
          return;
        }
      }
    }
  }, [selectedType, clearErrors, submitToServer]);

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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto w-full max-w-2xl rounded-2xl border border-hunter-green/30 bg-surface-dark p-12 text-center"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-hunter-green/20 text-4xl text-hunter-green">
          ✓
        </div>
        <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white">
          System Initiated
        </h3>
        <p className="text-lg text-gray-400">
          We received your transmission. We&apos;ll be in touch shortly to discuss your{" "}
          {selectedType || "project"}.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setSelectedType(null);
            formRef.current?.reset();
          }}
          className="mt-8 text-sm text-hunter-green underline underline-offset-4 transition-colors hover:text-white"
        >
          Send another message
        </button>
      </m.div>
    );
  }

  const isSubmitting = formState === "submitting" || formState === "retrying";

  return (
    <div className="mx-auto mt-16 w-full max-w-4xl">
      <div role="status" aria-live="polite" className="sr-only">
        {formState === "submitting" && "Submitting form..."}
        {formState === "retrying" &&
          `Retrying submission... attempt ${retryAttempt} of ${MAX_RETRIES}`}
        {formState === "error" && "Form submission failed."}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-16" noValidate>
        {/* Project Type Selection */}
        <div className="space-y-6 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-hunter-green">
            01 / Select Protocol
          </p>
          <div
            className="flex flex-wrap justify-center gap-4"
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
                  if (fieldErrors.project_type) {
                    setFieldErrors((prev) => ({ ...prev, project_type: undefined }));
                  }
                }}
                className={`font-display rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                  selectedType === type
                    ? "border-hunter-orange bg-hunter-orange text-near-black shadow-[0_0_20px_rgba(255,122,60,0.3)]"
                    : "border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          {fieldErrors.project_type && (
            <p id="project_type-error" className="text-sm text-red-500">
              {fieldErrors.project_type}
            </p>
          )}
        </div>

        {/* Inputs */}
        <div className="space-y-12">
          <div className="text-center">
            <p className="font-mono text-sm uppercase tracking-widest text-hunter-green">
              02 / Input Data
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Full Name */}
            <div className="group relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                aria-required="true"
                aria-invalid={fieldErrors.name ? "true" : "false"}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                onChange={() => {
                  if (fieldErrors.name) {
                    setFieldErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Full Name *
              </label>
              {fieldErrors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="group relative">
              <input
                type="text"
                name="company"
                id="company"
                required
                autoComplete="organization"
                aria-required="true"
                aria-invalid={fieldErrors.company ? "true" : "false"}
                aria-describedby={fieldErrors.company ? "company-error" : undefined}
                onChange={() => {
                  if (fieldErrors.company) {
                    setFieldErrors((prev) => ({ ...prev, company: undefined }));
                  }
                }}
                className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="company"
                className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Company *
              </label>
              {fieldErrors.company && (
                <p id="company-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.company}
                </p>
              )}
            </div>

            {/* Role */}
            <div className="group relative">
              <input
                type="text"
                name="role"
                id="role"
                required
                aria-required="true"
                aria-invalid={fieldErrors.role ? "true" : "false"}
                aria-describedby={fieldErrors.role ? "role-error" : undefined}
                onChange={() => {
                  if (fieldErrors.role) {
                    setFieldErrors((prev) => ({ ...prev, role: undefined }));
                  }
                }}
                className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="role"
                className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Role / Title *
              </label>
              {fieldErrors.role && (
                <p id="role-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.role}
                </p>
              )}
            </div>

            {/* Budget */}
            <div className="group relative">
              <select
                name="budget"
                id="budget"
                required
                defaultValue=""
                aria-required="true"
                aria-invalid={fieldErrors.budget ? "true" : "false"}
                aria-describedby={fieldErrors.budget ? "budget-error" : undefined}
                onChange={() => {
                  if (fieldErrors.budget) {
                    setFieldErrors((prev) => ({ ...prev, budget: undefined }));
                  }
                }}
                className="peer w-full cursor-pointer appearance-none border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors focus:border-hunter-green focus:outline-none [&>option]:bg-near-black [&>option]:text-white"
              >
                <option value="" disabled hidden></option>
                <option value="< €5k">Under €5k</option>
                <option value="€5k – €15k">€5k – €15k</option>
                <option value="€15k – €30k">€15k – €30k</option>
                <option value="€30k – €60k">€30k – €60k</option>
                <option value="> €60k">Over €60k</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
              <label
                htmlFor="budget"
                className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Approximate Budget *
              </label>
              <span className="pointer-events-none absolute right-0 top-4 text-gray-500">▾</span>
              {fieldErrors.budget && (
                <p id="budget-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.budget}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                aria-required="true"
                aria-invalid={fieldErrors.email ? "true" : "false"}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                onChange={() => {
                  if (fieldErrors.email) {
                    setFieldErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Corporate Email *
              </label>
              {fieldErrors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="group relative">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-invalid={fieldErrors.phone ? "true" : "false"}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                onChange={() => {
                  if (fieldErrors.phone) {
                    setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
              >
                Phone
              </label>
              {fieldErrors.phone && (
                <p id="phone-error" className="mt-2 text-sm text-red-500">
                  {fieldErrors.phone}
                </p>
              )}
            </div>
          </div>

          {/* AI Improvement Goal */}
          <div className="group relative">
            <input
              type="text"
              name="ai_goal"
              id="ai_goal"
              required
              aria-required="true"
              aria-invalid={fieldErrors.ai_goal ? "true" : "false"}
              aria-describedby={fieldErrors.ai_goal ? "ai_goal-error" : undefined}
              onChange={() => {
                if (fieldErrors.ai_goal) {
                  setFieldErrors((prev) => ({ ...prev, ai_goal: undefined }));
                }
              }}
              className="peer w-full border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="ai_goal"
              className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
            >
              What would you like to improve with AI? *
            </label>
            {fieldErrors.ai_goal && (
              <p id="ai_goal-error" className="mt-2 text-sm text-red-500">
                {fieldErrors.ai_goal}
              </p>
            )}
          </div>

          {/* Mission Brief */}
          <div className="group relative">
            <textarea
              name="message"
              id="message"
              rows={1}
              required
              aria-required="true"
              aria-invalid={fieldErrors.message ? "true" : "false"}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              onChange={() => {
                if (fieldErrors.message) {
                  setFieldErrors((prev) => ({ ...prev, message: undefined }));
                }
              }}
              className="custom-scrollbar peer max-h-60 w-full resize-none overflow-y-auto border-b border-white/20 bg-transparent py-4 text-xl text-white transition-colors placeholder:text-gray-600 focus:border-hunter-green focus:outline-none"
              placeholder=" "
              onInput={(e) => {
                e.currentTarget.style.height = "auto";
                e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
              }}
            ></textarea>
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-0 top-4 text-xl text-gray-500 transition-all duration-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green"
            >
              Briefly describe your main challenges or areas to optimize... *
            </label>
            {fieldErrors.message && (
              <p id="message-error" className="mt-2 text-sm text-red-500">
                {fieldErrors.message}
              </p>
            )}
          </div>
        </div>

        {/* Honeypot antispam */}
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Global Error Banner */}
        {submitError && (
          <div
            role="alert"
            className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center"
          >
            <p className="text-red-400">{submitError}</p>
            {formState === "error" && (
              <button
                type="button"
                onClick={handleRetry}
                className="mt-2 text-sm font-medium text-hunter-green underline underline-offset-4 transition-colors hover:text-white"
              >
                Retry now
              </button>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <m.button
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="group relative overflow-hidden rounded-full bg-white px-12 py-5 text-xl font-black uppercase tracking-widest text-near-black transition-all hover:bg-hunter-green hover:shadow-[0_0_30px_rgba(0,230,162,0.4)] disabled:cursor-wait disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isSubmitting ? (
                <>
                  {formState === "retrying" ? (
                    `Retrying... (attempt ${retryAttempt}/${MAX_RETRIES})`
                  ) : (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Transmitting...
                    </>
                  )}
                </>
              ) : (
                <>
                  Initialize Sequence
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
            </span>
          </m.button>
        </div>
      </form>
    </div>
  );
};
