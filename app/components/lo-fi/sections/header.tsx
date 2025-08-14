import { Menu } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"

// Header Section
export function HeaderLoFi() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <Atom shade="400" className="h-8 w-8 rounded-full" />
        <Atom shade="300" className="h-4 w-24" />
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Atom shade="200" className="h-3 w-16" />
        <Atom shade="200" className="h-3 w-20" />
        <Atom shade="200" className="h-3 w-18" />
        <Atom shade="200" className="h-3 w-16" />
      </div>
      <div className="flex items-center gap-3">
        <Atom shade="300" className="h-8 w-20 rounded-md" />
        <Menu className="size-5 md:hidden" />
      </div>
    </div>
  )
}