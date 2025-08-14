import { Heart, ShoppingCart, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Products Featured
export function ProductsFeaturedLoFi() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-3">
        <Atom shade="400" className="h-5 w-44 mx-auto" />
        <Atom shade="200" className="h-3 w-56 mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((product) => (
          <div key={product} className="space-y-4">
            <div className="relative">
              <Atom shade="100" className="h-64 w-full rounded-lg" />
              <div className="absolute top-2 left-2">
                <Atom shade="500" className="h-6 w-12 rounded text-white text-xs px-2 py-1">
                  <span>NEW</span>
                </Atom>
              </div>
              <Heart className="absolute top-2 right-2 size-6 p-1 bg-white rounded-full" />
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
              <div className="flex items-center justify-between">
                <Atom shade="500" className="h-4 w-16" />
                <ShoppingCart className="size-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Atom shade="200" className="h-12 w-32 mx-auto rounded-md border-2" />
      </div>
    </div>
  )
}