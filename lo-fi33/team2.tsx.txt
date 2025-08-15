import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function Team2LoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Users className="size-3 text-primary" />
				<Atom shade="300" className="h-1.5 w-16" />
			</div>
			<div className="flex items-center gap-1">
				<div className="w-4 h-4 rounded-full bg-primary/20" />
				<div className="flex flex-col gap-1">
					<Atom shade="200" className="h-1.5 w-20" />
					<Atom shade="100" className="h-1 w-12" />
				</div>
			</div>
			<div className="flex items-center gap-1">
				<div className="w-4 h-4 rounded-full bg-muted" />
				<div className="flex flex-col gap-1">
					<Atom shade="200" className="h-1.5 w-16" />
					<Atom shade="100" className="h-1 w-10" />
				</div>
			</div>
		</div>
	);
}