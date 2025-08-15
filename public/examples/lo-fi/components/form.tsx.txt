import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function FormLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-3 rounded-lg border p-4">
			<div className="space-y-2">
				<Atom shade="300" className="h-3 w-16" />
				<Atom shade="100" className="h-8 w-full rounded border" />
			</div>
			<div className="flex items-center gap-2">
				<Atom shade="100" className="size-4 rounded border" />
				<Atom shade="300" className="h-3 w-32" />
			</div>
			<Atom shade="500" className="h-8 w-24 rounded self-end" />
		</Atom>
	);
}