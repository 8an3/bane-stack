import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";




export function TestimonialsSubtleGrid() {
  const testimonials = [
    {
      quote: "This product has completely transformed our workflow. The team collaboration features are incredible.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but after using it for a month, I can't imagine going back to our old tools.",
      author: "Michael Chen",
      role: "CTO, Startup Inc",
      rating: 4
    },
    {
      quote: "The customer support alone is worth the price. The product is just the cherry on top.",
      author: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by innovators
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Hear from people who've transformed their businesses with our product.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50/50">
              <CardContent className="p-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-8">
                  <p className="text-lg leading-relaxed text-gray-900">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
              </CardContent>
              <CardFooter className="border-t border-gray-100 px-8 py-5">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

