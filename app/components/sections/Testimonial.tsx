import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";


export function TestimonialSection({
  testimonial = {
    quote: "This platform has completely transformed how we work. The ease of use and powerful features have made our team more productive than ever before.",
    author: {
      name: "Judith Black",
      title: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  logo = {
    src: "https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg",
    alt: "Company logo"
  },
  showBackground = true,
  theme = "light", // "light" or "dark"
  className,
  titleClassName,
  quoteClassName,
  authorClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      {/* Background Elements */}
      {showBackground && !isDark && (
        <>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-100),transparent)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl ring-1 shadow-primary/10 ring-border sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </>
      )}
      
      {showBackground && isDark && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-500),transparent)] opacity-10" />
      )}

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Company Logo */}
        {logo && (
          <img
            alt={logo.alt}
            src={logo.src}
            className="mx-auto h-12"
          />
        )}
        
        <figure className="mt-10">
          {/* Quote */}
          <blockquote className={cn(
            "text-center text-xl/8 font-semibold sm:text-2xl/9",
            isDark ? "text-white" : "text-foreground",
            quoteClassName
          )}>
            <p>"{testimonial.quote}"</p>
          </blockquote>
          
          {/* Author */}
          <figcaption className="mt-10">
            {testimonial.author.image && (
              <img
                alt={`${testimonial.author.name} profile`}
                src={testimonial.author.image}
                className="mx-auto size-10 rounded-full"
              />
            )}
            <div className={cn(
              "mt-4 flex items-center justify-center space-x-3 text-base",
              authorClassName
            )}>
              <div className={cn(
                "font-semibold",
                isDark ? "text-white" : "text-foreground"
              )}>
                {testimonial.author.name}
              </div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className={cn(
                "fill-current",
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className={cn(
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                {testimonial.author.title}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

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
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 2,
      quote: "Outstanding support and incredible features. Our team loves it.",
      author: {
        name: "Mike Chen",
        title: "Product Manager at StartupXYZ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 3,
      quote: "The best investment we've made for our business operations.",
      author: {
        name: "Emily Davis",
        title: "Founder at GrowthCo",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  className,
  titleClassName
}) {
  return (
    <section className={cn("py-16 lg:py-24 bg-muted/30", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight", titleClassName)}>
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <blockquote className="text-lg font-medium flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  {testimonial.author.image && (
                    <img
                      src={testimonial.author.image}
                      alt={`${testimonial.author.name} profile`}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
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
  )
}

export function SubtleGridTestimonials() {
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

export function GridTestimonials() {
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