import { Atom } from "~/components/lo-fi/atom"

// ~/components/lo-fi/content-section.tsx

export function ContentSectionLoFi() {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Atom shade="300" className="h-2 w-[80%]" />
        <Atom shade="300" className="h-0.5 w-[95%]" />
        <Atom shade="300" className="h-0.5 w-[90%]" />
      </div>
      <div className="space-y-1">
        <Atom shade="300" className="h-2 w-[75%]" />
        <Atom shade="300" className="h-0.5 w-[92%]" />
      </div>
    </div>
  )
}

