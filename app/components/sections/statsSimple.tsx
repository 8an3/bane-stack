"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  MessageSquare,
} from "lucide-react"

interface StatItemProps {
  value: string | number
  label: string
  trend?: "up" | "down"
  percentage?: number
}

const StatItem = ({ value, label, trend, percentage }: StatItemProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown
  
  return (
    <div className="flex flex-col items-center gap-2">
      <span className={`text-2xl font-bold ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
      {percentage && (
        <Badge variant={trend === "up" ? "secondary" : "destructive"}>
          <TrendIcon className="mr-1 h-3 w-3" />
          {Math.abs(percentage)}%
        </Badge>
      )}
    </div>
  )
}

interface StatBlockProps {
  title?: string
  stats?: Array<{
    value: number
    label: string
    trend?: "up" | "down"
    percentage?: number
    icon?: React.ReactNode
  }>
}

const defaultStats = [
  {
    value: 85,
    label: "User Engagement",
    trend: "up",
    percentage: 15,
    icon: <Activity className="h-5 w-5" />,
  },
  {
    value: 45,
    label: "Conversion Rate",
    trend: "down",
    percentage: -5,
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    value: 125,
    label: "Messages",
    trend: "up",
    percentage: 25,
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

export default function Stats({ title = "Statistics Overview", stats = defaultStats }: StatBlockProps) {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      
      <Separator />
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              trend={stat.trend}
              percentage={stat.percentage}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}