// Category Previews
import { Atom } from "~/components/lo-fi/atom"
export function CategoryPreviewsLoFi() {
  return (
    <div className="p-6 space-y-8">
      <div className="text-center space-y-3">
        <Atom shade="400" className="h-5 w-40 mx-auto" />
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((category) => (
          <div key={category} className="text-center space-y-3">
            <Atom shade="100" className="h-32 w-full rounded-full" />
            <Atom shade="400" className="h-4 w-20 mx-auto" />
            <Atom shade="200" className="h-3 w-12 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}