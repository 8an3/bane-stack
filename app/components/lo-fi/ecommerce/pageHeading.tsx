import { Atom } from "~/components/lo-fi/atom"
// Page Heading
export function PageHeadingLoFi() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Atom shade="200" className="h-3 w-12" />
        <span>/</span>
        <Atom shade="200" className="h-3 w-16" />
        <span>/</span>
        <Atom shade="400" className="h-3 w-20" />
      </div>
      
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <Atom shade="400" className="h-6 w-48" />
          <Atom shade="200" className="h-3 w-64" />
        </div>
        
        <div className="flex gap-3">
          <Atom shade="200" className="h-10 w-24 rounded-md border-2" />
          <Atom shade="500" className="h-10 w-28 rounded-md" />
        </div>
      </div>
    </div>
  )
}
