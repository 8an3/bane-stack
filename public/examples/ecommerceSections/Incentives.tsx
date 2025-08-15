// app/components/ui/incentive-card.tsx
"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Star, Gift, Award, HeartHandshake } from "lucide-react"




interface IncentiveItemProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  badgeText?: string
  ctaText?: string
  variant?: "default" | "split-header"
}

interface IncentivesProps {
  items?: IncentiveItemProps[]
  columns?: 3 | 4
  showHeading?: boolean
  variant?: "default" | "split-header"
}




const IncentiveItem = ({
  title = "Default Title",
  description = "Default description goes here.",
  icon = <CheckCircle2 className="h-8 w-8 text-primary" />,
  badgeText = "Popular",
  ctaText = "Learn More",
  variant = "default"
}: IncentiveItemProps) => {
  return (
    <Card className="group transition-all hover:-translate-y-1">
      <CardHeader className="relative">
        {variant === "split-header" && (
          <>
            <div className="absolute inset-x-0 top-0 bg-primary/10 h-8" />
            <div className="absolute inset-x-0 top-8 bg-gradient-to-b from-transparent via-white/95 to-transparent h-8 pointer-events-none" />
          </>
        )}
        
        <div className="flex items-start gap-4">
          <div className="mt-2 shrink-0" aria-hidden="true">
            {icon}
          </div>
          
          <div className="flex-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            {badgeText && (
              <Badge variant="secondary" className="mt-1">
                {badgeText}
              </Badge>
            )}
          </div>
        </div>

        {description && (
          <CardDescription className="mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <a 
          href="#" 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {ctaText}
          <span className="ml-1">→</span>
        </a>
      </CardContent>
    </Card>
  )
}




export default function Incentives({
  items = [
    {
      title: "Free Shipping",
      description: "On orders over $100",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      badgeText: "Popular",
      variant: "default"
    },
    {
      title: "Money Back Guarantee",
      description: "30-day money back guarantee",
      icon: <Gift className="h-8 w-8 text-green-500" />,
      badgeText: "New",
      variant: "default"
    },
    {
      title: "Premium Support",
      description: "24/7 customer support",
      icon: <Award className="h-8 w-8 text-blue-500" />,
      badgeText: "Exclusive",
      variant: "default"
    }
  ],
  columns = 3,
  showHeading = false,
  variant = "default"
}: IncentivesProps) {
  return (
    <div className={`grid gap-6 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} lg:gap-8`}>
      {showHeading && (
        <div className="col-span-full">
          <h2 className="text-2xl font-bold tracking-tight">Special Offers</h2>
          <Separator className="my-4" />
        </div>
      )}
      
      {items.map((item, index) => (
        <IncentiveItem 
          key={index}
          {...item}
          variant={variant}
        />
      ))}
    </div>
  )
}


/**
 * 
 * 
 * Template 1 (Split Header)

<Incentives 
  variant="split-header"
  items={[
    {
      title: "VIP Program",
      description: "Get exclusive benefits",
      icon: <HeartHandshake className="h-8 w-8 text-purple-500" />,
      badgeText: "Limited Time"
    },
    // Add more items...
  ]}
/>

2
Template 2 (4-column)

<Incentives 
  columns={4}
  items={[
    {
      title: "Fast Delivery",
      description: "Express shipping available",
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
      badgeText: "New"
    },
    // Add three more items...
  ]}
/>

3
Template 3 (With Heading)

<Incentives 
  showHeading={true}
  items={[
    {
      title: "Premium Benefits",
      description: "Unlock premium features",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      badgeText: "Popular"
    },
    // Add more items...
  ]}
/>

4
 Template 4 (Standard)

<Incentives 
  items={[
    {
      title: "Customer Service",
      description: "24/7 support available",
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      badgeText: "Exclusive"
    },
    // Add more items...
  ]}
/>

5
Template 5 (Icons Only)

<Incentives 
  items={[
    {
      title: "Secure Payment",
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />
    },
    // Add more items...
  ]}
/>
 */