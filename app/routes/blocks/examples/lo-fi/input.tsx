

// components/lo-fi/input.tsx
import { Atom } from "~/components/lo-fi/atom"

export function InputLoFi() {
  return (
    <div className="flex flex-col gap-2">
      <Atom shade="300" className="h-3 w-1/4" />
      <Atom shade="100" className="h-8 w-full rounded-md border" />
    </div>
  )
}