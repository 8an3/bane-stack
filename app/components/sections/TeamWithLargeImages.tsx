
import { cn } from "~/components/ui/utils"
import { Badge } from "~/components/ui/badge"
import { LinkedinIcon, TwitterIcon, MailIcon, Twitter, Linkedin, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";




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
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our team</h2>
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
                <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="text-base text-muted-foreground">{person.role}</p>
              </CardHeader>
              <CardContent className="mt-2 flex gap-x-4">
                <a href={person.social.twitter} className="text-muted-foreground hover:text-muted-foreground">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={person.social.linkedin} className="text-muted-foreground hover:text-muted-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={person.social.email} className="text-muted-foreground hover:text-muted-foreground">
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

