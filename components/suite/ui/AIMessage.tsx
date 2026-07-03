"use client";

import { Bot, User } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AIMessageProps {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
  className?: string;
}

export function AIMessage({ role, content, isTyping, className }: AIMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start", className)}>
      <div
        className={cn(
          "flex max-w-[85%] gap-3 sm:max-w-[75%]",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          )}
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>

        <div
          className={cn(
            "relative rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
            isUser
              ? "rounded-br-sm bg-primary text-primary-foreground"
              : "rounded-bl-sm border bg-card text-card-foreground"
          )}
        >
          {content}
          {isTyping && (
            <span className="ml-1 inline-flex items-center gap-0.5 align-middle">
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-current opacity-70"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-current opacity-70"
                style={{ animationDelay: "120ms" }}
              />
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-current opacity-70"
                style={{ animationDelay: "240ms" }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
