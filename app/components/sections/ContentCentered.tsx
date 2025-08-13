import { ArrowUpIcon, Lock, Server } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-react";
import { Rocket } from "lucide-react";



export function ContentCentered() {
  const features = [
    "Unlimited projects",
    "Team collaboration",
    "Advanced analytics",
    "Priority support",
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform provides all the tools your team needs to build, launch,
            and grow your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  {feature}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 flex justify-center">
            <Button>Get started today</Button>
          </div>
        </div>
      </div>
    </div>
  );
}