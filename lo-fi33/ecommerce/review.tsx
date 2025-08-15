import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/review.tsx
export function ReviewLoFi() {
  return (
    <div className="space-y-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Atom key={i} shade="200" className="h-1 w-1" />
        ))}
      </div>
      <Atom shade="200" className="h-1 w-3/4" />
    </div>
  )
}