import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowUpRight, Users, Database, Zap, Globe } from "lucide-react";
import { Activity, Clock, CreditCard, UserCheck } from "lucide-react";




export function StatsSimpleGrid() {
  const stats = [
    {
      title: "Active Users",
      value: "2,453",
      icon: <UserCheck className="h-6 w-6 text-muted-foreground" />,
      change: "+12.1%",
      trend: "up"
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      icon: <Clock className="h-6 w-6 text-muted-foreground" />,
      change: "-0.3s",
      trend: "down"
    },
    {
      title: "Transactions",
      value: "5,342",
      icon: <CreditCard className="h-6 w-6 text-muted-foreground" />,
      change: "+24.3%",
      trend: "up"
    },
    {
      title: "Peak Load",
      value: "12.3k",
      icon: <Activity className="h-6 w-6 text-muted-foreground" />,
      change: "+3.2%",
      trend: "up"
    }
  ];

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-2 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} {stat.trend === 'up' ? '↑' : '↓'} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}