"use client";

import { useEffect, useMemo, useState } from "react";
import { m } from "framer-motion";
import { format, isBefore, isSameDay, parseISO } from "date-fns";
import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable, type ColumnDef } from "@/components/suite/ui/DataTable";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { TaskModal } from "@/components/suite/modals/TaskModal";
import { getTasks, toggleTaskStatus } from "@/lib/suite/data/crm";
import { getOwnerName } from "@/lib/suite/crm-helpers";
import type { Task, TaskPriority } from "@/lib/suite/types/crm";
import { cn } from "@/lib/utils";

type TaskFilter = "all" | "today" | "overdue" | "completed";

const priorityStyles: Record<TaskPriority, string> = {
  high: "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-900",
  medium:
    "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900",
  low: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
};

const filters: { value: TaskFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "overdue", label: "Overdue" },
  { value: "completed", label: "Completed" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<TaskFilter>("all");

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getTasks().then((data) => {
      if (!mounted) return;
      setTasks(data);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const today = useMemo(() => new Date(), []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const dueDate = parseISO(task.dueDate);
      switch (filter) {
        case "today":
          return isSameDay(dueDate, today);
        case "overdue":
          return isBefore(dueDate, today) && task.status !== "done";
        case "completed":
          return task.status === "done";
        default:
          return true;
      }
    });
  }, [tasks, filter, today]);

  const handleToggle = (id: string) => {
    toggleTaskStatus(id);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: task.status === "done" ? "todo" : "done" } : task
      )
    );
  };

  const handleSave = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const columns: ColumnDef<Task>[] = [
    {
      key: "status",
      header: "",
      accessor: (task) => (
        <Checkbox
          checked={task.status === "done"}
          onCheckedChange={() => handleToggle(task.id)}
          aria-label={`Mark ${task.title} as ${task.status === "done" ? "incomplete" : "complete"}`}
        />
      ),
      width: "48px",
    },
    {
      key: "title",
      header: "Title",
      accessor: (task) => (
        <span className={cn(task.status === "done" && "text-muted-foreground line-through")}>
          {task.title}
        </span>
      ),
      sortable: true,
      width: "260px",
    },
    {
      key: "dueDate",
      header: "Due Date",
      accessor: (task) => {
        const dueDate = parseISO(task.dueDate);
        const isOverdue = isBefore(dueDate, today) && task.status !== "done";
        return (
          <span className={cn(isOverdue && "font-medium text-destructive")}>
            {format(dueDate, "MMM d, yyyy")}
          </span>
        );
      },
      sortable: true,
      sortAccessor: (task) => task.dueDate,
      width: "140px",
    },
    {
      key: "priority",
      header: "Priority",
      accessor: (task) => (
        <Badge className={priorityStyles[task.priority]}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </Badge>
      ),
      sortable: true,
      sortAccessor: (task) => task.priority,
      width: "110px",
    },
    {
      key: "assignedTo",
      header: "Assigned To",
      accessor: (task) => getOwnerName(task.assignedTo),
      sortable: true,
      sortAccessor: (task) => getOwnerName(task.assignedTo),
      width: "160px",
    },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader
        title="Tasks"
        description="Track and manage your to-do list."
        actions={
          <Button onClick={() => setModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add task
          </Button>
        }
      />

      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button
            key={item.value}
            variant={filter === item.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <DataTable
        data={filteredTasks}
        columns={columns}
        isLoading={isLoading}
        searchPlaceholder="Search tasks..."
        searchFields={["title", "description"]}
        enablePagination={true}
        pageSize={10}
        emptyState={{
          title: "No tasks found",
          description: "Try adjusting filters or add a new task.",
        }}
      />

      <TaskModal open={modalOpen} onOpenChange={setModalOpen} onSave={handleSave} />
    </m.div>
  );
}
