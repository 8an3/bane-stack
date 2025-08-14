import { ArrowUpIcon, Lock, Server } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-react";
import { Rocket } from "lucide-react";



export function ContentTwoColumnWithScreenshot() {
	const features = ["Invite team members", "List view", "Keyboard shortcuts", "Calendars", "Notifications", "Boards", "Reporting", "Mobile app"];

	return (
		<div className="bg-background py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Boost your productivity</h2>
							<p className="mt-6 text-lg leading-8 text-muted-foreground">Our app helps you work more efficiently by providing all the tools you need in one place.</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
								{features.map((feature) => (
									<div key={feature} className="relative pl-9">
										<dt className="inline font-semibold text-foreground">
											<Check className="absolute left-1 top-1 h-5 w-5 text-primary" />
											{feature}
										</dt>
									</div>
								))}
							</dl>
							<Button className="mt-8">Get started</Button>
						</div>
					</div>
					<div className="flex items-start justify-end">
						<div className="w-[48rem] overflow-hidden rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
							<img src="/images/app-screenshot.png" alt="Product screenshot" className="w-full" width={2432} height={1442} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

