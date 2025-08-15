import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function TooltipLoFi() {
	return (
		<div className="relative inline-block">
			<Atom shade="500" className="h-6 w-20 rounded" />
			<Atom shade="900" className="absolute hidden top-full mt-1 left-1/2 transform -translate-x-1/2 rounded px-2 py-1">
				<Atom shade="50" className="h-3 w-16" />
			</Atom>
		</div>
	);
}
