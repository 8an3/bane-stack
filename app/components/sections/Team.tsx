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



export function TeamWithLargeImages() {
  const team = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      image: "/team/leslie-alexander.jpg",
      initials: "LA",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: "/team/michael-foster.jpg",
      initials: "MF",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Dries Vincent",
      role: "Head of Product",
      image: "/team/dries-vincent.jpg",
      initials: "DV",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <Card key={person.name} className="border-0 shadow-none">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Avatar className="h-full w-full rounded-none">
                  <AvatarImage src={person.image} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-base text-muted-foreground">{person.role}</p>
              </CardHeader>
              <CardContent className="mt-2 flex gap-x-4">
                <a href={person.social.twitter} className="text-gray-400 hover:text-gray-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={person.social.linkedin} className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={person.social.email} className="text-gray-400 hover:text-gray-500">
                  <Mail className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TeamWithRoundImages() {
  const team = [
    {
      name: "Tom Cook",
      role: "Director of Product",
      image: "/team/tom-cook.jpg",
      initials: "TC"
    },
    {
      name: "Whitney Francis",
      role: "Copywriter",
      image: "/team/whitney-francis.jpg",
      initials: "WF"
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      image: "/team/leonard-krasner.jpg",
      initials: "LK"
    },
    {
      name: "Floyd Miles",
      role: "Principal Designer",
      image: "/team/floyd-miles.jpg",
      initials: "FM"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <Card key={person.name} className="border-0 shadow-none text-center">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={person.image} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-base text-muted-foreground">{person.role}</p>
              </CardHeader>
              <CardContent className="mt-2">
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LargeTeamGrid() {
  const team = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      image: "/team/leslie-alexander.jpg",
      initials: "LA",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: "/team/michael-foster.jpg",
      initials: "MF",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Dries Vincent",
      role: "Head of Product",
      image: "/team/dries-vincent.jpg",
      initials: "DV",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      image: "/team/lindsay-walton.jpg",
      initials: "LW",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      image: "/team/courtney-henry.jpg",
      initials: "CH",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      image: "/team/tom-cook.jpg",
      initials: "TC",
      twitter: "#",
      linkedin: "#"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Meet the amazing people behind our product.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <Card key={person.name}>
              <div className="aspect-[3/2] w-full overflow-hidden rounded-t-xl">
                <Avatar className="h-full w-full rounded-none">
                  <AvatarImage src={person.image} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-base text-muted-foreground">{person.role}</p>
              </CardHeader>
              <CardContent className="mt-2 flex gap-x-4">
                <a href={person.twitter} className="text-gray-400 hover:text-gray-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={person.linkedin} className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TeamWithMediumImages() {
  const team = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      image: "/team/leslie-alexander.jpg",
      initials: "LA",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: "/team/michael-foster.jpg",
      initials: "MF",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Dries Vincent",
      role: "Head of Product",
      image: "/team/dries-vincent.jpg",
      initials: "DV",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      image: "/team/lindsay-walton.jpg",
      initials: "LW",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <Card key={person.name} className="border-0 shadow-none">
              <div className="flex justify-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={person.image} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-base text-muted-foreground">{person.role}</p>
              </CardHeader>
              <CardContent className="mt-2 flex justify-center gap-x-4">
                <a href={person.social.twitter} className="text-gray-400 hover:text-gray-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={person.social.linkedin} className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={person.social.email} className="text-gray-400 hover:text-gray-500">
                  <Mail className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}