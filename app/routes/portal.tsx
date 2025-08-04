import { Outlet, useLoaderData } from "@remix-run/react";
import { AppSidebar } from "~/components/pos/app-sidebar"
import { Separator } from "~/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger, } from "~/components/ui/sidebar"
import eP from '~/utils/ext'
import { BookOpen, SquareTerminal, Wrench, User2, Mail, Shirt, Landmark, Star, DollarSign, UserPlus, Truck, LampDesk, MonitorSmartphone, Calendar as CalendarIcon, Car, Import, StickyNote, Settings, ClipboardPlus, CircleUser, Store, Search, Tag, Calculator, RefreshCcw, LoaderCircle, NotebookPen, CircleUserRound, BookUser, Bike, FileText, PersonStanding, Ticket, GalleryVerticalEnd, LogOutIcon, Settings2, Sofa, LifeBuoy, NotepadTextDashed, Construction, Send, Map, Phone, Printer, TruckIcon, CarFront, Gauge, ShoppingCart, NotebookText, WandSparkles, FolderDown, FolderUp, PanelTop, Download, MonitorDown, Banknote, Plus, Cog, ClipboardList, Info, Calendar, } from "lucide-react";


export async function loader({ request, params }: LoaderFunction) {
	const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	const email = session.get("email");
	const user = await eP.user.all(email)
	if (!user) return redirect(import.meta.env.LOGIN)

	const URLS = {
		VITE_APP_URL: import.meta.env.VITE_APP_URL,
		LOGIN: import.meta.env.VITE_LOGIN,
		LOGOUT: import.meta.env.VITE_LOGOUT,
		PO: import.meta.env.VITE_PO,
		TICKETS: import.meta.env.VITE_TICKETS,
		VITE_APP_URL: import.meta.env.VITE_APP_URL,

	};

	const s = eP.parentStore.one()

	const navItems = {
		navMain: [
			{
				title: "Sales",
				url: "#",
				items: [
					{
						title: "Create Purchase Order",
						url: "/po/dashboard",
					},
					{
						title: "Project Structure",
						url: "#",
					},
				],
			},
			{
				title: "Building Your Application",
				url: "#",
				items: [
					{
						title: "Routing",
						url: "#",
					},
					{
						title: "Data Fetching",
						url: "#",
						isActive: true,
					},
					{
						title: "Rendering",
						url: "#",
					},
					{
						title: "Caching",
						url: "#",
					},
					{
						title: "Styling",
						url: "#",
					},
					{
						title: "Optimizing",
						url: "#",
					},
					{
						title: "Configuring",
						url: "#",
					},
					{
						title: "Testing",
						url: "#",
					},
					{
						title: "Authentication",
						url: "#",
					},
					{
						title: "Deploying",
						url: "#",
					},
					{
						title: "Upgrading",
						url: "#",
					},
					{
						title: "Examples",
						url: "#",
					},
				],
			},
			{
				title: "API Reference",
				url: "#",
				items: [
					{
						title: "Components",
						url: "#",
					},
					{
						title: "File Conventions",
						url: "#",
					},
					{
						title: "Functions",
						url: "#",
					},
					{
						title: "next.config.js Options",
						url: "#",
					},
					{
						title: "CLI",
						url: "#",
					},
					{
						title: "Edge Runtime",
						url: "#",
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
					{
						title: "Fast Refresh",
						url: "#",
					},
					{
						title: "Next.js Compiler",
						url: "#",
					},
					{
						title: "Supported Browsers",
						url: "#",
					},
					{
						title: "Turbopack",
						url: "#",
					},
				],
			},
			{
				title: "Community",
				url: "#",
				items: [
					{
						title: "Contribution Guide",
						url: "#",
					},
				],
			},
		],
		navLocation: [
			// parent store
			{
				name: "Acme Inc",
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
		NavUser: [
			{
				// Account
				title: "Account",
				url: URLS.USER_DASH,
				icon: SquareTerminal,
				items: [
					{
						title: "Getting Started",
						url: URLS.CRM_GETTING_STARTED,
						icon: Info,
					},
					{
						title: "Dashboard",
						url: URLS.USER_DASH,
						icon: Settings,
					},
					{
						title: "Schedule",
						url: URLS.USER_CALENDAR,
						icon: ClipboardPlus,
					},
					{
						title: "Time Off Requests",
						url: URLS.USER_TIME_OFF,
						icon: Calendar,
					},
					{
						title: "Note To Management",
						url: URLS.USER_MGR_NOTE,
						icon: Calendar,
					},
					{
						title: "Employee Reviews",
						url: URLS.USER_REVIEWS,
						icon: Calendar,
					},
					{
						title: "Automations",
						url: URLS.USER_AUTOMATIONS,
						icon: Calendar,
					},
				],
			},

			{
				// Dealer
				title: "Scripts & Templates",
				url: URLS.USER_TEMPLATE,
				icon: CarFront,
				items: [
					{
						title: "Scripts Builder",
						url: URLS.USER_TEMPLATE,
						icon: NotepadTextDashed,
					},
					{
						title: "Document & Template Builder",
						url: URLS.USER_DOC_BUILDER,
						icon: Construction,
					},
				],
			},
			{
				// Dealer
				title: "Dealer",
				url: URLS.DEALER_CHAT,
				icon: CarFront,
				items: [

					{
						title: "Leaderboard",
						url: URLS.DEALER_LEADER,
						icon: ClipboardList,
					},
					{
						title: "Sales Tracker",
						url: URLS.DEALER_TRACKER,
						icon: DollarSign,
					},
				],
			},
			{
				// Scripts & Templates
				title: "Print",
				url: URLS.USER_TEMPLATE,
				icon: Printer,
				items: [

					{
						title: "Label Printer",
						url: URLS.builder + URLS.PAC_LABEL,
						icon: Printer,
					},
					{
						title: "Unit Signs",
						url: URLS.SALES_UNIT_SIGNS,
						icon: Car,
					},
				],
			},
			{
				// CRM Info
				title: "CRM Info",
				url: URLS.CRM_GETTING_STARTED,
				icon: Info,
				items: [

					{
						title: "Roadmap",
						url: URLS.CRM_ROADMAP,
						icon: Map,
					},
					{
						title: "Contact",
						url: URLS.CRM_CONTACT,
						icon: Phone,
					},
				],
			},
		],
	}
	return json({
		s,
		URLS,
		notifications,
		user,
		navItems
	});
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