import { Filter } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Order History
export function OrderHistoryLoFi() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-5 w-32" />
        <div className="flex items-center gap-2">
          <Atom shade="200" className="h-8 w-24 rounded-md" />
          <Filter className="size-5" />
        </div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3, 4].map((order) => (
          <div key={order} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Atom shade="400" className="h-4 w-24" />
                <Atom shade="300" className="h-6 w-20 rounded-full" />
              </div>
              <Atom shade="200" className="h-3 w-20" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <Atom shade="300" className="h-3 w-16" />
                <Atom shade="200" className="h-3 w-20" />
              </div>
              <div className="space-y-1">
                <Atom shade="300" className="h-3 w-12" />
                <Atom shade="400" className="h-3 w-16" />
              </div>
              <div className="space-y-1">
                <Atom shade="300" className="h-3 w-16" />
                <Atom shade="200" className="h-3 w-24" />
              </div>
              <div className="flex gap-2">
                <Atom shade="200" className="h-8 w-20 rounded-md" />
                <Atom shade="200" className="h-8 w-24 rounded-md" />
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto">
              {[1, 2, 3].map((item) => (
                <Atom key={item} shade="200" className="h-16 w-16 rounded-md flex-shrink-0" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}