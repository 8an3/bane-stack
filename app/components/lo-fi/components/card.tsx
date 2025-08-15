

// components/lo-fi/card.tsx
import { Atom } from "~/components/lo-fi/atom"

export function CardLoFi() {
  return (
    <Atom shade="50" className="flex flex-col gap-3 rounded-lg border p-3">
      <Atom shade="300" className="h-3 w-3/4" />
      <Atom shade="200" className="h-2 w-full" />
      <div className="mt-2 flex justify-end">
        <Atom shade="400" className="h-3 w-16 rounded-full" />
      </div>
    </Atom>
  )
}