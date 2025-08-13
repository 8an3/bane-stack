

// components/lo-fi/tabs.tsx
import { Atom } from "~/components/lo-fi/atom"

export function TabsLoFi() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 border-b">
        <Atom shade="300" className="h-8 w-16 rounded-t-md border border-b-0" />
        <Atom shade="200" className="h-8 w-20 rounded-t-md border border-b-0" />
        <Atom shade="200" className="h-8 w-12 rounded-t-md border border-b-0" />
      </div>
      <Atom shade="100" className="h-20 w-full rounded-b-md border border-t-0 p-3">
        <Atom shade="300" className="h-3 w-1/2" />
        <Atom shade="200" className="mt-2 h-2 w-full" />
        <Atom shade="200" className="mt-1 h-2 w-3/4" />
      </Atom>
    </div>
  )
}