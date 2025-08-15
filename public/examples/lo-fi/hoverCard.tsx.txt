import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function HoverCardLoFi() {
	return (
		<div className="relative inline-block">
			<Atom shade="500" className="h-6 w-20 rounded" />
			<Atom shade="50" className="absolute hidden top-full mt-1 left-0 rounded-lg border p-3 w-48">
				<Atom shade="300" className="h-3 w-3/4 mb-1" />
				<Atom shade="200" className="h-2 w-full" />
			</Atom>
		</div>
	);
}