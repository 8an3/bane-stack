// app/routes/_layout.tsx
import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-background">
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
      <div className="flex flex-col w-64 border-r border-border bg-background">
        <div className="flex items-center h-16 px-4 border-b border-border">
          <h1 className="text-lg font-semibold text-foreground">Acme Inc</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            <Link
              to="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-foreground rounded-md bg-background/70 group"
            >
              <Home className="w-5 h-5 mr-3 text-muted-foreground" />
              Dashboard
            </Link>
            <Link
              to="/team"
              className="flex items-center px-2 py-2 text-sm font-medium text-muted-foreground rounded-md hover:bg-background hover:text-foreground group"
            >
              <Users className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-primary" />
              Team
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-2 py-2 text-sm font-medium text-muted-foreground rounded-md hover:bg-background hover:text-foreground group"
            >
              <Folder className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-primary" />
              Projects
            </Link>
            <Link
              to="/calendar"
              className="flex items-center px-2 py-2 text-sm font-medium text-muted-foreground rounded-md hover:bg-background hover:text-foreground group"
            >
              <Calendar className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-primary" />
              Calendar
            </Link>
            <Link
              to="/documents"
              className="flex items-center px-2 py-2 text-sm font-medium text-muted-foreground rounded-md hover:bg-background hover:text-foreground group"
            >
              <FileText className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-primary" />
              Documents
            </Link>
          </nav>
        </div>
        <div className="flex p-4 border-t border-border">
          <div className="flex items-center flex-shrink-0">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium text-foreground">Tom Cook</p>
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}