// Grid Lists
import { Edit, Eye, Grid, List, Trash2 } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
export function GridListsLoFi() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-5 w-32" />
        <div className="flex gap-2">
          <Grid className="size-5" />
          <List className="size-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-4 border rounded-lg space-y-3">
            <Atom shade="100" className="h-32 w-full rounded-md" />
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-3/4" />
              <Atom shade="200" className="h-3 w-1/2" />
              <div className="flex justify-between items-center">
                <Atom shade="300" className="h-4 w-16" />
                <div className="flex gap-2">
                  <Eye className="size-4" />
                  <Edit className="size-4" />
                  <Trash2 className="size-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}