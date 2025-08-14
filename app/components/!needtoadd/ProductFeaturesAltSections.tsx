import React, { useState } from "react";
import { Check, Star, Shield, Truck, RefreshCw, Award, Zap, Heart, Users, Globe } from "lucide-react";

const mockProducts = {
	main: {
		name: "Premium Cotton T-Shirt",
		price: "$89",
		rating: 4.8,
		reviews: 124,
		description: "Our premium cotton t-shirt is crafted from the finest 100% organic cotton, providing unmatched comfort and durability. Perfect for everyday wear or special occasions.",
		features: ["100% organic cotton construction", "Pre-shrunk and machine washable", "Reinforced stitching at stress points", "Available in 12 colors and all sizes"],
		images: {
			main: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
			wide: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
			square1: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			square2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			detail1: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
			detail2: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
		},
	},
};

const mockFeatureDetails = [
	{
		icon: Shield,
		title: "Premium Quality",
		description: "Crafted from the finest materials with attention to every detail.",
	},
	{
		icon: Truck,
		title: "Free Shipping",
		description: "Complimentary shipping on all orders over $75 worldwide.",
	},
	{
		icon: RefreshCw,
		title: "Easy Returns",
		description: "30-day return policy with free return shipping included.",
	},
	{
		icon: Award,
		title: "Award Winning",
		description: "Recognized by industry experts for design and quality.",
	},
];

const Rating = ({ rating, reviews }) => {
	return (
		<div className="flex items-center">
			<div className="flex items-center">
				{[0, 1, 2, 3, 4].map((star) => (
					<Star key={star} className={`h-5 w-5 ${rating > star ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
				))}
			</div>
			<p className="ml-3 text-sm text-gray-500">
				{rating} out of 5 stars ({reviews} reviews)
			</p>
		</div>
	);
};

export const WithAlternatingSections = () => {
	const sections = [
		{
			title: "Premium Materials",
			description: "We source only the finest materials from trusted suppliers around the world. Each material is carefully selected for its quality, durability, and environmental impact.",
			image: mockProducts.main.images.detail1,
			features: ["100% organic cotton", "Sustainably sourced", "Certified quality"],
			reverse: false,
		},
		{
			title: "Expert Craftsmanship",
			description: "Our skilled artisans bring decades of experience to every piece they create. Traditional techniques combined with modern precision ensure exceptional quality.",
			image: mockProducts.main.images.detail2,
			features: ["Handcrafted details", "Quality assurance", "Traditional methods"],
			reverse: true,
		},
		{
			title: "Sustainable Process",
			description: "Environmental responsibility guides every decision we make. From sourcing to shipping, we're committed to practices that protect our planet.",
			image: mockProducts.main.images.main,
			features: ["Carbon neutral shipping", "Recyclable packaging", "Ethical manufacturing"],
			reverse: false,
		},
	];

	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="text-center">
					<h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Process</h2>
					<p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">From concept to creation</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Discover the meticulous process behind every product in our collection.</p>
				</div>

				<div className="mt-20">
					{sections.map((section, index) => (
						<div key={section.title} className={`relative ${index !== 0 ? "mt-24" : ""}`}>
							<div className={`lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-24 lg:items-center`}>
								<div className={`${section.reverse ? "lg:col-start-2" : "lg:col-start-1"}`}>
									<h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">{section.title}</h3>
									<p className="mt-3 text-lg text-gray-500">{section.description}</p>

									<dl className="mt-10 space-y-10">
										{section.features.map((feature) => (
											<div key={feature} className="relative">
												<dt>
													<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">
														<Check className="h-6 w-6 text-white" />
													</div>
													<p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature}</p>
												</dt>
											</div>
										))}
									</dl>
								</div>

								<div className={`mt-10 lg:mt-0 ${section.reverse ? "lg:col-start-1" : "lg:col-start-2"}`}>
									<div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-xl shadow-xl">
										<img src={section.image} alt={section.title} className="object-cover object-center" />
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
