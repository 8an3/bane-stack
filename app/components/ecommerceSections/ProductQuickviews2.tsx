import React, { useState } from "react";
import { X, Heart, Star, Minus, Plus, ShoppingCart, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";

// Product Quickview 1: With color selector, size selector, and details link
function ProductQuickview2({ isOpen, onClose }) {
	const [selectedColor, setSelectedColor] = useState("black");
	const [selectedSize, setSelectedSize] = useState("M");
	const [quantity, setQuantity] = useState(1);

	const colors = [
		{ name: "Black", value: "black", hex: "#000000" },
		{ name: "White", value: "white", hex: "#FFFFFF" },
		{ name: "Gray", value: "gray", hex: "#6B7280" },
		{ name: "Navy", value: "navy", hex: "#1E3A8A" },
	];

	const sizes = ["XS", "S", "M", "L", "XL"];

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
							<img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop" alt="Product" className="w-full h-full object-cover" />
						</div>

						{/* Product Details */}
						<div className="flex flex-col">
							<div className="flex-1">
								<h1 className="text-2xl font-bold text-gray-900 mb-2">Basic Tee</h1>
								<div className="flex items-center mb-4">
									<div className="flex items-center">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
										))}
									</div>
									<span className="ml-2 text-sm text-gray-500">(117 reviews)</span>
								</div>
								<p className="text-3xl font-bold text-gray-900 mb-6">$35</p>

								{/* Color Selection */}
								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-3">Color</label>
									<div className="flex space-x-3">
										{colors.map((color) => (
											<button
												key={color.value}
												onClick={() => setSelectedColor(color.value)}
												className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.value ? "border-gray-900" : "border-gray-300"}`}
												style={{ backgroundColor: color.hex }}
												title={color.name}
											/>
										))}
									</div>
								</div>

								{/* Size Selection */}
								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
									<div className="grid grid-cols-5 gap-2">
										{sizes.map((size) => (
											<button
												key={size}
												onClick={() => setSelectedSize(size)}
												className={`py-2 px-3 text-sm font-medium rounded-md border ${selectedSize === size ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
											>
												{size}
											</button>
										))}
									</div>
								</div>

								{/* Quantity */}
								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
									<div className="flex items-center space-x-3">
										<button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 rounded-md border border-gray-300 hover:bg-gray-50">
											<Minus className="w-4 h-4" />
										</button>
										<span className="w-12 text-center">{quantity}</span>
										<button onClick={() => setQuantity(quantity + 1)} className="p-1 rounded-md border border-gray-300 hover:bg-gray-50">
											<Plus className="w-4 h-4" />
										</button>
									</div>
								</div>
							</div>

							{/* Actions */}
							<div className="space-y-3">
								<button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 flex items-center justify-center">
									<ShoppingCart className="w-5 h-5 mr-2" />
									Add to cart
								</button>
								<button className="w-full bg-white text-gray-900 py-3 px-6 rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
									<Heart className="w-5 h-5 mr-2" />
									Add to wishlist
								</button>
								<button className="w-full text-gray-900 py-2 flex items-center justify-center hover:text-gray-700">
									View full details
									<ArrowRight className="w-4 h-4 ml-1" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
