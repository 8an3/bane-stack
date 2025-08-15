import * as React from "react";
 
import { cn, } from "~/components/ui/utils";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon, BadgeCheckIcon, CheckIcon, CalendarIcon, ChevronsUpDown, Check, Calculator, CreditCard, Settings, Smile, User, ArrowUpDown, ChevronDown, MoreHorizontal, Minus, Plus, CircleCheckIcon, CircleHelpIcon, CircleIcon, AppWindowIcon, CodeIcon, Bold, Italic, Underline, } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "~/components/ui/accordion";

import { Alert, AlertDescription, AlertTitle, } from "~/components/ui/alert";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "~/components/ui/alert-dialog";

import { AspectRatio, } from "~/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar";
import { Badge, } from "~/components/ui/badge";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "~/components/ui/breadcrumb";
import { Button, } from "~/components/ui/button";
import { Calendar, } from "~/components/ui/calendar";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "~/components/ui/card";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "~/components/ui/carousel";

import { Checkbox, } from "~/components/ui/checkbox";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "~/components/ui/collapsible";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "~/components/ui/command";

import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, } from "~/components/ui/context-menu";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "~/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "~/components/ui/drawer";

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "~/components/ui/dropdown-menu";

import { HoverCard, HoverCardContent, HoverCardTrigger, } from "~/components/ui/hover-card";
import { Input, } from "~/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, } from "~/components/ui/input-otp";
import { Label, } from "~/components/ui/label";

import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, } from "~/components/ui/menubar";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "~/components/ui/navigation-menu";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "~/components/ui/pagination";

import { Popover, PopoverContent, PopoverTrigger, } from "~/components/ui/popover";
import { Progress, } from "~/components/ui/progress";

import { RadioGroup, RadioGroupItem, } from "~/components/ui/radio-group";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "~/components/ui/resizable";

import { ScrollArea, } from "~/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "~/components/ui/select";
import { Separator, } from "~/components/ui/separator";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "~/components/ui/sheet";

import { Skeleton, } from "~/components/ui/skeleton";
import { Slider, } from "~/components/ui/slider";
import { Switch, } from "~/components/ui/switch";

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "~/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger, } from "~/components/ui/tabs";

import { Textarea, } from "~/components/ui/textarea";
import { Toggle, } from "~/components/ui/toggle";

import { ToggleGroup, ToggleGroupItem, } from "~/components/ui/toggle-group";

import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip";

// Recharts
import { Bar, BarChart, ResponsiveContainer, } from "recharts";

// TanStack Table
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState, } from "@tanstack/react-table";
import { NavLink } from "@remix-run/react";

export function TooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">Hover</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Add to library</p>
			</TooltipContent>
		</Tooltip>
	);
}

export function ToggleGroupDemo() {
	return (
		<ToggleGroup variant="outline" type="multiple">
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<Bold className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<Italic className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
				<Underline className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

export function ToggleDemo() {
	return (
		<Toggle aria-label="Toggle italic">
			<Bold className="h-4 w-4" />
		</Toggle>
	);
}

export function TextareaDemo() {
	return <Textarea placeholder="Type your message here." />;
}

export function TabsDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Tabs defaultValue="account">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle>Account</CardTitle>
							<CardDescription>Make changes to your account here. Click save when you&apos;re done.</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-name">Name</Label>
								<Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-username">Username</Label>
								<Input id="tabs-demo-username" defaultValue="@peduarte" />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="password">
					<Card>
						<CardHeader>
							<CardTitle>Password</CardTitle>
							<CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-current">Current password</Label>
								<Input id="tabs-demo-current" type="password" />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-new">New password</Label>
								<Input id="tabs-demo-new" type="password" />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV006",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV007",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
		paymentMethod: "Credit Card",
	},
];

export function TableDemo() {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}

export function SwitchDemo() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</div>
	);
}

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
	return <Slider defaultValue={[50]} max={100} step={1} className={cn("w-[60%]", className)} {...props} />;
}

export function SkeletonDemo() {
	return (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	);
}

