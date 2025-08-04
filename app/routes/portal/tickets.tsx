import { cn } from "~/components/ui/utils"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Checkbox } from "~/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from "~/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "~/components/ui/popover"
import { Separator } from "~/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "~/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuGroup } from "~/components/ui/dropdown-menu"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, Row, Table as ReactTable, getFacetedMinMaxValues, Column } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "~/components/ui/table"
import { Check,EllipsisVertical ,Funnel, EyeClosed , PlusCircle,CirclePlus, Clipboard, ClipboardCheck, Copy, X, UploadIcon, Phone, ArrowDown, ArrowRight, ArrowUp, CheckCircle, Circle, CircleOff, HelpCircle, Timer, Plus,Columns2, ChevronsUpDown, EyeOff, Settings2, Search, MoreHorizontal, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, Icon } from "lucide-react";
import Filter from "~/components/filter"
import { DebouncedInput, fuzzyFilter } from "~/components/shared"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "~/components/ui/pagination"
import { eP } from '~/utils/ext';
import { authSessionStorage } from "~/modules/auth/auth_session";
import { prisma } from "~/modules/libs/prisma";
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from '@remix-run/react';
import React, { useState } from "react"



export async function loader({ request }: LoaderArgs) {
    const { user } = useLoaderData()
    const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
    const email = session.get("email");
    const user = await eP.user.all(email)
    if (!user) { return redirect(import.meta.env.VITE_LOGIN); }

    const data = []
    return json({ user,data })
}


