import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function PaymentMethodLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			{/* Selected payment method */}
			<div className="flex items-center justify-between p-1 border rounded bg-primary/10 border-primary/40">
				<div className="flex items-center gap-1">
					<CreditCard className="size-3 text-primary" />
					<div className="flex flex-col gap-1">
						<Atom shade="300" className="h-1.5 w-16" />
						<Atom shade="200" className="h-1 w-12" />
					</div>
				</div>
				<CheckCircle className="size-3 text-green-600" />
			</div>

			{/* Other payment method */}
			<div className="flex items-center justify-between p-1 border rounded">
				<div className="flex items-center gap-1">
					<CreditCard className="size-3 text-muted-foreground" />
					<div className="flex flex-col gap-1">
						<Atom shade="200" className="h-1.5 w-14" />
						<Atom shade="100" className="h-1 w-10" />
					</div>
				</div>
				<div className="w-3 h-3 rounded-full border-2 border-muted" />
			</div>
		</div>
	);
}