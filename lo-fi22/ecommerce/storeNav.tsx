import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";
export function StoreNavLoFi() {
  return (
    <div className="border-b">
      <div className="p-2 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Atom shade="400" className="h-2 w-8" />
            <div className="hidden md:flex items-center gap-2">
              <Atom shade="200" className="h-1 w-4" />
              <Atom shade="200" className="h-1 w-5" />
              <Atom shade="200" className="h-1 w-3" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 border rounded-sm px-1 py-0.5">
              <Search className="size-1" />
              <Atom shade="100" className="h-1 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-1">
        <div className="flex items-center gap-2 overflow-x-auto">
          {[1, 2, 3, 4, 5, 6].map((category) => (
            <div key={category} className="flex items-center gap-0.5 whitespace-nowrap">
              <Atom shade="200" className="h-0.5 w-5" />
              <ChevronDown className="size-0.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
