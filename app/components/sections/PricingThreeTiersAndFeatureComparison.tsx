import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";




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

