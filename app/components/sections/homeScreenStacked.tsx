// app/routes/_stacked.tsx
import { Link, Outlet } from "@remix-run/react";
import { 
  Bell, 
  Search, 
  Menu, 
  ChevronDown 
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function StackedLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top navigation */}
      <div className="bg-background shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-xl font-bold text-foreground">Acme Inc</h1>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/stacked"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground border-b-2 border-primary"
                >
                  Dashboard
                </Link>
                <Link
                  to="/stacked/team"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground border-b-2 border-transparent hover:border-border hover:text-foreground"
                >
                  Team
                </Link>
                <Link
                  to="/stacked/projects"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground border-b-2 border-transparent hover:border-border hover:text-foreground"
                >
                  Projects
                </Link>
                <Link
                  to="/stacked/calendar"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground border-b-2 border-transparent hover:border-border hover:text-foreground"
                >
                  Calendar
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="p-1 text-muted-foreground bg-background rounded-full hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span className="sr-only">View notifications</span>
                <Bell className="w-6 h-6" />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <Button variant="ghost" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span className="sr-only">Open user menu</span>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="ml-2">Tom Cook</span>
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center -mr-2 sm:hidden">
              <button className="inline-flex items-center justify-center p-2 text-muted-foreground bg-background rounded-md hover:text-muted-foreground hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span className="sr-only">Open main menu</span>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
// app/routes/index.tsx
import { Card } from "~/components/ui/card";
import { Activity, ArrowUp, Users, CreditCard } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-md bg-indigo-50">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Total Subscribers</p>
              <p className="text-2xl font-semibold text-foreground">71,897</p>
              <p className="flex items-center text-sm text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span className="ml-1">12% from last month</span>
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-md bg-indigo-50">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Avg. Open Rate</p>
              <p className="text-2xl font-semibold text-foreground">58.16%</p>
              <p className="flex items-center text-sm text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span className="ml-1">2% from last month</span>
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-md bg-indigo-50">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Avg. Click Rate</p>
              <p className="text-2xl font-semibold text-foreground">24.57%</p>
              <p className="flex items-center text-sm text-red-600">
                <ArrowUp className="w-4 h-4 transform rotate-180" />
                <span className="ml-1">4% from last month</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent activity */}
      <Card className="p-6 mt-8">
        <h2 className="text-lg font-medium text-foreground">Recent activity</h2>
        {/* Activity content would go here */}
      </Card>
    </div>
  );
}
