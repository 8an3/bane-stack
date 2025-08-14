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


// Template 2: With Border Grid
export function ProductListBorderGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">With Border Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border border-gray-200">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group p-6 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors ${
              index % 4 === 3 ? "border-r-0" : ""
            } ${index >= products.length - 4 ? "border-b-0" : ""}`}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 flex space-x-1">
                {product.isNew && (
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    New
                  </Badge>
                )}
                {product.isSale && (
                  <Badge variant="destructive">Sale</Badge>
                )}
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-gray-700 cursor-pointer">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{product.category}</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">{product.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button size="sm" variant="outline">
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}