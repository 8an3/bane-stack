import { Check } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Pricing Page
export function PricingPageLoFi() {
  return (
    <div className="p-2 space-y-2 h-[353px]">
      <div className="text-center space-y-1">
        <Atom shade="400" className="h-2 w-10 mx-auto" />
        <Atom shade="300" className="h-1 w-14 mx-auto" />
        <Atom shade="200" className="h-1 w-16 mx-auto" />
      </div>
      
      <div className="flex justify-center">
        <div className="flex p-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">
          <Atom shade="500" className="h-2 w-5 rounded-sm" />
          <Atom shade="200" className="h-2 w-5 rounded-sm" />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((plan) => (
          <div key={plan} className={`p-2 rounded ${plan === 2 ? 'border-2 border-blue-500 bg-blue-50' : 'border border-neutral-200'} space-y-1`}>
            <div className="text-center space-y-1">
              <Atom shade="400" className="h-1 w-6 mx-auto" />
              <div className="flex items-end justify-center gap-0.5">
                <Atom shade="500" className="h-3 w-4" />
                <Atom shade="300" className="h-1 w-3" />
              </div>
            </div>
            
            <div className="space-y-0.5">
              {[1, 2, 3].map((feature) => (
                <div key={feature} className="flex items-center gap-0.5">
                  <Check className="size-1 text-green-500" />
                  <Atom shade="200" className="h-0.5 w-8" />
                </div>
              ))}
            </div>
            
            <Atom shade={plan === 2 ? "500" : "200"} className="h-3 w-full rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  )
}