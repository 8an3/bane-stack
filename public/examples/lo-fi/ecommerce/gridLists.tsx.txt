// Grid Lists
import { Edit, Eye, Grid, List, Trash2 } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Compact Grid Lists
export function GridListsLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-2 w-8" />
        <div className="flex gap-1">
          <Grid className="size-2" />
          <List className="size-2" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-1 border rounded space-y-1">
            <Atom shade="100" className="h-6 w-full rounded-sm" />
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-1 w-1/2" />
              <div className="flex justify-between items-center">
                <Atom shade="300" className="h-1 w-4" />
                <div className="flex gap-0.5">
                  <Eye className="size-1" />
                  <Edit className="size-1" />
                  <Trash2 className="size-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}