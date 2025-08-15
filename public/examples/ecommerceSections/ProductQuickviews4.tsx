import React, { useState } from 'react';
import { X, Heart, Star, Minus, Plus, ShoppingCart, ArrowRight, Truck, Shield, RotateCcw, } from 'lucide-react';

 
 

// Product Quickview 3: With large size selector
function ProductQuickview4({ isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { name: 'Small', description: '18L', available: true },
    { name: 'Medium', description: '20L', available: true },
    { name: 'Large', description: '24L', available: true },
    { name: 'Extra Large', description: '32L', available: false }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="absolute top-6 right-6">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop" 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Zip Tote Basket</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(89 reviews)</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-6">$140</p>

                {/* Large Size Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Size</label>
                  <div className="space-y-3">
                    {sizes.map((size) => (
                      <div
                        key={size.name}
                        className={`relative border rounded-lg p-4 cursor-pointer ${
                          selectedSize === size.name
                            ? 'border-indigo-600 ring-2 ring-indigo-600'
                            : size.available
                            ? 'border-gray-300 hover:border-gray-400'
                            : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        }`}
                        onClick={() => size.available && setSelectedSize(size.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`text-sm font-medium ${
                              size.available ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                              {size.name}
                            </p>
                            <p className={`text-sm ${
                              size.available ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {size.description}
                            </p>
                          </div>
                          {!size.available && (
                            <p className="text-sm text-gray-400">Out of stock</p>
                          )}
                        </div>
                        {selectedSize === size.name && (
                          <div className="absolute top-4 right-4">
                            <div className="w-4 h-4 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-16 text-center text-lg">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 flex items-center justify-center text-lg font-medium">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to cart
                </button>
                <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}