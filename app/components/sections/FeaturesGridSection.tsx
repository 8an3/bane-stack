import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";



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