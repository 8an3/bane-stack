import { CreditCard, Package, Truck } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Incentives Section
export function IncentivesLoFi() {
  return (
    <div className="p-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Truck className="size-8" /> },
          { icon: <CreditCard className="size-8" /> },
          { icon: <Package className="size-8" /> }
        ].map((incentive, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-shrink-0 p-3 rounded-full bg-neutral-200 dark:bg-neutral-700">
              {incentive.icon}
            </div>
            <div className="space-y-2">
              <Atom shade="400" className="h-4 w-32" />
              <Atom shade="200" className="h-3 w-40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}