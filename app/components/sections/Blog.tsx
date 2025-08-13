import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";

const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: { title: "Marketing", href: "#" },
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 2,
		title: "How to use search engine optimization to drive sales",
		href: "#",
		description: "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
		date: "Mar 10, 2020",
		datetime: "2020-03-10",
		category: { title: "Sales", href: "#" },
		author: {
			name: "Lindsay Walton",
			role: "Front-end Developer",
			href: "#",
			imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 3,
		title: "Improve your customer experience",
		href: "#",
		description: "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		category: { title: "Business", href: "#" },
		author: {
			name: "Tom Cook",
			role: "Director of Product",
			href: "#",
			imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
];

export function BlogSection({ title = "From the blog", desc = "Learn how to grow your business with our expert advice." }) {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{title}</h2>
					<p className="mt-2 text-lg/8 text-gray-600">{desc}</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
							<div className="flex items-center gap-x-4 text-xs">
								<time dateTime={post.datetime} className="text-gray-500">
									{post.date}
								</time>
								<a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
									{post.category.title}
								</a>
							</div>
							<div className="group relative grow">
								<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
							</div>
							<div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
								<img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
								<div className="text-sm/6">
									<p className="font-semibold text-gray-900">
										<a href={post.author.href}>
											<span className="absolute inset-0" />
											{post.author.name}
										</a>
									</p>
									<p className="text-gray-600">{post.author.role}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

export function SingleColumnBlog() {
	const posts = [
		{
			title: "Boost your conversion rate",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
			date: "Mar 16, 2023",
			readTime: "6 min read",
			category: "Marketing",
		},
		{
			title: "How to use search engine optimization to drive traffic to your site",
			excerpt: "Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat.",
			date: "Mar 10, 2023",
			readTime: "4 min read",
			category: "SEO",
		},
		{
			title: "Improve your customer experience",
			excerpt: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in.",
			date: "Feb 12, 2023",
			readTime: "11 min read",
			category: "Customer Success",
		},
	];

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">Learn how to grow your business with our expert advice.</p>

					<div className="mt-16 space-y-20">
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

export function ThreeColumnBlogWithImages() {
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