export function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-6 px-4">
					<div className="grid gap-3">
						<Label htmlFor="sheet-demo-name">Name</Label>
						<Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="sheet-demo-username">Username</Label>
						<Input id="sheet-demo-username" defaultValue="@peduarte" />
					</div>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export function SeparatorDemo() {
	return (
		<div>
			<div className="space-y-1">
				<h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
				<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
			</div>
			<Separator className="my-4" />
			<div className="flex h-5 items-center space-x-4 text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	);
}

export function SelectDemo() {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function ScrollAreaDemo() {
	return (
		<ScrollArea className="h-72 w-48 rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
				{tags.map((tag) => (
					<React.Fragment key={tag}>
						<div className="text-sm">{tag}</div>
						<Separator className="my-2" />
					</React.Fragment>
				))}
			</div>
		</ScrollArea>
	);
}

export function ResizableDemo() {
	return (
		<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
			<ResizablePanel defaultSize={50}>
				<div className="flex h-[200px] items-center justify-center p-6">
					<span className="font-semibold">One</span>
				</div>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={50}>
				<ResizablePanelGroup direction="vertical">
					<ResizablePanel defaultSize={25}>
						<div className="flex h-full items-center justify-center p-6">
							<span className="font-semibold">Two</span>
						</div>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={75}>
						<div className="flex h-full items-center justify-center p-6">
							<span className="font-semibold">Three</span>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}

export function RadioGroupDemo() {
	return (
		<RadioGroup defaultValue="comfortable">
			<div className="flex items-center gap-3">
				<RadioGroupItem value="default" id="r1" />
				<Label htmlFor="r1">Default</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroupItem value="comfortable" id="r2" />
				<Label htmlFor="r2">Comfortable</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroupItem value="compact" id="r3" />
				<Label htmlFor="r3">Compact</Label>
			</div>
		</RadioGroup>
	);
}

export function ProgressDemo() {
	const [progress, setProgress] = React.useState(13);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return <Progress value={progress} className="w-[60%]" />;
}

export function PopoverDemo() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="leading-none font-medium">Dimensions</h4>
						<p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="width">Width</Label>
							<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="maxWidth">Max. width</Label>
							<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="height">Height</Label>
							<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="maxHeight">Max. height</Label>
							<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export function PaginationDemo() {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description: "A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description: "For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavigationMenuDemo() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="/">
										<div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
										<p className="text-muted-foreground text-sm leading-tight">Beautifully designed components built with Tailwind CSS.</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Introduction">
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem key={component.title} title={component.title} href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<NavLink href="/docs">Docs</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>List</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<NavLink href="#">
										<div className="font-medium">Components</div>
										<div className="text-muted-foreground">Browse all components in the library.</div>
									</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#">
										<div className="font-medium">Documentation</div>
										<div className="text-muted-foreground">Learn how to use the library.</div>
									</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#">
										<div className="font-medium">Blog</div>
										<div className="text-muted-foreground">Read our latest blog posts.</div>
									</NavLink>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Simple</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<NavLink href="#">Components</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#">Documentation</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#">Blocks</NavLink>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<NavLink href="#" className="flex-row items-center gap-2">
										<CircleHelpIcon />
										Backlog
									</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#" className="flex-row items-center gap-2">
										<CircleIcon />
										To Do
									</NavLink>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<NavLink href="#" className="flex-row items-center gap-2">
										<CircleCheckIcon />
										Done
									</NavLink>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<NavLink href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
				</NavLink>
			</NavigationMenuLink>
		</li>
	);
}

export function MenubarDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						New Window <MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled>New Incognito Window</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Share</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Email link</MenubarItem>
							<MenubarItem>Messages</MenubarItem>
							<MenubarItem>Notes</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						Print... <MenubarShortcut>⌘P</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo <MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Find</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Search the web</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Find...</MenubarItem>
							<MenubarItem>Find Next</MenubarItem>
							<MenubarItem>Find Previous</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>Cut</MenubarItem>
					<MenubarItem>Copy</MenubarItem>
					<MenubarItem>Paste</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarItem inset>
						Reload <MenubarShortcut>⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled inset>
						Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Toggle Fullscreen</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Hide Sidebar</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Profiles</MenubarTrigger>
				<MenubarContent>
					<MenubarRadioGroup value="benoit">
						<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
						<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
						<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
					</MenubarRadioGroup>
					<MenubarSeparator />
					<MenubarItem inset>Edit...</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Add Profile...</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}

export function LabelDemo() {
	return (
		<div>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
		</div>
	);
}

export function InputOTPDemo() {
	return (
		<InputOTP maxLength={6}>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot index={3} />
				<InputOTPSlot index={4} />
				<InputOTPSlot index={5} />
			</InputOTPGroup>
		</InputOTP>
	);
}

export function InputDemo() {
	return <Input type="email" placeholder="Email" />;
}

export function HoverCardDemo() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">@nextjs</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex justify-between gap-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">The React Framework – created and maintained by @vercel.</p>
						<div className="text-muted-foreground text-xs">Joined December 2021</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

export function DropdownMenuDemo() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
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
					<DropdownMenuItem>
						Keyboard shortcuts
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Message</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>More...</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						New Team
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuItem disabled>API</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
const data1 = [
	{
		goal: 400,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 239,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 349,
	},
];

export function DrawerDemo() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Move Goal</DrawerTitle>
						<DrawerDescription>Set your daily activity goal.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 pb-0">
						<div className="flex items-center justify-center space-x-2">
							<Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => onClick(-10)} disabled={goal <= 200}>
								<Minus />
								<span className="sr-only">Decrease</span>
							</Button>
							<div className="flex-1 text-center">
								<div className="text-7xl font-bold tracking-tighter">{goal}</div>
								<div className="text-muted-foreground text-[0.70rem] uppercase">Calories/day</div>
							</div>
							<Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => onClick(10)} disabled={goal >= 400}>
								<Plus />
								<span className="sr-only">Increase</span>
							</Button>
						</div>
						<div className="mt-3 h-[120px]">
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={data1}>
									<Bar
										dataKey="goal"
										style={
											{
												fill: "hsl(var(--foreground))",
												opacity: 0.9,
											} as React.CSSProperties
										}
									/>
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

