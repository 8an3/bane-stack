import { ArrowLeft } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Order Details Page
export function OrderDetailsPageLoFi() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center gap-4">
        <ArrowLeft className="size-5" />
        <Atom shade="400" className="h-5 w-32" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <Atom shade="400" className="h-4 w-24" />
              <Atom shade="300" className="h-6 w-20 rounded-full px-3 py-1" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Atom shade="300" className="h-3 w-16" />
                <Atom shade="200" className="h-3 w-24" />
              </div>
              <div className="space-y-2">
                <Atom shade="300" className="h-3 w-20" />
                <Atom shade="200" className="h-3 w-20" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Atom shade="400" className="h-4 w-20" />
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 p-4 border rounded-lg">
                <Atom shade="200" className="h-20 w-20 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Atom shade="400" className="h-4 w-3/4" />
                  <Atom shade="200" className="h-3 w-1/2" />
                  <div className="flex justify-between">
                    <Atom shade="200" className="h-3 w-12" />
                    <Atom shade="400" className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-lg space-y-4">
            <Atom shade="400" className="h-4 w-32" />
            <div className="space-y-2">
              {[1, 2, 3].map((line) => (
                <div key={line} className="flex justify-between">
                  <Atom shade="200" className="h-3 w-20" />
                  <Atom shade="200" className="h-3 w-12" />
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between">
                <Atom shade="400" className="h-4 w-12" />
                <Atom shade="400" className="h-4 w-16" />
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg space-y-3">
            <Atom shade="400" className="h-4 w-28" />
            <div className="space-y-1">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-4/5" />
              <Atom shade="200" className="h-3 w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}