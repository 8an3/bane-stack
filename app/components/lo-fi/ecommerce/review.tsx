import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/review.tsx
export function ReviewLoFi() {
  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-4 w-4"></div>
        ))}
      </div>
      <div className="h-3 bg-gray-200 w-3/4"></div>
    </div>
  )
}