import { Atom } from "~/components/lo-fi/atom"


// Stats Section
export function StatsLoFi() {
  return (
    <div className="p-2 bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center mb-2">
        <Atom shade="400" className="h-2 w-24 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-32 mx-auto" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((stat) => (
          <div key={stat} className="text-center space-y-1">
            <Atom shade="500" className="h-2 w-8 mx-auto" />
            <Atom shade="300" className="h-1 w-6 mx-auto" />
            <Atom shade="200" className="h-1 w-4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}


