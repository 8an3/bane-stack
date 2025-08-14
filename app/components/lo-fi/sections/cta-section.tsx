import { Atom } from "~/components/lo-fi/atom"
// ~/components/lo-fi/cta-section.tsx
export function CTASectionLoFi() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Atom 
          shade="300" 
          className="h-2 w-[60%]" 
        />
        <Atom 
          shade="300" 
          className="h-0.5 w-[80%]" 
        />
      </div>

      <div className="flex space-x-4">
        <Atom 
          shade="300" 
          className="h-3 w-[120px] rounded-md" 
        />
        <Atom 
          shade="300" 
          className="h-3 w-[120px] rounded-md" 
        />
      </div>
    </div>
  )
}
