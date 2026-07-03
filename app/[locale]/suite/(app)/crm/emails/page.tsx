"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { Mail, MailOpen, PenLine, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { EmptyState } from "@/components/suite/ui/EmptyState";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { getEmails, markEmailRead } from "@/lib/suite/data/crm";
import type { Email } from "@/lib/suite/types/crm";
import { cn } from "@/lib/utils";

export default function EmailsPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeForm, setComposeForm] = useState({ to: "", subject: "", body: "" });

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getEmails().then((data) => {
      if (!mounted) return;
      const sorted = [...data].sort((a, b) => b.sentAt.localeCompare(a.sentAt));
      setEmails(sorted);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (emails.length > 0 && !selectedId) {
      setSelectedId(emails[0].id);
    }
  }, [emails, selectedId]);

  const selectedEmail = useMemo(
    () => emails.find((email) => email.id === selectedId) ?? null,
    [emails, selectedId]
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const email = emails.find((item) => item.id === id);
    if (email && !email.readAt) {
      markEmailRead(id);
      setEmails((prev) =>
        prev.map((item) => (item.id === id ? { ...item, readAt: new Date().toISOString() } : item))
      );
    }
  };

  const handleToggleRead = (id: string) => {
    const email = emails.find((item) => item.id === id);
    if (!email) return;

    if (email.readAt) {
      setEmails((prev) =>
        prev.map((item) => (item.id === id ? { ...item, readAt: undefined } : item))
      );
    } else {
      markEmailRead(id);
      setEmails((prev) =>
        prev.map((item) => (item.id === id ? { ...item, readAt: new Date().toISOString() } : item))
      );
    }
  };

  const handleSend = () => {
    setComposeOpen(false);
    setComposeForm({ to: "", subject: "", body: "" });
  };

  const formatDate = (value: string) => {
    const date = parseISO(value);
    const distance = formatDistanceToNow(date, { addSuffix: true });
    return distance;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex h-[calc(100vh-4rem)] flex-col gap-6 p-4 md:p-6"
    >
      <PageHeader
        title="Emails"
        description="Read and compose emails from your inbox."
        actions={
          <Button onClick={() => setComposeOpen(true)}>
            <PenLine className="mr-2 h-4 w-4" />
            Compose
          </Button>
        }
      />

      {isLoading ? (
        <div className="grid flex-1 gap-4 lg:grid-cols-3">
          <div className="h-full animate-pulse rounded-xl bg-muted lg:col-span-1" />
          <div className="h-full animate-pulse rounded-xl bg-muted lg:col-span-2" />
        </div>
      ) : (
        <div className="grid flex-1 gap-4 overflow-hidden lg:grid-cols-3">
          <div className="flex flex-col gap-2 overflow-y-auto rounded-xl border border-border bg-card lg:col-span-1">
            {emails.length === 0 ? (
              <EmptyState
                icon={<Mail className="h-6 w-6" />}
                title="No emails found"
                description="Your inbox is empty. Compose a new email to get started."
                action={{ label: "Compose", onClick: () => setComposeOpen(true) }}
              />
            ) : (
              emails.map((email) => (
                <button
                  key={email.id}
                  onClick={() => handleSelect(email.id)}
                  className={cn(
                    "flex flex-col gap-1 border-b border-border p-4 text-left transition-colors last:border-0 hover:bg-accent/50",
                    selectedId === email.id && "bg-accent"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {!email.readAt ? (
                        <Mail className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <MailOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className={cn("font-medium", !email.readAt && "font-semibold")}>
                        {email.from.name}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatDate(email.sentAt)}
                    </span>
                  </div>
                  <p className={cn("text-sm", !email.readAt && "font-medium")}>{email.subject}</p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{email.body}</p>
                </button>
              ))
            )}
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card lg:col-span-2">
            {selectedEmail ? (
              <>
                <div className="border-b border-border p-4 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">{selectedEmail.subject}</h2>
                      <p className="text-sm text-muted-foreground">
                        From: {selectedEmail.from.name} ({selectedEmail.from.email})
                      </p>
                      <p className="text-sm text-muted-foreground">
                        To: {selectedEmail.to.name} ({selectedEmail.to.email})
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(parseISO(selectedEmail.sentAt), "MMMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleRead(selectedEmail.id)}
                    >
                      {selectedEmail.readAt ? "Mark as unread" : "Mark as read"}
                    </Button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">
                    {selectedEmail.body}
                  </p>
                </div>
                <div className="border-t border-border p-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
                Select an email to read
              </div>
            )}
          </div>
        </div>
      )}

      <Sheet open={composeOpen} onOpenChange={setComposeOpen}>
        <SheetContent className="flex w-full flex-col sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Compose Email</SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email-to">To</Label>
              <Input
                id="email-to"
                value={composeForm.to}
                onChange={(event) =>
                  setComposeForm((prev) => ({ ...prev, to: event.target.value }))
                }
                placeholder="recipient@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-subject">Subject</Label>
              <Input
                id="email-subject"
                value={composeForm.subject}
                onChange={(event) =>
                  setComposeForm((prev) => ({ ...prev, subject: event.target.value }))
                }
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <Label htmlFor="email-body">Body</Label>
              <Textarea
                id="email-body"
                value={composeForm.body}
                onChange={(event) =>
                  setComposeForm((prev) => ({ ...prev, body: event.target.value }))
                }
                placeholder="Write your message..."
                className="min-h-[200px] flex-1"
              />
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setComposeOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSend}>
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
}
