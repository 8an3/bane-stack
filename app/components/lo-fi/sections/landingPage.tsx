// Landing Page
import { Atom } from "~/components/lo-fi/atom"
export function LandingPageLoFi() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <div className="p-12 text-center space-y-8 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="space-y-4">
          <Atom shade="400" className="h-8 w-2/3 max-w-2xl mx-auto" />
          <Atom shade="300" className="h-6 w-1/2 max-w-xl mx-auto" />
          <div className="space-y-2 max-w-md mx-auto">
            <Atom shade="200" className="h-3 w-full" />
            <Atom shade="200" className="h-3 w-4/5 mx-auto" />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Atom shade="500" className="h-12 w-32 rounded-md" />
          <Atom shade="200" className="h-12 w-28 rounded-md border-2" />
        </div>
        <Atom shade="100" className="h-80 w-full max-w-4xl mx-auto rounded-lg" />
      </div>
      
      {/* Features */}
      <div className="p-12">
        <div className="text-center mb-12 space-y-4">
          <Atom shade="400" className="h-5 w-48 mx-auto" />
          <Atom shade="200" className="h-3 w-64 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((feature) => (
            <div key={feature} className="text-center space-y-4">
              <Atom shade="300" className="h-16 w-16 rounded-full mx-auto" />
              <Atom shade="400" className="h-4 w-32 mx-auto" />
              <div className="space-y-2">
                <Atom shade="200" className="h-3 w-full" />
                <Atom shade="200" className="h-3 w-4/5 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="p-12 bg-neutral-50 dark:bg-neutral-900 text-center space-y-6">
        <Atom shade="400" className="h-6 w-64 mx-auto" />
        <Atom shade="200" className="h-3 w-48 mx-auto" />
        <Atom shade="500" className="h-12 w-40 mx-auto rounded-md" />
      </div>
    </div>
  )
}