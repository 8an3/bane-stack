import { Check } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Pricing Page
export function PricingPageLoFi() {
  return (
    <div className="p-8 space-y-12">
      <div className="text-center space-y-4">
        <Atom shade="400" className="h-6 w-40 mx-auto" />
        <Atom shade="300" className="h-5 w-56 mx-auto" />
        <div className="space-y-2">
          <Atom shade="200" className="h-3 w-full max-w-md mx-auto" />
          <Atom shade="200" className="h-3 w-4/5 max-w-md mx-auto" />
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <Atom shade="500" className="h-10 w-20 rounded-md" />
          <Atom shade="200" className="h-10 w-20 rounded-md" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((plan) => (
          <div key={plan} className={`p-8 rounded-xl ${plan === 2 ? 'border-2 border-blue-500 bg-blue-50 dark:bg-blue-950' : 'border border-neutral-200'} space-y-6`}>
            <div className="text-center space-y-4">
              <Atom shade="400" className="h-5 w-24 mx-auto" />
              <div className="flex items-end justify-center gap-1">
                <Atom shade="500" className="h-12 w-16" />
                <Atom shade="300" className="h-6 w-12" />
              </div>
              <Atom shade="200" className="h-3 w-32 mx-auto" />
            </div>
            
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="size-4 text-green-500" />
                  <Atom shade="200" className="h-3 w-32" />
                </div>
              ))}
            </div>
            
            <Atom shade={plan === 2 ? "500" : "200"} className="h-12 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}