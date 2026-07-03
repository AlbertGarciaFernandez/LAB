"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { users } from "@/lib/suite/data/users";
import type { Task, TaskPriority, TaskStatus } from "@/lib/suite/types/crm";

const priorities: TaskPriority[] = ["low", "medium", "high"];
const statuses: TaskStatus[] = ["todo", "in_progress", "done"];

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (task: Task) => void;
}

const emptyTask: Partial<Task> = {
  title: "",
  description: "",
  dueDate: "",
  priority: "medium",
  assignedTo: "",
  status: "todo",
};

export function TaskModal({ open, onOpenChange, onSave }: TaskModalProps) {
  const [form, setForm] = useState<Partial<Task>>(emptyTask);

  useEffect(() => {
    if (open) {
      setForm({
        ...emptyTask,
        assignedTo: users[0]?.id ?? "",
        dueDate: new Date().toISOString().split("T")[0],
      });
    }
  }, [open]);

  const update = <K extends keyof Task>(key: K, value: Task[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }) as Partial<Task>);
  };

  const handleSave = () => {
    if (!form.title?.trim() || !form.dueDate || !form.assignedTo) return;

    const now = new Date().toISOString();
    const saved: Task = {
      id: `tk_${Date.now()}`,
      title: form.title.trim(),
      description: form.description?.trim(),
      dueDate: form.dueDate,
      priority: form.priority ?? "medium",
      status: form.status ?? "todo",
      assignedTo: form.assignedTo,
      createdAt: now,
    };

    onSave(saved);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="task-title">Title</Label>
            <Input
              id="task-title"
              value={form.title ?? ""}
              onChange={(event) => update("title", event.target.value)}
              placeholder="Follow up with..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="task-description">Description</Label>
            <Textarea
              id="task-description"
              value={form.description ?? ""}
              onChange={(event) => update("description", event.target.value)}
              placeholder="Add details..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="task-dueDate">Due Date</Label>
              <Input
                id="task-dueDate"
                type="date"
                value={form.dueDate ?? ""}
                onChange={(event) => update("dueDate", event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="task-priority">Priority</Label>
              <Select
                value={form.priority ?? "medium"}
                onValueChange={(value) => update("priority", value as TaskPriority)}
              >
                <SelectTrigger id="task-priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority}>
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="task-assignedTo">Assigned To</Label>
              <Select
                value={form.assignedTo ?? ""}
                onValueChange={(value) => update("assignedTo", value)}
              >
                <SelectTrigger id="task-assignedTo">
                  <SelectValue placeholder="Select owner" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="task-status">Status</Label>
              <Select
                value={form.status ?? "todo"}
                onValueChange={(value) => update("status", value as TaskStatus)}
              >
                <SelectTrigger id="task-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
