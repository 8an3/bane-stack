import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function ScrollBarLoFi() {
	return (
		<div className="flex flex-col h-[95px] w-3 bg-muted/20 rounded">
			{/* Up arrow */}
			<div className="flex items-center justify-center h-4 border-b">
				<ChevronUp className="size-2" />
			</div>

			{/* Scrollable track */}
			<div className="flex-1 relative bg-muted/10">
				{/* Scroll thumb */}
				<div className="absolute top-2 left-0.5 right-0.5 h-6 bg-muted rounded-sm" />
			</div>

			{/* Down arrow */}
			<div className="flex items-center justify-center h-4 border-t">
				<ChevronDown className="size-2" />
			</div>
		</div>
	);
}