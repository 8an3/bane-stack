import { Star } from "lucide-react"
import { Atom } from "~/components/lo-fi/atom"


// Testimonial Section
export function TestimonialLoFi() {
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <Atom shade="400" className="h-5 w-56 mx-auto mb-4" />
        <Atom shade="200" className="h-3 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((testimonial) => (
          <div key={testimonial} className="p-6 border rounded-lg space-y-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="space-y-2">
              <Atom shade="200" className="h-3 w-full" />
              <Atom shade="200" className="h-3 w-5/6" />
              <Atom shade="200" className="h-3 w-3/4" />
            </div>
            <div className="flex items-center gap-3 pt-4 border-t">
              <Atom shade="300" className="h-12 w-12 rounded-full" />
              <div className="space-y-1">
                <Atom shade="400" className="h-3 w-24" />
                <Atom shade="200" className="h-3 w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