export function DialogDemo() {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button variant="outline">Open Dialog</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Name</Label>
							<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="username-1">Username</Label>
							<Input id="username-1" name="username" defaultValue="@peduarte" />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}

export function Calendar22() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<div className="flex flex-col gap-3">
			<Label htmlFor="date" className="px-1">
				Date of birth
			</Label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" id="date" className="w-48 justify-between font-normal">
						{date ? date.toLocaleDateString() : "Select date"}
						<ChevronDownIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}

const data2: Payment[] = [
	{
		id: "m5gr84i9",
		amount: 316,
		status: "success",
		email: "ken99@example.com",
	},
	{
		id: "3u1reuv4",
		amount: 242,
		status: "success",
		email: "Abe45@example.com",
	},
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "Monserrat44@example.com",
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "Silas22@example.com",
	},
	{
		id: "bhqecj4p",
		amount: 721,
		status: "failed",
		email: "carmella@example.com",
	},
];

export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		id: "select",
		header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
		cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Email
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
	},
	{
		accessorKey: "amount",
		header: () => <div className="text-right">Amount</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));

			// Format the amount as a dollar amount
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function DataTableDemo() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: data2,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input placeholder="Filter emails..." value={(table.getColumn("email")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)} className="max-w-sm" />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Columns <ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="text-muted-foreground flex-1 text-sm">
					{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					<Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

export function ContextMenuDemo() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger>
			<ContextMenuContent className="w-52">
				<ContextMenuItem inset>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset disabled>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-44">
						<ContextMenuItem>Save Page...</ContextMenuItem>
						<ContextMenuItem>Create Shortcut...</ContextMenuItem>
						<ContextMenuItem>Name Window...</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Developer Tools</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem variant="destructive">Delete</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuRadioGroup value="pedro">
					<ContextMenuLabel inset>People</ContextMenuLabel>
					<ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
					<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	);
}

export function CommandDemo() {
	return (
		<Command className="rounded-lg border shadow-md md:min-w-[450px]">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<Calendar />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem disabled>
						<Calculator />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<User />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCard />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	);
}

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

