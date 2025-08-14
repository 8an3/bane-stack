import { Atom } from "~/components/lo-fi/atom"


// Newsletter Section
export function NewsletterLoFi() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="space-y-3">
          <Atom shade="400" className="h-5 w-48 mx-auto" />
          <Atom shade="300" className="h-4 w-56 mx-auto" />
          <div className="space-y-2">
            <Atom shade="200" className="h-3 w-full" />
            <Atom shade="200" className="h-3 w-4/5 mx-auto" />
          </div>
        </div>
        <div className="flex gap-2">
          <Atom shade="100" className="h-10 flex-1 rounded-md border-2" />
          <Atom shade="500" className="h-10 w-24 rounded-md" />
        </div>
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
    </div>
  )
}