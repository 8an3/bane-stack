

// components/lo-fi/button.tsx
import { Atom } from "~/components/lo-fi/atom"

export function ButtonLoFi() {
  return (
    <div className="flex flex-wrap gap-2">
      <Atom shade="300" className="h-6 w-24 rounded-full" />
      <Atom shade="500" className="h-6 w-20 rounded-full" />
      <Atom shade="200" className="h-6 w-16 rounded-full" />
    </div>
  )
}
