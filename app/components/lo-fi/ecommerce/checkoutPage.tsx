// Checkout Page
import { Atom } from "~/components/lo-fi/atom"
import { CheckoutFormLoFi } from "./checkout-form"
export function CheckoutPageLoFi() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutFormLoFi />
        </div>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg space-y-4">
            <Atom shade="400" className="h-4 w-24" />
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-3">
                <Atom shade="200" className="h-16 w-16 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Atom shade="300" className="h-3 w-3/4" />
                  <Atom shade="200" className="h-3 w-1/2" />
                  <div className="flex justify-between">
                    <Atom shade="200" className="h-3 w-8" />
                    <Atom shade="400" className="h-3 w-12" />
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <Atom shade="200" className="h-3 w-16" />
                <Atom shade="200" className="h-3 w-12" />
              </div>
              <div className="flex justify-between">
                <Atom shade="200" className="h-3 w-20" />
                <Atom shade="200" className="h-3 w-12" />
              </div>
              <div className="flex justify-between border-t pt-2">
                <Atom shade="400" className="h-4 w-12" />
                <Atom shade="400" className="h-4 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
