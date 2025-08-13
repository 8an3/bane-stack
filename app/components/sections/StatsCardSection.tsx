import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowUpRight, Users, Database, Zap, Globe } from "lucide-react";
import { Activity, Clock, CreditCard, UserCheck } from "lucide-react";




export function StatsCardSection({
  stats = [
    { id: 1, name: 'Happy Customers', value: '10,000+', description: 'Businesses trust our platform' },
    { id: 2, name: 'Uptime', value: '99.9%', description: 'Reliable service guaranteed' },
    { id: 3, name: 'Countries', value: '50+', description: 'Global presence worldwide' },
  ],
  title = "Trusted by businesses worldwide",
  subtitle = "Our Impact",
  className,
  titleClassName
}) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight", titleClassName)}>
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.name}</div>
                {stat.description && (
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}