import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield, Play, CheckCircle} from 'lucide-react';


export function HeroCTASection({
	title = "Ready to get started?",
	description = "Join thousands of companies that trust our platform to power their business growth.",
	backgroundImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
	primaryCTA = { text: "Get Started", href: "#" },
	secondaryCTA = { text: "Learn More", href: "#" },
	features = ["14-day free trial", "No credit card required", "Cancel anytime", "24/7 support"],
	showGradients = true,
	className,
	titleClassName,
	descriptionClassName,
}) {
	return (
		<section className={cn("relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", className)}>
			{/* Background Image */}
			{backgroundImage && <img alt="" src={backgroundImage} className="absolute inset-0 -z-10 size-full object-cover object-center" />}

			{/* Gradient Overlays */}
			{showGradients && (
				<div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem]">
					<div
						style={{
							clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
					/>
				</div>
			)}

			<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
				{/* Hero Content */}
				<h1 className={cn("text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6", titleClassName)}>{title}</h1>
				<p className={cn("text-lg text-gray-300 mb-10 max-w-2xl mx-auto", descriptionClassName)}>{description}</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<Button size="lg" className="text-lg px-8 py-4" asChild>
						<a href={primaryCTA.href}>{primaryCTA.text}</a>
					</Button>
					<Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
						<a href={secondaryCTA.href}>{secondaryCTA.text}</a>
					</Button>
				</div>

				{/* Feature List */}
				{features && features.length > 0 && (
					<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
						{features.map((feature, idx) => (
							<div key={feature} className="flex items-center">
								<svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								{feature}
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}