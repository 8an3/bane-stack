import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";


export function PricingSection2Cards({
	title = "Choose the right plan for you",
	subtitle = "Pricing",
	description = "Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
	tiers = [],
	className,
	cardClassName,
	titleClassName,
	descriptionClassName,
}) {
	const defaultTiers = [
		{
			name: "Starter",
			id: "tier-starter",
			href: "#",
			priceMonthly: "$29",
			description: "Perfect for small businesses just getting started.",
			features: ["25 products", "Up to 10,000 subscribers", "Basic analytics", "24-hour support response time"],
			featured: false,
			badge: null,
		},
		{
			name: "Professional",
			id: "tier-professional",
			href: "#",
			priceMonthly: "$79",
			description: "Best for growing businesses with advanced needs.",
			features: ["Unlimited products", "Up to 100,000 subscribers", "Advanced analytics", "Priority support", "Marketing automations", "API access"],
			featured: true,
			badge: "Most Popular",
		},
		{
			name: "Enterprise",
			id: "tier-enterprise",
			href: "#",
			priceMonthly: "$199",
			description: "Dedicated support and infrastructure for large organizations.",
			features: ["Unlimited everything", "Custom integrations", "Dedicated support representative", "SLA guarantee", "Custom reporting", "White-label options"],
			featured: false,
			badge: null,
		},
	];

	const pricingTiers = tiers.length > 0 ? tiers : defaultTiers;

	return (
		<section className={cn("py-16 lg:py-24", className)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					{subtitle && <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{subtitle}</p>}
					<h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight mb-4", titleClassName)}>{title}</h2>
					<p className={cn("max-w-2xl mx-auto text-lg text-muted-foreground", descriptionClassName)}>{description}</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{pricingTiers.map((tier, idx) => (
						<Card key={tier.id} className={cn("relative overflow-hidden", tier.featured ? "border-primary shadow-lg scale-105" : "border-border", cardClassName)}>
							{tier.badge && (
								<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
									<Badge className="px-3 py-1 text-xs font-medium">{tier.badge}</Badge>
								</div>
							)}

							<CardHeader className="pb-6">
								<div className="text-center">
									<h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
									<div className="mb-4">
										<span className="text-4xl font-bold">{tier.priceMonthly}</span>
										<span className="text-muted-foreground ml-1">/month</span>
									</div>
									<p className="text-sm text-muted-foreground">{tier.description}</p>
								</div>
							</CardHeader>

							<CardContent className="space-y-6">
								{/* Features List */}
								<ul className="space-y-3">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-center gap-3">
											<Check className="h-4 w-4 text-primary flex-shrink-0" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>

								{/* CTA Button */}
								<Button className="w-full" variant={tier.featured ? "default" : "outline"} asChild>
									<a href={tier.href}>Get started today</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12">
					<p className="text-sm text-muted-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
					<Button variant="ghost" size="sm">
						Compare all features →
					</Button>
				</div>
			</div>
		</section>
	);
}

