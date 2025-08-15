import { Atom, } from "~/components/lo-fi/atom";
import { ChevronDown, ChevronUp, MoreHorizontal, Smartphone, Monitor, Droplets, Code, Megaphone, X, Home, Settings, Users, FileText, ChevronRight, Loader2, Cookie, Shield, BarChart3, Target, CreditCard, CheckCircle, AlertTriangle, Columns2, Database, FileText, Bell, Palette, User, } from "lucide-react";

export function CarouselLoFi() {
	return (
		<div className="relative">
			<Atom shade="100" className="aspect-video rounded-lg" />
			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
				{[...Array(3)].map((_, i) => (
					<Atom key={i} shade={i === 1 ? "500" : "300"} className="size-2 rounded-full" />
				))}
			</div>
		</div>
	);
}