import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";

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

export function ThreeTiersAndFeatureComparison() {
	return (
		<div className="py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing plans for teams of all sizes</h2>
					<p className="mt-4 text-lg text-muted-foreground">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
				</div>

				{/* Three Tier Pricing Cards */}
				<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Basic Tier */}
					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle>Basic</CardTitle>
							<p className="mt-4 flex items-baseline gap-x-2">
								<span className="text-4xl font-bold">$29</span>
								<span className="text-muted-foreground">/month</span>
							</p>
						</CardHeader>
						<CardContent className="flex flex-1 flex-col">
							<p className="text-muted-foreground">All the basics for starting a new business</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">1 user</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Up to 1,000 subscribers</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Basic analytics</span>
								</li>
								<li className="flex items-center">
									<X className="h-5 w-5 text-gray-400" />
									<span className="ml-3 line-through text-muted-foreground">48-hour support response time</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className="w-full">
								Get started
							</Button>
						</CardFooter>
					</Card>

					{/* Featured Tier */}
					<Card className="flex flex-col ring-2 ring-primary">
						<div className="relative">
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
								<div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
									<Zap className="h-3 w-3" />
									<span>Most popular</span>
								</div>
							</div>
						</div>
						<CardHeader>
							<CardTitle>Pro</CardTitle>
							<p className="mt-4 flex items-baseline gap-x-2">
								<span className="text-4xl font-bold">$79</span>
								<span className="text-muted-foreground">/month</span>
							</p>
						</CardHeader>
						<CardContent className="flex flex-1 flex-col">
							<p className="text-muted-foreground">Everything you need for a growing business</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">5 users</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Up to 10,000 subscribers</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Advanced analytics</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">24-hour support response time</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Get started</Button>
						</CardFooter>
					</Card>

					{/* Enterprise Tier */}
					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle>Enterprise</CardTitle>
							<p className="mt-4 flex items-baseline gap-x-2">
								<span className="text-4xl font-bold">$249</span>
								<span className="text-muted-foreground">/month</span>
							</p>
						</CardHeader>
						<CardContent className="flex flex-1 flex-col">
							<p className="text-muted-foreground">Advanced features for scaling your business</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Unlimited users</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Unlimited subscribers</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">Advanced analytics</span>
								</li>
								<li className="flex items-center">
									<Check className="h-5 w-5 text-green-500" />
									<span className="ml-3">1-hour, dedicated support response time</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className="w-full">
								Get started
							</Button>
						</CardFooter>
					</Card>
				</div>

				{/* Single Price with Details */}
				<div className="mt-24">
					<Card className="mx-auto max-w-2xl">
						<CardHeader className="text-center">
							<CardTitle>Pay once, use forever</CardTitle>
							<p className="mt-4 text-muted-foreground">Get lifetime access to all current and future premium features.</p>
						</CardHeader>
						<CardContent className="mt-8">
							<div className="flex items-center justify-center gap-x-4">
								<span className="text-4xl font-bold">$599</span>
								<span className="text-sm font-medium text-muted-foreground">
									USD
									<br />
									<span className="text-xs">One-time payment</span>
								</span>
							</div>
							<Button className="mt-8 w-full">Get lifetime access</Button>
						</CardContent>
					</Card>
				</div>

				{/* Feature Comparison Table */}
				<div className="mt-24">
					<h3 className="text-center text-2xl font-bold">Compare plans</h3>
					<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-300">
							<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
										Feature
									</th>
									<th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
										Basic
									</th>
									<th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
										Pro
									</th>
									<th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
										Enterprise
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{[
									{ feature: "Users", basic: "1", pro: "5", enterprise: "Unlimited" },
									{ feature: "Subscribers", basic: "Up to 1,000", pro: "Up to 10,000", enterprise: "Unlimited" },
									{ feature: "Analytics", basic: "Basic", pro: "Advanced", enterprise: "Advanced" },
									{ feature: "Support", basic: "48-hour", pro: "24-hour", enterprise: "1-hour" },
									{ feature: "API Access", basic: "Read-only", pro: "Full access", enterprise: "Full access" },
									{ feature: "Custom Domain", basic: false, pro: true, enterprise: true },
								].map((row, rowIdx) => (
									<tr key={row.feature}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{row.feature}</td>
										<td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
											{typeof row.basic === "boolean" ? row.basic ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-gray-400" /> : row.basic}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
											{typeof row.pro === "boolean" ? row.pro ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-gray-400" /> : row.pro}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
											{typeof row.enterprise === "boolean" ? row.enterprise ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-gray-400" /> : row.enterprise}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SinglePriceDetails() {
	return (
		<section className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-900">
			<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-4">Basic Plan</h2>
			<div className="flex items-baseline mb-4">
				<span className="text-3xl font-bold text-slate-900 dark:text-slate-200">$29</span>
				<span className="ml-1 text-sm text-slate-500 dark:text-slate-400">/mo</span>
			</div>
			<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Perfect for individuals just getting started.</p>
			<ul className="space-y-3 mb-6">
				{["Feature One", "Feature Two", "Feature Three"].map((feature) => (
					<li key={feature} className="flex items-center text-slate-600 dark:text-slate-400">
						<Check className="w-4 h-4 text-emerald-500 mr-2" />
						{feature}
					</li>
				))}
			</ul>
			<Button variant="primary" className="w-full">
				Get Started
			</Button>
		</section>
	);
}

const plans = [
	{
		name: "Basic",
		price: "$29/mo",
		features: { A: true, B: false, C: true },
	},
	{
		name: "Pro",
		price: "$59/mo",
		features: { A: true, B: true, C: true },
	},
];

const features = ["Feature A", "Feature B", "Feature C"];

export function PricingComparison() {
	return (
		<div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:grid-cols-4">
			<div className="font-medium text-slate-900 dark:text-slate-200"></div>
			{plans.map((plan) => (
				<div key={plan.name} className="text-center">
					<div className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-200">{plan.name}</div>
					<div className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-200">{plan.price}</div>
				</div>
			))}
			{features.map((feat) => (
				<React.Fragment key={feat}>
					<div className="py-2 font-medium text-slate-700 dark:text-slate-400">{feat}</div>
					{plans.map((plan) => (
						<div key={plan.name + feat} className="py-2 flex justify-center">
							{plan.features[feat.charAt(feat.length - 1) as keyof typeof plan.features] ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-red-500" />}
						</div>
					))}
				</React.Fragment>
			))}
		</div>
	);
}
