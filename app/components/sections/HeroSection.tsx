import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield, Play, CheckCircle} from 'lucide-react';


export function HeroSection({
	title = "Theme Builder",
	desc = "Build VSCode themes visually without hunting down property names. Because life's too short for endless documentation searches.",
	className = `text-foreground bg-background`,
	className2 = `text-muted-foreground `,
}) {
	return (
		<div className="sticky top-0 z-10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background pb-4 pt-8">
			<div className="text-center">
				<h2 className={cn("text-2xl md:text-3xl font-bold mb-4 text-foreground", className)}>{title}</h2>
				<p className={cn("max-w-3xl mx-auto leading-relaxed", className2)}>{desc}</p>
			</div>
		</div>
	);
}

export function HeroStatsSection({
	title = "Work with us",
	description = "Join our team and help build the future of technology. We're looking for passionate individuals to grow with our company.",
	backgroundImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
	links = [
		{ name: "Open roles", href: "#" },
		{ name: "Internship program", href: "#" },
		{ name: "Our values", href: "#" },
		{ name: "Meet our leadership", href: "#" },
	],
	stats = [
		{ name: "Offices worldwide", value: "12" },
		{ name: "Full-time colleagues", value: "300+" },
		{ name: "Hours per week", value: "40" },
		{ name: "Paid time off", value: "Unlimited" },
	],
	showGradients = true,
	className,
	titleClassName,
	descriptionClassName,
	statsClassName,
	linksClassName,
}) {
	return (
		<section className={cn("relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", className)}>
			{/* Background Image */}
			{backgroundImage && <img alt="" src={backgroundImage} className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />}

			{/* Gradient Overlays */}
			{showGradients && (
				<>
					<div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
						<div
							style={{
								clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						/>
					</div>
					<div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:ml-16 sm:translate-x-0">
						<div
							style={{
								clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						/>
					</div>
				</>
			)}

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Hero Content */}
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className={cn("text-5xl font-semibold tracking-tight text-white sm:text-7xl", titleClassName)}>{title}</h1>
					<p className={cn("mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8", descriptionClassName)}>{description}</p>
				</div>

				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
					{/* Links */}
					{links && links.length > 0 && (
						<div className={cn("grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10", linksClassName)}>
							{links.map((link) => (
								<a key={link.name} href={link.href} className="hover:text-gray-300 transition-colors duration-200">
									{link.name} <span aria-hidden="true">&rarr</span>
								</a>
							))}
						</div>
					)}

					{/* Stats */}
					{stats && stats.length > 0 && (
						<dl className={cn("mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4", statsClassName)}>
							{stats.map((stat) => (
								<div key={stat.name} className="flex flex-col-reverse gap-1">
									<dt className="text-base/7 text-gray-300">{stat.name}</dt>
									<dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
								</div>
							))}
						</dl>
					)}
				</div>
			</div>
		</section>
	);
}

export function HeroCTASection({
	title = "Ready to get started?",
	description = "Join thousands of companies that trust our platform to power their business growth.",
	backgroundImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
	primaryCTA = { text: "Get Started", href: "#" },
	secondaryCTA = { text: "Learn More", href: "#" },
	features = ["14-day free trial", "No credit card required", "Cancel anytime", "24/7 support"],
	showGradients = true,
	className,
	titleClassName,
	descriptionClassName,
}) {
	return (
		<section className={cn("relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", className)}>
			{/* Background Image */}
			{backgroundImage && <img alt="" src={backgroundImage} className="absolute inset-0 -z-10 size-full object-cover object-center" />}

			{/* Gradient Overlays */}
			{showGradients && (
				<div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem]">
					<div
						style={{
							clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
					/>
				</div>
			)}

			<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
				{/* Hero Content */}
				<h1 className={cn("text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6", titleClassName)}>{title}</h1>
				<p className={cn("text-lg text-gray-300 mb-10 max-w-2xl mx-auto", descriptionClassName)}>{description}</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<Button size="lg" className="text-lg px-8 py-4" asChild>
						<a href={primaryCTA.href}>{primaryCTA.text}</a>
					</Button>
					<Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
						<a href={secondaryCTA.href}>{secondaryCTA.text}</a>
					</Button>
				</div>

				{/* Feature List */}
				{features && features.length > 0 && (
					<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
						{features.map((feature, idx) => (
							<div key={feature} className="flex items-center">
								<svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								{feature}
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export function BorderedAppHero() {
    return (
    <div className="relative bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          {/* Badge */}
          <div className="mx-auto flex items-center justify-center w-fit mb-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">
                New: AI-powered features available
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            Build your next
            <span className="relative whitespace-nowrap text-indigo-600">
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
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
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
            <div className="relative rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-100 rounded-md px-3 py-1 text-sm text-gray-500 max-w-md">
                    https://app.example.com/dashboard
                  </div>
                </div>
              </div>
              
              {/* App Interface Mockup */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                      <p className="text-sm text-gray-500">Welcome back, Sarah</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50">
                      <Users className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50">
                      <Shield className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
                        <p className="text-sm text-green-600">+20.1% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Users</p>
                        <p className="text-2xl font-bold text-gray-900">2,350</p>
                        <p className="text-sm text-blue-600">+15.3% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Conversion</p>
                        <p className="text-2xl font-bold text-gray-900">98.5%</p>
                        <p className="text-sm text-purple-600">+7% from last month</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Analytics Overview</h4>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md font-medium">
                        7 days
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-500 rounded-md">
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
                          className="bg-gradient-to-t from-indigo-500 to-purple-500 rounded-sm flex-1 transition-all duration-300 hover:opacity-80"
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

export  function HeroWithAppScreenShot() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      <div className="relative">
        {/* Navigation-like header (optional) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">YourApp</span>
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
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build your next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> amazing project </span>
              with confidence
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
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
            <div className="mt-10 flex items-center justify-center space-x-8 text-sm text-gray-500">
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
              <div className="relative rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
                {/* Browser chrome mockup */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-gray-100 rounded px-3 flex items-center text-sm text-gray-500">
                      https://yourapp.com
                    </div>
                  </div>
                </div>
                
                {/* App interface mockup */}
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-96">
                  <div className="space-y-4">
                    {/* Navigation bar mockup */}
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
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
                        <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
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

