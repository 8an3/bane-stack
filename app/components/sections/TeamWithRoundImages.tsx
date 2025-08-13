
import { cn } from "~/components/ui/utils"
import { Badge } from "~/components/ui/badge"
import { LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";



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
