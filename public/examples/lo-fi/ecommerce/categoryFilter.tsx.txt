
import { Filter, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Category Filter
export function CategoryFilterLoFi() {
  return (
    <div className="space-y-1">
      <Atom shade="200" className="h-1 w-3/4" />
      <div className="space-y-0.5 pl-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <Atom shade="100" className="h-1 w-1" />
            <Atom shade="200" className="h-1 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
