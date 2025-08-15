import { Filter } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Order History
export function OrderHistoryLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-1 w-8" />
        <div className="flex items-center gap-1">
          <Atom shade="200" className="h-1 w-6 rounded-sm" />
          <Filter className="size-1" />
        </div>
      </div>
      
      <div className="space-y-1">
        {[1, 2, 3].map((order) => (
          <div key={order} className="p-1 border rounded space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Atom shade="400" className="h-1 w-6" />
                <Atom shade="300" className="h-1 w-4 rounded-full" />
              </div>
              <Atom shade="200" className="h-0.5 w-4" />
            </div>
            
            <div className="flex gap-1 overflow-x-auto">
              {[1, 2, 3].map((item) => (
                <Atom key={item} shade="200" className="h-2 w-2 rounded-sm flex-shrink-0" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
