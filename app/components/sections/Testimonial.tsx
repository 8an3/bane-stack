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
