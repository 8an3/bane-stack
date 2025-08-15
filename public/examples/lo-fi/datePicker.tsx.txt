import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function DatePickerLoFi() {
	return (
		<Atom shade="100" className="flex items-center justify-between rounded border px-2 py-1 w-40">
			<Atom shade="300" className="h-3 w-24" />
			<Atom shade="400" className="size-4 rounded" />
		</Atom>
	);
}