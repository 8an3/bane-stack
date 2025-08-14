import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";

// Footer Section
export function FooterLoFi() {
	return (
		<div className="bg-neutral-50 dark:bg-neutral-900 p-8 border-t">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
				<div className="space-y-4">
					<div className="flex items-center gap-2">
						<Atom shade="400" className="h-8 w-8 rounded-full" />
						<Atom shade="400" className="h-5 w-24" />
					</div>
					<div className="space-y-2">
						<Atom shade="200" className="h-3 w-full" />
						<Atom shade="200" className="h-3 w-4/5" />
					</div>
				</div>
				{[1, 2, 3].map((col) => (
					<div key={col} className="space-y-4">
						<Atom shade="400" className="h-4 w-20" />
						<div className="space-y-2">
							{[1, 2, 3, 4].map((item) => (
								<Atom key={item} shade="200" className="h-3 w-16" />
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
				<Atom shade="200" className="h-3 w-48" />
				<div className="flex gap-4">
					<Facebook className="size-5" />
					<Twitter className="size-5" />
					<Instagram className="size-5" />
					<Linkedin className="size-5" />
				</div>
			</div>
		</div>
	);
}
