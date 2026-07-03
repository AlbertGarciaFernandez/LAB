export type LeadStatus = "new" | "contacted" | "qualified" | "unqualified" | "nurturing";
export type OpportunityStage =
  | "new"
  | "qualified"
  | "proposal"
  | "negotiation"
  | "closed_won"
  | "closed_lost";
export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in_progress" | "done";
export type EmailStatus = "inbox" | "sent" | "draft" | "archived";
export type EventType = "call" | "meeting" | "demo" | "follow_up" | "note";
export type ActivityType =
  | "lead_created"
  | "deal_moved"
  | "email_sent"
  | "task_completed"
  | "meeting_scheduled"
  | "note_added";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "sales";
  avatar?: string;
  teamId: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: "1-10" | "11-50" | "51-200" | "201-500" | "500+";
  location: string;
  website?: string;
  logo?: string;
  ownerId: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
  companyId: string;
  ownerId: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  title?: string;
  status: LeadStatus;
  source: string;
  ownerId: string;
  estimatedValue: number;
  createdAt: string;
  lastActivityAt: string;
}

export interface Opportunity {
  id: string;
  name: string;
  companyId: string;
  contactId?: string;
  stage: OpportunityStage;
  value: number;
  probability: number;
  expectedCloseDate: string;
  ownerId: string;
  createdAt: string;
  lastActivityAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignedTo: string;
  relatedTo?: { type: "lead" | "contact" | "opportunity"; id: string };
  createdAt: string;
}

export interface Email {
  id: string;
  subject: string;
  body: string;
  from: { name: string; email: string };
  to: { name: string; email: string };
  status: EmailStatus;
  sentAt: string;
  readAt?: string;
}

export interface WhatsAppMessage {
  id: string;
  chatId: string;
  sender: "user" | "contact";
  content: string;
  sentAt: string;
  read: boolean;
}

export interface WhatsAppChat {
  id: string;
  contactName: string;
  contactPhone: string;
  contactAvatar?: string;
  lastMessageAt: string;
  unreadCount: number;
  messages: WhatsAppMessage[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: EventType;
  date: string;
  startTime: string;
  endTime: string;
  attendees?: string[];
  description?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  actorId: string;
  targetType: "lead" | "contact" | "opportunity" | "company" | "task";
  targetId: string;
  targetName: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  type: "info" | "success" | "warning";
  read: boolean;
  createdAt: string;
}
