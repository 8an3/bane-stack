
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";


export function BlogSingleColumn() {
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
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">From the blog</h2>
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
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">{post.title}</h3>
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