import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";



export function TestimonialsGrid() {
  const testimonials = [
    {
      quote: "Our productivity has increased by 200% since implementing this solution.",
      author: "Alex Morgan",
      role: "CEO, DataSystems",
      avatar: "/avatars/alex-morgan.jpg",
      initials: "AM",
      rating: 5
    },
    {
      quote: "The intuitive interface makes onboarding new team members a breeze.",
      author: "Jamie Smith",
      role: "HR Director, PeopleFirst",
      avatar: "/avatars/jamie-smith.jpg",
      initials: "JS",
      rating: 5
    },
    {
      quote: "We've reduced operational costs by 30% in the first quarter.",
      author: "Taylor Williams",
      role: "Finance Lead, MoneyMatters",
      avatar: "/avatars/taylor-williams.jpg",
      initials: "TW",
      rating: 4
    },
    {
      quote: "The analytics dashboard provides insights we never had before.",
      author: "Casey Johnson",
      role: "Data Analyst, InfoTech",
      avatar: "/avatars/casey-johnson.jpg",
      initials: "CJ",
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}