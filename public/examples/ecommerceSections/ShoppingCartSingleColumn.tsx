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





// Template 2: Single Column
export function ShoppingCartSingleColumn() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="space-y-8">
        {/* Cart Items */}
        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover object-center rounded-lg border"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.color} • {item.size}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-gray-900 font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          ${item.price} each
                        </p>
                      </div>
                    </div>

                    {!item.inStock && (
                      <div className="flex items-center space-x-2 text-red-600">
                        <span className="text-sm">This item is currently out of stock</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({items.length} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full mt-6">
              Proceed to Checkout
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              Free shipping on orders over $75
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
