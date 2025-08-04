import axios from "axios";
import { rankItem, compareItems, RankingInfo, } from "@tanstack/match-sorter-utils";
import { getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues, getFacetedMinMaxValues, sortingFns, ColumnFiltersState, FilterFn, SortingState, VisibilityState, Column, ExpandedState, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getExpandedRowModel, ColumnDef, flexRender, } from "@tanstack/react-table";
import { Button, Input, Separator, Checkbox, PopoverTrigger, PopoverContent, Popover, Select, SelectGroup, SelectLabel, SelectContent, SelectItem, SelectTrigger, SelectValue, ButtonLoading, PaginationButton, Badge, } from "~/components/ui/index";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "~/components/ui/table";
import React, { useState, useReducer, useEffect, forwardRef, useRef, memo, useCallback, } from "react";
import { flushSync } from "react-dom";
import { Check, Clipboard, ClipboardCheck, Copy, X, UploadIcon, GalleryVerticalEnd, CalendarIcon, MessageSquare, Mail, PlusCircle, ChevronsUpDown, ArrowUp, ArrowDown, EyeOff, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Search, CarFront } from "lucide-react";
import { format } from "date-fns";
import { cn } from "~/components/ui/utils";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip"
import { useNavigate } from "@remix-run/react";

export const DEVSTACK_URL = "http://127.0.0.1:3666"

export function TooltipButton({ icon, content, onClick = null }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    className='toolbar-button format-active'
                    onClick={onClick}
                >
                    {icon}
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
}

//#region LOADING
export function Loading({ text = 'Loading...', size = 6, color = 'border-blue-500' }) {
    return (
        <div className='flex items-center gap-3'>
            <div className="flex items-center justify-center h-full">
                <div className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-${color} border-solid`}></div>
            </div>
            <p className='ml-3'>{text}</p>
        </div>
    );
}
export function LoadingPage({ text = 'Loading page...', size = 12, color = 'border-blue-500' }) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <div className={`h-${size} w-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin mx-auto mb-4`}></div>
                <div className="text-lg font-medium text-gray-700">{text}</div>
                <div className="text-sm text-gray-500 mt-2">Fetching build settings from server</div>
            </div>
        </div>
    );
}
export function LoadErrorPage({ text = 'Failed to Load Page...', size = 12,  loadError }) {
    const nav = useNavigate()
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center max-w-md">
                <AlertCircle className={`h-${size} w-${size} text-red-500 mx-auto mb-4`} />
                <div className="text-lg font-medium text-foreground mb-2">{text}</div>
                <div className="text-sm text-muted-foreground mb-4">{loadError}</div>
                <Button
                    onClick={() => nav(0)}
                    className="px-4 py-2 bg-primary hover:bg-primary/20 text-foreground rounded-lg transition-colors"
                >
                    Retry
                </Button>
            </div>
        </div>
    );
}