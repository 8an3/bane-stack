// Checkout Form
import { Atom } from "~/components/lo-fi/atom"
export function CheckoutFormLoFi() {
  return (
    <div className="p-6 space-y-8">
      <Atom shade="400" className="h-5 w-32" />
      <div className="space-y-6">
        <div className="space-y-4">
          <Atom shade="300" className="h-4 w-40" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Atom shade="100" className="h-10 w-full rounded-md border-2" />
            <Atom shade="100" className="h-10 w-full rounded-md border-2" />
          </div>
          <Atom shade="100" className="h-10 w-full rounded-md border-2" />
          <div className="grid grid-cols-2 gap-4">
            <Atom shade="100" className="h-10 w-full rounded-md border-2" />
            <Atom shade="100" className="h-10 w-full rounded-md border-2" />
          </div>
        </div>
        <div className="space-y-4">
          <Atom shade="300" className="h-4 w-36" />
          <Atom shade="100" className="h-10 w-full rounded-md border-2" />
          <div className="grid grid-cols-3 gap-4">
            <Atom shade="100" className="h-10 w-full rounded-md border-2 col-span-2" />
            <Atom shade="100" className="h-10 w-full rounded-md border-2" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Atom shade="200" className="h-4 w-4 rounded-sm border-2" />
          <Atom shade="200" className="h-3 w-48" />
        </div>
        <Atom shade="500" className="h-12 w-full rounded-md" />
      </div>
    </div>
  )
}