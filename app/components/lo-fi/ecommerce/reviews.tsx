import { Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Reviews Section
export function ReviewsSectionLoFi() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-5 w-32" />
        <Atom shade="200" className="h-8 w-24 rounded-md border-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="text-center space-y-3">
            <Atom shade="500" className="h-12 w-16 mx-auto" />
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Atom shade="200" className="h-3 w-32 mx-auto" />
          </div>
          
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <Atom shade="200" className="h-3 w-4" />
                <div className="flex-1 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <Atom shade="400" className={`h-2 rounded-full ${rating === 5 ? 'w-4/5' : rating === 4 ? 'w-3/5' : 'w-1/5'}`} />
                </div>
                <Atom shade="200" className="h-3 w-6" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3 space-y-4">
          {[1, 2, 3].map((review) => (
            <div key={review} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <Atom shade="300" className="h-10 w-10 rounded-full" />
                <div className="space-y-1">
                  <Atom shade="400" className="h-3 w-24" />
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Atom shade="200" className="h-3 w-16 ml-auto" />
              </div>
              <div className="space-y-2">
                <Atom shade="200" className="h-3 w-full" />
                <Atom shade="200" className="h-3 w-4/5" />
                <Atom shade="200" className="h-3 w-2/3" />
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <Atom shade="200" className="h-10 w-32 mx-auto rounded-md border-2" />
          </div>
        </div>
      </div>
    </div>
  )
}