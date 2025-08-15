import { Atom } from "~/components/lo-fi/atom"
// components/lo-fi/product-card.tsx
export function ProductCardLoFi() {
  return (
    <div className="border rounded p-1 space-y-1">
      <Atom shade="100" className="h-6 w-full" />
      <Atom shade="200" className="h-1 w-3/4" />
      <Atom shade="200" className="h-1 w-1/2" />
      <Atom shade="300" className="h-1 w-4" />
    </div>
  )
}