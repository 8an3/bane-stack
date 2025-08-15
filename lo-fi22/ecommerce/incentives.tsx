import { CreditCard, Package, Truck } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Incentives Section
export function IncentivesLoFi() {
  return (
    <div className="p-2 bg-neutral-50 dark:bg-neutral-900">
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Truck className="size-2" /> },
          { icon: <CreditCard className="size-2" /> },
          { icon: <Package className="size-2" /> }
        ].map((incentive, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="flex-shrink-0 p-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700">
              {incentive.icon}
            </div>
            <div className="space-y-0.5">
              <Atom shade="400" className="h-1 w-8" />
              <Atom shade="200" className="h-1 w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
