import { Atom } from "~/components/lo-fi/atom";

// Home Screen Section
export function HomeScreenLoFi() {
	return (
		<div className="grid grid-cols-3 gap-2 p-2 h-[353px]">
			<div className="col-span-2 space-y-2">
				<Atom shade="100" className="h-12 w-full rounded-sm" />
				<div className="space-y-1">
					<Atom shade="400" className="h-2 w-3/4" />
					<div className="space-y-0.5">
						<Atom shade="200" className="h-1 w-full" />
						<Atom shade="200" className="h-1 w-5/6" />
					</div>
				</div>
			</div>
			<div className="space-y-2">
				<Atom shade="300" className="h-1 w-16" />
				{[1, 2].map((item) => (
					<div key={item} className="flex gap-1">
						<Atom shade="300" className="h-4 w-4 rounded-sm flex-shrink-0" />
						<div className="space-y-0.5">
							<Atom shade="300" className="h-1 w-8" />
							<Atom shade="200" className="h-1 w-6" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
