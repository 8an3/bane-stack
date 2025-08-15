import { Atom } from "~/components/lo-fi/atom"

// ~/components/lo-fi/contact-section.tsx


export function ContactSectionLoFi() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-1">
        <Atom shade="300" className="h-2 w-full" />
        <Atom shade="300" className="h-0.5 w-[90%]" />
      </div>
      <div className="space-y-1">
        <Atom shade="300" className="h-2 w-full" />
        <Atom shade="300" className="h-0.5 w-[90%]" />
      </div>
      <div className="col-span-2 space-y-1">
        <Atom shade="300" className="h-2 w-full" />
        <Atom shade="300" className="h-0.5 w-[95%]" />
        <Atom shade="300" className="h-0.5 w-[90%]" />
      </div>
      <div className="col-span-2">
        <Atom shade="300" className="h-2 w-8 rounded" />
      </div>
    </div>
  )
}

