import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function TabsLoFi() {
	return (
		<div className="flex flex-col">
			{/* Tab Headers */}
			<div className="flex border-b">
				<div className="px-4 py-2 border-b-2 border-primary bg-background">
					<Atom shade="300" className="h-3 w-12" />
				</div>
				<div className="px-4 py-2 border-b-2 border-transparent bg-muted/30">
					<Atom shade="200" className="h-3 w-12" />
				</div>
				<div className="px-4 py-2 border-b-2 border-transparent bg-muted/30">
					<Atom shade="200" className="h-3 w-12" />
				</div>
			</div>

			{/* Tab Content */}
			<div className="p-4 bg-background">
				<div className="flex flex-col gap-2">
					<Atom shade="300" className="h-3 w-3/4" />
					<Atom shade="200" className="h-2 w-full" />
					<Atom shade="200" className="h-2 w-2/3" />
				</div>
			</div>
		</div>
	);
}