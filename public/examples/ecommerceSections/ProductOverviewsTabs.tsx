// components/ecommerce/product/tabs-layout.tsx
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Star, Truck, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export function ProductOverviewTabs() {
  return (
    <Card>
      <CardHeader className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 p-6">
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <span className="text-gray-400">Product image</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 aspect-square flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Thumb {item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Modern Desk</h1>
              <p className="text-muted-foreground">Home Office</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(18 reviews)</span>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">$349</p>
              <p className="text-green-600 text-sm">Only 3 left in stock</p>
            </div>

            <div className="space-y-4">
              <Button className="w-full">Add to cart</Button>
              <Button variant="outline" className="w-full">
                Add to wishlist
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Assembly included</span>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specs">Specs</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-sm text-muted-foreground pt-4">
                <p>Sleek modern desk with ample workspace and built-in cable management.</p>
                <p className="mt-2">Perfect for home offices with its minimalist design and durable construction.</p>
              </TabsContent>
              <TabsContent value="specs" className="text-sm text-muted-foreground pt-4">
                <ul className="space-y-2">
                  <li>Dimensions: 48" W x 24" D x 30" H</li>
                  <li>Material: Solid wood with metal legs</li>
                  <li>Weight: 45 lbs</li>
                  <li>Color options: Walnut, White, Black</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="text-sm text-muted-foreground pt-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Great quality</p>
                    <p>Perfect size for my home office. Very sturdy.</p>
                  </div>
                  <div>
                    <p className="font-medium">Beautiful design</p>
                    <p>Looks exactly like the pictures. Easy to assemble.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}