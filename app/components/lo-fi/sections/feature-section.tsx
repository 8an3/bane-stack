import { Atom } from "~/components/lo-fi/atom";
// ~/components/lo-fi/feature-section.tsx
export function FeatureSectionLoFi() {
	return (
		<div className="grid grid-cols-3 gap-4">
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={i} className="space-y-4">
					<Atom shade="300" className="h-12 w-12 rounded-lg" />

					<div className="space-y-2">
						<Atom shade="300" className="h-2 w-[80%]" />
						<Atom shade="200" className="h-0.5 w-[95%]" />
						<Atom shade="200" className="h-0.5 w-[90%]" />
					</div>
				</div>
			))}
		</div>
	);
}
