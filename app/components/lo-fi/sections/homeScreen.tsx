import { Atom } from "~/components/lo-fi/atom"

// Home Screen Section
export function HomeScreenLoFi() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
      <div className="lg:col-span-2 space-y-6">
        <Atom shade="100" className="h-64 w-full rounded-lg" />
        <div className="space-y-4">
          <Atom shade="400" className="h-5 w-3/4" />
          <div className="space-y-2">
            <Atom shade="200" className="h-3 w-full" />
            <Atom shade="200" className="h-3 w-5/6" />
            <Atom shade="200" className="h-3 w-2/3" />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <Atom shade="300" className="h-4 w-32" />
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-3">
              <Atom shade="300" className="h-16 w-16 rounded-md flex-shrink-0" />
              <div className="space-y-2">
                <Atom shade="300" className="h-3 w-32" />
                <Atom shade="200" className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}