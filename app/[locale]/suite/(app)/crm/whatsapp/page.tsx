"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { MessageCircle, Phone, Send } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/suite/ui/EmptyState";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { addWhatsAppMessage, getWhatsAppChats } from "@/lib/suite/data/crm";
import type { WhatsAppChat } from "@/lib/suite/types/crm";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatMessageTime(value: string) {
  return format(parseISO(value), "h:mm a");
}

export default function WhatsappPage() {
  const [chats, setChats] = useState<WhatsAppChat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getWhatsAppChats().then((data) => {
      if (!mounted) return;
      setChats(data);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (chats.length > 0 && !selectedId) {
      setSelectedId(chats[0].id);
    }
  }, [chats, selectedId]);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === selectedId) ?? null,
    [chats, selectedId]
  );

  useEffect(() => {
    if (selectedChat) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChat]);

  const handleSend = () => {
    if (!selectedChat || !messageInput.trim()) return;

    const message = addWhatsAppMessage(selectedChat.id, messageInput.trim());
    if (!message) return;

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, message],
              lastMessageAt: message.sentAt,
              unreadCount: 0,
            }
          : chat
      )
    );
    setMessageInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const lastMessagePreview = (chat: WhatsAppChat) => {
    const last = chat.messages[chat.messages.length - 1];
    return last?.content ?? "No messages";
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex h-[calc(100vh-4rem)] flex-col gap-6 p-4 md:p-6"
    >
      <PageHeader title="WhatsApp Inbox" description="Chat with contacts and customers." />

      {isLoading ? (
        <div className="grid flex-1 gap-4 lg:grid-cols-3">
          <div className="h-full animate-pulse rounded-xl bg-muted lg:col-span-1" />
          <div className="h-full animate-pulse rounded-xl bg-muted lg:col-span-2" />
        </div>
      ) : (
        <div className="grid flex-1 gap-4 overflow-hidden lg:grid-cols-3">
          <div className="flex flex-col gap-2 overflow-y-auto rounded-xl border border-border bg-card lg:col-span-1">
            {chats.length === 0 ? (
              <EmptyState
                icon={<MessageCircle className="h-6 w-6" />}
                title="No chats found"
                description="Your WhatsApp inbox is empty. Start a conversation to begin messaging."
              />
            ) : (
              chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedId(chat.id)}
                  className={cn(
                    "flex items-start gap-3 border-b border-border p-4 text-left transition-colors last:border-0 hover:bg-accent/50",
                    selectedId === chat.id && "bg-accent"
                  )}
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback>{getInitials(chat.contactName)}</AvatarFallback>
                  </Avatar>
                  <span className="block min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate font-medium">{chat.contactName}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {formatDistanceToNow(parseISO(chat.lastMessageAt), { addSuffix: true })}
                      </span>
                    </span>
                    <span className="line-clamp-1 block text-sm text-muted-foreground">
                      {lastMessagePreview(chat)}
                    </span>
                  </span>
                  {chat.unreadCount > 0 && (
                    <Badge variant="default" className="ml-2 shrink-0">
                      {chat.unreadCount}
                    </Badge>
                  )}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card lg:col-span-2">
            {selectedChat ? (
              <>
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{getInitials(selectedChat.contactName)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedChat.contactName}</p>
                      <p className="text-xs text-muted-foreground">{selectedChat.contactPhone}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {selectedChat.messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex w-full",
                        message.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                          message.sender === "user"
                            ? "rounded-br-sm bg-primary text-primary-foreground"
                            : "rounded-bl-sm bg-muted text-foreground"
                        )}
                      >
                        <p>{message.content}</p>
                        <p
                          className={cn(
                            "mt-1 text-right text-[10px]",
                            message.sender === "user"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          )}
                        >
                          {formatMessageTime(message.sentAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-border p-4">
                  <div className="flex items-center gap-2">
                    <Input
                      value={messageInput}
                      onChange={(event) => setMessageInput(event.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type a message..."
                      className="flex-1"
                    />
                    <Button onClick={handleSend} disabled={!messageInput.trim()}>
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
                Select a chat to start messaging
              </div>
            )}
          </div>
        </div>
      )}
    </m.div>
  );
}
