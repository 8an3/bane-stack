// components/ecommerce/product/gallery-expandable.tsx
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ChevronDown, ChevronRight, Star, Truck } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible"
import { useState } from "react"

export function ProductOverviewGalleryExpandable() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <CardHeader className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <span className="text-gray-400">Main product image</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-100 aspect-square flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Thumb {item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Ergonomic Chair</h1>
              <p className="text-muted-foreground">Office Furniture</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(42 reviews)</span>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">$249</p>
              <p className="text-green-600 text-sm">In stock</p>
            </div>

            <div className="space-y-4">
              <Button className="w-full">Add to cart</Button>
              <Button variant="outline" className="w-full">
                Add to wishlist
              </Button>
            </div>

            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Product details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 text-sm text-muted-foreground">
                <p>Premium ergonomic design with adjustable height and lumbar support.</p>
                <p>Materials: High-quality mesh fabric, steel frame</p>
                <p>Dimensions: 25.6" W x 27.2" D x 38.6" - 43.3" H</p>
                <p>Weight capacity: 250 lbs</p>
              </CollapsibleContent>
            </Collapsible>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">1-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}