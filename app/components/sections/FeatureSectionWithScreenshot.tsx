import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";



export function FeatureSectionWithScreenshot() {
	const features = [
		{
			icon: Zap,
			title: "Lightning Fast Performance",
			description: "Optimized for speed with sub-second load times and instant interactions across all devices.",
		},
		{
			icon: Shield,
			title: "Enterprise Security",
			description: "Bank-grade encryption and security protocols to keep your data safe and compliant.",
		},
		{
			icon: BarChart3,
			title: "Advanced Analytics",
			description: "Real-time insights and comprehensive reporting to track your success metrics.",
		},
		{
			icon: Users,
			title: "Team Collaboration",
			description: "Seamless collaboration tools that keep your entire team aligned and productive.",
		},
		{
			icon: Smartphone,
			title: "Mobile Optimized",
			description: "Native mobile experience with full functionality on iOS and Android devices.",
		},
		{
			icon: Globe,
			title: "Global Scale",
			description: "Built to scale globally with CDN distribution and multi-region support.",
		},
	];

	return (
		<div className="relative overflow-hidden bg-background py-24 sm:py-32">
			{/* Background decoration */}
	

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					{/* Badge */}
					<div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 mb-8">
						<Star className="w-4 h-4 mr-2" />
						Trusted by 50,000+ companies
					</div>

					{/* Section heading */}
					<h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						Everything you need to
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> scale your business</span>
					</h2>
					<p className="mt-6 text-lg leading-8 text-muted-foreground">Our comprehensive platform provides all the tools and features you need to build, grow, and manage your business efficiently. From analytics to security, we've got you covered.</p>
				</div>

				{/* Main content grid */}
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
						{/* Feature list - Left side */}
						<div className="lg:pr-4">
							<div className="space-y-8">
								{features.map((feature, index) => {
									const IconComponent = feature.icon;
									return (
										<div key={index} className="relative pl-16">
											<div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
												<IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
											</div>
											<div>
												<h3 className="text-lg font-semibold leading-7 text-foreground">{feature.title}</h3>
												<p className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</p>
											</div>
										</div>
									);
								})}
							</div>

							{/* CTA Button */}
							<div className="mt-10">
								<Button size="lg" className="text-base">
									Get started today
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>

							{/* Trust indicators */}
							<div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
								<div className="flex items-center">
									<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
									Free 14-day trial
								</div>
								<div className="flex items-center">
									<Lock className="mr-2 h-4 w-4 text-green-500" />
									No setup fees
								</div>
								<div className="flex items-center">
									<Clock className="mr-2 h-4 w-4 text-green-500" />
									Cancel anytime
								</div>
							</div>
						</div>

						{/* Large bordered screenshot - Right side with offset */}
						<div className="relative lg:col-start-2 lg:row-start-1">
							{/* Offset container */}
							<div className="relative lg:ml-8 xl:ml-16">
								{/* Decorative border/shadow */}
								<div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-75 blur-lg"></div>

								{/* Main screenshot container */}
								<div className="relative rounded-xl border border-border bg-background shadow-2xl">
									{/* Browser chrome */}
									<div className="flex items-center gap-2 border-b border-border px-4 py-3">
										<div className="flex space-x-1.5">
											<div className="h-3 w-3 rounded-full bg-red-400"></div>
											<div className="h-3 w-3 rounded-full bg-yellow-400"></div>
											<div className="h-3 w-3 rounded-full bg-green-400"></div>
										</div>
										<div className="flex-1 mx-4">
											<div className="h-6 rounded bg-background/70 px-3 flex items-center text-sm text-muted-foreground">https://yourapp.com/dashboard</div>
										</div>
									</div>

									{/* App interface mockup */}
									<div className="p-6 bg-gradient-to-br from-gray-50 to-white">
										{/* Header */}
										<div className="flex items-center justify-between mb-6">
											<div className="flex items-center space-x-4">
												<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
													<BarChart3 className="w-6 h-6 text-primary" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-foreground">Dashboard Overview</h3>
													<p className="text-sm text-muted-foreground">Welcome back, Sarah!</p>
												</div>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
													<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												</div>
												<span className="text-sm font-medium text-foreground">Online</span>
											</div>
										</div>

										{/* Stats cards */}
										<div className="grid grid-cols-3 gap-4 mb-6">
											{[
												{ label: "Total Users", value: "24,543", change: "+12%" },
												{ label: "Revenue", value: "$128K", change: "+8%" },
												{ label: "Growth", value: "34.2%", change: "+2.1%" },
											].map((stat, index) => (
												<div key={index} className="bg-background p-4 rounded-lg shadow-sm border border-gray-100">
													<div className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</div>
													<div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
													<div className="text-sm text-green-600 font-medium">{stat.change}</div>
												</div>
											))}
										</div>

										{/* Chart area mockup */}
										<div className="bg-background rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
											<div className="flex items-center justify-between mb-4">
												<h4 className="text-lg font-semibold text-foreground">Analytics Overview</h4>
												<div className="flex space-x-2">
													<div className="w-2 h-2 bg-primary rounded-full"></div>
													<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
													<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
												</div>
											</div>
											{/* Simulated chart */}
											<div className="h-32 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg relative overflow-hidden">
												<svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120">
													<path d="M10,80 Q50,20 100,40 T200,30 T290,50" stroke="#6366f1" strokeWidth="3" fill="none" className="drop-shadow-sm" />
													<path d="M10,90 Q50,60 100,70 T200,50 T290,60" stroke="#8b5cf6" strokeWidth="3" fill="none" className="drop-shadow-sm" />
												</svg>
											</div>
										</div>

										{/* Activity list */}
										<div className="bg-background rounded-lg shadow-sm border border-gray-100 p-4">
											<h4 className="text-sm font-semibold text-foreground mb-3">Recent Activity</h4>
											<div className="space-y-3">
												{["New user registration from California", "Payment received: $2,400", "System backup completed successfully"].map((activity, index) => (
													<div key={index} className="flex items-center space-x-3">
														<div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
														<span className="text-sm text-muted-foreground">{activity}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Floating elements */}
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
								<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-2xl"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}