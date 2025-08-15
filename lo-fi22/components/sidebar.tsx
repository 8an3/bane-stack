import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function SidebarLoFi() {
	return (
		<div className="flex flex-col w-64 border-r bg-muted/20 p-1 gap-1">
			{/* Logo/Brand area */}
			<div className="flex items-center gap-1 p-1 mb-1">
				<div className="w-2 h-2 rounded bg-primary/20" />
				<Atom shade="300" className="h-2 w-20" />
			</div>

			{/* Navigation items */}
			<div className="flex items-center gap-1 p-1 rounded-md bg-primary/10 border-l-2 border-primary">
				<Home className="size-3 text-primary" />
				<Atom shade="300" className="h-2 w-16" />
			</div>

			<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
				<Users className="size-3 text-muted-foreground" />
				<Atom shade="200" className="h-2 w-12" />
			</div>

			<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
				<FileText className="size-3 text-muted-foreground" />
				<Atom shade="200" className="h-2 w-20" />
			</div>

			{/* Settings at bottom */}
			<div className="mt-auto pt-1 border-t">
				<div className="flex items-center gap-1 p-1 rounded-md hover:bg-muted/40">
					<Settings className="size-3 text-muted-foreground" />
					<Atom shade="200" className="h-2 w-14" />
				</div>
			</div>
		</div>
	);
}