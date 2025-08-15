import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function CollapsibleLoFi() {
	return (
		<div className="flex flex-col gap-1 border rounded p-2 w-48">
			<div className="flex justify-between items-center">
				<Atom shade="300" className="h-4 w-3/4" />
				<ChevronDown className="size-3" />
			</div>
		</div>
	);
}