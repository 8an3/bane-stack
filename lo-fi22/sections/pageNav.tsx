import { Atom } from "~/components/lo-fi/atom";

// Page Navigation Section
export function PageNavLoFi() {
	return (
		<div className="flex items-center justify-between p-2 border-t border-b">
			<Atom shade="300" className="h-2 w-12 rounded-sm" />
			<div className="flex items-center gap-1">
				<Atom shade="200" className="h-2 w-2 rounded-sm" />
				<Atom shade="400" className="h-2 w-2 rounded-sm" />
				<Atom shade="200" className="h-2 w-2 rounded-sm" />
				<span className="mx-1 text-xs">...</span>
				<Atom shade="200" className="h-2 w-2 rounded-sm" />
			</div>
			<Atom shade="300" className="h-2 w-10 rounded-sm" />
		</div>
	);
}
