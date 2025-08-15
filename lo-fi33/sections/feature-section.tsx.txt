import { Atom } from "~/components/lo-fi/atom";
// ~/components/lo-fi/feature-section.tsx

export function FeatureSectionLoFi() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-1">
          <Atom shade="300" className="h-3 w-3 rounded" />
          <div className="space-y-0.5">
            <Atom shade="300" className="h-1 w-[80%]" />
            <Atom shade="200" className="h-0.5 w-[95%]" />
            <Atom shade="200" className="h-0.5 w-[90%]" />
          </div>
        </div>
      ))}
    </div>
  )
}

