import { useState, } from "react";
import { Trash2, Heart, ShoppingBag, Minus, Plus, ChevronDown, X, Lock, Truck, Gift, Tag, CreditCard, Shield, } from "lucide-react";
import { Button, } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, } from "~/components/ui/card";
import { Badge, } from "~/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "~/components/ui/select";
import { Separator, } from "~/components/ui/separator";
import { Input, } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger, } from "~/components/ui/popover";

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Essential Hoodie",
    color: "Charcoal",
    size: "Large",
    price: 79,
    originalPrice: 99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop",
    inStock: true,
    stockCount: 12,
    shipping: "Free shipping"
  },
  {
    id: 2,
    name: "Minimalist Backpack",
    color: "Navy",
    size: "One Size",
    price: 149,
    originalPrice: null,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
    inStock: true,
    stockCount: 5,
    shipping: "Free shipping"
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    color: "White",
    size: "Medium",
    price: 29,
    originalPrice: 39,
    quantity: 3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
    inStock: true,
    stockCount: 25,
    shipping: "Free shipping"
  },
  {
    id: 4,
    name: "Leather Wallet",
    color: "Brown",
    size: "One Size",
    price: 89,
    originalPrice: null,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop",
    inStock: false,
    stockCount: 0,
    shipping: "Currently unavailable"
  }
];

// Template 1: Two Column with Quantity Dropdown
export function ShoppingCartTwoColumn() {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = items.reduce((sum, item) => 
    sum + ((item.originalPrice ? item.originalPrice - item.price : 0) * item.quantity), 0
  );
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Cart ({items.length} items)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {items.map((item, index) => (
                <div key={item.id}>
                  <div className="flex space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover object-center rounded-lg border"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Color: {item.color} • Size: {item.size}
                          </p>
                          {!item.inStock && (
                            <Badge variant="destructive" className="mt-1">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-gray-900">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{item.shipping}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Dropdown */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-700">Qty:</span>
                          <Select 
                            value={item.quantity.toString()} 
                            onValueChange={(value) => updateQuantity(item.id, parseInt(value))}
                          >
                            <SelectTrigger className="w-20">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(10)].map((_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Heart className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < items.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary - Takes up 1 column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Promo Code */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline">Apply</Button>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Button */}
          <Button size="lg" className="w-full">
            <Lock className="h-4 w-4 mr-2" />
            Secure Checkout
          </Button>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>Free shipping over $75</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
