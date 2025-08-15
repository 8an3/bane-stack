import { Atom } from "~/components/lo-fi/atom"

// Image Section
export function ImageLoFi() {
  return (
    <div className="p-2">
      <div className="text-center mb-2">
        <Atom shade="400" className="h-2 w-12 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-16 mx-auto" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="space-y-1">
            <Atom shade="100" className="h-8 w-full rounded" />
            <Atom shade="300" className="h-1 w-3/4" />
            <Atom shade="200" className="h-1 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}


