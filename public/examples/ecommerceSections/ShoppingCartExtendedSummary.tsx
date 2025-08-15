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

// Template 3: With Extended Summary
export function ShoppingCartExtendedSummary() {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
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
  const giftWrapFee = giftWrap ? 4.99 : 0;
  const tax = (subtotal + giftWrapFee) * 0.08;
  const total = subtotal + shipping + giftWrapFee + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="xl:col-span-2 space-y-6">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover object-center rounded-lg border"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Color: {item.color} • Size: {item.size}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {item.shipping}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-semibold text-gray-900">
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 rounded-md border hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-gray-900 font-medium w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 rounded-md border hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                          <Heart className="h-4 w-4" />
                          <span>Save for later</span>
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {!item.inStock && (
                      <div className="p-3 bg-red-50 rounded-md">
                        <p className="text-sm text-red-800">
                          This item is currently out of stock. Remove it from your cart or save it for later.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extended Summary */}
        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You saved</span>
                    <span className="font-medium">-${savings.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <div className="text-right">
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                    {subtotal < 75 && (
                      <p className="text-xs text-gray-500">
                        Add ${(75 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="giftWrap"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="giftWrap" className="text-sm text-gray-600">
                      Gift wrap
                    </label>
                  </div>
                  <span className="font-medium">
                    {giftWrap ? `$${giftWrapFee.toFixed(2)}` : "Free"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                <Separator />
                
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promo Code */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" size="sm">Apply</Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-900">We accept</span>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <span className="text-xs text-gray-500">Visa, Mastercard, Amex</span>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <Lock className="h-4 w-4 mr-2" />
                Secure Checkout
              </Button>
            </CardContent>
          </Card>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 gap-3 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>SSL Encrypted Checkout</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Truck className="h-4 w-4" />
              <span>Free returns within 30 days</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Gift className="h-4 w-4" />
              <span>Free gift wrapping available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
