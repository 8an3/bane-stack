// Checkout Page
import { Atom } from "~/components/lo-fi/atom"
import { CheckoutFormLoFi } from "./checkout-form"
// Ultra-compact CheckoutPageLoFi - fits 228px x 129px
export function CheckoutPageLoFi() {
  return (
    <div className="p-1  h-[353px]">
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2">
          <div className="space-y-0.5">
            <div className="space-y-0.5">
              <Atom shade="200" className="h-0.5 w-3" />
              <Atom shade="100" className="h-1 w-full" />
            </div>
            <div className="space-y-0.5">
              <Atom shade="200" className="h-0.5 w-3" />
              <Atom shade="100" className="h-1 w-full" />
            </div>
            <div className="flex gap-0.5">
              <div className="flex-1 space-y-0.5">
                <Atom shade="200" className="h-0.5 w-2" />
                <Atom shade="100" className="h-1 w-full" />
              </div>
              <div className="flex-1 space-y-0.5">
                <Atom shade="200" className="h-0.5 w-2" />
                <Atom shade="100" className="h-1 w-full" />
              </div>
            </div>
            <Atom shade="300" className="h-1 w-full" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="p-0.5 border rounded space-y-0.5">
            <Atom shade="400" className="h-0.5 w-4" />
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-0.5">
                <Atom shade="200" className="h-1 w-1 rounded-sm" />
                <div className="flex-1 space-y-0.5">
                  <Atom shade="300" className="h-0.5 w-5" />
                  <Atom shade="200" className="h-0.5 w-3" />
                  <div className="flex justify-between">
                    <Atom shade="200" className="h-0.5 w-1" />
                    <Atom shade="400" className="h-0.5 w-2" />
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-0.5 space-y-0.5">
              <div className="flex justify-between">
                <Atom shade="200" className="h-0.5 w-3" />
                <Atom shade="200" className="h-0.5 w-2" />
              </div>
              <div className="flex justify-between">
                <Atom shade="200" className="h-0.5 w-4" />
                <Atom shade="200" className="h-0.5 w-2" />
              </div>
              <div className="flex justify-between border-t pt-0.5">
                <Atom shade="400" className="h-0.5 w-2" />
                <Atom shade="400" className="h-0.5 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}