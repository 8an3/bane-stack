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

// Template 1: With header, images, and descriptions
export const WithHeaderImagesDescriptions = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Designed for comfort and style
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Our premium collection combines timeless design with modern functionality, 
            creating pieces that are both beautiful and practical for everyday life.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          {/* Product Info */}
          <div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={mockProducts.main.images.main}
                alt="Product"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {mockProducts.main.name}
            </h3>
            
            <div className="mt-4">
              <Rating 
                rating={mockProducts.main.rating} 
                reviews={mockProducts.main.reviews} 
              />
            </div>

            <p className="mt-6 text-gray-500">
              {mockProducts.main.description}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {mockFeatureDetails.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="border-t border-gray-200 pt-4">
                    <dt className="flex items-center text-sm font-medium text-gray-900">
                      <IconComponent className="h-5 w-5 text-indigo-600 mr-2" />
                      {feature.title}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-900">Features</h4>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-500">
                {mockProducts.main.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 