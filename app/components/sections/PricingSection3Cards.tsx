import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";


export function PricingSection3Cards({
	title = "Choose the Perfect Plan",
	subtitle = "Pricing",
	description = "Start free and scale as you grow. All plans include our core features with advanced options for growing businesses.",
	tiers = [
		{
			name: "Starter",
			id: "tier-starter",
			href: "#",
			priceMonthly: "$0",
			description: "Perfect for individuals and small projects just getting started.",
			features: ["5 projects", "Basic analytics", "Community support", "1GB storage", "Standard templates"],
			featured: false,
			badge: "Free Forever",
			cta: "Get Started Free",
		},
		{
			name: "Professional",
			id: "tier-professional",
			href: "#",
			priceMonthly: "$29",
			description: "Best for growing businesses and teams who need advanced features.",
			features: ["Unlimited projects", "Advanced analytics", "Priority support", "100GB storage", "Custom templates", "Team collaboration", "API access", "Integrations"],
			featured: true,
			badge: "Most Popular",
			cta: "Start Free Trial",
		},
		{
			name: "Enterprise",
			id: "tier-enterprise",
			href: "#",
			priceMonthly: "$99",
			description: "For large organizations that need maximum control and support.",
			features: ["Everything in Professional", "Unlimited storage", "Dedicated support", "Custom integrations", "SLA guarantee", "Advanced security", "White-label options", "Custom training"],
			featured: false,
			badge: null,
			cta: "Contact Sales",
		},
	],
	className,
	cardClassName,
	titleClassName,
	descriptionClassName,
}) {
	return (
		<section className={cn("py-16 lg:py-24", className)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					{subtitle && <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{subtitle}</p>}
					<h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight mb-4", titleClassName)}>{title}</h2>
					<p className={cn("max-w-3xl mx-auto text-lg text-muted-foreground", descriptionClassName)}>{description}</p>
				</div>

				{/* Three Pricing Cards */}
				<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{tiers.map((tier, idx) => (
						<Card
							key={tier.id}
							className={cn(
								"relative overflow-hidden transition-all duration-200",
								tier.featured ? "border-primary shadow-lg lg:scale-105 bg-card" : "border-border hover:border-primary/50",
								idx === 0 ? "lg:mt-8" : "",
								idx === 2 ? "lg:mt-8" : "",
								cardClassName
							)}
						>
							{tier.badge && (
								<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
									<Badge className={cn("px-3 py-1 text-xs font-medium", tier.featured ? "bg-primary" : "bg-secondary")}>
										{tier.featured && <Zap className="h-3 w-3 mr-1" />}
										{tier.badge}
									</Badge>
								</div>
							)}

							<CardHeader className="pb-6">
								<div className="text-center">
									<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
									<div className="mb-4">
										<span className="text-4xl font-bold">{tier.priceMonthly}</span>
										{tier.priceMonthly !== "$0" && <span className="text-muted-foreground ml-1">/month</span>}
									</div>
									<p className="text-sm text-muted-foreground min-h-[2.5rem] flex items-center justify-center">{tier.description}</p>
								</div>
							</CardHeader>

							<CardContent className="space-y-6">
								{/* Features List */}
								<ul className="space-y-3 min-h-[240px]">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>

								{/* CTA Button */}
								<Button className="w-full" variant={tier.featured ? "default" : tier.priceMonthly === "$0" ? "outline" : "outline"} asChild>
									<a href={tier.href}>{tier.cta}</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Bottom Section */}
				<div className="text-center mt-16">
					<p className="text-sm text-muted-foreground mb-6">All paid plans include a 14-day free trial. Cancel anytime, no questions asked.</p>
					<div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-green-500" />
							<span>No setup fees</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-green-500" />
							<span>Cancel anytime</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-green-500" />
							<span>24/7 support</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
