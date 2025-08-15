import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function CalendarLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-1 rounded-lg border p-2 w-56">
			<div className="flex justify-between">
				<Atom shade="300" className="h-2 w-16" />
				<Atom shade="300" className="h-2 w-16" />
			</div>
			<div className="grid grid-cols-7 gap-1">
				{[...Array(7)].map((_, i) => (
					<Atom key={`day-${i}`} shade="200" className="h-2 w-2" />
				))}
				{[...Array(28)].map((_, i) => (
					<Atom key={`date-${i}`} shade={i === 15 ? "500" : "100"} className="h-2 w-2" />
				))}
			</div>
		</Atom>
	);
}