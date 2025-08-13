import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";

export const FeatureSection = ({ title, items, className = "" }) => (
	<div className={`mb-8 ${className}`}>
		<h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
		<ul className="text-muted-foreground space-y-2">
			{items.map((item, index) => (
				<li key={index} className="flex items-start">
					<span className="text-green-500 mr-2 mt-1">✓</span>
					<span>{item}</span>
				</li>
			))}
		</ul>
	</div>
);

export function FeatureSectionDemo() {
	return (
		<FeatureSection
			title="Files"
			items={[
				"Quick access to your most-used files.",
				"Add files to custom folders and subfolders.",
				"Edit display labels for files.",
				"Remove files from the navigation pane.",
				"Copy file paths with a single click.",
				"Reveal files in your system’s file explorer.",
				"Add multiple files to the quick access pane at once.",
			]}
		/>
	);
}

export function FeaturesSection2({
	subtitle = "Deploy faster",
	title = "A better workflow",
	description = "Streamline your development process with our powerful tools designed to help teams ship faster and more reliably.",
	features = [
		{
			name: "Push to deploy.",
			description: "Deploy your applications instantly with our streamlined CI/CD pipeline. No complex configurations required.",
			icon: CloudUpload,
		},
		{
			name: "SSL certificates.",
			description: "Automatic SSL certificate provisioning and renewal keeps your applications secure without manual intervention.",
			icon: Lock,
		},
		{
			name: "Database backups.",
			description: "Automated daily backups with point-in-time recovery ensure your data is always protected and recoverable.",
			icon: Server,
		},
	],
	image = {
		src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
		alt: "Product screenshot",
		width: 2432,
		height: 1442,
	},
	layout = "image-right", // "image-right", "image-left", "no-image"
	theme = "dark", // "dark" or "light"
	className,
	containerClassName,
	titleClassName,
	descriptionClassName,
	featuresClassName,
	imageClassName,
}) {
	const isDark = theme === "dark";

	return (
		<section className={cn("overflow-hidden py-24 sm:py-32", isDark ? "bg-gray-900" : "bg-background", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className={cn("mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none", layout !== "no-image" ? "lg:grid-cols-2" : "lg:grid-cols-1", containerClassName)}>
					{/* Content */}
					<div className={cn(layout === "image-left" ? "lg:order-2 lg:pl-8" : "lg:pr-8", layout === "no-image" ? "max-w-4xl mx-auto text-center" : "", "lg:pt-4")}>
						<div className={cn(layout !== "no-image" ? "lg:max-w-lg" : "max-w-3xl mx-auto")}>
							{subtitle && <h2 className={cn("text-base/7 font-semibold", isDark ? "text-primary" : "text-primary")}>{subtitle}</h2>}
							<p className={cn("mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl", isDark ? "text-white" : "text-foreground", titleClassName)}>{title}</p>
							<p className={cn("mt-6 text-lg/8", isDark ? "text-gray-300" : "text-muted-foreground", descriptionClassName)}>{description}</p>

							{/* Features List */}
							<dl className={cn("mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none", featuresClassName)}>
								{features.map((feature) => {
									const IconComponent = feature.icon;
									return (
										<div key={feature.name} className="relative pl-9">
											<dt className={cn("inline font-semibold", isDark ? "text-white" : "text-foreground")}>
												<IconComponent aria-hidden="true" className={cn("absolute top-1 left-1 size-5", isDark ? "text-primary" : "text-primary")} />
												{feature.name}
											</dt>{" "}
											<dd className={cn("inline", isDark ? "text-gray-400" : "text-muted-foreground")}>{feature.description}</dd>
										</div>
									);
								})}
							</dl>
						</div>
					</div>

					{/* Image */}
					{layout !== "no-image" && image && (
						<div className={cn(layout === "image-left" ? "lg:order-1" : "", "flex items-center")}>
							<img
								alt={image.alt}
								src={image.src}
								width={image.width}
								height={image.height}
								className={cn("w-full max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem]", isDark ? "ring-white/10" : "ring-gray-200", layout === "image-left" ? "md:-mr-4 lg:-mr-0" : "md:-ml-4 lg:-ml-0", imageClassName)}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export function FeaturesGridSection({
	subtitle = "Everything you need",
	title = "Powerful features for modern teams",
	description = "Our comprehensive platform provides all the tools your team needs to build, deploy, and scale applications efficiently.",
	features = [
		{
			name: "Lightning Fast",
			description: "Deploy applications in seconds with our optimized infrastructure and global CDN.",
			icon: Zap,
		},
		{
			name: "Enterprise Security",
			description: "Bank-level security with end-to-end encryption and compliance certifications.",
			icon: Shield,
		},
		{
			name: "Advanced Analytics",
			description: "Deep insights into performance, user behavior, and business metrics.",
			icon: BarChart3,
		},
		{
			name: "Auto Scaling",
			description: "Automatically scale resources based on demand without manual intervention.",
			icon: Server,
		},
		{
			name: "One-Click Deploy",
			description: "Deploy from Git with zero configuration. We handle the complexity for you.",
			icon: CloudUpload,
		},
		{
			name: "SSL & Security",
			description: "Automatic SSL certificates and security headers protect your applications.",
			icon: Lock,
		},
	],
	columns = 3, // 2, 3, or 4
	theme = "light",
	className,
	titleClassName,
	descriptionClassName,
	featureClassName,
}) {
	const isDark = theme === "dark";

	return (
		<section className={cn("py-24 sm:py-32", isDark ? "bg-gray-900" : "bg-background", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					{subtitle && <h2 className={cn("text-base/7 font-semibold", isDark ? "text-primary" : "text-primary")}>{subtitle}</h2>}
					<p className={cn("mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl", isDark ? "text-white" : "text-foreground", titleClassName)}>{title}</p>
					<p className={cn("mt-6 text-lg/8", isDark ? "text-gray-300" : "text-muted-foreground", descriptionClassName)}>{description}</p>
				</div>

				{/* Features Grid */}
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className={cn("grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none", columns === 2 ? "lg:grid-cols-2" : "", columns === 3 ? "lg:grid-cols-3" : "", columns === 4 ? "lg:grid-cols-4" : "")}>
						{features.map((feature) => {
							const IconComponent = feature.icon;
							return (
								<div key={feature.name} className={cn("flex flex-col", featureClassName)}>
									<dt className={cn("flex items-center gap-x-3 text-base/7 font-semibold", isDark ? "text-white" : "text-foreground")}>
										<IconComponent aria-hidden="true" className={cn("size-5 flex-none", isDark ? "text-primary" : "text-primary")} />
										{feature.name}
									</dt>
									<dd className={cn("mt-4 flex flex-auto flex-col text-base/7", isDark ? "text-gray-400" : "text-muted-foreground")}>
										<p className="flex-auto">{feature.description}</p>
									</dd>
								</div>
							);
						})}
					</dl>
				</div>
			</div>
		</section>
	);
}

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
		<div className="relative overflow-hidden bg-white py-24 sm:py-32">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
			<div className="absolute left-1/2 top-0 ml-3 h-[25rem] w-[50rem] -translate-x-1/2 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:ml-0 lg:ml-20 xl:ml-32">
				<svg className="absolute inset-0 h-full w-full" aria-hidden="true">
					<defs>
						<pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
							<path d="M100 200V.5M.5 .5H200" fill="none" strokeWidth="1" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" strokeWidth="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
				</svg>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					{/* Badge */}
					<div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 mb-8">
						<Star className="w-4 h-4 mr-2" />
						Trusted by 50,000+ companies
					</div>

					{/* Section heading */}
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Everything you need to
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> scale your business</span>
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">Our comprehensive platform provides all the tools and features you need to build, grow, and manage your business efficiently. From analytics to security, we've got you covered.</p>
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
												<h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.title}</h3>
												<p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
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
							<div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
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
								<div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-lg"></div>

								{/* Main screenshot container */}
								<div className="relative rounded-xl border border-gray-200 bg-white shadow-2xl">
									{/* Browser chrome */}
									<div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
										<div className="flex space-x-1.5">
											<div className="h-3 w-3 rounded-full bg-red-400"></div>
											<div className="h-3 w-3 rounded-full bg-yellow-400"></div>
											<div className="h-3 w-3 rounded-full bg-green-400"></div>
										</div>
										<div className="flex-1 mx-4">
											<div className="h-6 rounded bg-gray-100 px-3 flex items-center text-sm text-gray-500">https://yourapp.com/dashboard</div>
										</div>
									</div>

									{/* App interface mockup */}
									<div className="p-6 bg-gradient-to-br from-gray-50 to-white">
										{/* Header */}
										<div className="flex items-center justify-between mb-6">
											<div className="flex items-center space-x-4">
												<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
													<BarChart3 className="w-6 h-6 text-indigo-600" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
													<p className="text-sm text-gray-500">Welcome back, Sarah!</p>
												</div>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
													<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												</div>
												<span className="text-sm font-medium text-gray-700">Online</span>
											</div>
										</div>

										{/* Stats cards */}
										<div className="grid grid-cols-3 gap-4 mb-6">
											{[
												{ label: "Total Users", value: "24,543", change: "+12%" },
												{ label: "Revenue", value: "$128K", change: "+8%" },
												{ label: "Growth", value: "34.2%", change: "+2.1%" },
											].map((stat, index) => (
												<div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
													<div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
													<div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
													<div className="text-sm text-green-600 font-medium">{stat.change}</div>
												</div>
											))}
										</div>

										{/* Chart area mockup */}
										<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
											<div className="flex items-center justify-between mb-4">
												<h4 className="text-lg font-semibold text-gray-900">Analytics Overview</h4>
												<div className="flex space-x-2">
													<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
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
										<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
											<h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
											<div className="space-y-3">
												{["New user registration from California", "Payment received: $2,400", "System backup completed successfully"].map((activity, index) => (
													<div key={index} className="flex items-center space-x-3">
														<div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
														<span className="text-sm text-gray-600">{activity}</span>
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


export  function OffsetFeatureSection() {
  const features = [
    {
      icon: Shield,
      name: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to keep your data safe and secure."
    },
    {
      icon: Zap,
      name: "Lightning Fast",
      description: "Optimized for performance with sub-second response times across all features."
    },
    {
      icon: Users,
      name: "Team Collaboration",
      description: "Real-time collaboration tools that make working together seamless and productive."
    },
    {
      icon: Globe,
      name: "Global Scale",
      description: "Deploy anywhere in the world with our global infrastructure and CDN network."
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to ship your next project
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We've built the tools and infrastructure you need to build, deploy, and scale your applications with confidence. From development to production, we've got you covered.
              </p>
              
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 3"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 4"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">Trusted by 2,000+ developers</p>
                  <p className="text-gray-600">from companies around the world</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
                Built for modern teams
              </h3>
              
              <dl className="space-y-8">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.name} className="flex gap-x-3">
                      <dt className="flex-none">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </dt>
                      <dd>
                        <div className="text-base font-semibold leading-7 text-gray-900">
                          {feature.name}
                        </div>
                        <div className="mt-1 text-base leading-7 text-gray-600">
                          {feature.description}
                        </div>
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-x-3">
                  <div className="flex-none">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-gray-600">
                    <span className="font-semibold text-gray-900">99.9% uptime guarantee</span> with 24/7 monitoring and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}