import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function SkeletonLoFi() {
	return (
		<div className="space-y-2">
			<Atom shade="100" className="h-4 w-3/4 rounded" />
			<Atom shade="100" className="h-3 w-full rounded" />
			<Atom shade="100" className="h-3 w-2/3 rounded" />
		</div>
	);
}