import { Atom } from "~/components/lo-fi/atom";
import {
    ChevronDown,
    ChevronUp,
    MoreHorizontal,
    Smartphone,
     Monitor, Droplets,
    Code,
    Megaphone,
    X,
    Home,
    Settings,
    Users,
    FileText,
    ChevronRight,
    Loader2,
    Cookie,
    Shield,
    BarChart3,
    Target,
    CreditCard,
    CheckCircle,
    AlertTriangle,
    Columns2,
    Database,
    FileText,
    Bell,
    Palette,
    User,
} from "lucide-react";

export function ClientOnlyLoFi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90px] gap-1">
      {/* Loading spinner with client icon */}
      <div className="flex items-center gap-2">
        <Monitor className="size-3 text-primary/60" />
        <Loader2 className="size-5 animate-spin text-primary" />
      </div>
      
      {/* Loading skeleton content */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {/* Header skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
          <div className="flex flex-col gap-1 flex-1">
            <Atom shade="200" className="h-3 w-3/4 animate-pulse" />
            <Atom shade="100" className="h-2 w-1/2 animate-pulse" />
          </div>
        </div>
        
      
      </div>
    </div>
  );
}