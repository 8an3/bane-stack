import { Atom } from "~/components/lo-fi/atom"
// app/components/lo-fi/sections/card-heading.tsx
export function CardHeadingLoFi() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between border-b py-2">
        <div className="flex items-center gap-2">
          <Atom shade="300" className="h-3 w-3" />
          <Atom shade="300" className="h-3 w-3" />
        </div>
        <div className="flex items-center gap-2">
          <Atom shade="200" className="h-3 w-3" />
          <Atom shade="200" className="h-3 w-3" />
        </div>
      </div>
      <div className="flex items-center justify-between border-b py-2">
        <div className="flex items-center gap-2">
          <Atom shade="300" className="h-3 w-3" />
          <Atom shade="300" className="h-3 w-3" />
        </div>
        <div className="flex items-center gap-2">
          <Atom shade="200" className="h-3 w-3" />
          <Atom shade="200" className="h-3 w-3" />
        </div>
      </div>
    </div>
  )
}