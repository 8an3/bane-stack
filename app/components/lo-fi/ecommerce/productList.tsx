import { ChevronDown, Grid, Heart, List, ShoppingCart, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Product List
export function ProductListLoFi() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-5 w-28" />
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
      
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((product) => (
          <div key={product} className="flex gap-4 p-4 border rounded-lg">
            <Atom shade="200" className="h-24 w-24 rounded-md flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Atom shade="400" className="h-4 w-3/4" />
              <Atom shade="200" className="h-3 w-1/2" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-3 fill-yellow-400 text-yellow-400" />
                ))}
                <Atom shade="200" className="h-3 w-12 ml-2" />
              </div>
              <div className="flex items-center justify-between">
                <Atom shade="500" className="h-4 w-16" />
                <div className="flex gap-2">
                  <Heart className="size-5" />
                  <ShoppingCart className="size-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
