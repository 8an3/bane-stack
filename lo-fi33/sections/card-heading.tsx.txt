import { Atom } from "~/components/lo-fi/atom"
// app/components/lo-fi/sections/card-heading.tsx

export function CardHeadingLoFi() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between border-b py-1">
        <div className="flex items-center gap-1">
          <Atom shade="300" className="h-2 w-2" />
          <Atom shade="300" className="h-2 w-2" />
        </div>
        <div className="flex items-center gap-1">
          <Atom shade="200" className="h-2 w-2" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
      </div>
      <div className="flex items-center justify-between border-b py-1">
        <div className="flex items-center gap-1">
          <Atom shade="300" className="h-2 w-2" />
          <Atom shade="300" className="h-2 w-2" />
        </div>
        <div className="flex items-center gap-1">
          <Atom shade="200" className="h-2 w-2" />
          <Atom shade="200" className="h-2 w-2" />
        </div>
      </div>
    </div>
  )
}

