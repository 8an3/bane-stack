import { ArrowUpIcon, Lock, Server } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-react";
import { Rocket } from "lucide-react";




export function ContentSplitWithImage() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:ml-auto lg:pl-4 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Deploy faster</h2>
							<p className="mt-6 text-lg leading-8 text-muted-foreground">Our platform helps you deploy your projects in minutes, not days. Get started today and see the difference.</p>
							<div className="mt-10 flex items-center gap-x-6">
								<Button>
									Get started
									<Rocket className="ml-2 h-4 w-4" />
								</Button>
								<Button variant="link">
									Learn more <span aria-hidden="true">→</span>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-end lg:order-first">
						<img src="/images/team-working.jpg" alt="Team working" className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10" width={2432} height={1442} />
					</div>
				</div>
			</div>
		</div>
	);
}

