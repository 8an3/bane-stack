import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function TailwindLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Palette className="size-3 text-cyan-600" />
				<Atom shade="300" className="h-1.5 w-16" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex gap-1">
					<div className="w-3 h-1.5 bg-cyan-600/40 rounded" />
					<div className="w-4 h-1.5 bg-blue-600/40 rounded" />
					<div className="w-2 h-1.5 bg-purple-600/40 rounded" />
				</div>
				<Atom shade="200" className="h-1 w-full" />
				<Atom shade="100" className="h-1 w-3/4" />
			</div>
		</div>
	);
}