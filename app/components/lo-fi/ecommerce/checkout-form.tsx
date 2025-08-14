import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/checkout-form.tsx
export function CheckoutFormLoFi() {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <div className="h-3 bg-gray-200 w-1/4"></div>
        <div className="h-8 bg-gray-100 w-full"></div>
      </div>
      <div className="space-y-1">
        <div className="h-3 bg-gray-200 w-1/4"></div>
        <div className="h-8 bg-gray-100 w-full"></div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <div className="h-3 bg-gray-200 w-1/4"></div>
          <div className="h-8 bg-gray-100 w-full"></div>
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-3 bg-gray-200 w-1/4"></div>
          <div className="h-8 bg-gray-100 w-full"></div>
        </div>
      </div>
      <div className="h-10 bg-gray-300 w-full"></div>
    </div>
  )
}