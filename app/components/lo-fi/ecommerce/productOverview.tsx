import { Heart, Minus, Plus, Star } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom"
// Product Overview
export function ProductOverviewLoFi() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Atom shade="100" className="h-96 w-full rounded-lg" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((thumb) => (
              <Atom key={thumb} shade="200" className="h-20 w-full rounded-md" />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <Atom shade="400" className="h-6 w-3/4" />
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Atom shade="200" className="h-3 w-20 ml-2" />
            </div>
            <div className="flex items-center gap-3">
              <Atom shade="500" className="h-6 w-20" />
              <Atom shade="200" className="h-4 w-16 line-through" />
              <Atom shade="300" className="h-5 w-12 bg-red-100 text-red-600 rounded px-2" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Atom shade="300" className="h-4 w-20" />
            <div className="space-y-2">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-5/6" />
              <Atom shade="200" className="h-3 w-4/5" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Atom shade="300" className="h-4 w-16" />
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <Atom key={size} shade="200" className="h-10 w-10 rounded-md border-2 flex items-center justify-center">
                  <span className="text-sm">{size}</span>
                </Atom>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <Atom shade="300" className="h-4 w-16" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((color) => (
                <Atom key={color} shade="400" className="h-8 w-8 rounded-full border-2" />
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Minus className="size-8 p-2" />
              <Atom shade="100" className="h-10 w-16 border-x" />
              <Plus className="size-8 p-2" />
            </div>
            <Atom shade="500" className="h-12 flex-1 rounded-md" />
            <Heart className="size-12 p-3 border rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}