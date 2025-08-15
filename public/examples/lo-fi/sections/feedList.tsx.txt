import { Atom } from "~/components/lo-fi/atom"

// Feed List Section
export function FeedListLoFi() {
  return (
    <div className="flex flex-col gap-1">
      {[1, 2].map((item) => (
        <div key={item} className="flex gap-2 border-b py-1">
          <Atom shade="300" className="h-3 w-3 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-1">
              <Atom shade="400" className="h-1 w-8" />
              <Atom shade="200" className="h-1 w-6" />
            </div>
            <Atom shade="300" className="h-2 w-3/4" />
            <Atom shade="200" className="h-1 w-full" />
            <div className="flex items-center gap-2">
              <Atom shade="200" className="h-2 w-4 rounded" />
              <Atom shade="200" className="h-2 w-5 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
