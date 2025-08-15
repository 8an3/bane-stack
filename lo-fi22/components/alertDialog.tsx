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
export function AlertDialogLoFi() {
	return (
		<Atom shade="50" className="flex flex-col gap-3 rounded-lg border p-4 w-64">
			<Atom shade="300" className="h-4 w-3/4" />
			<Atom shade="200" className="h-2 w-full" />
			<div className="flex justify-end gap-2 mt-2">
				<Atom shade="400" className="h-6 w-12 rounded" />
				<Atom shade="500" className="h-6 w-12 rounded" />
			</div>
		</Atom>
	);
}