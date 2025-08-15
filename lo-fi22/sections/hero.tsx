import { Atom } from "~/components/lo-fi/atom"


// Hero Section
export function HeroLoFi() {
  return (
    <div className="flex flex-col items-center text-center p-2 gap-2">
      <Atom shade="400" className="h-2 w-3/4" />
      <Atom shade="300" className="h-2 w-1/2" />
      <div className="flex flex-col gap-0.5 w-full">
        <Atom shade="200" className="h-1 w-full" />
        <Atom shade="200" className="h-1 w-4/5" />
      </div>
      <div className="flex gap-2 mt-1">
        <Atom shade="500" className="h-2 w-16 rounded-sm" />
        <Atom shade="200" className="h-2 w-14 rounded-sm border" />
      </div>
      <Atom shade="100" className="h-8 w-full rounded-sm mt-2" />
    </div>
  )
}
