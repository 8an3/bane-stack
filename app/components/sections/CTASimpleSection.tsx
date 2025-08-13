import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";

export function CTASimpleSection({
	title = "Ready to get started?",
	description = "Join thousands of companies already using our platform to grow their business.",
	primaryCTA = { text: "Start Free Trial", href: "#" },
	secondaryCTA = { text: "Contact Sales", href: "#" },
	features = ["14-day free trial", "No setup fees", "Cancel anytime"],
	showGradient = true,
	containerBg = "bg-primary",
	textColor = "text-primary-foreground",
	className,
	titleClassName,
	descriptionClassName,
}) {
	return (
		<section className={cn("py-16 lg:py-24", className)}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className={cn("relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-16 lg:px-24", containerBg)}>
					{/* Gradient Background */}
					{showGradient && (
						<svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)]">
							<circle r={512} cx={512} cy={512} fill="url(#simple-gradient)" fillOpacity="0.3" />
							<defs>
								<radialGradient id="simple-gradient">
									<stop stopColor="#ffffff" />
									<stop offset={1} stopColor="#f3f4f6" />
								</radialGradient>
							</defs>
						</svg>
					)}

					<div className="mx-auto max-w-2xl text-center">
						<h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl", textColor, titleClassName)}>{title}</h2>
						<p className={cn("mt-6 text-lg leading-8 opacity-90", textColor, descriptionClassName)}>{description}</p>

						{/* CTA Buttons */}
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Button size="lg" variant="secondary" className="text-base px-8 py-3" asChild>
								<a href={primaryCTA.href}>{primaryCTA.text}</a>
							</Button>
							{secondaryCTA && (
								<Button size="lg" variant="ghost" className={cn("text-base px-8 py-3", textColor)} asChild>
									<a href={secondaryCTA.href}>{secondaryCTA.text}</a>
								</Button>
							)}
						</div>

						{/* Features */}
						{features && features.length > 0 && (
							<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-75">
								{features.map((feature) => (
									<div key={feature} className="flex items-center">
										<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
										{feature}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
