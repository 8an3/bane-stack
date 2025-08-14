import { Atom } from "~/components/lo-fi/atom"


// Page Navigation Section
export function PageNavLoFi() {
  return (
    <div className="flex items-center justify-between p-4 border-t border-b">
      <Atom shade="300" className="h-8 w-20 rounded-md" />
      <div className="flex items-center gap-2">
        <Atom shade="200" className="h-8 w-8 rounded-md" />
        <Atom shade="400" className="h-8 w-8 rounded-md" />
        <Atom shade="200" className="h-8 w-8 rounded-md" />
        <span className="mx-2">...</span>
        <Atom shade="200" className="h-8 w-8 rounded-md" />
      </div>
      <Atom shade="300" className="h-8 w-16 rounded-md" />
    </div>
  )
}
