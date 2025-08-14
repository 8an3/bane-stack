import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Shield, 
  Truck, 
  RefreshCw, 
  Award,
  Zap,
  Heart,
  Users,
  Globe
} from 'lucide-react';

// Mock product data
const mockProducts = {
  main: {
    name: "Premium Cotton T-Shirt",
    price: "$89",
    rating: 4.8,
    reviews: 124,
    description: "Our premium cotton t-shirt is crafted from the finest 100% organic cotton, providing unmatched comfort and durability. Perfect for everyday wear or special occasions.",
    features: [
      "100% organic cotton construction",
      "Pre-shrunk and machine washable", 
      "Reinforced stitching at stress points",
      "Available in 12 colors and all sizes"
    ],
    images: {
      main: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      wide: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      square1: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      square2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detail1: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      detail2: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  }
};

const mockFeatureDetails = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Crafted from the finest materials with attention to every detail."
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $75 worldwide."
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy with free return shipping included."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by industry experts for design and quality."
  }
];

// Rating Component
const Rating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              rating > star 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="ml-3 text-sm text-gray-500">
        {rating} out of 5 stars ({reviews} reviews)
      </p>
    </div>
  );
};


// Template 2: With wide images
export const WithWideImages = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Premium Collection
          </h2>
          <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Crafted to perfection
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Every piece in our collection is thoughtfully designed and meticulously crafted using the finest materials.
          </p>
        </div>

        <div className="mt-16">
          {/* Wide hero image */}
          <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={mockProducts.main.images.wide}
              alt="Wide product showcase"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {mockFeatureDetails.slice(0, 3).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title}>
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg mb-8">
                    <img
                      src={mockProducts.main.images[`detail${index + 1}`] || mockProducts.main.images.main}
                      alt={feature.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-4 text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};