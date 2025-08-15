import { ChevronDown } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"


export function StackedListsLoFi() {
  return (
    <div className="space-y-1 p-2">
      <div className="flex items-center justify-between mb-2">
        <Atom shade="400" className="h-2 w-16" />
        <Atom shade="300" className="h-2 w-8 rounded-sm" />
      </div>
      <div className="border rounded-sm overflow-hidden">
        {[1, ].map((item) => (
          <div key={item} className="flex items-center justify-between p-1 border-b last:border-b-0">
            <div className="flex items-center gap-1">
              <Atom shade="300" className="h-2 w-2 rounded-full" />
              <div className="space-y-0.5">
                <Atom shade="400" className="h-1 w-12" />
                <Atom shade="200" className="h-1 w-16" />
              </div>
            </div>
            <Atom shade="200" className="h-1 w-6 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}