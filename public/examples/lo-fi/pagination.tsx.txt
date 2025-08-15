import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function PaginationLoFi() {
	return (
		<div className="flex items-center gap-1">
			<Atom shade="100" className="size-8 rounded border" />
			{[1, 2, 3].map((page) => (
				<Atom key={page} shade={page === 2 ? "500" : "100"} className="size-8 rounded border" />
			))}
			<Atom shade="100" className="size-8 rounded border" />
		</div>
	);
}