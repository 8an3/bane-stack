import { Atom } from "~/components/lo-fi/atom"
// ~/components/lo-fi/cta-section.tsx

export function CTASectionLoFi() {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Atom shade="300" className="h-2 w-[60%]" />
        <Atom shade="300" className="h-0.5 w-[80%]" />
      </div>
      <div className="flex space-x-2">
        <Atom shade="300" className="h-2 w-8 rounded" />
        <Atom shade="300" className="h-2 w-8 rounded" />
      </div>
    </div>
  )
}
