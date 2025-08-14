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

 
export const WithSquareImages = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Crafted from the finest materials with attention to every detail.",
      image: mockProducts.main.images.square1,
      icon: Award
    },
    {
      title: "Modern Design", 
      description: "Contemporary aesthetics that complement any lifestyle.",
      image: mockProducts.main.images.square2,
      icon: Zap
    },
    {
      title: "Customer Focused",
      description: "Designed with our customers' needs and preferences in mind.",
      image: mockProducts.main.images.main,
      icon: Heart
    },
    {
      title: "Global Community",
      description: "Loved by customers worldwide who value quality and style.",
      image: mockProducts.main.images.detail1,
      icon: Globe
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Excellence in every aspect
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            From design to delivery, we're committed to providing an exceptional experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="bg-indigo-700">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="block">Ready to experience the difference?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Join thousands of satisfied customers who have made the switch to premium quality.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 