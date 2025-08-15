import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function MenubarLoFi() {
	return (
		<div className="flex border rounded p-1 gap-1 w-full">
			{["File", "Edit", "View"].map((item) => (
				<Atom key={item} shade="100" className="px-2 py-1 rounded">
					<Atom shade="300" className="h-3 w-5 mx-auto" />
				</Atom>
			))}
		</div>
	);
}