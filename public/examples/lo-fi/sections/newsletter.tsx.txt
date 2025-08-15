import { Atom } from "~/components/lo-fi/atom"


// Newsletter Section
export function NewsletterLoFi() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded-sm">
      <div className="text-center space-y-2">
        <div className="space-y-1">
          <Atom shade="400" className="h-2 w-24 mx-auto" />
          <Atom shade="300" className="h-1 w-28 mx-auto" />
          <Atom shade="200" className="h-1 w-32 mx-auto" />
        </div>
        <div className="flex gap-1">
          <Atom shade="100" className="h-2 flex-1 rounded-sm border" />
          <Atom shade="500" className="h-2 w-12 rounded-sm" />
        </div>
        <Atom shade="200" className="h-1 w-32 mx-auto" />
      </div>
    </div>
  )
}



