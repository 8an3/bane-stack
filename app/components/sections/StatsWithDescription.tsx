import { cn } from "~/components/ui/utils"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowUpRight, Users, Database, Zap, Globe } from "lucide-react";
import { Activity, Clock, CreditCard, UserCheck } from "lucide-react";




export function StatsWithDescription() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Header with description */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum 
              cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          {/* Stats grid */}
          <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Users
                </CardTitle>
                <Users className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-gray-900">
                  10,000+
                </p>
                <div className="mt-2 flex items-center text-sm font-medium text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1">24.3%</span>
                  <span className="ml-1 text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Data Processed
                </CardTitle>
                <Database className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-gray-900">
                  15TB
                </p>
                <div className="mt-2 flex items-center text-sm font-medium text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1">12.8%</span>
                  <span className="ml-1 text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Uptime
                </CardTitle>
                <Zap className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-gray-900">
                  99.9%
                </p>
                <div className="mt-2 flex items-center text-sm font-medium text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1">0.1%</span>
                  <span className="ml-1 text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Global Regions
                </CardTitle>
                <Globe className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-gray-900">
                  12
                </p>
                <div className="mt-2 flex items-center text-sm font-medium text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="ml-1">2</span>
                  <span className="ml-1 text-muted-foreground">new this year</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
