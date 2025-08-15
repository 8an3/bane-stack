import { Atom } from "~/components/lo-fi/atom"

export function ToggleLoFi() {
  return (
    <div className="flex items-center gap-4">
      <Atom shade="400" className="h-5 w-9 rounded-full px-0.5">
        <Atom shade="50" className="size-4 translate-x-4 rounded-full" />
      </Atom>
      <Atom shade="300" className="h-3 w-16" />
    </div>
  )
}