export function DataTable() {
    const { user, data } = useLoaderData()
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);
    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="translate-y-[2px]"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="translate-y-[2px]"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Task" />
            ),
            cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "title",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Title" />
            ),
            cell: ({ row }) => {
                const label = labels.find((label) => label.value === row.original.label)

                return (
                    <div className="flex space-x-2">
                        {label && <Badge variant="outline">{label.label}</Badge>}
                        <span className="max-w-[500px] truncate font-medium">
                            {row.getValue("title")}
                        </span>
                    </div>
                )
            },
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Status" />
            ),
            cell: ({ row }) => {
                const status = statuses.find(
                    (status) => status.value === row.getValue("status")
                )

                if (!status) {
                    return null
                }

                return (
                    <div className="flex w-[100px] items-center">
                        {status.icon && (
                            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{status.label}</span>
                    </div>
                )
            },
            filterFn: (row, id, value) => {
                return value.includes(row.getValue(id))
            },
        },
        {
            accessorKey: "priority",
            cell: ({ row }) => {
                const priority = priorities.find(
                    (priority) => priority.value === row.getValue("priority")
                )

                if (!priority) {
                    return null
                }

                return (
                    <div className="flex items-center">
                        {priority.icon && (
                            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{priority.label}</span>
                    </div>
                )
            },
            filterFn: (row, id, value) => {
                return value.includes(row.getValue(id))
            },
        },
        {
            id: "actions",
            cell: ({ row }) => <DataTableRowActions row={row} />,
        },
    ]
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')

    const table = useReactTable({
        data: data,
        columns: columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            globalFilter,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        enableColumnResizing: true,
        columnResizeMode: 'onChange',
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
    })

    const hasNextPage = table.getCanNextPage()
    const hasPreviousPage = table.getCanPreviousPage()
    const nextPage = table.nextPage
    const pageCount = table.getPageCount()
    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize
    const previousPage = table.previousPage

    return (
        <div className="space-y-4">
            <DataTableToolbar table={table} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : (<>
                                                    {header.column.getCanFilter() ? (
                                                        <div>
                                                            <Filter column={header.column} table={table} />
                                                        </div>
                                                    ) : null}
                                                </>)}
                                            <div
                                                className="absolute right-0 top-0 h-full w-1 bg-blue-300 select-none touch-none hover:bg-blue-500 cursor-col-resize"
                                                onMouseDown={header.getResizeHandler()}
                                                onTouchStart={header.getResizeHandler()}
                                            />
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem onClick={previousPage} disabled={!hasPreviousPage}>
                                <PaginationPrevious />
                            </PaginationItem>

                            <Pagination>
                                {Array.from({ length: pageCount }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            isActive={i === pageIndex}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                table.setPageIndex(i);
                                            }}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                            </Pagination>

                            <PaginationItem>
                                {table.getState().pagination.pageIndex + 1} of{" "}
                                {table.getPageCount()}
                            </PaginationItem>

                            <PaginationItem
                                onClick={nextPage}
                                disabled={!hasNextPage}>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">shadcn</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableViewOptions<TData>({
    table,
}: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <Columns2 className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableToolbar<TData>({ table, globalFilter, setGlobalFilter, }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <div className="relative ">
                    <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <DebouncedInput
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className=" w-[150px] lg:w-[400px] border border-border pl-8 h-10 "
                    />
                    <Button
                        onClick={() => {
                            setGlobalFilter([]);
                        }}
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-2.5 mr-2 h-4 w-4 bg-transparent text-foreground "
                    >
                        <X />
                    </Button>
                </div>
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {table.getColumn("priority") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("priority")}
                        title="Priority"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}
export const labels = [
    // sales
    { value: "Cant Get Client In To Sign", label: "Cant Get Client In To Sign", },
    { value: "Deposit Date => Scheduled Sign Date", label: "Deposit Date => Scheduled Sign Date", },
    { value: "Finance Dept", label: "Finance Dept", },
    { value: "Licensing", label: "Licensing", },
    { value: "Sales Deal Review - MGR", label: "Sales Deal Review - MGR", },
    { value: "Issue W/ Delivery", label: "Issue W/ Delivery", },
    { value: "Issue Before Delivery", label: "Issue Before Delivery", },
    { value: "Issue After Delivery", label: "Issue After Delivery", },
    { value: "Issue During Service", label: "Issue During Service", },
    { value: "Issue After Service", label: "Issue After Service", },
    { value: "Issue Service Bill", label: "Issue Service Bill", },
    { value: "Missing Parts", label: "Missing Parts", },
    { value: "Warranty Claim", label: "Warranty Claim", },
    { value: "Damage To Unit", label: "Damage To Unit", },
    { value: "Complaint", label: "Complaint", },
    { value: "Karen / Kevin", label: "Karen / Kevin", },
    { value: "Other", label: "Other", },
    { value: "Attn Manager", label: "Attn Manager", },
    { value: "Attn Admin", label: "Attn Admin", },
    { value: "Warranty Claim", label: "Warranty Claim", },
    // client coms
    { value: "Call Queue", label: "Call Queue", },
    { value: "Contact Us", label: "Contact Us", },
    { value: "Reserve Now", label: "Reserve Now", },
    { value: "Web Lead", label: "Web Lead", },
    { value: "Finance App", label: "Finance App", },
    { value: "Information Request", label: "Information Request", },
    { value: "Demo Day Sign Up", label: "Demo Day Sign Up", },
    { value: "Test Drive Request", label: "Test Drive Request", },
    { value: "Trade In Request", label: "Trade In Request", },
]
export const statuses = [
    { value: "Opened", label: "Opened", icon: Timer, },
    { value: "To Do", label: "To Do", icon: Circle, },
    { value: "In Progress", label: "In Progress", icon: Timer, },
    { value: "Contacted", label: "Contacted", icon: Phone, },
    { value: "Canceled", label: "Canceled", icon: CircleOff, },
    { value: "Cannot Reach Client", label: "Cannot Reach Client", icon: Phone, },
    { value: "Closed", label: "Closed", icon: CheckCircle, },
    { value: "Resolution Agreed", label: "Resolution Agreed", icon: Phone, },
    { value: "Backlog", label: "Backlog", icon: HelpCircle, },
    { value: "Update", label: "Update", icon: HelpCircle, },
    { value: "Assigned", label: "Assigned", icon: HelpCircle, },
]
export const priorities = [
    { label: "Low", value: "Low", icon: ArrowDown, },
    { label: "Medium", value: "Medium", icon: ArrowRight, },
    { label: "High", value: "High", icon: ArrowUp, },
]
export const depts = [
    { label: "Sales", value: "Sales", icon: ArrowDown, },
    { label: "Finance", value: "Finance", icon: ArrowDown, },
    { label: "PAC", value: "PAC", icon: ArrowRight, },
    { label: "Service", value: "Service", icon: ArrowUp, },
    { label: "Office", value: "Office", icon: ArrowUp, },
    { label: "Mgr", value: "Mgr", icon: ArrowUp, },
]
export function DataTableRowActions<TData>({
    data,
}: DataTableRowActionsProps<TData>) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <EllipsisVertical  className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                <DropdownMenuItem>Favorite</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={data.label}>
                            {labels.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableFacetedFilter<TData, TValue>({
    column,
    title,
    options,
}: DataTableFacetedFilterProps<TData, TValue>) {
    const facets = column?.getFacetedUniqueValues()
    const selectedValues = new Set(column?.getFilterValue() as string[])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <CirclePlus  className="mr-2 h-4 w-4" />
                    {title}
                    {selectedValues?.size > 0 && (
                        <>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal lg:hidden"
                            >
                                {selectedValues.size}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {selectedValues.size > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {selectedValues.size} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) => selectedValues.has(option.value))
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={title} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = selectedValues.has(option.value)
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            if (isSelected) {
                                                selectedValues.delete(option.value)
                                            } else {
                                                selectedValues.add(option.value)
                                            }
                                            const filterValues = Array.from(selectedValues)
                                            column?.setFilterValue(
                                                filterValues.length ? filterValues : undefined
                                            )
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <Check className={cn("h-4 w-4")} />
                                        </div>
                                        {option.icon && (
                                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span>{option.label}</span>
                                        {facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="-ml-3 h-8 data-[state=open]:bg-accent"
                    >
                        <span>{title}</span>
                        {column.getIsSorted() === "desc" ? (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        ) : column.getIsSorted() === "asc" ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <Funnel className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                        <EyeClosed  className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}





interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}
interface DataTableViewOptionsProps<TData> {
    table: ReactTable<TData>
}
interface DataTableToolbarProps<TData> {
    table: Table<TData>
}
interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}
interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
        icon?: React.ComponentType<{ className?: string }>
    }[]
}
interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}
interface DataTablePaginationProps<TData> {
    table: Table<TData>
}