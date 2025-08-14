import { Atom } from "~/components/lo-fi/atom"

// Feed List Section
export function FeedListLoFi() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex gap-4 p-4 border rounded-lg">
          <Atom shade="300" className="h-12 w-12 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Atom shade="400" className="h-3 w-24" />
              <Atom shade="200" className="h-3 w-16" />
            </div>
            <Atom shade="300" className="h-4 w-3/4" />
            <div className="space-y-1">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-4/5" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Atom shade="200" className="h-6 w-16 rounded-full" />
              <Atom shade="200" className="h-6 w-20 rounded-full" />
              <Atom shade="200" className="h-6 w-14 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}