import { Outlet, useLoaderData } from "@remix-run/react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar, } from "~/components/ui/sidebar"
import eP from '~/utils/ext'
import { IconInnerShadowTop, } from "@tabler/icons-react";
import { SquareTerminal, DollarSign, Car, Settings, ClipboardPlus, GalleryVerticalEnd, NotepadTextDashed, Construction, Map, Phone, Printer, CarFront, ClipboardList, Info, Calendar, Zap, } from "lucide-react";
import eP from '~/utils/ext';
import { SiteHeader } from "~/components/site-header";
import { NavMain } from "~/components/customUi/nav-main";
import { NavUser } from "~/components/customUi/nav-user";
import { cn } from "~/components/ui/utils";

export async function loader({ request, params }: LoaderFunction) {
	/**const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	const email = session.get("email");
	const user = await eP.user.all(email)
	if (!user) return redirect(import.meta.env.LOGIN) */

	/**	const URLS = {
			VITE_APP_URL: import.meta.env.VITE_APP_URL,
			LOGIN: import.meta.env.VITE_LOGIN,
			LOGOUT: import.meta.env.VITE_LOGOUT,
			PO: import.meta.env.VITE_PO,
			TICKETS: import.meta.env.VITE_TICKETS,
	
		}; */

	//	const s = eP.parentStore.one()

	const navItems = {
		navMain: [
			{
				title: "Portal",
				url: "#",
				items: [
					{
						title: "Dashboard",
						url: "/portal/dashboard",
					},
					{
						title: "Template",
						url: "/portal/template",
					},
					{
						title: "Tickets",
						url: "/portal/tickets",
					},
				],
			},
			{
				title: "Blocks",
				url: "#",
				items: [
					{
						title: "Featured",
						url: "/blocks/sidebar/one",
					},
					{
						title: "Sidebar 2",
						url: "/blocks/sidebar/two",
					},
					{
						title: "Sidebar 3",
						url: "/blocks/sidebar/three",
					},
					{
						title: "Sidebar 4",
						url: "/blocks/sidebar/four",
					},
				],
			},
			{
				title: "Charts",
				url: "#",
				items: [
					{
						title: "Charts",
						url: "/blocks/charts/one",
					},

				],
			},
			{
				title: "Architecture",
				url: "#",
				items: [
					{
						title: "Accessibility",
						url: "#",
					},

				],
			},
		],
		navLocation: [
			// parent store
			{
				name: "Bane",
				address: "Acme Inc",
				postal: "Acme Inc",
				prov: "Acme Inc",
				country: "Acme Inc",
				phone: "Acme Inc",
				logo: GalleryVerticalEnd,
			},
			// map through stores
			{
				name: "Acme Inc",
				address: "Acme Inc",
				postal: "Acme Inc",
				prov: "Acme Inc",
				country: "Acme Inc",
				phone: "Acme Inc",
				logo: GalleryVerticalEnd,
			}
		],

	}
	return {
		//	s,
		//URLS,
		//user,
		navItems
	};
}
export default function ProviderRoute() {
	const { navItems } = useLoaderData()
	return (
		<div className='bg-[#11827] w-[100vw] h-[100vh] overflow-hidden'>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					} as React.CSSProperties
				}
			>
				<AppSidebar variant="inset" data={navItems} />
				<Quote />
			</SidebarProvider>
		</div>
	)
}
export function Quote() {
	const {
		state,
		open,
		setOpen,
		openMobile,
		setOpenMobile,
		isMobile,
		toggleSidebar,
	} = useSidebar()
	return (
		<SidebarInset>
			<div className={`${open ? 'ml-[200px]' : ''}`}>
				<SiteHeader />
				<div className="flex flex-1 flex-col m-3">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<Outlet />
					</div>
				</div>
			</div>
		</SidebarInset>
	);
}

export function AppSidebar({ data, ...props }: React.ComponentProps<typeof Sidebar>) {
	const user = {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	}
	return (
		<Sidebar collapsible="offcanvas" className='-ml-2' {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<Zap className="!size-5 text-primary" />
								<span className="text-base font-semibold">Bane</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className=''>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}

