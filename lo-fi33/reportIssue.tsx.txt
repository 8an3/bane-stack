import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function ReportIssueLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<AlertTriangle className="size-3 text-orange-600" />
				<Atom shade="300" className="h-1.5 w-20" />
			</div>
			<div className="flex flex-col gap-1">
				<Atom shade="200" className="h-1.5 w-full" />
				<Atom shade="100" className="h-1 w-3/4" />
				<Atom shade="100" className="h-1 w-1/2" />
			</div>
			<div className="flex gap-1 pt-1 border-t">
				<Atom shade="300" className="h-1.5 w-12 rounded" />
				<Atom shade="200" className="h-1.5 w-10 rounded" />
			</div>
		</div>
	);
}