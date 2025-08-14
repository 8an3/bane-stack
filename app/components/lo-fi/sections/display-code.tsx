import { Atom } from "~/components/lo-fi/atom"
// ~/components/lo-fi/display-code.tsx
export function DisplayCodeLoFi() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-12 gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <Atom 
            key={i}
            shade="300"
            className="h-4 w-full"
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-b py-2">
        <Atom 
          shade="300" 
          className="h-2 w-[20%]" 
        />
        <Atom 
          shade="300" 
          className="h-2 w-[60%]" 
        />
      </div>
    </div>
  )
}