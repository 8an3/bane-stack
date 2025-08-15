import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function CookieSettingsLoFi() {
	return (
		<div className="flex flex-col gap-3 p-1 border rounded-lg bg-background max-w-sm">
			{/* Essential cookies (always enabled) */}
			<div className="flex items-center justify-between p-1 border rounded-md bg-muted/20">
				<div className="flex items-center gap-1">
					<Shield className="size-3 text-green-600" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-16" />
						<Atom shade="100" className="h-1 w-16" />
					</div>
				</div>
				<div className="w-6 h-3 rounded-full bg-green-600" />
			</div>

			{/* Analytics cookies */}
			<div className="flex items-center justify-between p-1 border rounded-md">
				<div className="flex items-center gap-1">
					<BarChart3 className="size-3 text-blue-600" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-8" />
						<Atom shade="100" className="h-1 w-9" />
					</div>
				</div>
				<div className="w-6 h-3 rounded-full bg-primary/20 border border-primary/40">
					<div className="w-2 h-2 rounded-full bg-primary translate-x-3 translate-y-0.5" />
				</div>
			</div>
		</div>
	);
}