// ~/components/lo-fi/card-header.tsx
import { cn } from "~/components/ui/utils"
import { Atom } from "./atom"


export function CardHeaderLoFi() {
  return (
    <div className="flex flex-col gap-1 border-b py-2">
      <Atom shade="300" className="h-2 w-full" />
      <div className="flex items-center justify-between">
        <Atom shade="300" className="h-1 w-[60%]" />
        <Atom shade="300" className="h-1 w-[20%]" />
      </div>
    </div>
  )
}