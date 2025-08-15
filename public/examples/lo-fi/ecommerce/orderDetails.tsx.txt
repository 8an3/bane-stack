import { ArrowLeft } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Order Details Page
export function OrderDetailsPageLoFi() {
  return (
    <div className="p-2 space-y-2 h-[353px]">
      <div className="flex items-center gap-1">
        <ArrowLeft className="size-1" />
        <Atom shade="400" className="h-1 w-8" />
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 space-y-1">
          <div className="p-1 border rounded space-y-1">
            <div className="flex justify-between items-center">
              <Atom shade="400" className="h-1 w-6" />
              <Atom shade="300" className="h-1 w-4 rounded-full px-1" />
            </div>
          </div>
          
          <div className="space-y-1">
            <Atom shade="400" className="h-1 w-4" />
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-1 p-1 border rounded">
                <Atom shade="200" className="h-2 w-2 rounded-sm" />
                <div className="flex-1 space-y-0.5">
                  <Atom shade="400" className="h-1 w-3/4" />
                  <Atom shade="200" className="h-1 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="p-1 border rounded space-y-1">
            <Atom shade="400" className="h-1 w-8" />
            <div className="space-y-0.5">
              {[1, 2].map((line) => (
                <div key={line} className="flex justify-between">
                  <Atom shade="200" className="h-0.5 w-4" />
                  <Atom shade="200" className="h-0.5 w-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}