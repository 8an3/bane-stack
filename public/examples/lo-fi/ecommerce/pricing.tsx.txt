import { Atom } from "~/components/lo-fi/atom"

// Pricing Section
export function PricingLoFi() {
  return (
    <div className="p-2">
      <div className="text-center mb-2">
        <Atom shade="400" className="h-1 w-9 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-16 mx-auto" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((plan) => (
          <div key={plan} className={`p-1 rounded border ${plan === 2 ? 'border-blue-500' : 'border-neutral-200'} space-y-1`}>
            <div className="text-center space-y-0.5">
              <Atom shade="400" className="h-1 w-5 mx-auto" />
              <div className="flex items-end justify-center gap-0.5">
                <Atom shade="500" className="h-2 w-3" />
                <Atom shade="300" className="h-1 w-2" />
              </div>
            </div>
            <div className="space-y-0.5">
              {[1, 2, 3].map((feature) => (
                <div key={feature} className="flex items-center gap-0.5">
                  <Atom shade="300" className="h-1 w-1 rounded-full" />
                  <Atom shade="200" className="h-0.5 w-8" />
                </div>
              ))}
            </div>
            <Atom shade={plan === 2 ? "500" : "200"} className="h-2 w-full rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  )
}