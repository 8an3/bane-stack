import { Menu } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";

// Header Section
export function HeaderLoFi() {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-1">
        <Atom shade="400" className="h-2 w-2 rounded-full" />
        <Atom shade="300" className="h-1 w-6" />
      </div>
      <div className="flex items-center gap-1">
        <Atom shade="200" className="h-1 w-4" />
        <Atom shade="200" className="h-1 w-5" />
        <Atom shade="200" className="h-1 w-4" />
      </div>
      <div className="flex items-center gap-1">
        <Atom shade="300" className="h-2 w-6 rounded-sm" />
        <div className="w-1 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}
