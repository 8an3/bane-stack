import { Linkedin, Twitter } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";

// Team Section
export function TeamLoFi() {
	return (
		<div className="p-8">
			<div className="text-center mb-12">
				<Atom shade="400" className="h-5 w-32 mx-auto mb-4" />
				<Atom shade="200" className="h-3 w-48 mx-auto" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{[1, 2, 3, 4, 5, 6].map((member) => (
					<div key={member} className="text-center space-y-4">
						<Atom shade="300" className="h-32 w-32 rounded-full mx-auto" />
						<div className="space-y-2">
							<Atom shade="400" className="h-4 w-28 mx-auto" />
							<Atom shade="300" className="h-3 w-24 mx-auto" />
							<div className="space-y-1">
								<Atom shade="200" className="h-3 w-full" />
								<Atom shade="200" className="h-3 w-4/5 mx-auto" />
							</div>
						</div>
						<div className="flex justify-center gap-2">
							<Twitter className="size-4" />
							<Linkedin className="size-4" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
