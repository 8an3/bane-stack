// app/routes/_layout.tsx
import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

// app/components/sidebar.tsx
import { Link } from "@remix-run/react";
import { 
  Home, 
  Users, 
  Folder, 
  Calendar, 
  FileText, 
  Settings, 
  HelpCircle, 
  ChevronDown 
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">Acme Inc</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            <Link
              to="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100 group"
            >
              <Home className="w-5 h-5 mr-3 text-gray-500" />
              Dashboard
            </Link>
            <Link
              to="/team"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
            >
              <Users className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" />
              Team
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
            >
              <Folder className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" />
              Projects
            </Link>
            <Link
              to="/calendar"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
            >
              <Calendar className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" />
              Calendar
            </Link>
            <Link
              to="/documents"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
            >
              <FileText className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" />
              Documents
            </Link>
          </nav>
        </div>
        <div className="flex p-4 border-t border-gray-200">
          <div className="flex items-center flex-shrink-0">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Tom Cook</p>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}