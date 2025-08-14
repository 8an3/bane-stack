// components/ecommerce/product/tiered-images.tsx
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ChevronRight, Star, Truck } from "lucide-react"

export function ProductOverviewTieredImages() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 h-96 md:h-full flex items-center justify-center">
            <span className="text-gray-400">Main product image</span>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Minimalist Chair</h1>
              <p className="text-muted-foreground">Furniture</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">$199</p>
              <p className="text-sm text-muted-foreground line-through">$299</p>
              <p className="text-green-600 text-sm">In stock and ready to ship</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">30-day returns</span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full">Add to cart</Button>
              <Button variant="outline" className="w-full">
                Add to wishlist
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 aspect-square flex items-center justify-center">
              <span className="text-gray-400 text-sm">Thumbnail {item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}