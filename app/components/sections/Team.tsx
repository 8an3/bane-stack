import { cn } from "~/components/ui/utils"
import { Badge } from "~/components/ui/badge"
import { LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";


export   function TeamSection({
  title = "Meet our leadership",
  subtitle = "Our Team",
  description = "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
  people = [
    {
      id: 1,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      role: 'Business Relations',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Courtney Henry',
      role: 'Designer',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Tom Cook',
      role: 'Director of Product',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  layout = "sidebar", // "sidebar", "centered", "cards"
  theme = "light", // "light" or "dark"
  showSocial = false,
  className,
  titleClassName,
  descriptionClassName,
  peopleClassName
}) {
  const isDark = theme === "dark"
  
  if (layout === "cards") {
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

          {/* Team Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => (
              <Card key={person.id} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={person.imageUrl}
                    alt={`${person.name} profile`}
                    className="mx-auto size-20 rounded-full mb-4"
                  />
                  <h3 className="font-semibold mb-1">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                  {person.bio && (
                    <p className="text-sm text-muted-foreground mb-4">{person.bio}</p>
                  )}
                  {showSocial && person.social && (
                    <div className="flex justify-center space-x-2">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layout === "centered") {
    return (
      <section className={cn(
        "py-24 sm:py-32",
        isDark ? "bg-gray-900" : "bg-background",
        className
      )}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
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

          {/* People Grid */}
          <ul role="list" className={cn(
            "grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
            peopleClassName
          )}>
            {people.map((person) => (
              <li key={person.id || person.name} className="text-center">
                <img
                  alt={`${person.name} profile`}
                  src={person.imageUrl}
                  className="mx-auto size-20 rounded-full"
                />
                <h3 className={cn(
                  "mt-4 text-base font-semibold tracking-tight",
                  isDark ? "text-white" : "text-foreground"
                )}>
                  {person.name}
                </h3>
                <p className={cn(
                  "text-sm font-semibold",
                  isDark ? "text-primary" : "text-primary"
                )}>
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  // Default sidebar layout (matches original)
  return (
    <section className={cn(
      "py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-20 xl:grid-cols-3">
          {/* Sidebar Content */}
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

          {/* People List */}
          <ul role="list" className={cn(
            "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2",
            peopleClassName
          )}>
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
                    {person.bio && (
                      <p className={cn(
                        "text-sm mt-1",
                        isDark ? "text-gray-400" : "text-muted-foreground"
                      )}>
                        {person.bio}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

