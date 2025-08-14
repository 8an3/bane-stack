import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield, Play, CheckCircle} from 'lucide-react';



export function BorderedAppHero() {
    return (
    <div className="relative bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          {/* Badge */}
          <div className="mx-auto flex items-center justify-center w-fit mb-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-indigo-700">
                New: AI-powered features available
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-foregroundsm:text-7xl">
            Build your next
            <span className="relative whitespace-nowrap text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-indigo-300/70"
                preserveAspectRatio="none"
              >
                <path d="m203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">amazing app</span>
            </span>{' '}
            in minutes
          </h1>
          
          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-foreground">
            The most intuitive way to build modern applications. Start with our powerful templates, 
            customize with ease, and deploy anywhere in just a few clicks.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="group inline-flex items-center justify-center rounded-full bg-slate-900 py-4 px-8 text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:bg-slate-800 active:text-slate-300 transition-all duration-200">
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex ring-1 items-center justify-center rounded-full py-4 px-8 text-sm ring-slate-200 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch demo
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
              </div>
              <span className="font-medium">Trusted by 50,000+ developers</span>
            </div>
          </div>
        </div>

        {/* App Screenshot with Border */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="relative rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/70 rounded-md px-3 py-1 text-sm text-muted-foreground max-w-md">
                    https://app.example.com/dashboard
                  </div>
                </div>
              </div>
              
              {/* App Interface Mockup */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Welcome back, Sarah</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-background border border-border hover:bg-background">
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg bg-background border border-border hover:bg-background">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                        <p className="text-2xl font-bold text-foreground">$45,231.89</p>
                        <p className="text-sm text-green-600">+20.1% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                        <p className="text-2xl font-bold text-foreground">2,350</p>
                        <p className="text-sm text-blue-600">+15.3% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Conversion</p>
                        <p className="text-2xl font-bold text-foreground">98.5%</p>
                        <p className="text-sm text-purple-600">+7% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-background rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-foreground">Analytics Overview</h4>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md font-medium">
                        7 days
                      </button>
                      <button className="px-3 py-1 text-sm text-muted-foreground rounded-md">
                        30 days
                      </button>
                    </div>
                  </div>
                  <div className="h-64 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-end justify-center p-8">
                    {/* Simplified chart representation */}
                    <div className="flex items-end gap-2 w-full max-w-md">
                      {[40, 65, 45, 80, 55, 70, 85, 75, 90, 60, 95, 85].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-primary to-purple-500 rounded-sm flex-1 transition-all duration-300 hover:opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
