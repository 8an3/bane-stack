// Details Section
import { Atom } from "~/components/lo-fi/atom"
export function DetailsSectionLoFi() {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <Atom shade="400" className="h-5 w-48" />
        <div className="space-y-2">
          <Atom shade="200" className="h-3 w-full" />
          <Atom shade="200" className="h-3 w-5/6" />
          <Atom shade="200" className="h-3 w-4/5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Atom shade="300" className="h-4 w-32" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((spec) => (
              <div key={spec} className="flex justify-between">
                <Atom shade="200" className="h-3 w-20" />
                <Atom shade="300" className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Atom shade="300" className="h-4 w-28" />
          <div className="space-y-2">
            <Atom shade="200" className="h-3 w-full" />
            <Atom shade="200" className="h-3 w-4/5" />
            <Atom shade="200" className="h-3 w-3/5" />
          </div>
        </div>
      </div>
    </div>
  )
}