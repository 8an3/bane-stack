import { Atom } from "~/components/lo-fi/atom"

// app/components/lo-fi/sections/bento-grid.tsx

export function BentoGridLoFi() {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between border-b py-1">
          <Atom shade="300" className="h-2 w-1/3" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
        <div className="flex items-center justify-between border-b py-1">
          <Atom shade="300" className="h-2 w-1/3" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between border-b py-1">
          <Atom shade="300" className="h-2 w-2/3" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
        <div className="flex items-center justify-between border-b py-1">
          <Atom shade="300" className="h-2 w-2/3" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
      </div>
    </div>
  )
}

