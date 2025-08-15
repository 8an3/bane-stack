// Details Section
import { Atom } from "~/components/lo-fi/atom"
export function DetailsSectionLoFi() {
  return (
    <div className="py-2 space-y-2">
      <div className="space-y-1">
        <Atom shade="400" className="h-2 w-16" />
        <div className="space-y-0.5">
          <Atom shade="200" className="h-1 w-full" />
          <Atom shade="200" className="h-1 w-5/6" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Atom shade="300" className="h-1 w-8" />
          <div className="space-y-0.5">
            {[1, 2].map((spec) => (
              <div key={spec} className="flex justify-between">
                <Atom shade="200" className="h-0.5 w-5" />
                <Atom shade="300" className="h-0.5 w-6" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <Atom shade="300" className="h-1 w-7" />
          <div className="space-y-0.5">
            <Atom shade="200" className="h-0.5 w-full" />
            <Atom shade="200" className="h-0.5 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

