import { ChevronDown, Grid, Heart, List, ShoppingCart, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Product List
export function ProductListLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-1 w-7" />
        <div className="flex items-center gap-1">
          <Atom shade="200" className="h-1 w-4" />
          <Grid className="size-1" />
          <List className="size-1" />
        </div>
      </div>
      
      <div className="space-y-1">
        {[1, 2, 3].map((product) => (
          <div key={product} className="flex gap-1 p-1 border rounded">
            <Atom shade="200" className="h-6 w-6 rounded-sm flex-shrink-0" />
            <div className="flex-1 space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-1 w-1/2" />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-0.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <Atom shade="500" className="h-1 w-4" />
                <div className="flex gap-0.5">
                  <Heart className="size-1" />
                  <ShoppingCart className="size-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}