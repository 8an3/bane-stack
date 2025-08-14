import { Atom } from "~/components/lo-fi/atom"


// Feature Section
export function FeatureLoFi() {
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <Atom shade="400" className="h-5 w-48 mx-auto mb-4" />
        <Atom shade="300" className="h-4 w-64 mx-auto mb-2" />
        <Atom shade="200" className="h-3 w-80 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center text-center gap-4">
            <Atom shade="300" className="h-12 w-12 rounded-full" />
            <Atom shade="400" className="h-4 w-32" />
            <div className="flex flex-col gap-2 w-full">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-4/5" />
              <Atom shade="200" className="h-3 w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}