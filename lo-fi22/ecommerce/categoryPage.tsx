import { ChevronDown, Grid, Heart, List, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Category Page
export function CategoryPageLoFi() {
  return (
    <div className="p-2 space-y-2 h-[353px]">
      <div className="space-y-1">
        <Atom shade="400" className="h-2 w-16" />
        <div className="flex items-center justify-between">
          <Atom shade="200" className="h-1 w-8" />
          <div className="flex items-center gap-1">
            <Atom shade="200" className="h-1 w-4" />
            <Grid className="size-1" />
            <List className="size-1" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="space-y-0.5">
            <Atom shade="100" className="h-6 w-full rounded" />
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-1 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}