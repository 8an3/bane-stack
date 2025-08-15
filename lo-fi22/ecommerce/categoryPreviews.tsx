// Category Previews
import { Atom } from "~/components/lo-fi/atom"
export function CategoryPreviewsLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="text-center space-y-1">
        <Atom shade="400" className="h-1 w-12 mx-auto" />
        <Atom shade="200" className="h-1 w-16 mx-auto" />
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((category) => (
          <div key={category} className="text-center space-y-1">
            <Atom shade="100" className="h-4 w-full rounded-full" />
            <Atom shade="400" className="h-1 w-3/4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
