import React, { useState } from "react";
import { ChevronDown, X, Filter, Grid3X3, List, SlidersHorizontal, Check } from "lucide-react";
import { Dropdown, mockFilters } from "./CategoryFiltersCentered";


export const SidebarFilters = () => {
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedPrices, setSelectedPrices] = useState([]);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	const handleColorSelect = (color) => {
		setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
	};

	const handleSizeSelect = (size) => {
		setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
	};

	const handleBrandSelect = (brand) => {
		setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
	};

	const handlePriceSelect = (price) => {
		setSelectedPrices((prev) => (prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]));
	};

	const FilterSection = ({ title, children }) => (
		<div className="border-b border-gray-200 py-6">
			<h3 className="text-sm font-medium text-gray-900">{title}</h3>
			<div className="mt-4">{children}</div>
		</div>
	);

	const CheckboxOption = ({ label, checked, onChange }) => (
		<div className="flex items-center">
			<input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
			<label className="ml-3 text-sm text-gray-600">{label}</label>
		</div>
	);

	const SidebarContent = () => (
		<div className="space-y-0">
			<FilterSection title="Color">
				<ColorPicker colors={mockFilters.colors} selected={selectedColors} onSelect={handleColorSelect} />
			</FilterSection>

			<FilterSection title="Size">
				<SizeSelector sizes={mockFilters.sizes} selected={selectedSizes} onSelect={handleSizeSelect} />
			</FilterSection>

			<FilterSection title="Brand">
				<div className="space-y-3">
					{mockFilters.brands.map((brand) => (
						<CheckboxOption key={brand} label={brand} checked={selectedBrands.includes(brand)} onChange={() => handleBrandSelect(brand)} />
					))}
				</div>
			</FilterSection>

			<FilterSection title="Price Range">
				<div className="space-y-3">
					{mockFilters.priceRanges.map((price) => (
						<CheckboxOption key={price} label={price} checked={selectedPrices.includes(price)} onChange={() => handlePriceSelect(price)} />
					))}
				</div>
			</FilterSection>
		</div>
	);

	return (
		<div className="bg-white">
			<div>
				{/* Mobile filter dialog */}
				{mobileFiltersOpen && (
					<>
						<div className="fixed inset-0 z-40 flex">
							<div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)} />
							<div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">Filters</h2>
									<button onClick={() => setMobileFiltersOpen(false)} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
										<X className="h-6 w-6" />
									</button>
								</div>
								<div className="mt-4 px-4">
									<SidebarContent />
								</div>
							</div>
						</div>
					</>
				)}

				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

						<div className="flex items-center">
							<Dropdown label="Sort" options={mockFilters.sortOptions} selected="Most Popular" onSelect={() => {}} className="w-48" />

							<button onClick={() => setMobileFiltersOpen(true)} className="ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
								<Filter className="h-5 w-5" />
							</button>
						</div>
					</div>

					<section className="pb-24 pt-6">
						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Desktop Filters */}
							<div className="hidden lg:block">
								<SidebarContent />
							</div>

							{/* Product grid */}
							<div className="lg:col-span-3">
								<div className="border-b border-gray-200 pb-6">
									<p className="text-sm text-gray-700">
										Showing <span className="font-medium">1-20</span> of <span className="font-medium">97</span> results
									</p>
								</div>

								<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
									{Array.from({ length: 9 }).map((_, i) => (
										<div key={i} className="group relative">
											<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
												<div className="h-full w-full bg-gray-200 flex items-center justify-center">
													<span className="text-gray-400">Product {i + 1}</span>
												</div>
											</div>
											<div className="mt-4 flex justify-between">
												<div>
													<h3 className="text-sm text-gray-700">
														<a href="#" className="hover:text-gray-500">
															<span className="absolute inset-0" />
															Product Name {i + 1}
														</a>
													</h3>
													<p className="mt-1 text-sm text-gray-500">Brand Name</p>
												</div>
												<p className="text-sm font-medium text-gray-900">$99</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

const ColorPicker = ({ colors, selected, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
                <button
                    key={color.name}
                    onClick={() => onSelect(color.name)}
                    className={`h-8 w-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${selected.includes(color.name) ? "border-indigo-600 ring-2 ring-indigo-600" : "border-gray-300"}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                >
                    <span className="sr-only">{color.name}</span>
                </button>
            ))}
        </div>
    );
};

const SizeSelector = ({ sizes, selected, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => onSelect(size)}
                    className={`px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${selected.includes(size) ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};