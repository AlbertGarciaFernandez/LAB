"use client";

import { formatDistanceToNow } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Activity, User } from "@/lib/suite/types/crm";

export interface ActivityFeedProps {
  activities: Activity[];
  users: User[];
  limit?: number;
}

interface ActivityDescriptor {
  prefix: string;
  suffix?: string;
}

const descriptors: Record<Activity["type"], (activity: Activity) => ActivityDescriptor> = {
  lead_created: () => ({ prefix: "created lead" }),
  deal_moved: (activity) => {
    const to = typeof activity.metadata?.to === "string" ? activity.metadata.to : undefined;
    return {
      prefix: "moved deal",
      suffix: to ? `to ${to.charAt(0).toUpperCase() + to.slice(1)}` : undefined,
    };
  },
  email_sent: () => ({ prefix: "sent email to" }),
  task_completed: () => ({ prefix: "completed task" }),
  meeting_scheduled: () => ({ prefix: "scheduled meeting with" }),
  note_added: () => ({ prefix: "added note to" }),
};

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ActivityFeed({ activities, users, limit }: ActivityFeedProps) {
  const userMap = new Map(users.map((user) => [user.id, user]));
  const displayed = limit ? activities.slice(0, limit) : activities;

  return (
    <div className="space-y-4">
      {displayed.map((activity) => {
        const actor = userMap.get(activity.actorId);
        const { prefix, suffix } = descriptors[activity.type](activity);
        const timeAgo = formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true });

        return (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              {actor?.avatar && <AvatarImage src={actor.avatar} alt={actor.name} />}
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                {actor ? getInitials(actor.name) : "?"}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-sm">
                <span className="font-medium text-foreground">{actor?.name ?? "Unknown"}</span>{" "}
                <span className="text-muted-foreground">{prefix}</span>{" "}
                <button
                  type="button"
                  className="font-medium text-foreground hover:underline"
                  onClick={() => {}}
                >
                  {activity.targetName}
                </button>
                {suffix && <span className="text-muted-foreground"> {suffix}</span>}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
