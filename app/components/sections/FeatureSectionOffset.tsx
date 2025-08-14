import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";


export  function FeatureSectionOffset() {
  const features = [
    {
      icon: Shield,
      name: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to keep your data safe and secure."
    },
    {
      icon: Zap,
      name: "Lightning Fast",
      description: "Optimized for performance with sub-second response times across all features."
    },
    {
      icon: Users,
      name: "Team Collaboration",
      description: "Real-time collaboration tools that make working together seamless and productive."
    },
    {
      icon: Globe,
      name: "Global Scale",
      description: "Deploy anywhere in the world with our global infrastructure and CDN network."
    }
  ];

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to ship your next project
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We've built the tools and infrastructure you need to build, deploy, and scale your applications with confidence. From development to production, we've got you covered.
              </p>
              
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 3"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User 4"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-foreground">Trusted by 2,000+ developers</p>
                  <p className="text-muted-foreground">from companies around the world</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                Built for modern teams
              </h3>
              
              <dl className="space-y-8">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.name} className="flex gap-x-3">
                      <dt className="flex-none">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </dt>
                      <dd>
                        <div className="text-base font-semibold leading-7 text-foreground">
                          {feature.name}
                        </div>
                        <div className="mt-1 text-base leading-7 text-muted-foreground">
                          {feature.description}
                        </div>
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-x-3">
                  <div className="flex-none">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">99.9% uptime guarantee</span> with 24/7 monitoring and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}