
import { Atom } from "~/components/lo-fi/atom"
// Stacked Layouts
export function StackedLayoutsLoFi() {
  return (
    <div className="space-y-2">
      <div className="p-2 space-y-1">
        <Atom shade="400" className="h-1 w-10" />
        <div className="grid grid-cols-3 gap-1">
          <div className="space-y-1">
            <Atom shade="100" className="h-8 w-full rounded" />
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-3/4" />
              <Atom shade="200" className="h-0.5 w-full" />
            </div>
          </div>
          <div className="space-y-1">
            <Atom shade="100" className="h-8 w-full rounded" />
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-2/3" />
              <Atom shade="200" className="h-0.5 w-full" />
            </div>
          </div>
          <div className="space-y-1">
            <Atom shade="100" className="h-8 w-full rounded" />
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-4/5" />
              <Atom shade="200" className="h-0.5 w-full" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-2 bg-neutral-50 dark:bg-neutral-900">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Atom shade="400" className="h-1 w-8" />
            <Atom shade="100" className="h-12 w-full rounded" />
          </div>
          <div className="space-y-1">
            <Atom shade="400" className="h-1 w-3/4" />
            <div className="space-y-0.5">
              <Atom shade="200" className="h-0.5 w-full" />
              <Atom shade="200" className="h-0.5 w-5/6" />
            </div>
            <Atom shade="500" className="h-2 w-7 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}