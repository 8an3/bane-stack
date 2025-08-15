import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function ToastLoFi() {
	return (
		<Atom shade="50" className="flex items-start gap-2 rounded-lg border p-3 shadow-lg w-64">
			<Atom shade="500" className="size-4 rounded-full" />
			<div className="flex-1 space-y-1">
				<Atom shade="300" className="h-3 w-3/4" />
				<Atom shade="200" className="h-2 w-full" />
			</div>
		</Atom>
	);
}
