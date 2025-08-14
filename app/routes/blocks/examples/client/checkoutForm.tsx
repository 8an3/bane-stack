
import React, { useState } from 'react'
import { 
  X, 
  ChevronDown, 
  Lock, 
  CreditCard, 
  Truck, 
  MapPin, 
  ShoppingBag,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Gift
} from 'lucide-react'

// Mock shadcn/ui components
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    link: "text-slate-900 underline-offset-4 hover:underline",
    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90"
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({ className = "", ...props }) => (
  <input 
    className={`flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

const Label = ({ children, className = "", ...props }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
    {children}
  </label>
)

const Select = ({ children, className = "", ...props }) => (
  <div className="relative">
    <select 
      className={`flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none ${className}`}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
  </div>
)

const Checkbox = ({ checked, onChange, className = "", ...props }) => (
  <input 
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className={`h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-950 ${className}`}
    {...props}
  />
)

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-900",
    secondary: "bg-slate-100 text-slate-900",
    destructive: "bg-red-100 text-red-900",
    outline: "border border-slate-200"
  }
  
  return (
    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

// Mock order data
const orderItems = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Charcoal",
    size: "Large",
    price: 32.00,
    originalPrice: 36.00,
    quantity: 1,
    image: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Basic Tee",
    color: "Black", 
    size: "Large",
    price: 32.00,
    quantity: 1,
    image: "/api/placeholder/80/80"
  }
]

// Order Summary Component
const OrderSummary = ({ isDesktop = false, onClose }) => {
  const [promoCode, setPromoCode] = useState('')
  const [isPromoApplied, setIsPromoApplied] = useState(false)
  
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 8.00
  const tax = subtotal * 0.08
  const discount = isPromoApplied ? 10.00 : 0
  const total = subtotal + shipping + tax - discount

  const applyPromo = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setIsPromoApplied(true)
    }
  }

  return (
    <div className={`${isDesktop ? '' : 'h-full overflow-y-auto'} bg-white`}>
      {!isDesktop && (
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <div className={`${isDesktop ? 'p-6' : 'p-4'} space-y-6`}>
        {/* Order Items */}
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex space-x-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-md bg-slate-200 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-slate-400" />
                </div>
                <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.color}, {item.size}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">${item.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="space-y-3">
          <div className="flex space-x-2">
            <Input
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline" onClick={applyPromo} disabled={isPromoApplied}>
              Apply
            </Button>
          </div>
          {isPromoApplied && (
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <Check className="h-4 w-4" />
              <span>Promo code "SAVE10" applied</span>
            </div>
          )}
        </div>

        {/* Order Totals */}
        <div className="space-y-3 border-t pt-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {isPromoApplied && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-base font-semibold border-t pt-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-sm text-slate-500 border-t pt-4">
          <Lock className="h-4 w-4" />
          <span>Secure checkout</span>
        </div>
      </div>
    </div>
  )
}

// Mobile Order Summary Overlay
const MobileOrderSummaryOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Overlay */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 lg:hidden">
        <OrderSummary onClose={onClose} />
      </div>
    </>
  )
}

// Main Checkout Form
export default function CheckoutForm() {
  const [showMobileOrderSummary, setShowMobileOrderSummary] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    phone: '',
    sameAsShipping: true,
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
    saveInfo: false,
    newsletter: false
  })

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal + 8.00 + (subtotal * 0.08) // shipping + tax

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Order Summary Toggle */}
      <div className="lg:hidden bg-white border-b px-4 py-3">
        <button
          onClick={() => setShowMobileOrderSummary(true)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-sm font-medium">Show order summary</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">${total.toFixed(2)}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Checkout Form */}
        <div className="px-4 py-6 sm:px-6 lg:px-0 lg:py-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-medium text-slate-900">Contact information</h2>
                <div className="mt-4">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className="mt-1"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h2 className="text-lg font-medium text-slate-900">Shipping information</h2>
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange('firstName')}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange('lastName')}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange('address')}
                      className="mt-1"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange('city')}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="region">State / Province</Label>
                      <Select
                        id="region"
                        value={formData.region}
                        onChange={handleInputChange('region')}
                        className="mt-1"
                      >
                        <option value="">Select...</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange('postalCode')}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div>
                <h2 className="text-lg font-medium text-slate-900">Billing information</h2>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.sameAsShipping}
                      onChange={handleInputChange('sameAsShipping')}
                    />
                    <Label>Same as shipping information</Label>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-lg font-medium text-slate-900">Payment</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-slate-400" />
                    <span className="text-sm font-medium">Credit card</span>
                  </div>

                  <div>
                    <Label htmlFor="cardNumber">Card number</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange('cardNumber')}
                      className="mt-1"
                      placeholder="1234 1234 1234 1234"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiration date (MM/YY)</Label>
                      <Input
                        id="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange('expiry')}
                        className="mt-1"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange('cvc')}
                        className="mt-1"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nameOnCard">Name on card</Label>
                    <Input
                      id="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange('nameOnCard')}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={formData.saveInfo}
                    onChange={handleInputChange('saveInfo')}
                  />
                  <Label>Save this information for next time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={formData.newsletter}
                    onChange={handleInputChange('newsletter')}
                  />
                  <Label>Email me with news and offers</Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg">
                <Lock className="h-4 w-4 mr-2" />
                Complete order
              </Button>

              <div className="text-xs text-center text-slate-500">
                By placing this order you agree to the{' '}
                <a href="#" className="text-slate-900 underline">Terms and Conditions</a>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop Order Summary */}
        <div className="hidden lg:block bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <OrderSummary isDesktop={true} />
          </div>
        </div>
      </div>

      {/* Mobile Order Summary Overlay */}
      <MobileOrderSummaryOverlay 
        isOpen={showMobileOrderSummary}
        onClose={() => setShowMobileOrderSummary(false)}
      />
    </div>
  )
}