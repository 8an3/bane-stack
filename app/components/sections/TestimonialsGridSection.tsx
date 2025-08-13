import { cn } from "~/components/ui/utils";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function TestimonialsGridSection({
	title = "What our customers say",
	subtitle = "Testimonials",
	testimonials = [
		{
			id: 1,
			quote: "This platform has revolutionized our workflow. Highly recommended!",
			author: {
				name: "Sarah Johnson",
				title: "CTO at TechCorp",
				image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
		},
		{
			id: 2,
			quote: "Outstanding support and incredible features. Our team loves it.",
			author: {
				name: "Mike Chen",
				title: "Product Manager at StartupXYZ",
				image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
		},
		{
			id: 3,
			quote: "The best investment we've made for our business operations.",
			author: {
				name: "Emily Davis",
				title: "Founder at GrowthCo",
				image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
		},
	],
	className,
	titleClassName,
}) {
	return (
		<section className={cn("py-16 lg:py-24 bg-muted/30", className)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					{subtitle && <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{subtitle}</p>}
					<h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight", titleClassName)}>{title}</h2>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.id} className="h-full">
							<CardContent className="p-6 flex flex-col h-full">
								<blockquote className="text-lg font-medium flex-grow mb-6">"{testimonial.quote}"</blockquote>
								<div className="flex items-center space-x-3">
									{testimonial.author.image && <img src={testimonial.author.image} alt={`${testimonial.author.name} profile`} className="w-10 h-10 rounded-full" />}
									<div>
										<div className="font-semibold text-sm">{testimonial.author.name}</div>
										<div className="text-sm text-muted-foreground">{testimonial.author.title}</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
