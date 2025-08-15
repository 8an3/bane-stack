import { Atom } from "~/components/lo-fi/atom"
// Order Summaries
export function OrderSummariesLoFi() {
  return (
    <div className="p-2 border rounded space-y-2">
      <Atom shade="400" className="h-1 w-7" />
      
      <div className="space-y-1">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Atom shade="200" className="h-2 w-2 rounded-sm" />
              <div className="space-y-0.5">
                <Atom shade="300" className="h-1 w-8" />
                <Atom shade="200" className="h-0.5 w-4" />
              </div>
            </div>
            <div className="text-right">
              <Atom shade="400" className="h-1 w-3" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-1">
        <div className="flex justify-between">
          <Atom shade="400" className="h-1 w-3" />
          <Atom shade="400" className="h-1 w-4" />
        </div>
      </div>
      
      <Atom shade="500" className="h-2 w-full rounded-sm" />
    </div>
  )
}
