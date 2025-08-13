import { cn } from "~/components/ui/utils"
import { Button } from "~/components/ui/button"

export   function CTASection({
  title = "Boost your productivity. Start using our app today.",
  description = "Transform your workflow with our powerful tools designed to help you achieve more in less time.",
  primaryCTA = { text: "Get started", href: "#" },
  secondaryCTA = { text: "Learn more", href: "#" },
  image = {
    src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
    alt: "App screenshot",
    width: 1824,
    height: 1080
  },
  showGradient = false,
  layout = "side-by-side", // "side-by-side" or "centered"
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  imageClassName
}) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className={cn(
          "relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-2 bg-background4",
          layout === "side-by-side" ? "lg:flex lg:gap-x-20 lg:pt-0" : "text-center lg:pt-16",
          containerClassName
        )}>
          
          {/* Gradient Background */}
          {showGradient && (
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className={cn(
                "absolute -z-10 size-64 mask-[radial-gradient(closest-side,white,transparent)]",
                layout === "side-by-side" 
                  ? "top-1/2 left-1/2 -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                  : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              )}
            >
              <circle r={512} cx={512} cy={512} fill="url(#gradient-cta)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient-cta">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          )}

          {/* Content */}
          <div className={cn(
            "mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32",
            layout === "side-by-side" ? "text-center lg:text-left" : "text-center"
          )}>
            <h2 className={cn(
              "text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl",
              titleClassName
            )}>
              {title}
            </h2>
            <p className={cn(
              "mt-6 text-lg/8 text-pretty text-gray-300",
              descriptionClassName
            )}>
              {description}
            </p>
            <div className={cn(
              "mt-10 flex items-center gap-x-6",
              layout === "side-by-side" ? "justify-center lg:justify-start" : "justify-center"
            )}>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <a href={primaryCTA.href}>
                  {primaryCTA.text}
                </a>
              </Button>
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href} 
                  className="text-sm/6 font-semibold text-white hover:text-gray-100 transition-colors"
                >
                  {secondaryCTA.text}
                  <span aria-hidden="true" className="ml-1">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          {image && layout === "side-by-side" && (
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
                className={cn(
                  "absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10",
                  imageClassName
                )}
              />
            </div>
          )}

          {/* Centered Image Layout */}
          {image && layout === "centered" && (
            <div className="mt-16 lg:mt-20">
              <img
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
                className={cn(
                  "mx-auto max-w-2xl rounded-lg bg-white/5 ring-1 ring-white/10 shadow-2xl",
                  imageClassName
                )}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

