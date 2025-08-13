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
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation */}
      <div className="bg-white shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Acme Inc</h1>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/stacked"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
                >
                  Dashboard
                </Link>
                <Link
                  to="/stacked/team"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Team
                </Link>
                <Link
                  to="/stacked/projects"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Projects
                </Link>
                <Link
                  to="/stacked/calendar"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Calendar
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <Bell className="w-6 h-6" />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <Button variant="ghost" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
              <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
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
              <Activity className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Subscribers</p>
              <p className="text-2xl font-semibold text-gray-900">71,897</p>
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
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Open Rate</p>
              <p className="text-2xl font-semibold text-gray-900">58.16%</p>
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
              <CreditCard className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Click Rate</p>
              <p className="text-2xl font-semibold text-gray-900">24.57%</p>
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
        <h2 className="text-lg font-medium text-gray-900">Recent activity</h2>
        {/* Activity content would go here */}
      </Card>
    </div>
  );
}
