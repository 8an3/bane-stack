// Checkout Form
import { Atom } from "~/components/lo-fi/atom"
export function CheckoutPage2LoFi() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <CheckoutFormLoFi />
        </div>
        <div className="space-y-2">
          <div className="p-1 border rounded space-y-1">
            <Atom shade="400" className="h-1 w-6" />
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-1">
                <Atom shade="200" className="h-2 w-2 rounded-sm" />
                <div className="flex-1 space-y-0.5">
                  <Atom shade="300" className="h-1 w-3/4" />
                  <Atom shade="200" className="h-1 w-1/2" />
                </div>
              </div>
            ))}
            <div className="border-t pt-1">
              <div className="flex justify-between">
                <Atom shade="400" className="h-1 w-3" />
                <Atom shade="400" className="h-1 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
