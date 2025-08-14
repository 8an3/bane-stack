import { ChevronDown, Grid, Heart, List, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Category Page
export function CategoryPageLoFi() {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <Atom shade="400" className="h-6 w-48" />
        <div className="flex items-center justify-between">
          <Atom shade="200" className="h-3 w-32" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Atom shade="200" className="h-3 w-16" />
              <ChevronDown className="size-4" />
            </div>
            <div className="flex gap-1">
              <Grid className="size-5" />
              <List className="size-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="space-y-3">
            <div className="relative">
              <Atom shade="100" className="h-48 w-full rounded-lg" />
              <Heart className="absolute top-2 right-2 size-5" />
            </div>
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-3/4" />
              <Atom shade="200" className="h-3 w-1/2" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-3 fill-yellow-400 text-yellow-400" />
                ))}
                <Atom shade="200" className="h-3 w-8 ml-1" />
              </div>
              <Atom shade="500" className="h-4 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
