import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield, Play, CheckCircle} from 'lucide-react';


export  function HeroWithAppScreenShot() {
  return (
    <div className="relative overflow-hidden bg-background">
  
      
      <div className="relative">
        {/* Navigation-like header (optional) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">YourApp</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-8">
              <Star className="w-4 h-4 mr-2" />
              New features available now
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>

            {/* Main headline */}
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Build your next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> amazing project </span>
              with confidence
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Create beautiful, responsive applications faster than ever. Our platform provides everything you need to build, deploy, and scale your ideas with enterprise-grade reliability.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="text-base">
                Start building today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Play className="w-5 h-5 mr-2" />
                Watch demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-500 mr-2" />
                Join 10,000+ teams
              </div>
            </div>
          </div>

          {/* App screenshot mockup */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <div className="relative rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10">
                {/* Browser chrome mockup */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-background/70 rounded px-3 flex items-center text-sm text-muted-foreground">
                      https://yourapp.com
                    </div>
                  </div>
                </div>
                
                {/* App interface mockup */}
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-96">
                  <div className="space-y-4">
                    {/* Navigation bar mockup */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg"></div>
                        <div className="flex space-x-6">
                          <div className="w-16 h-4 bg-gray-200 rounded"></div>
                          <div className="w-20 h-4 bg-gray-200 rounded"></div>
                          <div className="w-18 h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="w-20 h-8 bg-indigo-600 rounded-md"></div>
                    </div>
                    
                    {/* Dashboard content mockup */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="p-4 bg-background rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-6 h-6 bg-indigo-100 rounded"></div>
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-3 bg-gray-200 rounded"></div>
                            <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                          </div>
                          <div className="mt-3 w-16 h-6 bg-indigo-100 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with features */}
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Trusted by teams worldwide
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {/* Company logos mockup */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="col-span-1 flex justify-center">
                  <div className="w-32 h-8 bg-gray-200 rounded opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
