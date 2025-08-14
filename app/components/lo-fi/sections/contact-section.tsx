import { Atom } from "~/components/lo-fi/atom"

// ~/components/lo-fi/contact-section.tsx
export function ContactSectionLoFi() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Name Input */}
      <div className="space-y-2">
        <Atom 
          shade="300" 
          className="h-2 w-full" 
        />
        <Atom 
          shade="300" 
          className="h-0.5 w-[90%]" 
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <Atom 
          shade="300" 
          className="h-2 w-full" 
        />
        <Atom 
          shade="300" 
          className="h-0.5 w-[90%]" 
        />
      </div>

      {/* Message Area */}
      <div className="col-span-2 space-y-2">
        <Atom 
          shade="300" 
          className="h-2 w-full" 
        />
        <Atom 
          shade="300" 
          className="h-0.5 w-[95%]" 
        />
        <Atom 
          shade="300" 
          className="h-0.5 w-[90%]" 
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2">
        <Atom 
          shade="300" 
          className="h-3 w-[120px] rounded-md" 
        />
      </div>
    </div>
  )
}
