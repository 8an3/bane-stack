import { Atom } from "~/components/lo-fi/atom"


export function FeatureLoFi() {
  return (
    <div className="py-2">
      <div className="text-center mb-3">
        <Atom shade="400" className="h-2 w-16 mx-auto mb-1" />
        <Atom shade="300" className="h-1 w-20 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-24 mx-auto" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center text-center gap-1">
            <Atom shade="300" className="h-3 w-3 rounded-full" />
            <Atom shade="400" className="h-1 w-8" />
            <Atom shade="200" className="h-0.5 w-full" />
            <Atom shade="200" className="h-0.5 w-4/5" />
          </div>
        ))}
      </div>
    </div>
  )
}


