import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function RadioGroupLoFi() {
	return (
		<div className="space-y-2">
			{["Option 1", "Option 2"].map((option) => (
				<div key={option} className="flex items-center gap-2">
					<Atom shade="100" className="size-4 rounded-full border" />
					<Atom shade="300" className="h-3 w-16" />
				</div>
			))}
		</div>
	);
}