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
const WithHeaderImagesDescriptions = () => {
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

// Template 2: With wide images
const WithWideImages = () => {
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

// Template 3: With split image
const WithSplitImage = () => {
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

// Template 4: With alternating sections
const WithAlternatingSections = () => {
  const sections = [
    {
      title: "Premium Materials",
      description: "We source only the finest materials from trusted suppliers around the world. Each material is carefully selected for its quality, durability, and environmental impact.",
      image: mockProducts.main.images.detail1,
      features: ["100% organic cotton", "Sustainably sourced", "Certified quality"],
      reverse: false
    },
    {
      title: "Expert Craftsmanship", 
      description: "Our skilled artisans bring decades of experience to every piece they create. Traditional techniques combined with modern precision ensure exceptional quality.",
      image: mockProducts.main.images.detail2,
      features: ["Handcrafted details", "Quality assurance", "Traditional methods"],
      reverse: true
    },
    {
      title: "Sustainable Process",
      description: "Environmental responsibility guides every decision we make. From sourcing to shipping, we're committed to practices that protect our planet.",
      image: mockProducts.main.images.main,
      features: ["Carbon neutral shipping", "Recyclable packaging", "Ethical manufacturing"],
      reverse: false
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            From concept to creation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the meticulous process behind every product in our collection.
          </p>
        </div>

        <div className="mt-20">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className={`relative ${index !== 0 ? 'mt-24' : ''}`}
            >
              <div className={`lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-24 lg:items-center`}>
                <div className={`${section.reverse ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    {section.description}
                  </p>

                  <dl className="mt-10 space-y-10">
                    {section.features.map((feature) => (
                      <div key={feature} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">
                            <Check className="h-6 w-6 text-white" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                            {feature}
                          </p>
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className={`mt-10 lg:mt-0 ${section.reverse ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Template 5: With square images
const WithSquareImages = () => {
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

// Main component showcasing all templates
export default function ProductFeaturesCollection() {
  const [activeTemplate, setActiveTemplate] = useState('header');

  const templates = [
    { id: 'header', name: '1. Header, Images, Descriptions', component: WithHeaderImagesDescriptions },
    { id: 'wide', name: '2. Wide Images', component: WithWideImages },
    { id: 'split', name: '3. Split Image', component: WithSplitImage },
    { id: 'alternating', name: '4. Alternating Sections', component: WithAlternatingSections },
    { id: 'square', name: '5. Square Images', component: WithSquareImages }
  ];

  const ActiveComponent = templates.find(t => t.id === activeTemplate)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Template Switcher */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 py-4 overflow-x-auto">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setActiveTemplate(template.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTemplate === template.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Template */}
      {ActiveComponent && <ActiveComponent />}
    </div>
  );
}