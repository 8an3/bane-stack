import { Atom } from "~/components/lo-fi/atom";
// components/lo-fi/cart.tsx
export function CartLoFi() {
	return (
		<div className="border rounded p-2 space-y-2">
			<div className="flex gap-2">
				<Atom shade="100" className="h-3 w-3" />
				<div className="flex-1 space-y-0.5">
					<Atom shade="200" className="h-1 w-3/4" />
					<Atom shade="200" className="h-1 w-1/3" />
				</div>
			</div>
			<div className="h-px bg-gray-100"></div>
			<div className="flex justify-between">
				<Atom shade="200" className="h-1 w-1/4" />
				<Atom shade="200" className="h-1 w-1/4" />
			</div>
			<Atom shade="300" className="h-2 w-full" />
		</div>
	);
}
