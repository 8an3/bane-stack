import { Atom } from "~/components/lo-fi/atom"


// Stats Section
export function StatsLoFi() {
  return (
    <div className="p-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center mb-12">
        <Atom shade="400" className="h-5 w-48 mx-auto mb-4" />
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((stat) => (
          <div key={stat} className="text-center space-y-2">
            <Atom shade="500" className="h-8 w-20 mx-auto" />
            <Atom shade="300" className="h-4 w-24 mx-auto" />
            <Atom shade="200" className="h-3 w-16 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}