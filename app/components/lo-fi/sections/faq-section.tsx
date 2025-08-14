import { Atom } from "~/components/lo-fi/atom"
// ~/components/lo-fi/faq-section.tsx
export function FAQSectionLoFi() {
  return (
    <div className="space-y-4">
      <div className="border-b py-2">
        <div className="flex items-center justify-between">
          <Atom 
            shade="300" 
            className="h-2 w-[70%]" 
          />
          <Atom 
            shade="300" 
            className="w-3 h-3 rounded-full" 
          />
        </div>
      </div>

      <div className="border-b py-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Atom 
              shade="300" 
              className="h-2 w-[65%]" 
            />
            <Atom 
              shade="300" 
              className="w-3 h-3 rounded-full" 
            />
          </div>
          
          <div className="space-y-1">
            <Atom 
              shade="200" 
              className="h-0.5 w-[90%]" 
            />
            <Atom 
              shade="200" 
              className="h-0.5 w-[85%]" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}
