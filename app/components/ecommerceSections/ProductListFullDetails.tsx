import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample product data
const products = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: 79,
    originalPrice: 99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop",
    category: "Clothing",
    description: "A comfortable and stylish hoodie perfect for everyday wear. Made with premium cotton blend.",
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Minimalist Backpack",
    price: 149,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
    category: "Accessories",
    description: "Clean, functional design meets durability. Perfect for work, travel, or daily commute.",
    colors: ["Black", "Tan", "Olive"],
    sizes: ["One Size"],
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    price: 29,
    originalPrice: 39,
    rating: 4.3,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    category: "Clothing",
    description: "Premium cotton t-shirt with a perfect fit. A wardrobe essential that pairs with everything.",
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 89,
    originalPrice: null,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=600&fit=crop",
    category: "Accessories",
    description: "Handcrafted leather wallet with RFID protection. Slim profile with maximum functionality.",
    colors: ["Brown", "Black", "Tan"],
    sizes: ["One Size"],
    isNew: false,
    isSale: false,
  },
];

// Template 4: Card with Full Details
export function ProductListFullDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Card with Full Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-48">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {product.isNew && (
                      <Badge className="bg-blue-600">New</Badge>
                    )}
                    {product.isSale && (
                      <Badge variant="destructive">Sale</Badge>
                    )}
                  </div>
                  <button className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-gray-700 cursor-pointer mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-900 mr-3">Colors:</span>
                    <div className="flex space-x-2 mt-1">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors ${
                            color === "Black" ? "bg-black" :
                            color === "White" ? "bg-white" :
                            color === "Gray" ? "bg-gray-400" :
                            color === "Navy" ? "bg-blue-900" :
                            color === "Brown" ? "bg-amber-800" :
                            color === "Tan" ? "bg-amber-200" :
                            color === "Olive" ? "bg-green-700" :
                            "bg-gray-300"
                          }`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-900 mr-3">Sizes:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
