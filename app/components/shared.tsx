import axios from "axios";
import { rankItem, compareItems, RankingInfo, } from "@tanstack/match-sorter-utils";
import { getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues, getFacetedMinMaxValues, sortingFns, ColumnFiltersState, FilterFn, SortingState, VisibilityState, Column, ExpandedState, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getExpandedRowModel, ColumnDef, flexRender,SortingFn,RowData,RowModel   } from "@tanstack/react-table";
import { Button, Input, Separator, Checkbox, PopoverTrigger, PopoverContent, Popover, Select, SelectGroup, SelectLabel, SelectContent, SelectItem, SelectTrigger, SelectValue, ButtonLoading, PaginationButton, Badge, } from "~/components/ui/index";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "~/components/ui/table";
import React, { useState, useReducer, useEffect, forwardRef, useRef, memo, useCallback, } from "react";
import { flushSync } from "react-dom";
import { Check, Clipboard, ClipboardCheck, Copy, X, UploadIcon, GalleryVerticalEnd, CalendarIcon, MessageSquare, Mail, PlusCircle, ChevronsUpDown, ArrowUp, ArrowDown, EyeOff, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Search, CarFront, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "~/components/ui/utils";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip"
import { useNavigate } from "@remix-run/react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "~/components/ui/pagination"

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
export function LoadErrorPage({ text = 'Failed to Load Page...', size = 12, loadError }) {
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

export const DebouncedInput: React.FC<Props> = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
    const [value, setValue] = useState<number | string>(initialValue)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)
        return () => clearTimeout(timeout)
    }, [value])

    return <Input {...props} value={value} onChange={handleInputChange} />
}
export const fuzzyFilter = (
    row,
    columnId,
    value,
    addMeta
) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the ranking info
    addMeta(itemRank)

    // Return if the item should be filtered in/out
    return itemRank.passed
}

export const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId]! as RankingInfo,
            rowB.columnFiltersMeta[columnId]! as RankingInfo
        )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

type Props2 = {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

type Props<T extends RowData> = {
    getSelectedRowModel: () => RowModel<T>
    hasNextPage: boolean
    hasPreviousPage: boolean
    nextPage: () => void
    pageCount: number
    pageIndex: number
    pageSize: number
    previousPage: () => void
    refreshData: () => void
    rerender: () => void
    rowSelection: Object
    setPageIndex: (index: number) => void
    setPageSize: (size: number) => void
    totalRows: number
}








