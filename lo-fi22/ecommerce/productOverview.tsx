import { Heart, Minus, Plus, Star } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom"
// Product Overview
export function ProductOverviewLoFi() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Atom shade="100" className="h-12 w-full rounded" />
          <div className="grid grid-cols-4 gap-0.5">
            {[1, 2, 3, 4].map((thumb) => (
              <Atom key={thumb} shade="200" className="h-2 w-full rounded-sm" />
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="space-y-1">
            <Atom shade="400" className="h-2 w-3/4" />
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-0.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Atom shade="500" className="h-2 w-5" />
              <Atom shade="200" className="h-1 w-4 line-through" />
            </div>
          </div>
          
          <div className="space-y-1">
            <Atom shade="300" className="h-1 w-5" />
            <div className="space-y-0.5">
              <Atom shade="200" className="h-1 w-full" />
              <Atom shade="200" className="h-1 w-5/6" />
            </div>
          </div>
          
          <div className="space-y-1">
            <Atom shade="300" className="h-1 w-4" />
            <div className="flex gap-0.5">
              {['S', 'M', 'L'].map((size) => (
                <Atom key={size} shade="200" className="h-2 w-2 rounded-sm border text-xs flex items-center justify-center">
                  <span className="text-xs">{size}</span>
                </Atom>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center border rounded-sm">
              <Minus className="size-2 p-0.5" />
              <Atom shade="100" className="h-2 w-4 border-x" />
              <Plus className="size-2 p-0.5" />
            </div>
            <Atom shade="500" className="h-3 flex-1 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}