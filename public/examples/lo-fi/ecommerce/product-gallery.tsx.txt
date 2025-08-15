// components/lo-fi/product-gallery.tsx
import { Atom } from "~/components/lo-fi/atom";
export function ProductGalleryLoFi() {
  return (
    <div className="flex gap-1">
      <Atom shade="100" className="h-4 w-4" />
      <Atom shade="100" className="flex-1 h-12" />
    </div>
  )
}
