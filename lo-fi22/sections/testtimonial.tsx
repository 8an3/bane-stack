import { Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"


// Testimonial Section
export function TestimonialLoFi() {
  return (
    <div className="p-2">
      <div className="text-center mb-2">
        <Atom shade="400" className="h-2 w-16 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-20 mx-auto" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((testimonial) => (
          <div key={testimonial} className="p-2 border rounded space-y-1">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-1 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="space-y-0.5">
              <Atom shade="200" className="h-1 w-full" />
              <Atom shade="200" className="h-1 w-3/4" />
            </div>
            <div className="flex items-center gap-1 pt-1 border-t">
              <Atom shade="300" className="h-2 w-2 rounded-full" />
              <div>
                <Atom shade="400" className="h-1 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}