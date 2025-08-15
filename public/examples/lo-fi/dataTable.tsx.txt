import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function DataTableLoFi() {
	return (
		<div className="rounded-lg border w-full">
			{/* Header */}
			<div className="border-b p-3">
				<div className="flex gap-4">
					<Atom shade="300" className="h-3 w-[30%]" />
					<Atom shade="300" className="h-3 w-[25%]" />
					<Atom shade="300" className="h-3 w-[20%]" />
					<Atom shade="300" className="h-3 w-[25%]" />
				</div>
			</div>

			{/* Rows */}
			<div className="border-b p-3">
				<div className="flex gap-4">
					<Atom shade="100" className="h-2 w-[30%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
					<Atom shade="100" className="h-2 w-[20%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
				</div>
			</div>

			<div className="p-3">
				<div className="flex gap-4">
					<Atom shade="100" className="h-2 w-[30%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
					<Atom shade="100" className="h-2 w-[20%]" />
					<Atom shade="100" className="h-2 w-[25%]" />
				</div>
			</div>
		</div>
	);
}