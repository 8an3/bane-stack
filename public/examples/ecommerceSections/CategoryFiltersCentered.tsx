import React, { useState } from "react";
import { ChevronDown, X, Filter, Grid3X3, List, SlidersHorizontal, Check } from "lucide-react";

// Mock data for filters
export const mockFilters = {
	categories: ["All Categories", "Clothing", "Shoes", "Accessories", "Electronics", "Home & Garden"],
	brands: ["Nike", "Adidas", "Apple", "Samsung", "Sony", "Canon"],
	priceRanges: ["Under $25", "$25 to $50", "$50 to $100", "$100 to $200", "$200 & Above"],
	colors: [
		{ name: "White", value: "#FFFFFF" },
		{ name: "Gray", value: "#6B7280" },
		{ name: "Black", value: "#000000" },
		{ name: "Red", value: "#EF4444" },
		{ name: "Blue", value: "#3B82F6" },
		{ name: "Green", value: "#10B981" },
		{ name: "Yellow", value: "#F59E0B" },
		{ name: "Purple", value: "#8B5CF6" },
	],
	sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	sortOptions: ["Most Popular", "Best Rating", "Newest", "Price: Low to High", "Price: High to Low"],
};

// Dropdown Component
export const Dropdown = ({ label, options, selected, onSelect, className = "" }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`relative ${className}`}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
			>
				<span className="block truncate">{selected || label}</span>
				<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<ChevronDown className="h-5 w-5 text-gray-400" />
				</span>
			</button>

			{isOpen && (
				<>
					<div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
					<div className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{options.map((option) => (
							<button
								key={option}
								onClick={() => {
									onSelect(option);
									setIsOpen(false);
								}}
								className={`relative cursor-pointer select-none py-2 pl-3 pr-9 w-full text-left hover:bg-indigo-600 hover:text-white ${selected === option ? "bg-indigo-600 text-white" : "text-gray-900"}`}
							>
								<span className="block truncate">{option}</span>
								{selected === option && (
									<span className="absolute inset-y-0 right-0 flex items-center pr-4">
										<Check className="h-5 w-5" />
									</span>
								)}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};



// Template 1: With centered text and dropdown product filters
export const CenteredDropdownFilters = () => {
	const [selectedCategory, setSelectedCategory] = useState("All Categories");
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedPriceRange, setSelectedPriceRange] = useState("");
	const [selectedSort, setSelectedSort] = useState("Most Popular");
	const [viewMode, setViewMode] = useState("grid");

	const activeFilters = [selectedBrand && { label: "Brand", value: selectedBrand }, selectedPriceRange && { label: "Price", value: selectedPriceRange }].filter(Boolean);

	const clearFilter = (type) => {
		if (type === "Brand") setSelectedBrand("");
		if (type === "Price") setSelectedPriceRange("");
	};

	const clearAllFilters = () => {
		setSelectedBrand("");
		setSelectedPriceRange("");
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop All Products</h1>
					<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">Discover our complete collection of premium products, carefully curated for quality and style.</p>
				</div>

				{/* Filter Bar */}
				<div className="mt-12 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
					{/* Filters */}
					<div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
						<Dropdown label="Category" options={mockFilters.categories} selected={selectedCategory} onSelect={setSelectedCategory} className="w-full sm:w-40" />
						<Dropdown label="Brand" options={mockFilters.brands} selected={selectedBrand} onSelect={setSelectedBrand} className="w-full sm:w-40" />
						<Dropdown label="Price Range" options={mockFilters.priceRanges} selected={selectedPriceRange} onSelect={setSelectedPriceRange} className="w-full sm:w-44" />
					</div>

					{/* Sort and View */}
					<div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
						<Dropdown label="Sort by" options={mockFilters.sortOptions} selected={selectedSort} onSelect={setSelectedSort} className="w-full sm:w-48" />
						<div className="flex items-center space-x-2">
							<button onClick={() => setViewMode("grid")} className={`p-2 rounded-md ${viewMode === "grid" ? "bg-indigo-100 text-indigo-700" : "text-gray-400 hover:text-gray-500"}`}>
								<Grid3X3 className="h-5 w-5" />
							</button>
							<button onClick={() => setViewMode("list")} className={`p-2 rounded-md ${viewMode === "list" ? "bg-indigo-100 text-indigo-700" : "text-gray-400 hover:text-gray-500"}`}>
								<List className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>

				{/* Active Filters */}
				{activeFilters.length > 0 && (
					<div className="mt-6">
						<div className="flex flex-wrap items-center gap-2">
							<span className="text-sm font-medium text-gray-900">Active filters:</span>
							{activeFilters.map((filter) => (
								<span key={filter.label} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
									{filter.label}: {filter.value}
									<button onClick={() => clearFilter(filter.label)} className="ml-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500">
										<X className="h-3 w-3" />
									</button>
								</span>
							))}
							<button onClick={clearAllFilters} className="text-sm text-indigo-600 hover:text-indigo-500">
								Clear all
							</button>
						</div>
					</div>
				)}

				{/* Results info */}
				<div className="mt-6 border-b border-gray-200 pb-6">
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">1-20</span> of <span className="font-medium">97</span> results
					</p>
				</div>

				{/* Product grid placeholder */}
				<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={i} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
							<div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
								<span className="text-gray-400">Product {i + 1}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};


// Main component showcasing both templates
export default function CategoryFiltersCollection() {
	const [activeTemplate, setActiveTemplate] = useState("centered");

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Template Switcher */}
			<div className="bg-white border-b sticky top-0 z-30">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center space-x-8 py-4">
						<button onClick={() => setActiveTemplate("centered")} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTemplate === "centered" ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:text-gray-700"}`}>
							1. Centered with Dropdowns
						</button>
						<button onClick={() => setActiveTemplate("sidebar")} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTemplate === "sidebar" ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:text-gray-700"}`}>
							2. Sidebar Filters
						</button>
					</div>
				</div>
			</div>

			{/* Templates */}
			{activeTemplate === "centered" && <CenteredDropdownFilters />}
			{activeTemplate === "sidebar" && <SidebarFilters />}
		</div>
	);
}
