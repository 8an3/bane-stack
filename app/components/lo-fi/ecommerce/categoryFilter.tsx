
import { Filter, Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Category Filter
export function CategoryFilterLoFi() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Atom shade="400" className="h-5 w-24" />
        <Filter className="size-5" />
      </div>
      <div className="space-y-3">
        <div className="space-y-2">
          <Atom shade="300" className="h-4 w-20" />
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Atom shade="200" className="h-4 w-4 rounded-sm border-2" />
              <Atom shade="200" className="h-3 w-24" />
              <Atom shade="100" className="h-3 w-8 ml-auto" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <Atom shade="300" className="h-4 w-16" />
          <div className="flex items-center gap-2">
            <Atom shade="200" className="h-8 flex-1 rounded-md" />
            <Atom shade="200" className="h-8 flex-1 rounded-md" />
          </div>
        </div>
        <div className="space-y-2">
          <Atom shade="300" className="h-4 w-12" />
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
