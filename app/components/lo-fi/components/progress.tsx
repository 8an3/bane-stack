import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function ProgressLoFi() {
	return (
		<div className="space-y-1 w-full">
			<div className="flex justify-between">
				<Atom shade="300" className="h-3 w-16" />
				<Atom shade="300" className="h-3 w-8" />
			</div>
			<Atom shade="100" className="h-2 w-full rounded-full overflow-hidden">
				<Atom shade="500" className="h-full w-3/4" />
			</Atom>
		</div>
	);
}