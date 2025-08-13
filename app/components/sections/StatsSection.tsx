import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowUpRight, Users, Database, Zap, Globe } from "lucide-react";
import { Activity, Clock, CreditCard, UserCheck } from "lucide-react";




export function StatsSection({
  stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ],
  title,
  subtitle,
  description,
  theme = "dark", // "dark" or "light"
  layout = "center", // "center" or "left"
  columns = 3, // 2, 3, or 4
  className,
  titleClassName,
  descriptionClassName,
  statsClassName,
  statClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Optional Header */}
        {(title || subtitle || description) && (
          <div className={cn(
            "mb-16",
            layout === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
          )}>
            {subtitle && (
              <p className={cn(
                "text-base font-semibold mb-2",
                isDark ? "text-primary" : "text-primary"
              )}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn(
                "text-3xl font-bold tracking-tight sm:text-4xl",
                isDark ? "text-white" : "text-foreground",
                titleClassName
              )}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "mt-4 text-lg",
                isDark ? "text-gray-300" : "text-muted-foreground",
                descriptionClassName
              )}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <dl className={cn(
          "grid grid-cols-1 gap-x-8 gap-y-16 text-center",
          columns === 2 ? "lg:grid-cols-2" : "",
          columns === 3 ? "lg:grid-cols-3" : "",
          columns === 4 ? "lg:grid-cols-4" : "",
          statsClassName
        )}>
          {stats.map((stat) => (
            <div key={stat.id} className={cn(
              "mx-auto flex max-w-xs flex-col gap-y-4",
              statClassName
            )}>
              <dt className={cn(
                "text-base/7",
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                {stat.name}
              </dt>
              <dd className={cn(
                "order-first text-3xl font-semibold tracking-tight sm:text-5xl",
                isDark ? "text-white" : "text-foreground"
              )}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

