import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function AnnouncementLoFi() {
	return (
		<div className="flex items-center gap-3 p-3 border rounded-lg bg-primary/10 border-primary/20">
			{/* Announcement icon */}
			<Megaphone className="size-4 text-primary/70" />

			{/* Announcement content */}
			<div className="flex-1 flex flex-col gap-1">
				<Atom shade="300" className="h-2 w-2/3" />
				<Atom shade="200" className="h-2 w-4/5" />
			</div>

			{/* Dismiss button */}
			<X className="size-3 text-muted-foreground" />
		</div>
	);
}