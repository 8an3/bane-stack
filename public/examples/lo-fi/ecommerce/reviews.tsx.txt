import { Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"
// Reviews Section
export function ReviewsSectionLoFi() {
  return (
    <div className="p-2 space-y-2">
      <div className="flex justify-between items-center">
        <Atom shade="400" className="h-1 w-8" />
        <Atom shade="200" className="h-2 w-6 rounded-sm border" />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <div className="text-center space-y-1">
            <Atom shade="500" className="h-3 w-4 mx-auto" />
            <div className="flex justify-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-1 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="space-y-0.5">
            {[5, 4, 3].map((rating) => (
              <div key={rating} className="flex items-center gap-1">
                <Atom shade="200" className="h-0.5 w-1" />
                <div className="flex-1 bg-neutral-200 dark:bg-neutral-700 rounded-full h-0.5">
                  <Atom shade="400" className={`h-0.5 rounded-full ${rating === 5 ? 'w-4/5' : rating === 4 ? 'w-3/5' : 'w-1/5'}`} />
                </div>
                <Atom shade="200" className="h-0.5 w-1" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-1">
          {[1, 2].map((review) => (
            <div key={review} className="p-1 border rounded space-y-1">
              <div className="flex items-center gap-1">
                <Atom shade="300" className="h-2 w-2 rounded-full" />
                <div className="space-y-0.5">
                  <Atom shade="400" className="h-0.5 w-6" />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-0.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-0.5">
                <Atom shade="200" className="h-0.5 w-full" />
                <Atom shade="200" className="h-0.5 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}