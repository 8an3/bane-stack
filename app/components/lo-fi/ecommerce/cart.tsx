import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/cart.tsx
export function CartLoFi() {
  return (
    <div className="border rounded p-3 space-y-3">
      <div className="flex gap-3">
        <div className="bg-gray-100 h-12 w-12"></div>
        <div className="flex-1 space-y-1">
          <div className="h-3 bg-gray-200 w-3/4"></div>
          <div className="h-3 bg-gray-200 w-1/3"></div>
        </div>
      </div>
      <div className="h-px bg-gray-100"></div>
      <div className="flex justify-between">
        <div className="h-3 bg-gray-200 w-1/4"></div>
        <div className="h-3 bg-gray-200 w-1/4"></div>
      </div>
      <div className="h-8 bg-gray-300 w-full"></div>
    </div>
  )
}