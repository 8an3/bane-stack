import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function InputLoFi() {
	return (
		<div className="space-y-1">
			<Atom shade="300" className="h-3 w-16" />
			<Atom shade="100" className="h-8 w-full rounded border" />
		</div>
	);
}