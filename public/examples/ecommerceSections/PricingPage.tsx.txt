// app/routes/pricing.tsx
import { Link } from "@remix-run/react";
import { Check, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export function PricingPage() {
	const plans = [
		{
			name: "Free",
			price: "$0",
			description: "For hobby projects or small teams.",
			features: ["1 team member", "2GB storage", "Upto 10 projects", "Basic support"],
			missingFeatures: ["Advanced analytics", "API access", "Priority support"],
			cta: "Get started",
			popular: false,
		},
		{
			name: "Pro",
			price: "$15",
			description: "For growing teams with bigger needs.",
			features: ["5 team members", "10GB storage", "Upto 50 projects", "Advanced analytics", "API access"],
			missingFeatures: ["Priority support"],
			cta: "Get started",
			popular: true,
		},
		{
			name: "Enterprise",
			price: "$30",
			description: "For large companies with complex needs.",
			features: ["Unlimited team members", "Unlimited storage", "Unlimited projects", "Advanced analytics", "API access", "Priority support"],
			missingFeatures: [],
			cta: "Contact sales",
			popular: false,
		},
	];

	return (
		<div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-extrabold text-foreground sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing plans for teams of all sizes</h1>
					<p className="mt-5 max-w-xl mx-auto text-xl text-muted-foreground">Choose an affordable plan that's packed with the best features for engaging your audience.</p>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-5">
					{plans.map((plan) => (
						<Card key={plan.name} className={`relative rounded-2xl shadow-sm ${plan.popular ? "ring-2 ring-primary" : "ring-1 ring-gray-200"}`}>
							{plan.popular && <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-purple-600 px-3 py-2 text-sm font-medium text-white text-center">Most popular</div>}
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
								<p className="mt-4 flex items-baseline text-foreground">
									<span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
									<span className="ml-1 text-xl font-semibold">/month</span>
								</p>
								<p className="mt-4 text-muted-foreground">{plan.description}</p>
							</CardHeader>
							<CardContent className="pt-0">
								<ul className="space-y-4">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-start">
											<Check className="h-5 w-5 text-green-500 flex-shrink-0" />
											<span className="ml-3 text-foreground">{feature}</span>
										</li>
									))}
									{plan.missingFeatures.map((feature) => (
										<li key={feature} className="flex items-start text-muted-foreground">
											<X className="h-5 w-5 flex-shrink-0" />
											<span className="ml-3">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button asChild size="lg" className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-purple-600 hover:from-indigo-600 hover:to-purple-700" : ""}`}>
									<Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="mt-16 bg-background rounded-lg shadow-sm p-8">
					<h2 className="text-2xl font-bold text-foreground">Compare plans</h2>
					<div className="mt-8 overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr>
									<th className="pb-4 text-left text-sm font-medium text-muted-foreground">Feature</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-muted-foreground">Free</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-muted-foreground">Pro</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-muted-foreground">Enterprise</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">Team members</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">1</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">5</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">Storage</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">2GB</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">10GB</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">Projects</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">Up to 10</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">Up to 50</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">Advanced analytics</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<X className="h-5 w-5 mx-auto text-muted-foreground" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">API access</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<X className="h-5 w-5 mx-auto text-muted-foreground" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-foreground">Priority support</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<X className="h-5 w-5 mx-auto text-muted-foreground" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<X className="h-5 w-5 mx-auto text-muted-foreground" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-muted-foreground">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="mt-16 text-center">
					<h2 className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
					<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<h3 className="text-lg font-medium text-foreground">Can I change plans later?</h3>
							<p className="mt-2 text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Your billing will be prorated accordingly.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-foreground">Do you offer discounts for non-profits?</h3>
							<p className="mt-2 text-muted-foreground">Yes, we offer a 50% discount for non-profit organizations. Please contact our sales team for verification.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-foreground">Is there a free trial?</h3>
							<p className="mt-2 text-muted-foreground">All plans come with a 14-day free trial. No credit card required.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-foreground">What payment methods do you accept?</h3>
							<p className="mt-2 text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
