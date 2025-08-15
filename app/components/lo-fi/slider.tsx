import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function SliderLoFi() {
	return (
		<div className="space-y-2 w-full">
			<Atom shade="100" className="relative h-1 w-full rounded-full">
				<Atom shade="500" className="absolute h-1 w-3/4 rounded-full" />
				<Atom shade="500" className="absolute -top-1.5 -ml-1.5 size-3 rounded-full" style={{ left: "75%" }} />
			</Atom>
			<div className="flex justify-between">
				<Atom shade="300" className="h-3 w-8" />
				<Atom shade="300" className="h-3 w-8" />
			</div>
		</div>
	);
}