import { Atom } from "~/components/lo-fi/atom"

// Image Section
export function ImageLoFi() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <Atom shade="400" className="h-5 w-40 mx-auto mb-4" />
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="space-y-3">
            <Atom shade="100" className="h-48 w-full rounded-lg" />
            <Atom shade="300" className="h-4 w-3/4" />
            <Atom shade="200" className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
