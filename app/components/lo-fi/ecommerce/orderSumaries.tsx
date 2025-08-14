import { Atom } from "~/components/lo-fi/atom"
// Order Summaries
export function OrderSummariesLoFi() {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <Atom shade="400" className="h-4 w-28" />
      
      <div className="space-y-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Atom shade="200" className="h-12 w-12 rounded-md" />
              <div className="space-y-1">
                <Atom shade="300" className="h-3 w-32" />
                <Atom shade="200" className="h-3 w-20" />
              </div>
            </div>
            <div className="text-right space-y-1">
              <Atom shade="400" className="h-3 w-12" />
              <Atom shade="200" className="h-3 w-8" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <Atom shade="200" className="h-3 w-16" />
          <Atom shade="200" className="h-3 w-12" />
        </div>
        <div className="flex justify-between">
          <Atom shade="200" className="h-3 w-20" />
          <Atom shade="200" className="h-3 w-12" />
        </div>
        <div className="flex justify-between">
          <Atom shade="200" className="h-3 w-12" />
          <Atom shade="200" className="h-3 w-10" />
        </div>
        <div className="flex justify-between border-t pt-2">
          <Atom shade="400" className="h-4 w-12" />
          <Atom shade="400" className="h-4 w-16" />
        </div>
      </div>
      
      <div className="pt-4">
        <Atom shade="500" className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}