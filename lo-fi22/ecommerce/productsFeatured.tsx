import { Heart, ShoppingCart, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Products Featured
export function ProductsFeaturedLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="text-center space-y-1">
        <Atom shade="400" className="h-1 w-11 mx-auto" />
        <Atom shade="200" className="h-1 w-14 mx-auto" />
      </div>
      
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((product) => (
          <div key={product} className="space-y-1">
            <div className="relative">
              <Atom shade="100" className="h-8 w-full rounded" />
              <Atom shade="500" className="absolute top-0.5 left-0.5 h-1 w-3 rounded text-white text-xs">
                <span className="text-xs">NEW</span>
              </Atom>
            </div>
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-0.5 w-1/2" />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-0.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <Atom shade="500" className="h-1 w-4" />
                <ShoppingCart className="size-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Atom shade="200" className="h-3 w-8 mx-auto rounded-sm border" />
      </div>
    </div>
  )
}