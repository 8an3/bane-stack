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

 
// Template 3: With split image
export const WithSplitImage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Innovation
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Where design meets functionality
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our commitment to excellence shows in every detail, from concept to creation.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <div className="lg:pr-8">
                <div className="max-w-prose text-base lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    Every product begins with a vision. Our design team meticulously crafts each piece to ensure it meets our exacting standards for both form and function.
                  </p>
                </div>

                <div className="mt-8 prose prose-indigo text-gray-500 lg:max-w-none">
                  <h3 className="text-lg font-semibold text-gray-900">Uncompromising Quality</h3>
                  <p>
                    We source only the finest materials from trusted suppliers around the world. Each piece undergoes rigorous quality testing to ensure it meets our standards.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900">Sustainable Practices</h3>
                  <p>
                    Environmental responsibility is at the core of our manufacturing process. We're committed to sustainable practices that protect our planet for future generations.
                  </p>

                  <ul className="mt-6 space-y-2">
                    {mockProducts.main.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative text-base mx-auto max-w-prose lg:mt-0 lg:max-w-none">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden lg:aspect-none lg:h-96">
              <img
                src={mockProducts.main.images.detail1}
                alt="Product detail"
                className="w-full h-full object-cover object-center lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden lg:aspect-none lg:h-96">
              <img
                src={mockProducts.main.images.detail2}
                alt="Product craftsmanship"
                className="w-full h-full object-cover object-center lg:w-full lg:h-full"
              />
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Attention to Detail
                </h3>
                <p className="mt-4 text-gray-500">
                  Our craftsmen bring decades of experience to every piece they create. From initial sketch to final inspection, no detail is too small to perfect.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {mockFeatureDetails.slice(0, 2).map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={feature.title} className="text-center">
                        <div className="flex justify-center">
                          <IconComponent className="h-8 w-8 text-indigo-600" />
                        </div>
                        <h4 className="mt-2 text-lg font-medium text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 