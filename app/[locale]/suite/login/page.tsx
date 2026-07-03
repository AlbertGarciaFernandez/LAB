"use client";

import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/suite/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_40%)]" />

      <Card className="relative z-10 w-full max-w-md rounded-2xl border-border/50 bg-surface/80 p-2 shadow-2xl backdrop-blur-xl sm:p-4">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-surface-2 ring-1 ring-border">
            <Image
              src="/logo-hntr.svg"
              alt="CodeHunter Lab"
              width={40}
              height={40}
              className="size-8"
              priority
            />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-semibold tracking-tight text-text">
              Welcome back
            </CardTitle>
            <p className="text-sm text-text-muted">Sign in to your Hunter Suite workspace</p>
          </div>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
