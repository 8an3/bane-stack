import React, { useState } from 'react';
import { X, Heart, Star, Minus, Plus, ShoppingCart, ArrowRight, Truck, Shield, RotateCcw, } from 'lucide-react';

 

// Product Quickview 2: With color selector and description
function ProductQuickview3({ isOpen, onClose }) {
  const [selectedColor, setSelectedColor] = useState('indigo');
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: 'Indigo', value: 'indigo', hex: '#4F46E5' },
    { name: 'Pink', value: 'pink', hex: '#EC4899' },
    { name: 'Green', value: 'green', hex: '#10B981' },
    { name: 'Orange', value: 'orange', hex: '#F97316' }
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
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&crop=entropy&seed=${i}`}
                      alt={`Product ${i}`} 
                      className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Everyday Ruck Snack</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1,2,3,4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(32 reviews)</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-6">$220</p>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Don't compromise on snack-carrying capacity with this lightweight and spacious bag. 
                    The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, 
                    and cookies secure.
                  </p>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Color</label>
                  <div className="flex space-x-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color.value ? 'border-gray-900' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Truck className="w-4 h-4 mr-2" />
                      Free shipping on orders over $300
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 mr-2" />
                      Free returns within 30 days
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      2-year warranty included
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 flex items-center justify-center">
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
