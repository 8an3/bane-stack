import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/checkout-form.tsx
export function CheckoutFormLoFi() {
  return (
    <div className="space-y-1">
      <div className="space-y-0.5">
        <Atom shade="200" className="h-1 w-1/4" />
        <Atom shade="100" className="h-2 w-full" />
      </div>
      <div className="space-y-0.5">
        <Atom shade="200" className="h-1 w-1/4" />
        <Atom shade="100" className="h-2 w-full" />
      </div>
      <div className="flex gap-1">
        <div className="flex-1 space-y-0.5">
          <Atom shade="200" className="h-1 w-1/4" />
          <Atom shade="100" className="h-2 w-full" />
        </div>
        <div className="flex-1 space-y-0.5">
          <Atom shade="200" className="h-1 w-1/4" />
          <Atom shade="100" className="h-2 w-full" />
        </div>
      </div>
      <Atom shade="300" className="h-2 w-full" />
    </div>
  )
}