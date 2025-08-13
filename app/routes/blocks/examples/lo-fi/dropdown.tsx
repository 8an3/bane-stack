
// components/lo-fi/dropdown.tsx
import { ChevronDownIcon } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"

export function DropdownLoFi() {
  return (
    <div className="relative w-32">
      <Atom shade="100" className="flex items-center justify-between rounded-md border px-3 py-1.5">
        <Atom shade="300" className="h-2 w-3/4" />
        <ChevronDownIcon className="size-3" />
      </Atom>
    </div>
  )
} 