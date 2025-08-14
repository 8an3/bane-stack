import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, Star, X, Zap } from "lucide-react";

export function PricingSection1Card({
	title = "Simple, Transparent Pricing",
	subtitle = "One Plan",
	description = "Everything you need to grow your business, all in one affordable package.",
	tier = {
		name: "Professional",
		id: "tier-professional",
		href: "#",
		priceMonthly: "$49",
		priceYearly: "$490",
		description: "Perfect for growing businesses with all essential features included.",
		features: ["Unlimited products", "Advanced analytics", "Priority support", "API access", "Custom integrations", "Marketing automations", "Multi-user access", "99.9% uptime SLA"],
		badge: "Best Value",
		highlight: "Save $98 with yearly billing",
	},
	className,
	cardClassName,
	titleClassName,
	descriptionClassName,
}) {
	return (
		<section className={cn("py-16 lg:py-24", className)}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					{subtitle && <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{subtitle}</p>}
					<h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight mb-4", titleClassName)}>{title}</h2>
					<p className={cn("max-w-2xl mx-auto text-lg text-muted-foreground", descriptionClassName)}>{description}</p>
				</div>

				{/* Single Pricing Card */}
				<div className="max-w-lg mx-auto">
					<Card className={cn("relative overflow-hidden border-primary shadow-xl", cardClassName)}>
						{tier.badge && (
							<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<Badge className="px-4 py-1.5 text-sm font-medium bg-primary">
									<Star className="h-3 w-3 mr-1" />
									{tier.badge}
								</Badge>
							</div>
						)}

						<CardHeader className="pb-6 pt-8">
							<div className="text-center">
								<h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
								<div className="mb-2">
									<span className="text-5xl font-bold">{tier.priceMonthly}</span>
									<span className="text-muted-foreground ml-2">/month</span>
								</div>
								{tier.highlight && <p className="text-sm text-primary font-medium mb-4">{tier.highlight}</p>}
								<p className="text-muted-foreground">{tier.description}</p>
							</div>
						</CardHeader>

						<CardContent className="space-y-6">
							{/* Features List */}
							<ul className="space-y-4">
								{tier.features.map((feature, idx) => (
									<li key={feature} className="flex items-center gap-3">
										<div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
											<Check className="h-3 w-3 text-primary" />
										</div>
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>

							{/* CTA Buttons */}
							<div className="space-y-3 pt-4">
								<Button className="w-full text-base py-6" size="lg" asChild>
									<a href={tier.href}>Start Free Trial</a>
								</Button>
								<Button variant="ghost" size="sm" className="w-full">
									Schedule a Demo
								</Button>
							</div>

							<p className="text-xs text-center text-muted-foreground pt-2">14-day free trial • No credit card required</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

