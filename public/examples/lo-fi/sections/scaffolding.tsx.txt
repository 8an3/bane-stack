import { HardHat, Wrench, Hammer } from "lucide-react"

import { Atom } from "~/components/lo-fi/atom"

export function Scaffolding() {
  return (
    <div className="flex flex-col">
      {/* Main beam with header */}
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-3 bg-muted rounded-sm" />
            <Atom shade="300" className="h-2 w-1/3" />
          </div>
          <HardHat className="size-3" />
        </div>
      </div>
      
      {/* Extended beam with support structure */}
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-3 bg-muted rounded-sm" />
            <Atom shade="300" className="h-2 w-1/2" />
          </div>
          <Wrench className="size-3" />
        </div>
        <div className="flex flex-col gap-1.5 ml-3">
          <Atom shade="200" className="h-2 w-2/3" />
          <Atom shade="200" className="h-2 w-1/3" />
        </div>
      </div>
      
      {/* Final beam */}
      <div className="flex flex-col gap-1 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-3 bg-muted rounded-sm" />
            <Atom shade="300" className="h-2 w-2/3" />
          </div>
          <Hammer className="size-3" />
        </div>
      </div>
    </div>
  )
}