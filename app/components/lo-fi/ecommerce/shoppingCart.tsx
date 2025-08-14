import { Minus, Plus, X } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Shopping Cart
export function ShoppingCartLoFi() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Atom shade="400" className="h-5 w-32" />
        <Atom shade="200" className="h-3 w-16" />
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-4 p-4 border rounded-lg">
            <Atom shade="200" className="h-20 w-20 rounded-md flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Atom shade="400" className="h-4 w-3/4" />
              <Atom shade="200" className="h-3 w-1/2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded-md">
                  <Minus className="size-6 p-1" />
                  <Atom shade="100" className="h-6 w-12 border-x text-center" />
                  <Plus className="size-6 p-1" />
                </div>
                <Atom shade="400" className="h-4 w-16" />
              </div>
            </div>
            <X className="size-5 text-gray-400" />
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Atom shade="200" className="h-3 w-16" />
            <Atom shade="200" className="h-3 w-12" />
          </div>
          <div className="flex justify-between">
            <Atom shade="200" className="h-3 w-20" />
            <Atom shade="200" className="h-3 w-12" />
          </div>
          <div className="flex justify-between border-t pt-2">
            <Atom shade="400" className="h-4 w-12" />
            <Atom shade="400" className="h-4 w-16" />
          </div>
        </div>
        
        <div className="space-y-3">
          <Atom shade="200" className="h-12 w-full rounded-md border-2" />
          <Atom shade="500" className="h-12 w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
