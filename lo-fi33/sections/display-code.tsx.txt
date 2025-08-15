import { Atom } from "~/components/lo-fi/atom";
// ~/components/lo-fi/display-code.tsx

export function DisplayCodeLoFi() {
	return (
		<div className="space-y-1">
			<div className="grid grid-cols-8 gap-0.5">
				{Array.from({ length: 8 }).map((_, i) => (
					<Atom key={i} shade="300" className="h-2 w-full" />
				))}
			</div>
			<div className="flex items-center justify-between border-b py-1">
				<Atom shade="300" className="h-2 w-[20%]" />
				<Atom shade="300" className="h-2 w-[60%]" />
			</div>
		</div>
	);
}

