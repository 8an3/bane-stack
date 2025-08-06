import { Outlet, useLoaderData } from "@remix-run/react";

import { Separator } from "~/components/ui/separator"
import { Sidebar, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar, SidebarMenuAction, SidebarFooter, SidebarHeader, SidebarContent, SidebarProvider, SidebarInset, } from "~/components/ui/sidebar";
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconCircleCheckFilled, IconDotsVertical, IconGripVertical, IconLayoutColumns, IconLoader, IconPlus, IconTrendingUp, IconDots, IconFolder, IconShare3, IconTrash, IconCirclePlusFilled, IconMail, IconTrendingDown, IconCreditCard, IconLogout, IconNotification, IconUserCircle, IconCamera, IconChartBar, IconDashboard, IconDatabase, IconFileAi, IconFileDescription, IconFileWord, IconHelp, IconInnerShadowTop, IconListDetails, IconReport, IconSearch, IconSettings, IconUsers, type Icon, } from "@tabler/icons-react";

import eP from '~/utils/ext'
import { BookOpen, SquareTerminal, Wrench, User2, Mail, Shirt, Landmark, Star, DollarSign, UserPlus, Truck, LampDesk, MonitorSmartphone, Calendar as CalendarIcon, Car, Import, StickyNote, Settings, ClipboardPlus, CircleUser, Store, Search, Tag, Calculator, RefreshCcw, LoaderCircle, NotebookPen, CircleUserRound, BookUser, Bike, FileText, PersonStanding, Ticket, GalleryVerticalEnd, LogOutIcon, Settings2, Sofa, LifeBuoy, NotepadTextDashed, Construction, Send, Map, Phone, Printer, TruckIcon, CarFront, Gauge, ShoppingCart, NotebookText, WandSparkles, FolderDown, FolderUp, PanelTop, Download, MonitorDown, Banknote, Plus, Cog, ClipboardList, Info, Calendar, } from "lucide-react";
import eP from '~/utils/ext';
import { Button } from '~/components/ui/button';
import { useState } from "react";
import { SiteHeader } from "~/components/site-header";
import { IconInnerShadowTop } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, } from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar";


export async function loader({ request, params }: LoaderFunction) {
	//const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	//const email = session.get("email");
	//const user = await eP.user.all(email)
	///if (!user) return redirect(import.meta.env.LOGIN)

	const URLS = {
		VITE_APP_URL: import.meta.env.VITE_APP_URL,
		LOGIN: import.meta.env.VITE_LOGIN,
		LOGOUT: import.meta.env.VITE_LOGOUT,
		PO: import.meta.env.VITE_PO,
		TICKETS: import.meta.env.VITE_TICKETS,

	};

	//const s = eP.parentStore.one()

	const navItems = [
		// keep first tab
		// in other tabs instead of past performance put login have each page use a sidebar to navigate between the variants
		// authenticaion
		// calendars
		{
			title: "Featured",
			url: "/blocks/featured",
			items: [
				{
					title: "Dash, sidebar & charts",
					url: "/blocks/featured/one",
				},


			],
		},
		{
			title: "Sidebar",
			url: "/blocks/sidebar/one",
			items: [
				{
					title: "Collapsible sidebar, Sidebar with submenus, Menus grouped by category, Menu with dropdowns as submenus, Sidebar with popover in header( merge this with one of the others), Collapsible file tree, w/ calendar, in a dialog, with a sticky site header, ",
					url: "/blocks/sidebar/one",
				},
				{
					title: "Floating w/ submenus",
					url: "/blocks/sidebar/two",
				},
				{
					title: "Inset with breadscrumbs",
					url: "/blocks/sidebar/three",
				},
				{
					title: "Double sidebar",
					url: "/blocks/sidebar/four",
				},
				{
					title: "Email",
					url: "/blocks/sidebar/five",
				},
			],
		},
		{
			title: "Charts",
			url: "/blocks/calendar/one",
			items: [
				{
					title: "Contribution",
					url: "/blocks/calendar/one",
				},
			],
		},
		{
			title: "A link instead of a nested menu",
			url: "#",
		},
	]
	return {
		//	s,
		URLS,
		//	user,
		navItems
	}
}

export default function Quote() {
	const { navItems } = useLoaderData()
	const [navData, setNavData] = useState(navItems)

	return (
		<div className='bg-[#111827] w-[100vw] h-[100vh] overflow-hidden'>
			<SidebarProvider className="items-start h-full p-1" defaultOpen={false}>
				<AppSidebar
					data={navData}
					variant="inset" />
				<SidebarInset>
					<div className='bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(100vh-54px)] flex flex-col'>
						<SiteHeader />
						<div className="flex-1 ml-2 mr-2 mb-2 lg:mt-[25px] min-h-0 overflow-y-auto">
							<Outlet />
						</div>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}

export function AppSidebar({ data, ...props }: React.ComponentProps<typeof Sidebar>) {
	const user = {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	}
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">Acme Inc.</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
export function NavUser({
	user,
}: {
	user: {
		name: string
		email: string
		avatar: string
	}
}) {
	const { isMobile } = useSidebar()

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg grayscale">
								<AvatarImage src={user.avatar} alt={user.name} />
								<AvatarFallback className="rounded-lg">CN</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{user.name}</span>
								<span className="text-muted-foreground truncate text-xs">
									{user.email}
								</span>
							</div>
							<IconDotsVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback className="rounded-lg">CN</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user.name}</span>
									<span className="text-muted-foreground truncate text-xs">
										{user.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<IconUserCircle />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem>
								<IconCreditCard />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<IconNotification />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<IconLogout />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
export function NavMain({
	items,
}: {
	items: {
		title: string
		url: string
		icon?: Icon
	}[]
}) {
	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					<SidebarMenuItem className="flex items-center gap-2">
						<SidebarMenuButton
							tooltip="Quick Create"
							className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
						>
							<IconCirclePlusFilled />
							<span>Quick Create</span>
						</SidebarMenuButton>
						<Button
							size="icon"
							className="size-8 group-data-[collapsible=icon]:opacity-0"
							variant="outline"
						>
							<IconMail />
							<span className="sr-only">Inbox</span>
						</Button>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton tooltip={item.title}>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
