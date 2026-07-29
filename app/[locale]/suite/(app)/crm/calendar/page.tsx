"use client";

import { useEffect, useMemo, useState } from "react";
import { m } from "framer-motion";
import { format, isSameMonth, isToday, parseISO } from "date-fns";
import { CalendarDays, Plus } from "lucide-react";
import type { CalendarDay } from "react-day-picker";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { EmptyState } from "@/components/suite/ui/EmptyState";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { getCalendarEvents } from "@/lib/suite/data/crm";
import type { CalendarEvent, EventType } from "@/lib/suite/types/crm";
import { cn } from "@/lib/utils";

const eventTypeStyles: Record<EventType, string> = {
  call: "bg-blue-500",
  meeting: "bg-purple-500",
  demo: "bg-green-500",
  follow_up: "bg-orange-500",
  note: "bg-gray-500",
};

const eventTypeBadgeStyles: Record<EventType, string> = {
  call: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
  meeting:
    "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
  demo: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-900",
  follow_up:
    "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-900",
  note: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
};

function toDateKey(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getCalendarEvents().then((data) => {
      if (!mounted) return;
      setEvents(data);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    for (const event of events) {
      const list = map[event.date] ?? [];
      list.push(event);
      map[event.date] = list;
    }
    return map;
  }, [events]);

  const upcomingEvents = useMemo(() => {
    return events
      .filter((event) => {
        const date = parseISO(event.date);
        return isSameMonth(date, currentMonth);
      })
      .sort((a, b) => {
        const dateCompare = a.date.localeCompare(b.date);
        if (dateCompare !== 0) return dateCompare;
        return a.startTime.localeCompare(b.startTime);
      });
  }, [events, currentMonth]);

  const EventDayButton = useMemo(() => {
    return function EventDayButtonComponent({
      day,
      modifiers,
      className,
      ...props
    }: React.ComponentProps<typeof CalendarDayButton>) {
      const dateKey = toDateKey(day.date);
      const dayEvents = eventsByDate[dateKey] ?? [];
      return (
        <CalendarDayButton
          day={day as CalendarDay}
          modifiers={modifiers}
          className={className}
          {...props}
        >
          <span>{day.date.getDate()}</span>
          {dayEvents.length > 0 && (
            <span className="mt-0.5 flex gap-0.5">
              {dayEvents.slice(0, 3).map((event) => (
                <span
                  key={event.id}
                  className={cn("h-1.5 w-1.5 rounded-full", eventTypeStyles[event.type])}
                />
              ))}
            </span>
          )}
        </CalendarDayButton>
      );
    };
  }, [eventsByDate]);

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader
        title="Calendar"
        actions={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New event
          </Button>
        }
      />

      {isLoading ? (
        <div className="space-y-4">
          <div className="h-[360px] animate-pulse rounded-xl bg-muted" />
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-16 animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              components={{ DayButton: EventDayButton }}
              className="rounded-xl border border-border bg-card"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              Upcoming events for {format(currentMonth, "MMMM yyyy")}
            </h2>
            {upcomingEvents.length === 0 ? (
              <EmptyState
                icon={<CalendarDays className="h-6 w-6" />}
                title="No events this month"
                description="Your calendar is clear. Add an event to get started."
              />
            ) : (
              <div className="grid gap-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className={eventTypeBadgeStyles[event.type]}>
                          {event.type
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </Badge>
                        {isToday(parseISO(event.date)) && <Badge variant="outline">Today</Badge>}
                      </div>
                      <p className="font-medium">{event.title}</p>
                      {event.description && (
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground sm:text-right">
                      <p>{format(parseISO(event.date), "EEEE, MMMM d")}</p>
                      <p>
                        {event.startTime} - {event.endTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </m.div>
  );
}
