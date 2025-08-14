import { Atom } from "~/components/lo-fi/atom"

// Pricing Section
export function PricingLoFi() {
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <Atom shade="400" className="h-5 w-36 mx-auto mb-4" />
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((plan) => (
          <div key={plan} className={`p-6 rounded-lg border-2 ${plan === 2 ? 'border-blue-500' : 'border-neutral-200'} space-y-6`}>
            <div className="text-center space-y-3">
              <Atom shade="400" className="h-4 w-20 mx-auto" />
              <div className="flex items-end justify-center gap-1">
                <Atom shade="500" className="h-8 w-12" />
                <Atom shade="300" className="h-4 w-8" />
              </div>
              <Atom shade="200" className="h-3 w-32 mx-auto" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Atom shade="300" className="h-4 w-4 rounded-full" />
                  <Atom shade="200" className="h-3 w-32" />
                </div>
              ))}
            </div>
            <Atom shade={plan === 2 ? "500" : "200"} className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
