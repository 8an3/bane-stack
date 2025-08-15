import { Atom } from "~/components/lo-fi/atom";
import {
	ChevronDown,
	ChevronUp,
	MoreHorizontal,
	Smartphone,
	 Monitor, Droplets,
	Code,
	Megaphone,
	X,
	Home,
	Settings,
	Users,
	FileText,
	ChevronRight,
	Loader2,
	Cookie,
	Shield,
	BarChart3,
	Target,
	CreditCard,
	CheckCircle,
	AlertTriangle,
	Columns2,
	Database,
	FileText,
	Bell,
	Palette,
	User,
} from "lucide-react";
export function AuthenticatorLoFi() {
	return (
		<div className="flex flex-col gap-2 p-1 border rounded-lg bg-background max-w-xs">
			<div className="flex items-center gap-1">
				<Shield className="size-3 text-green-600" />
				<Atom shade="300" className="h-1.5 w-18" />
			</div>
			<div className="flex items-center justify-center p-2 border rounded bg-muted/20">
				<div className="grid grid-cols-3 gap-1">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="w-2 h-2 bg-primary/60 rounded" />
					))}
				</div>
			</div>
			<Atom shade="200" className="h-1.5 w-full" />
		</div>
	);
}