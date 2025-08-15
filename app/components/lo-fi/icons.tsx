import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function IconsLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Palette className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-12" />
			</div>
			<div className="grid grid-cols-4 gap-1">
				{[...Array(8)].map((_, i) => (
					<div key={i} className="w-4 h-4 border rounded bg-muted/20" />
				))}
			</div>
		</div>
	);
}