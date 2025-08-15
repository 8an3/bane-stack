// Landing Page
import { Atom } from "~/components/lo-fi/atom"
export function LandingPageLoFi() {
  return (
    <div className="space-y-2 h-[353px]">
      <div className="p-2 text-center space-y-2 bg-gradient-to-b from-background to-muted/20">
        <div className="space-y-1">
          <Atom shade="400" className="h-2 w-32 mx-auto" />
          <Atom shade="300" className="h-1 w-24 mx-auto" />
          <Atom shade="200" className="h-1 w-28 mx-auto" />
        </div>
        <div className="flex gap-1 justify-center">
          <Atom shade="500" className="h-2 w-16 rounded-sm" />
          <Atom shade="200" className="h-2 w-14 rounded-sm ring-1 ring-border" />
        </div>
        <Atom shade="100" className="h-8 w-full rounded-sm" />
      </div>
      <div className="p-2">
        <div className="text-center mb-2">
          <Atom shade="400" className="h-2 w-24 mx-auto mb-1" />
          <Atom shade="200" className="h-1 w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((feature) => (
            <div key={feature} className="text-center space-y-1">
              <Atom shade="300" className="h-4 w-4 rounded-full mx-auto" />
              <Atom shade="400" className="h-1 w-8 mx-auto" />
              <Atom shade="200" className="h-1 w-10 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}