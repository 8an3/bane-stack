import { cn } from "~/components/ui/utils"
import { Badge } from "~/components/ui/badge"
import { LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export function TeamMembersSection({
  title = "Meet the Team",
  subtitle = "Our People", 
  description = "Get to know the talented individuals behind our success.",
  people = [
    {
      id: 1,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      bio: 'Former VP at TechCorp with 15+ years experience building scalable platforms.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'leslie@company.com'
      }
    },
    {
      id: 2,
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      bio: 'Full-stack engineer passionate about developer experience and system architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ],
  layout = "cards", // "cards", "list", "grid"
  columns = 3, // 2, 3, or 4 (for grid/cards layout)
  showBio = true,
  showSocial = true,
  theme = "light",
  className,
  titleClassName,
  descriptionClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className={cn(
              "text-sm font-medium mb-3 uppercase tracking-wider",
              isDark ? "text-primary" : "text-primary"
            )}>
              {subtitle}
            </p>
          )}
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            isDark ? "text-white" : "text-foreground",
            titleClassName
          )}>
            {title}
          </h2>
          {description && (
            <p className={cn(
              "mt-4 text-lg max-w-2xl mx-auto",
              isDark ? "text-gray-300" : "text-muted-foreground",
              descriptionClassName
            )}>
              {description}
            </p>
          )}
        </div>

        {/* Team Cards Layout */}
        {layout === "cards" && (
          <div className={cn(
            "grid gap-8",
            columns === 2 ? "md:grid-cols-2" : "",
            columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "",
            columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : ""
          )}>
            {people.map((person) => (
              <Card key={person.id || person.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={person.imageUrl}
                    alt={`${person.name} profile`}
                    className="mx-auto size-24 rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {person.role}
                  </Badge>
                  {showBio && person.bio && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {person.bio}
                    </p>
                  )}
                  {showSocial && person.social && (
                    <div className="flex justify-center space-x-3">
                      {person.social.linkedin && (
                        <a href={person.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      )}
                      {person.social.twitter && (
                        <a href={person.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                          <TwitterIcon className="h-4 w-4" />
                        </a>
                      )}
                      {person.social.email && (
                        <a href={`mailto:${person.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          <MailIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* List Layout */}
        {layout === "list" && (
          <div className="max-w-4xl mx-auto">
            <ul role="list" className="divide-y divide-border">
              {people.map((person) => (
                <li key={person.id || person.name} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-x-6">
                    <img
                      alt={`${person.name} profile`}
                      src={person.imageUrl}
                      className="size-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-x-3 mb-2">
                        <h3 className={cn(
                          "text-lg font-semibold",
                          isDark ? "text-white" : "text-foreground"
                        )}>
                          {person.name}
                        </h3>
                        <Badge variant="outline">{person.role}</Badge>
                      </div>
                      {showBio && person.bio && (
                        <p className={cn(
                          "text-sm leading-relaxed",
                          isDark ? "text-gray-300" : "text-muted-foreground"
                        )}>
                          {person.bio}
                        </p>
                      )}
                      {showSocial && person.social && (
                        <div className="flex space-x-3 mt-3">
                          {person.social.linkedin && (
                            <a href={person.social.linkedin} className="text-muted-foreground hover:text-primary">
                              <LinkedinIcon className="h-4 w-4" />
                            </a>
                          )}
                          {person.social.twitter && (
                            <a href={person.social.twitter} className="text-muted-foreground hover:text-primary">
                              <TwitterIcon className="h-4 w-4" />
                            </a>
                          )}
                          {person.social.email && (
                            <a href={`mailto:${person.social.email}`} className="text-muted-foreground hover:text-primary">
                              <MailIcon className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Grid Layout (matches original) */}
        {layout === "grid" && (
          <div className="mx-auto grid max-w-7xl gap-20 xl:grid-cols-3">
            <div className="max-w-xl">
              {subtitle && (
                <p className={cn(
                  "text-sm font-medium mb-3 uppercase tracking-wider",
                  isDark ? "text-primary" : "text-primary"
                )}>
                  {subtitle}
                </p>
              )}
              <h2 className={cn(
                "text-3xl font-semibold tracking-tight text-pretty sm:text-4xl",
                isDark ? "text-white" : "text-foreground",
                titleClassName
              )}>
                {title}
              </h2>
              <p className={cn(
                "mt-6 text-lg/8",
                isDark ? "text-gray-300" : "text-muted-foreground",
                descriptionClassName
              )}>
                {description}
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.id || person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      alt={`${person.name} profile`}
                      src={person.imageUrl}
                      className={cn(
                        "size-16 rounded-full",
                        isDark ? "ring-1 ring-white/10" : "ring-1 ring-black/5"
                      )}
                    />
                    <div>
                      <h3 className={cn(
                        "text-base/7 font-semibold tracking-tight",
                        isDark ? "text-white" : "text-foreground"
                      )}>
                        {person.name}
                      </h3>
                      <p className={cn(
                        "text-sm/6 font-semibold",
                        isDark ? "text-primary" : "text-primary"
                      )}>
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}


