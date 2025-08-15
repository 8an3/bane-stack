import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function NotificationsLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Bell className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-20" />
			</div>
			<div className="flex items-center gap-1 p-1 border rounded bg-primary/5">
				<div className="w-2 h-2 rounded-full bg-primary" />
				<Atom shade="200" className="h-1.5 w-16" />
			</div>
			<div className="flex items-center gap-1 p-1 border rounded">
				<div className="w-2 h-2 rounded-full bg-muted" />
				<Atom shade="100" className="h-1.5 w-14" />
			</div>
		</div>
	);
}