export function ComboboxDemo() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
					{value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." className="h-9" />
					<CommandList>
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{frameworks.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									{framework.label}
									<Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

export function CollapsibleDemo() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-[350px] flex-col gap-2">
			<div className="flex items-center justify-between gap-4 px-4">
				<h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="icon" className="size-8">
						<ChevronsUpDown />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
			<CollapsibleContent className="flex flex-col gap-2">
				<div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
			</CollapsibleContent>
		</Collapsible>
	);
}

export function CheckboxDemo() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-3">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
			<div className="flex items-start gap-3">
				<Checkbox id="terms-2" defaultChecked />
				<div className="grid gap-2">
					<Label htmlFor="terms-2">Accept terms and conditions</Label>
					<p className="text-muted-foreground text-sm">By clicking this checkbox, you agree to the terms and conditions.</p>
				</div>
			</div>
			<div className="flex items-start gap-3">
				<Checkbox id="toggle" disabled />
				<Label htmlFor="toggle">Enable notifications</Label>
			</div>
			<Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
				<Checkbox id="toggle-2" defaultChecked className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
				<div className="grid gap-1.5 font-normal">
					<p className="text-sm leading-none font-medium">Enable notifications</p>
					<p className="text-muted-foreground text-sm">You can enable or disable notifications at any time.</p>
				</div>
			</Label>
		</div>
	);
}

export function CarouselDemo() {
	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export function CardDemo() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>Enter your email below to login to your account</CardDescription>
					<Button variant="link">Sign Up</Button>
			</CardHeader>
			<CardContent>
				<form>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" placeholder="m@example.com" required />
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
									Forgot your password?
								</a>
							</div>
							<Input id="password" type="password" required />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full">
					Login
				</Button>
				<Button variant="outline" className="w-full">
					Login with Google
				</Button>
			</CardFooter>
		</Card>
	);
}

export function CalendarDemo() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" captionLayout="dropdown" />;
}

export function ButtonDemo() {
	return (
		<div className="flex flex-wrap items-center gap-2 md:flex-row">
			<Button>Button</Button>
		</div>
	);
}

export function BreadcrumbDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<NavLink href="/">Home</NavLink>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="size-4" />
							<span className="sr-only">Toggle menu</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem>Documentation</DropdownMenuItem>
							<DropdownMenuItem>Themes</DropdownMenuItem>
							<DropdownMenuItem>GitHub</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<NavLink href="/docs/components">Components</NavLink>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full" defaultValue="item-1">
			<AccordionItem value="item-1">
				<AccordionTrigger>Product Information</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
					<p>Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Shipping Details</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.</p>
					<p>All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Return Policy</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely satisfied, simply return the item in its original condition.</p>
					<p>Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
export function AlertDemo() {
	return (
		<div className="grid w-full max-w-xl items-start gap-4">
			<Alert>
				<CheckCircle2Icon />
				<AlertTitle>Success! Your changes have been saved</AlertTitle>
				<AlertDescription>This is an alert with icon, title and description.</AlertDescription>
			</Alert>
			<Alert>
				<PopcornIcon />
				<AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
			</Alert>
			<Alert variant="destructive">
				<AlertCircleIcon />
				<AlertTitle>Unable to process your payment.</AlertTitle>
				<AlertDescription>
					<p>Please verify your billing information and try again.</p>
					<ul className="list-inside list-disc text-sm">
						<li>Check your card details</li>
						<li>Ensure sufficient funds</li>
						<li>Verify billing address</li>
					</ul>
				</AlertDescription>
			</Alert>
		</div>
	);
}

export function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
			<img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" fill className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" />
		</AspectRatio>
	);
}

export function AvatarDemo() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-12">
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="rounded-lg">
				<AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
				<AvatarFallback>ER</AvatarFallback>
			</Avatar>
			<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
					<AvatarFallback>LR</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
					<AvatarFallback>ER</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
}

export function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Show Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export function BadgeDemo() {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="flex w-full flex-wrap gap-2">
				<Badge>Badge</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="destructive">Destructive</Badge>
				<Badge variant="outline">Outline</Badge>
			</div>
			<div className="flex w-full flex-wrap gap-2">
				<Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
					<BadgeCheckIcon />
					Verified
				</Badge>
				<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
				<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
					99
				</Badge>
				<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
					20+
				</Badge>
			</div>
		</div>
	);
}
