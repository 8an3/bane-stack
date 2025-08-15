import { Atom } from "~/components/lo-fi/atom"
// Page Heading
export function PageHeadingLoFi() {
  return (
    <div className="p-2 space-y-1">
      <div className="flex items-center gap-1">
        <Atom shade="200" className="h-1 w-3" />
        <span className="text-xs">/</span>
        <Atom shade="200" className="h-1 w-4" />
        <span className="text-xs">/</span>
        <Atom shade="400" className="h-1 w-5" />
      </div>
      
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <Atom shade="400" className="h-2 w-12" />
          <Atom shade="200" className="h-1 w-16" />
        </div>
        
        <div className="flex gap-1">
          <Atom shade="200" className="h-2 w-6 rounded-sm border" />
          <Atom shade="500" className="h-2 w-7 rounded-sm" />
        </div>
      </div>
    </div>
  )
}