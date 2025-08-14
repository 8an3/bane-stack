
import { Atom } from "~/components/lo-fi/atom"
// Stacked Layouts
export function StackedLayoutsLoFi() {
  return (
    <div className="space-y-6">
      <div className="p-6 space-y-4">
        <Atom shade="400" className="h-5 w-40" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <Atom shade="100" className="h-32 w-full rounded-lg" />
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-3/4" />
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-4/5" />
            </div>
          </div>
          <div className="space-y-4">
            <Atom shade="100" className="h-32 w-full rounded-lg" />
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-2/3" />
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-3/4" />
            </div>
          </div>
          <div className="space-y-4">
            <Atom shade="100" className="h-32 w-full rounded-lg" />
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-4/5" />
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-2/3" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Atom shade="400" className="h-5 w-32" />
            <Atom shade="100" className="h-48 w-full rounded-lg" />
          </div>
          <div className="space-y-4">
            <Atom shade="400" className="h-4 w-3/4" />
            <div className="space-y-2">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-5/6" />
              <Atom shade="200" className="h-3 w-4/5" />
            </div>
            <Atom shade="500" className="h-10 w-28 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
