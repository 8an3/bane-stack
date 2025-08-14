import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/category-filter.tsx
export function CategoryFilterLoFi() {
  return (
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 w-3/4"></div>
      <div className="space-y-1 pl-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="bg-gray-100 h-4 w-4"></div>
            <div className="h-3 bg-gray-200 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}