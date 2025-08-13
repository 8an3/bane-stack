import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";

export function BlogWithFeaturedPost() {
	const featuredPost = {
		title: "We're changing the way we build products",
		excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		date: "Mar 16, 2023",
		readTime: "6 min read",
		category: "Product",
	};

	const posts = [
		{
			title: "Boost your conversion rate",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			date: "Mar 10, 2023",
			readTime: "4 min read",
			category: "Marketing",
		},
		{
			title: "How to use SEO to drive traffic",
			excerpt: "Vivamus pellentesque, felis in aliquam ullamcorper.",
			date: "Feb 12, 2023",
			readTime: "11 min read",
			category: "SEO",
		},
	];

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">Learn how to grow your business with our expert advice.</p>

					{/* Featured Post */}
					<Card className="mt-16 border-0 shadow-none">
						<CardHeader className="flex gap-x-4 text-sm">
							<span className="text-primary font-semibold">{featuredPost.category}</span>
							<span className="text-muted-foreground">&middot</span>
							<div className="flex items-center text-muted-foreground">
								<Calendar className="h-4 w-4 mr-1" />
								{featuredPost.date}
							</div>
							<span className="text-muted-foreground">&middot</span>
							<div className="flex items-center text-muted-foreground">
								<Clock className="h-4 w-4 mr-1" />
								{featuredPost.readTime}
							</div>
						</CardHeader>
						<CardContent className="group relative">
							<h3 className="mt-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 group-hover:text-primary">{featuredPost.title}</h3>
							<p className="mt-5 text-base leading-7 text-muted-foreground">{featuredPost.excerpt}</p>
						</CardContent>
						<CardFooter>
							<Button variant="link" className="p-0">
								Read full story <span aria-hidden="true">&rarr</span>
							</Button>
						</CardFooter>
					</Card>

					{/* Regular Posts */}
					<div className="mt-16 space-y-16 border-t border-gray-200 pt-16">
						{posts.map((post, index) => (
							<Card key={index} className="border-0 shadow-none">
								<CardHeader className="flex gap-x-4 text-sm">
									<span className="text-primary font-semibold">{post.category}</span>
									<span className="text-muted-foreground">&middot</span>
									<div className="flex items-center text-muted-foreground">
										<Calendar className="h-4 w-4 mr-1" />
										{post.date}
									</div>
									<span className="text-muted-foreground">&middot</span>
									<div className="flex items-center text-muted-foreground">
										<Clock className="h-4 w-4 mr-1" />
										{post.readTime}
									</div>
								</CardHeader>
								<CardContent className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">{post.title}</h3>
									<p className="mt-5 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
								</CardContent>
								<CardFooter>
									<Button variant="link" className="p-0">
										Read more <span aria-hidden="true">&rarr</span>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
