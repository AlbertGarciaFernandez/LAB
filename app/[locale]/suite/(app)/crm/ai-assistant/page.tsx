"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CornerDownLeft, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AIMessage } from "@/components/suite/ui/AIMessage";
import { PageHeader } from "@/components/suite/ui/PageHeader";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "Suggest follow-ups for today",
  "Summarize my pipeline",
  "Draft an email to Acme Corp",
  "What deals are at risk?",
];

function getAIResponse(prompt: string): string {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("follow-ups")) {
    return (
      "Here are your recommended follow-ups for today:\n\n" +
      "1. **Acme Corp** — deal stalled in Proposal for 5 days. Send a quick check-in.\n" +
      "2. **TechFlow BV** — demo requested last Tuesday. Confirm scheduling.\n" +
      "3. **Oceanic Shipping** — objection on pricing. Renew proposal with adjusted terms.\n" +
      "4. **3 cold leads** from last week need a re-engagement email."
    );
  }

  if (normalized.includes("pipeline")) {
    return (
      "Pipeline summary:\n\n" +
      "• **€487,500** total pipeline value across 12 open opportunities\n" +
      "• **4 deals** in Negotiation stage (€210,000)\n" +
      "• **5 deals** in Proposal stage (€165,000)\n" +
      "• **3 new qualified** leads entered this week\n" +
      "• Win rate is **64%** over the last 90 days."
    );
  }

  if (normalized.includes("email")) {
    return (
      "Draft email to Acme Corp:\n\n" +
      "*Subject: Quick check-in on next steps*\n\n" +
      "Hi Sarah,\n\n" +
      "I hope you’re doing well. I wanted to follow up on the proposal we sent last week. " +
      "Do you have any questions or feedback? I’m happy to jump on a quick call to walk through it.\n\n" +
      "Looking forward to hearing from you.\n\n" +
      "Best,\n" +
      "Alex"
    );
  }

  if (normalized.includes("at risk")) {
    return (
      "Deals flagged as at-risk:\n\n" +
      "• **Acme Corp** — stalled 5+ days in Proposal (€45,000)\n" +
      "• **NorthStar Logistics** — close date pushed twice (€38,000)\n" +
      "• **BrightHealth NL** — competitor mentioned in last call (€62,000)\n\n" +
      "Recommended actions: schedule executive check-ins and refresh proposals."
    );
  }

  return (
    "I can help you with follow-ups, pipeline summaries, email drafts, and risk analysis. " +
    "Try one of the suggested prompts or ask me anything about your CRM."
  );
}

let messageIdCounter = 0;

function createMessage(role: Message["role"], content: string): Message {
  messageIdCounter += 1;
  return { id: `msg-${messageIdCounter}`, role, content };
}

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    createMessage(
      "assistant",
      "Good morning! I’m your CRM assistant. How can I help you close more deals today?"
    ),
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, createMessage("user", trimmed)]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, createMessage("assistant", getAIResponse(trimmed))]);
    }, 1000);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSend(input);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex h-[calc(100vh-4rem)] flex-col gap-6 p-4 md:p-6"
    >
      <PageHeader
        title="AI Assistant"
        description="Ask questions, draft messages, and get pipeline insights."
      />

      <Card className="flex flex-1 flex-col overflow-hidden">
        <CardContent className="flex flex-1 flex-col gap-4 p-4 md:p-6">
          <div ref={scrollRef} className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
            {messages.map((message) => (
              <AIMessage key={message.id} role={message.role} content={message.content} />
            ))}
            {isTyping && <AIMessage role="assistant" content="AI is typing" isTyping />}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <Button
                  key={prompt}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSend(prompt)}
                  disabled={isTyping}
                >
                  <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
                  {prompt}
                </Button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Ask anything about your CRM..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  disabled={isTyping}
                  className="pr-10"
                />
                <CornerDownLeft className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button type="submit" disabled={!input.trim() || isTyping}>
                <Send className="mr-2 h-4 w-4" />
                Send
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
