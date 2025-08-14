import { ChevronDown } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"


// Stacked Lists Section
export function StackedListsLoFi() {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between mb-4">
        <Atom shade="400" className="h-5 w-32" />
        <Atom shade="300" className="h-8 w-20 rounded-md" />
      </div>
      <div className="border rounded-lg overflow-hidden">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center justify-between p-4 border-b last:border-b-0">
            <div className="flex items-center gap-3">
              <Atom shade="300" className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Atom shade="400" className="h-3 w-24" />
                <Atom shade="200" className="h-3 w-32" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Atom shade="200" className="h-6 w-16 rounded-full" />
              <ChevronDown className="size-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}