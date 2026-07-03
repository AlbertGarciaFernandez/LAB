"use client";

import { ChevronDown, ChevronUp, MoreHorizontal, Search } from "lucide-react";
import { ReactNode, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { EmptyState } from "./EmptyState";

export interface ColumnDef<T> {
  key: string;
  header: string;
  accessor: (row: T) => ReactNode;
  sortable?: boolean;
  width?: string;
  sortAccessor?: (row: T) => string | number;
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  searchPlaceholder?: string;
  searchFields?: (keyof T)[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  emptyState?: { title: string; description: string };
  isLoading?: boolean;
  rowActions?: (
    row: T
  ) => { label: string; onClick: () => void; variant?: "default" | "destructive" }[];
}

interface SortConfig {
  key: string;
  direction: "asc" | "desc";
}

function getRowValue<T>(row: T, column: ColumnDef<T>): string | number | undefined {
  if (column.sortAccessor) {
    return column.sortAccessor(row);
  }

  const raw = (row as Record<string, unknown>)[column.key];
  if (typeof raw === "string" || typeof raw === "number") {
    return raw;
  }

  const rendered = column.accessor(row);
  if (typeof rendered === "string" || typeof rendered === "number") {
    return rendered;
  }

  return undefined;
}

function compareValues<T>(a: T, b: T, column: ColumnDef<T>) {
  const valueA = getRowValue(a, column);
  const valueB = getRowValue(b, column);

  if (valueA === undefined || valueB === undefined) return 0;
  if (typeof valueA === "number" && typeof valueB === "number") {
    return valueA - valueB;
  }
  return String(valueA).localeCompare(String(valueB));
}

export function DataTable<T>({
  data,
  columns,
  searchPlaceholder = "Search...",
  searchFields,
  enableSorting = true,
  enablePagination = true,
  pageSize = 10,
  emptyState,
  isLoading,
  rowActions,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim() || !searchFields || searchFields.length === 0) return data;
    const query = searchQuery.toLowerCase();
    return data.filter((row) =>
      searchFields.some((field) => {
        const value = row[field];
        return value !== undefined && String(value).toLowerCase().includes(query);
      })
    );
  }, [data, searchQuery, searchFields]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    const column = columns.find((col) => col.key === sortConfig.key);
    if (!column) return filteredData;

    return [...filteredData].sort((a, b) => {
      const comparison = compareValues(a, b, column);
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortConfig, columns]);

  const totalPages = enablePagination ? Math.ceil(sortedData.length / rowsPerPage) : 1;
  const pageData = enablePagination
    ? sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : sortedData;

  const handleSort = (key: string) => {
    if (!enableSorting) return;
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: "asc" };
      }
      return current.direction === "asc" ? { key, direction: "desc" } : null;
    });
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-9 w-full max-w-xs" />
        <div className="overflow-hidden rounded-xl border border-border">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-12 w-full rounded-none border-b border-border last:border-0"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {searchFields && searchFields.length > 0 && (
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setCurrentPage(1);
            }}
            className="pl-9"
          />
        </div>
      )}

      {filteredData.length === 0 ? (
        <EmptyState
          title={emptyState?.title ?? "No results"}
          description={emptyState?.description ?? "Try adjusting your search or filters."}
        />
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((column) => (
                    <TableHead
                      key={column.key}
                      style={{ width: column.width }}
                      className={cn(
                        "whitespace-nowrap",
                        enableSorting && column.sortable && "cursor-pointer select-none"
                      )}
                      onClick={() => column.sortable && handleSort(column.key)}
                    >
                      <div className="flex items-center gap-1">
                        {column.header}
                        {enableSorting && column.sortable && sortConfig?.key === column.key && (
                          <span className="text-foreground">
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                  ))}
                  {rowActions && <TableHead className="w-10" />}
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageData.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {columns.map((column) => (
                      <TableCell key={column.key} className="whitespace-nowrap">
                        {column.accessor(row)}
                      </TableCell>
                    ))}
                    {rowActions && (
                      <TableCell className="text-right">
                        <RowActions actions={rowActions(row)} />
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {enablePagination && totalPages > 1 && (
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                {Math.min(currentPage * rowsPerPage, sortedData.length)} of {sortedData.length}{" "}
                results
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
                <Select value={String(rowsPerPage)} onValueChange={handleRowsPerPageChange}>
                  <SelectTrigger className="h-8 w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[10, 25, 50].map((size) => (
                      <SelectItem key={size} value={String(size)}>
                        {size} / page
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface RowActionsProps {
  actions: { label: string; onClick: () => void; variant?: "default" | "destructive" }[];
}

function RowActions({ actions }: RowActionsProps) {
  if (actions.length === 0) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {actions.map((action, index) => (
          <DropdownMenuItem
            key={index}
            onClick={action.onClick}
            className={cn(
              action.variant === "destructive" && "text-destructive focus:text-destructive"
            )}
          >
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
