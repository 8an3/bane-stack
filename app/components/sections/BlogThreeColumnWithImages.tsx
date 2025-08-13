
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";


export function BlogThreeColumnWithImages() {
	const posts = [
		{
			title: "Boost your conversion rate",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
			date: "Mar 16, 2023",
			readTime: "6 min read",
			category: "Marketing",
			image: "/images/blog-1.jpg",
		},
		{
			title: "How to use search engine optimization",
			excerpt: "Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat.",
			date: "Mar 10, 2023",
			readTime: "4 min read",
			category: "SEO",
			image: "/images/blog-2.jpg",
		},
		{
			title: "Improve your customer experience",
			excerpt: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in.",
			date: "Feb 12, 2023",
			readTime: "11 min read",
			category: "Customer Success",
			image: "/images/blog-3.jpg",
		},
	];

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">Learn how to grow your business with our expert advice.</p>
				</div>

				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post, index) => (
						<Card key={index} className="flex flex-col overflow-hidden">
							<div className="h-48 bg-gray-50">
								<img src={post.image} alt="" className="h-full w-full object-cover" />
							</div>
							<CardHeader className="flex gap-x-4 text-sm mt-4">
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
							<CardContent className="group relative flex-1">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">{post.title}</h3>
								<p className="mt-5 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
							</CardContent>
							<CardFooter className="mt-4">
								<Button variant="link" className="p-0">
									Read more <span aria-hidden="true">&rarr</span>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
