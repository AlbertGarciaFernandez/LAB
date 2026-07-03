"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Download, FileText, Loader2, Plus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/suite/ui/PageHeader";

type ReportStatus = "ready" | "scheduled" | "generating";
type ReportFormat = "pdf" | "csv";
type ReportType = "pipeline" | "revenue" | "leads" | "activities";

interface Report {
  id: string;
  name: string;
  type: ReportType;
  lastRun: string;
  status: ReportStatus;
  format: ReportFormat;
}

const TYPE_LABELS: Record<ReportType, string> = {
  pipeline: "Pipeline",
  revenue: "Revenue",
  leads: "Leads",
  activities: "Activities",
};

const STATUS_BADGES: Record<
  ReportStatus,
  { label: string; variant: "default" | "secondary" | "outline" }
> = {
  ready: { label: "Ready", variant: "default" },
  scheduled: { label: "Scheduled", variant: "secondary" },
  generating: { label: "Generating", variant: "outline" },
};

const INITIAL_REPORTS: Report[] = [
  {
    id: "r-1",
    name: "Monthly Revenue Summary",
    type: "revenue",
    lastRun: "2026-07-01",
    status: "ready",
    format: "pdf",
  },
  {
    id: "r-2",
    name: "Pipeline Health Report",
    type: "pipeline",
    lastRun: "2026-06-28",
    status: "ready",
    format: "csv",
  },
  {
    id: "r-3",
    name: "Lead Source Analysis",
    type: "leads",
    lastRun: "2026-06-25",
    status: "scheduled",
    format: "pdf",
  },
  {
    id: "r-4",
    name: "Weekly Activity Digest",
    type: "activities",
    lastRun: "2026-06-20",
    status: "ready",
    format: "csv",
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS);
  const [open, setOpen] = useState(false);
  const [reportType, setReportType] = useState<ReportType>("pipeline");
  const [dateRange, setDateRange] = useState("last_30_days");
  const [format, setFormat] = useState<ReportFormat>("pdf");
  const [generationState, setGenerationState] = useState<"idle" | "generating" | "success">("idle");

  const handleGenerate = () => {
    setGenerationState("generating");

    setTimeout(() => {
      const newReport: Report = {
        id: `r-${Date.now()}`,
        name: `${TYPE_LABELS[reportType]} Report`,
        type: reportType,
        lastRun: new Date().toISOString().split("T")[0],
        status: "ready",
        format,
      };

      setReports((prev) => [newReport, ...prev]);
      setGenerationState("success");
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setGenerationState("idle");
      setReportType("pipeline");
      setDateRange("last_30_days");
      setFormat("pdf");
    }, 200);
  };

  const handleRunAgain = (report: Report) => {
    setReports((prev) =>
      prev.map((item) =>
        item.id === report.id ? { ...item, lastRun: new Date().toISOString().split("T")[0] } : item
      )
    );
  };

  const handleDownload = (report: Report) => {
    window.alert(`Downloading ${report.name} as ${report.format.toUpperCase()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader
        title="Reports"
        description="Generate, schedule, and download CRM reports."
        actions={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Generate report
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate report</DialogTitle>
                <DialogDescription>
                  Choose the report type, date range, and format.
                </DialogDescription>
              </DialogHeader>

              {generationState === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium">Report generated</p>
                    <p className="text-sm text-muted-foreground">
                      Your report is ready in the saved reports list.
                    </p>
                  </div>
                </div>
              ) : generationState === "generating" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Generating your report...</p>
                </div>
              ) : (
                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Report type</Label>
                    <Select
                      value={reportType}
                      onValueChange={(value) => setReportType(value as ReportType)}
                    >
                      <SelectTrigger id="report-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pipeline">Pipeline</SelectItem>
                        <SelectItem value="revenue">Revenue</SelectItem>
                        <SelectItem value="leads">Leads</SelectItem>
                        <SelectItem value="activities">Activities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-range">Date range</Label>
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger id="date-range">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last_7_days">Last 7 days</SelectItem>
                        <SelectItem value="last_30_days">Last 30 days</SelectItem>
                        <SelectItem value="last_quarter">Last quarter</SelectItem>
                        <SelectItem value="last_year">Last year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="format">Format</Label>
                    <Select
                      value={format}
                      onValueChange={(value) => setFormat(value as ReportFormat)}
                    >
                      <SelectTrigger id="format">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="report-name">Report name (optional)</Label>
                    <Input id="report-name" placeholder={`${TYPE_LABELS[reportType]} Report`} />
                  </div>
                </div>
              )}

              <DialogFooter>
                {generationState === "success" ? (
                  <Button onClick={handleClose}>Done</Button>
                ) : generationState === "generating" ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button onClick={handleGenerate}>Generate</Button>
                  </>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Last run</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {report.name}
                        </div>
                      </TableCell>
                      <TableCell>{TYPE_LABELS[report.type]}</TableCell>
                      <TableCell>{formatDate(report.lastRun)}</TableCell>
                      <TableCell>
                        <Badge variant={STATUS_BADGES[report.status].variant}>
                          {STATUS_BADGES[report.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDownload(report)}
                            title="Download"
                          >
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRunAgain(report)}
                            title="Run again"
                          >
                            <RotateCcw className="h-4 w-4" />
                            <span className="sr-only">Run again</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
