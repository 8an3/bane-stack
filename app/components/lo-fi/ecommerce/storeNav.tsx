import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";
export function StoreNavLoFi() {
	return (
		<div className="border-b">
			<div className="p-4 border-b">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-6">
						<Atom shade="400" className="h-8 w-32" />
						<div className="hidden md:flex items-center gap-6">
							<Atom shade="200" className="h-3 w-16" />
							<Atom shade="200" className="h-3 w-20" />
							<Atom shade="200" className="h-3 w-14" />
							<Atom shade="200" className="h-3 w-18" />
						</div>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2 border rounded-md px-3 py-2">
							<Search className="size-4" />
							<Atom shade="100" className="h-4 w-32" />
						</div>
						<User className="size-6" />
						<div className="relative">
							<ShoppingCart className="size-6" />
							<Atom shade="500" className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-white text-xs flex items-center justify-center">
								<span>3</span>
							</Atom>
						</div>
					</div>
				</div>
			</div>

			<div className="p-4">
				<div className="flex items-center gap-8 overflow-x-auto">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((category) => (
						<div key={category} className="flex items-center gap-2 whitespace-nowrap">
							<Atom shade="200" className="h-3 w-20" />
							<ChevronDown className="size-3" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
