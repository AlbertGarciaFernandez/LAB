"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/suite/auth-context";

export default function LoginForm() {
  const router = useRouter();
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        router.push(`/${locale}/suite/crm`);
      } else {
        setError(result.error ?? "Invalid email or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <Input
            id="email"
            type="email"
            placeholder="demo@codehunterlab.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 border-border bg-surface-2 pl-10 pr-4 text-text placeholder:text-text-muted focus-visible:ring-primary"
            autoComplete="email"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-text">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 border-border bg-surface-2 pl-10 pr-10 text-text placeholder:text-text-muted focus-visible:ring-primary"
            autoComplete="current-password"
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text"
            aria-label={showPassword ? "Hide password" : "Show password"}
            disabled={isSubmitting}
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <p className="text-center text-xs text-text-muted">
        Try <span className="font-medium text-text">demo@codehunterlab.com</span> /{" "}
        <span className="font-medium text-text">demo123</span>
      </p>
    </form>
  );
}
