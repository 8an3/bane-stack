import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function BreadcrumbLoFi() {
	return (
		<div className="flex items-center gap-1">
			<Atom shade="300" className="h-3 w-8" />
			<span>/</span>
			<Atom shade="300" className="h-3 w-12" />
			<span>/</span>
			<Atom shade="500" className="h-3 w-6" />
		</div>
	);
}