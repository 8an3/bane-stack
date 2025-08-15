import { Minus, Plus, X } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Shopping Cart
export function ShoppingCartLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="flex items-center justify-between">
        <Atom shade="400" className="h-1 w-8" />
        <Atom shade="200" className="h-1 w-4" />
      </div>
      
      <div className="space-y-1">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-1 p-1 border rounded">
            <Atom shade="200" className="h-5 w-5 rounded-sm flex-shrink-0" />
            <div className="flex-1 space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-0.5 w-1/2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded-sm">
                  <Minus className="size-1 p-0.5" />
                  <Atom shade="100" className="h-1 w-3 border-x text-center" />
                  <Plus className="size-1 p-0.5" />
                </div>
                <Atom shade="400" className="h-1 w-4" />
              </div>
            </div>
            <X className="size-1 text-gray-400" />
          </div>
        ))}
      </div>
      
      <div className="border-t pt-1 space-y-1">
        <div className="space-y-0.5">
          <div className="flex justify-between">
            <Atom shade="200" className="h-0.5 w-4" />
            <Atom shade="200" className="h-0.5 w-3" />
          </div>
          <div className="flex justify-between border-t pt-0.5">
            <Atom shade="400" className="h-1 w-3" />
            <Atom shade="400" className="h-1 w-4" />
          </div>
        </div>
        
        <div className="space-y-1">
          <Atom shade="200" className="h-3 w-full rounded-sm border" />
          <Atom shade="500" className="h-3 w-full rounded-sm" />
        </div>
      </div>
    </div>
  )
}