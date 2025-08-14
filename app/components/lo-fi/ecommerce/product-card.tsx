import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/product-card.tsx
export function ProductCardLoFi() {
  return (
    <div className="border rounded p-3 space-y-2">
      <div className="bg-gray-100 h-24 w-full"></div>
      <div className="h-4 bg-gray-200 w-3/4"></div>
      <div className="h-3 bg-gray-200 w-1/2"></div>
      <div className="h-6 bg-gray-300 w-16"></div>
    </div>
  )
}