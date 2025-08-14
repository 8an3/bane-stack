import { Atom } from "~/components/lo-fi/atom"


// Hero Section
export function HeroLoFi() {
  return (
    <div className="flex flex-col items-center text-center p-8 gap-6">
      <Atom shade="400" className="h-6 w-3/4 max-w-2xl" />
      <Atom shade="300" className="h-5 w-1/2 max-w-xl" />
      <div className="flex flex-col gap-2 w-full max-w-md">
        <Atom shade="200" className="h-3 w-full" />
        <Atom shade="200" className="h-3 w-4/5" />
        <Atom shade="200" className="h-3 w-3/5" />
      </div>
      <div className="flex gap-4 mt-4">
        <Atom shade="500" className="h-10 w-32 rounded-md" />
        <Atom shade="200" className="h-10 w-28 rounded-md border-2" />
      </div>
      <Atom shade="100" className="h-64 w-full max-w-3xl rounded-lg mt-8" />
    </div>
  )
}