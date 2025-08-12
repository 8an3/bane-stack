import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { CategoryFiltersSection } from "~/components/ecommerceSections/CategoryFilters";
import { CategoryPage } from "~/components/ecommerceSections/CategoryPage";
import { CategoryPreviewsSection } from "~/components/ecommerceSections/CategoryPreviews";
import { CheckoutForm } from "~/components/ecommerceSections/CheckoutForm";
import { CheckoutPage } from "~/components/ecommerceSections/CheckoutPage";
import { DetailsScreen } from "~/components/ecommerceSections/DetailsScreen";
import { FeedsDemo } from "~/components/ecommerceSections/FeedComponents";
import { GridLists, GridListwithAvatars, GridListwithStatusIndicators } from "~/components/ecommerceSections/GridLists";
import { HomePageSection } from "~/components/ecommerceSections/HomeScreen";
import { IncentiveDemo } from "~/components/ecommerceSections/IncentiveSection";
import { OrderDetailsPage } from "~/components/ecommerceSections/OrderDetailsPage";
import { OrderHistory } from "~/components/ecommerceSections/OrderHistory";
import { OrderSummaries } from "~/components/ecommerceSections/OrderSummaries";
import { PageHeadingsSection } from "~/components/ecommerceSections/PageHeadings";
import { PricingPage } from "~/components/ecommerceSections/PricingPage";
import { ProductListPage } from "~/components/ecommerceSections/ProductLists";
import { ProductOverviews } from "~/components/ecommerceSections/ProductOverviews";
import { LandingPageSection } from "~/components/ecommerceSections/LandingPage";
import { ProductQuickviewsSection } from "~/components/ecommerceSections/ProductQuickviews";
import { ProductsFeaturesSection } from "~/components/ecommerceSections/ProductsFeatures";
import { PromoSection } from "~/components/ecommerceSections/PromoSection";
import { ReviewsSection } from "~/components/ecommerceSections/ReviewsSection";
import { SectionHeadings } from "~/components/ecommerceSections/SectionHeadings";
import { SettingsScreen } from "~/components/ecommerceSections/SettingsScreen";
import { ShoppingCartSection } from "~/components/ecommerceSections/ShoppingCart";
import { ShoppingCartPage } from "~/components/ecommerceSections/ShoppingCartPage";
import { StackedLayoutsSection } from "~/components/ecommerceSections/StackedLayouts";
import { StackedListsSection } from "~/components/ecommerceSections/StackedLists";
import { StorefrontPage } from "~/components/ecommerceSections/StorefrontPages";
import { StoreNavSection } from "~/components/ecommerceSections/StoreNav";
import { ProductPage } from "~/components/ecommerceSections/ProductPages";

export default function Dashboard() {
	const [sel, setSel] = useState("LandingPage");
	const sections = [
		{ name: "CategoryFilters", value: "CategoryFilters" },
		{ name: "CategoryPage", value: "CategoryPage" },
		{ name: "CategoryPreviews", value: "CategoryPreviews" },
		{ name: "CheckoutForm", value: "CheckoutForm" },
		{ name: "CheckoutPage", value: "CheckoutPage" },
		{ name: "DetailsScreen", value: "DetailsScreen" },
		{ name: "FeedComponents", value: "FeedComponents" },
		{ name: "GridLists", value: "GridLists" },
		{ name: "GridListwithAvatars", value: "GridListwithAvatars" },
		{ name: "GridListwithStatusIndicators", value: "GridListwithStatusIndicators" },
		{ name: "HomeScreen", value: "HomeScreen" },
		{ name: "IncentiveSection", value: "IncentiveSection" },
		{ name: "LandingPage", value: "LandingPage" },
		{ name: "OrderDetailsPage", value: "OrderDetailsPage" },
		{ name: "OrderHistory", value: "OrderHistory" },
		{ name: "OrdersSummaries", value: "OrdersSummaries" },
		{ name: "PageHeadings", value: "PageHeadings" },
		{ name: "PricingPage", value: "PricingPage" },
		{ name: "ProductLists", value: "ProductLists" },
		{ name: "ProductOverviews", value: "ProductOverviews" },
		{ name: "ProductPages", value: "ProductPages" },
		{ name: "ProductQuickviews", value: "ProductQuickviews" },
		{ name: "ProductsFeatures", value: "ProductsFeatures" },
		{ name: "PromoSection", value: "PromoSection" },
		{ name: "ReviewsSection", value: "ReviewsSection" },
		{ name: "SectionHeadings", value: "SectionHeadings" },
		{ name: "SettingsScreen", value: "SettingsScreen" },
		{ name: "ShoppingCart", value: "ShoppingCart" },
		{ name: "ShoppingCartPage", value: "ShoppingCartPage" },
		{ name: "StackedLayouts", value: "StackedLayouts" },
		{ name: "StackedLists", value: "StackedLists" },
		{ name: "StorefrontPages", value: "StorefrontPages" },
		{ name: "StoreNav", value: "StoreNav" },
	];
	let viewSelected;
	let selectedCode = ``
	switch (sel) {
		case "CategoryFilters":
			viewSelected = <CategoryFiltersSection />;
			selectedCode= `import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui'
import { 
  X, 
  ChevronDown, 
  Filter, 
  Plus, 
  Minus, 
  Grid2X2 
} from 'lucide-react'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function CategoryFiltersSection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-background">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <DialogContent className="sm:max-w-xs h-full ml-auto p-0">
            <DialogHeader className="px-4 pt-4">
              <DialogTitle className="text-lg font-medium text-foreground">Filters</DialogTitle>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200 h-[calc(100%-60px)] overflow-y-auto">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-foreground">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href} className="block px-2 py-3">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Accordion key={section.id} type="single" collapsible className="border-t border-gray-200 px-4 py-6">
                  <AccordionItem value={section.id} className="border-0">
                    <AccordionTrigger className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500 [&[data-state=open]>svg:last-child]:hidden [&[data-state=closed]>svg:first-child]:hidden">
                      <span className="font-medium text-foreground">{section.name}</span>
                      <div className="ml-6 flex items-center">
                        <Plus className="h-5 w-5" />
                        <Minus className="h-5 w-5 hidden" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center gap-3">
                            <div className="flex h-5 items-center">
                              <input
                                defaultValue={option.value}
                                id={'filter-mobile-$ {section.id}-$ {optionIdx}'}
                                name={'$ {section.id}[]'}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <label
                              htmlFor={'filter-mobile-$ {section.id}-$ {optionIdx}'}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </form>
          </DialogContent>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-border pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">New Arrivals</h1>

            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-foreground">
                  Sort
                  <ChevronDown
                    className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-foreground' : 'text-gray-500',
                          'block w-full px-4 py-2 text-sm'
                        )}
                      >
                        {option.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Grid2X2 className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-border pb-6 text-sm font-medium text-foreground">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Accordion key={section.id} type="single" collapsible className=" py-6">
                    <AccordionItem value={section.id} className="border-0">
                      <AccordionTrigger className="">
                        <span className="font-medium text-foreground">{section.name}</span>
                       
                      </AccordionTrigger>
                      <AccordionContent className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center gap-3">
                              <div className="flex h-5 items-center">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={'filter-$ {section.id}-$ {optionIdx}'}
                                  name={'$ {section.id}[]'}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <label htmlFor={'filter-$ {section.id}-$ {optionIdx}'} className="text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}`
			break;
		case "CategoryPage":
			viewSelected = <CategoryPage />;
				selectedCode= `import React, { useState } from "react";
import { Filter, Grid, List, ChevronDown, Star, Heart, ShoppingCart, Search, X, SlidersHorizontal, ArrowUpDown, Eye, Plus, Minus, Check } from "lucide-react";

// Mock product data
const mockProducts = [
	{
		id: 1,
		name: "Premium Wireless Headphones",
		price: 199,
		originalPrice: 249,
		rating: 4.8,
		reviews: 127,
		image: "🎧",
		category: "Electronics",
		brand: "TechSound",
		colors: ["black", "white", "blue"],
		inStock: true,
		isNew: false,
		onSale: true,
	},
	{
		id: 2,
		name: "Organic Cotton T-Shirt",
		price: 35,
		originalPrice: null,
		rating: 4.6,
		reviews: 89,
		image: "👕",
		category: "Clothing",
		brand: "EcoWear",
		colors: ["white", "black", "gray"],
		inStock: true,
		isNew: true,
		onSale: false,
	},
	{
		id: 3,
		name: "Leather Crossbody Bag",
		price: 89,
		originalPrice: 120,
		rating: 4.9,
		reviews: 203,
		image: "👜",
		category: "Accessories",
		brand: "StyleCraft",
		colors: ["brown", "black", "tan"],
		inStock: false,
		isNew: false,
		onSale: true,
	},
	{
		id: 4,
		name: "Smart Fitness Watch",
		price: 299,
		originalPrice: null,
		rating: 4.7,
		reviews: 156,
		image: "⌚",
		category: "Electronics",
		brand: "FitTech",
		colors: ["black", "silver", "rose"],
		inStock: true,
		isNew: true,
		onSale: false,
	},
	{
		id: 5,
		name: "Minimalist Desk Lamp",
		price: 75,
		originalPrice: 95,
		rating: 4.5,
		reviews: 78,
		image: "💡",
		category: "Home",
		brand: "ModernLight",
		colors: ["white", "black"],
		inStock: true,
		isNew: false,
		onSale: true,
	},
	{
		id: 6,
		name: "Running Shoes",
		price: 120,
		originalPrice: null,
		rating: 4.8,
		reviews: 234,
		image: "👟",
		category: "Footwear",
		brand: "SportMax",
		colors: ["white", "black", "red"],
		inStock: true,
		isNew: false,
		onSale: false,
	},
];

// Product Card Component
export function ProductCard({ product, viewMode = "grid" }) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	if (viewMode === "list") {
		return (
			<div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
				<div className="flex gap-4">
					<div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">{product.image}</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
								<p className="text-sm text-gray-500">{product.brand}</p>
								<div className="flex items-center mt-1">
									<div className="flex items-center">
										<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm text-gray-700 ml-1">{product.rating}</span>
									</div>
									<span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
								</div>
							</div>
							<div className="text-right">
								<div className="flex items-center gap-2">
									{product.originalPrice && <span className="text-sm text-gray-500 line-through">$ {product.originalPrice}</span>}
									<span className="text-lg font-bold text-gray-900">$ {product.price}</span>
								</div>
								<div className="flex items-center gap-2 mt-2">
									<button onClick={() => setIsWishlisted(!isWishlisted)} className={'p-2 rounded-full border transition-colors $ {isWishlisted ? "text-red-500 border-red-500" : "text-gray-400 border-gray-300 hover:text-red-500"}'}>
										<Heart className={'h-4 w-4 $ {isWishlisted ? "fill-current" : ""}'} />
									</button>
									<button className={'px-4 py-2 rounded-lg font-medium transition-colors $ {product.inStock ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}'} disabled={!product.inStock}>
										{product.inStock ? "Add to Cart" : "Out of Stock"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
			<div className="relative">
				<div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">{product.image}</div>
				{product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">New</span>}
				{product.onSale && <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</span>}
				<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
					<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<button onClick={() => setIsWishlisted(!isWishlisted)} className={'p-2 rounded-full bg-white shadow-md transition-colors $ {isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"}'}>
							<Heart className={'h-4 w-4 $ {isWishlisted ? "fill-current" : ""}'} />
						</button>
					</div>
					<div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
							<Eye className="h-4 w-4" />
							Quick View
						</button>
					</div>
				</div>
			</div>

			<div className="p-4">
				<h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
				<p className="text-xs text-gray-500 mb-2">{product.brand}</p>

				<div className="flex items-center mb-2">
					<div className="flex items-center">
						<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
						<span className="text-xs text-gray-700 ml-1">{product.rating}</span>
					</div>
					<span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						{product.originalPrice && <span className="text-xs text-gray-500 line-through">$ {product.originalPrice}</span>}
						<span className="text-sm font-bold text-gray-900">$ {product.price}</span>
					</div>

					<button className={'p-2 rounded-lg transition-colors $ {product.inStock ? "text-blue-600 hover:bg-blue-50" : "text-gray-400 cursor-not-allowed"}'} disabled={!product.inStock} title={product.inStock ? "Add to cart" : "Out of stock"}>
						<ShoppingCart className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

// Filter Sidebar Component
export function FilterSidebar({ isOpen, onClose }) {
	const [priceRange, setPriceRange] = useState([0, 500]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);

	const brands = ["TechSound", "EcoWear", "StyleCraft", "FitTech", "ModernLight", "SportMax"];
	const colors = [
		{ name: "Black", value: "black", class: "bg-black" },
		{ name: "White", value: "white", class: "bg-white border border-gray-300" },
		{ name: "Gray", value: "gray", class: "bg-gray-500" },
		{ name: "Blue", value: "blue", class: "bg-blue-500" },
		{ name: "Red", value: "red", class: "bg-red-500" },
		{ name: "Brown", value: "brown", class: "bg-amber-700" },
	];

	const toggleBrand = (brand) => {
		setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
	};

	const toggleColor = (color) => {
		setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
	};

	return (
		<>
			{/* Mobile overlay */}
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

			{/* Sidebar */}
			<div className={'fixed lg:static inset-y-0 left-0 w-80 bg-white border-r transform transition-transform z-50 $ {isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}'}>
				<div className="p-6">
					<div className="flex items-center justify-between mb-6 lg:hidden">
						<h2 className="text-lg font-semibold">Filters</h2>
						<button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
							<X className="h-5 w-5" />
						</button>
					</div>

					<div className="space-y-6">
						{/* Price Range */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm text-gray-600">
									<span>$ {priceRange[0]}</span>
									<span>$ {priceRange[1]}</span>
								</div>
								<input type="range" min="0" max="500" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
							</div>
						</div>

						{/* Brands */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Brand</h3>
							<div className="space-y-2">
								{brands.map((brand) => (
									<label key={brand} className="flex items-center">
										<input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
										<span className="ml-2 text-sm text-gray-700">{brand}</span>
									</label>
								))}
							</div>
						</div>

						{/* Colors */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
							<div className="flex flex-wrap gap-2">
								{colors.map((color) => (
									<button
										key={color.value}
										onClick={() => toggleColor(color.value)}
										className={'w-8 h-8 rounded-full $ {color.class} $ {selectedColors.includes(color.value) ? "ring-2 ring-offset-2 ring-blue-500" : "hover:scale-110"} transition-transform'}
										title={color.name}
									/>
								))}
							</div>
						</div>

						{/* Rating */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Rating</h3>
							<div className="space-y-2">
								{[4, 3, 2, 1].map((rating) => (
									<label key={rating} className="flex items-center">
										<input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
										<div className="ml-2 flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star key={i} className={'h-3 w-3 $ {i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}'} />
											))}
											<span className="text-sm text-gray-600 ml-1">& up</span>
										</div>
									</label>
								))}
							</div>
						</div>

						{/* Clear Filters */}
						<button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Clear All Filters</button>
					</div>
				</div>
			</div>
		</>
	);
}

// Category Header Component
export function CategoryHeader({ title, productCount, viewMode, setViewMode, sortBy, setSortBy, onFilterToggle }) {
	const sortOptions = [
		{ value: "featured", label: "Featured" },
		{ value: "price-low", label: "Price: Low to High" },
		{ value: "price-high", label: "Price: High to Low" },
		{ value: "rating", label: "Highest Rated" },
		{ value: "newest", label: "Newest" },
	];

	return (
		<div className="bg-white border-b">
			<div className="px-6 py-4">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
						<p className="text-sm text-gray-600 mt-1">{productCount} products</p>
					</div>

					<div className="flex items-center gap-4">
						{/* Mobile Filter Button */}
						<button onClick={onFilterToggle} className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
							<SlidersHorizontal className="h-4 w-4" />
							Filters
						</button>

						{/* Sort Dropdown */}
						<div className="relative">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								{sortOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
						</div>

						{/* View Toggle */}
						<div className="flex border border-gray-300 rounded-lg">
							<button onClick={() => setViewMode("grid")} className={'p-2 $ {viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"}'}>
								<Grid className="h-4 w-4" />
							</button>
							<button onClick={() => setViewMode("list")} className={'p-2 border-l border-gray-300 $ {viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"}'}>
								<List className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Breadcrumb Component
export function Breadcrumb() {
	const items = [
		{ label: "Home", href: "/" },
		{ label: "Categories", href: "/categories" },
		{ label: "Electronics", href: "/categories/electronics" },
	];

	return (
		<nav className="bg-white border-b px-6 py-3">
			<div className="flex items-center space-x-2 text-sm">
				{items.map((item, index) => (
					<div key={item.href} className="flex items-center">
						{index > 0 && <span className="text-gray-400 mx-2">/</span>}
						<a href={item.href} className={'$ {index === items.length - 1 ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"}'}>
							{item.label}
						</a>
					</div>
				))}
			</div>
		</nav>
	);
}

// Main Category Page Component
export function CategoryPage() {
	const [viewMode, setViewMode] = useState("grid");
	const [sortBy, setSortBy] = useState("featured");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [products] = useState(mockProducts);

	return (
		<div className="min-h-screen bg-gray-50">
			<Breadcrumb />
			<CategoryHeader title="Electronics" productCount={products.length} viewMode={viewMode} setViewMode={setViewMode} sortBy={sortBy} setSortBy={setSortBy} onFilterToggle={() => setIsFilterOpen(!isFilterOpen)} />

			<div className="flex">
				<FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

				<div className="flex-1 p-6">
					<div className={'$ {viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}'}>
						{products.map((product) => (
							<ProductCard key={product.id} product={product} viewMode={viewMode} />
						))}
					</div>

					{/* Pagination */}
					<div className="mt-12 flex items-center justify-center">
						<div className="flex items-center space-x-2">
							<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</button>
							{[1, 2, 3, 4, 5].map((page) => (
								<button key={page} className={'px-3 py-2 rounded-lg text-sm font-medium $ {page === 1 ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}'}>
									{page}
								</button>
							))}
							<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
`
			break;
		case "CategoryPreviews":
			viewSelected = <CategoryPreviewsSection />;
				selectedCode= `const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export   function CategoryPreviewsSection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`
			break;
		case "CheckoutForm":
			viewSelected = <CheckoutForm />;
				selectedCode= `import React, { useState } from 'react';
import { CreditCard, Lock, Truck, Gift, Tag, Info, } from 'lucide-react';
import { Button, } from '~/components/ui/button';
import { Badge, } from '~/components/ui/badge';

export function CheckoutForm   ()   {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    postalCode: '',
    phone: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    nameOnCard: '',
    billingAddress: 'same',
    promoCode: '',
    newsletter: false,
    saveInfo: false
  });

  const [errors, setErrors] = useState({});
  const [promoApplied, setPromoApplied] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'Micro Backpack',
      color: 'Moss',
      size: '5L',
      price: 70.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Black',
      size: 'Large',
      price: 32.00,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.00;
  const tax = subtotal * 0.08;
  const discount = promoApplied ? 10.00 : 0;
  const total = subtotal + shipping + tax - discount;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const applyPromoCode = () => {
    if (formData.promoCode.toLowerCase() === 'welcome10') {
      setPromoApplied(true);
      setFormData(prev => ({ ...prev, promoCode: '' }));
    }
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

              <div className="mt-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="apartment"
                      id="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <div className="mt-1">
                    <select
                      id="region"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="">Select a state</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="postalCode"
                      id="postal-code"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <fieldset>
                <legend className="text-lg font-medium text-gray-900">Delivery method</legend>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                    <input
                      type="radio"
                      name="delivery-method"
                      value="Standard"
                      className="sr-only"
                      defaultChecked
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          <Truck className="inline h-5 w-5 mr-2" />
                          Standard
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          4-10 business days
                        </span>
                        <span className="mt-6 text-sm font-medium text-gray-900">$5.00</span>
                      </span>
                    </span>
                    <div className="absolute -inset-px rounded-lg border-2 border-indigo-500 pointer-events-none" aria-hidden="true" />
                  </label>

                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                    <input type="radio" name="delivery-method" value="Express" className="sr-only" />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          <Truck className="inline h-5 w-5 mr-2" />
                          Express
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          2-5 business days
                        </span>
                        <span className="mt-6 text-sm font-medium text-gray-900">$16.00</span>
                      </span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      id="credit-card"
                      name="payment-type"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                      <CreditCard className="inline h-4 w-4 mr-1" />
                      Credit card
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="paypal"
                      name="payment-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                      PayPal
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="etransfer"
                      name="payment-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="etransfer" className="ml-3 block text-sm font-medium text-gray-700">
                      eTransfer
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      autoComplete="cc-number"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      autoComplete="cc-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expirationDate"
                      id="expiration-date"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      autoComplete="cc-exp"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      autoComplete="csc"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Billing information</h2>

              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    id="same-as-shipping"
                    name="billingAddress"
                    type="radio"
                    value="same"
                    checked={formData.billingAddress === 'same'}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="same-as-shipping" className="ml-3 block text-sm font-medium text-gray-700">
                    Same as shipping information
                  </label>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    id="different-billing"
                    name="billingAddress"
                    type="radio"
                    value="different"
                    checked={formData.billingAddress === 'different'}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="different-billing" className="ml-3 block text-sm font-medium text-gray-700">
                    Use a different billing address
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <span className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </span>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>

                        <div className="ml-4 flex-shrink-0 flow-root">
                          <p className="text-sm font-medium text-gray-900">
                            $ {product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">Qty {product.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$ {subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm">
                    <span>Shipping estimate</span>
                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$ {shipping.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm">
                    <span>Tax estimate</span>
                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$ {tax.toFixed(2)}</dd>
                </div>
                {promoApplied && (
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex text-sm">
                      <span>Discount (WELCOME10)</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-600">-$ {discount.toFixed(2)}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">$ {total.toFixed(2)}</dd>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="promoCode"
                    id="promo-code"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Promo code"
                    className="block flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <Button
                    type="button"
                    onClick={applyPromoCode}
                    variant="outline"
                    className="flex items-center"
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="mt-2 text-sm text-green-600">Promo code applied!</p>
                )}
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Complete order
                </Button>
                <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                  <Lock className="mr-1 h-5 w-5 text-gray-400" />
                  Your information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`
			break;
		case "CheckoutPage":
			viewSelected = <CheckoutPage />;
				selectedCode= `// app/routes/checkout.tsx
import { Link } from "@remix-run/react";
import { 
  CreditCard, 
  ChevronLeft, 
  ChevronDown, 
  HelpCircle 
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export   function CheckoutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Left column - Customer information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/cart" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back to cart
                </Link>
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
              <div className="mt-4">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <Input type="text" id="first-name" name="first-name" autoComplete="given-name" />
                </div>

                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <Input type="text" id="last-name" name="last-name" autoComplete="family-name" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input type="text" id="company" name="company" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" autoComplete="street-address" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input type="text" id="apartment" name="apartment" />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" name="city" autoComplete="address-level2" />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="mx">Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="region">State / Province</Label>
                  <Input type="text" id="region" name="region" autoComplete="address-level1" />
                </div>

                <div>
                  <Label htmlFor="postal-code">Postal code</Label>
                  <Input type="text" id="postal-code" name="postal-code" autoComplete="postal-code" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="text" id="phone" name="phone" autoComplete="tel" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Shipping method</h2>
              <div className="mt-4">
                <RadioGroup defaultValue="standard" className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex items-center justify-between w-full">
                      <span>Standard</span>
                      <span className="text-sm font-medium text-gray-900">$5.00</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex items-center justify-between w-full">
                      <span>Express</span>
                      <span className="text-sm font-medium text-gray-900">$16.00</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-span-1 mt-10 lg:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Order summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-md bg-gray-100 overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg"
                          alt="Front of men's Basic Tee in black."
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Basic Tee</h3>
                        <p className="text-sm text-gray-500">Black</p>
                        <p className="text-sm text-gray-500">Large</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$32.00</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">$32.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Tax</dt>
                    <dd className="text-sm font-medium text-gray-900">$3.20</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">$40.20</dd>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="w-full">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Payment</h3>
                  <div className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Credit card</span>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid gap-4 w-full">
                  <div>
                    <Label htmlFor="card-number">Card number</Label>
                    <Input id="card-number" name="card-number" placeholder="0000 0000 0000 0000" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiration-date">Expiration date (MM/YY)</Label>
                      <Input id="expiration-date" name="expiration-date" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">
                        <div className="flex items-center">
                          <span>CVC</span>
                          <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </Label>
                      <Input id="cvc" name="cvc" placeholder="000" />
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Pay $40.20
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By placing your order, you agree to our{' '}
                  <Link to="/terms" className="font-medium text-gray-900 underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}`
			break;
		case "DetailsScreen":
			viewSelected = <DetailsScreen />;
				selectedCode= `// app/routes/details/$id.tsx
				import { ChevronLeft, Star, MoreVertical, Clock, CheckCircle2, AlertCircle, User, Mail, Phone, MapPin, Link as LinkIcon } from "lucide-react";
				import { Link, useParams } from "@remix-run/react";
				import { Button } from "~/components/ui/button";
				import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";
				import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
				import { Badge } from "~/components/ui/badge";
				import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
				import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/ui/dropdown-menu";
				
				export   function DetailsScreen() {
				  const { id } = useParams();
				
				  // Mock data - replace with your actual data fetching
				  const project = {
					id: id || "1",
					title: "Website Redesign",
					description: "Complete overhaul of the company website including new UI components and improved UX.",
					status: "in-progress",
					dueDate: "2023-12-15",
					owner: {
					  name: "Alex Johnson",
					  avatar: "",
					  role: "Project Lead"
					},
					team: [
					  { name: "Maria Garcia", role: "Designer", avatar: "" },
					  { name: "Sam Wilson", role: "Developer", avatar: "" },
					  { name: "Taylor Smith", role: "QA", avatar: "" }
					],
					stats: {
					  tasksCompleted: 24,
					  totalTasks: 36,
					  budgetUsed: "$12,450",
					  totalBudget: "$20,000"
					},
					details: {
					  client: "Acme Inc.",
					  priority: "High",
					  startDate: "2023-10-01"
					}
				  };
				
				  const statusIcon = {
					completed: <CheckCircle2 className="h-5 w-5 text-green-500" />,
					"in-progress": <Clock className="h-5 w-5 text-blue-500" />,
					overdue: <AlertCircle className="h-5 w-5 text-red-500" />
				  }[project.status];
				
				  return (
					<div className="p-6 max-w-7xl mx-auto">
					  {/* Header with back button and actions */}
					  <div className="flex items-center justify-between mb-6">
						<Link to="/projects" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
						  <ChevronLeft className="h-5 w-5 mr-1" />
						  Back to projects
						</Link>
						<div className="flex space-x-3">
						  <Button variant="outline">Edit</Button>
						  <Button>Share</Button>
						  <DropdownMenu>
							<DropdownMenuTrigger asChild>
							  <Button variant="ghost" size="icon">
								<MoreVertical className="h-5 w-5" />
							  </Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
							  <DropdownMenuItem>Archive</DropdownMenuItem>
							  <DropdownMenuItem>Duplicate</DropdownMenuItem>
							  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
							</DropdownMenuContent>
						  </DropdownMenu>
						</div>
					  </div>
				
					  {/* Main content */}
					  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
						{/* Left column */}
						<div className="lg:col-span-2 space-y-6">
						  {/* Project header */}
						  <div className="flex items-start justify-between">
							<div>
							  <div className="flex items-center space-x-4">
								<h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
								<Badge variant={project.status === "completed" ? "default" : project.status === "in-progress" ? "secondary" : "destructive"}>
								  {project.status.split('-').join(' ')}
								</Badge>
							  </div>
							  <p className="mt-2 text-gray-600">{project.description}</p>
							</div>
							<div className="flex items-center space-x-2">
							  {statusIcon}
							  <span className="text-sm font-medium text-gray-700">
								Due {new Date(project.dueDate).toLocaleDateString()}
							  </span>
							</div>
						  </div>
				
						  {/* Tabs */}
						  <Tabs defaultValue="overview" className="w-full">
							<TabsList>
							  <TabsTrigger value="overview">Overview</TabsTrigger>
							  <TabsTrigger value="tasks">Tasks</TabsTrigger>
							  <TabsTrigger value="files">Files</TabsTrigger>
							  <TabsTrigger value="activity">Activity</TabsTrigger>
							  <TabsTrigger value="settings">Settings</TabsTrigger>
							</TabsList>
							
							<TabsContent value="overview" className="pt-6">
							  {/* Overview content */}
							  <div className="space-y-6">
								{/* Progress cards */}
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								  <Card>
									<CardHeader className="pb-2">
									  <CardTitle className="text-sm font-medium text-gray-500">Progress</CardTitle>
									</CardHeader>
									<CardContent>
									  <div className="text-2xl font-bold">
										{Math.round((project.stats.tasksCompleted / project.stats.totalTasks) * 100)}%
									  </div>
									  <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
										<div 
										  className="h-full bg-blue-500" 
										  style={{ width: '$ {Math.round((project.stats.tasksCompleted / project.stats.totalTasks) * 100)}%' }}
										/>
									  </div>
									  <p className="mt-2 text-sm text-gray-500">
										{project.stats.tasksCompleted} of {project.stats.totalTasks} tasks completed
									  </p>
									</CardContent>
								  </Card>
				
								  <Card>
									<CardHeader className="pb-2">
									  <CardTitle className="text-sm font-medium text-gray-500">Budget</CardTitle>
									</CardHeader>
									<CardContent>
									  <div className="text-2xl font-bold">{project.stats.budgetUsed}</div>
									  <p className="mt-2 text-sm text-gray-500">
										of {project.stats.totalBudget} total
									  </p>
									</CardContent>
								  </Card>
								</div>
				
								{/* Description card */}
								<Card>
								  <CardHeader>
									<CardTitle className="text-lg">Project Details</CardTitle>
								  </CardHeader>
								  <CardContent>
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									  <div className="space-y-4">
										<div>
										  <h3 className="text-sm font-medium text-gray-500">Client</h3>
										  <p className="mt-1 text-sm text-gray-900">{project.details.client}</p>
										</div>
										<div>
										  <h3 className="text-sm font-medium text-gray-500">Priority</h3>
										  <p className="mt-1 text-sm text-gray-900">{project.details.priority}</p>
										</div>
									  </div>
									  <div className="space-y-4">
										<div>
										  <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
										  <p className="mt-1 text-sm text-gray-900">
											{new Date(project.details.startDate).toLocaleDateString()}
										  </p>
										</div>
										<div>
										  <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
										  <p className="mt-1 text-sm text-gray-900">
											{new Date(project.dueDate).toLocaleDateString()}
										  </p>
										</div>
									  </div>
									</div>
								  </CardContent>
								</Card>
							  </div>
							</TabsContent>
						  </Tabs>
						</div>
				
						{/* Right column */}
						<div className="space-y-6">
						  {/* Project owner */}
						  <Card>
							<CardHeader>
							  <CardTitle className="text-lg">Project Owner</CardTitle>
							</CardHeader>
							<CardContent>
							  <div className="flex items-center space-x-4">
								<Avatar>
								  <AvatarImage src={project.owner.avatar} />
								  <AvatarFallback>{project.owner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
								</Avatar>
								<div>
								  <h3 className="font-medium">{project.owner.name}</h3>
								  <p className="text-sm text-gray-500">{project.owner.role}</p>
								</div>
							  </div>
							  <div className="mt-4 space-y-3">
								<Button variant="outline" className="w-full justify-start">
								  <Mail className="h-4 w-4 mr-2" />
								  Send message
								</Button>
								<Button variant="outline" className="w-full justify-start">
								  <User className="h-4 w-4 mr-2" />
								  View profile
								</Button>
							  </div>
							</CardContent>
						  </Card>
				
						  {/* Team members */}
						  <Card>
							<CardHeader>
							  <CardTitle className="text-lg">Team Members</CardTitle>
							</CardHeader>
							<CardContent>
							  <div className="space-y-4">
								{project.team.map((member) => (
								  <div key={member.name} className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
									  <Avatar className="h-9 w-9">
										<AvatarImage src={member.avatar} />
										<AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
									  </Avatar>
									  <div>
										<h3 className="text-sm font-medium">{member.name}</h3>
										<p className="text-sm text-gray-500">{member.role}</p>
									  </div>
									</div>
									<Button variant="ghost" size="icon">
									  <MoreVertical className="h-4 w-4" />
									</Button>
								  </div>
								))}
							  </div>
							  <Button variant="outline" className="w-full mt-4">
								Add team member
							  </Button>
							</CardContent>
						  </Card>
				
						  {/* Client details */}
						  <Card>
							<CardHeader>
							  <CardTitle className="text-lg">Client Information</CardTitle>
							</CardHeader>
							<CardContent>
							  <div className="space-y-3">
								<div className="flex items-center">
								  <Mail className="h-4 w-4 text-gray-500 mr-3" />
								  <span className="text-sm">contact@acme.com</span>
								</div>
								<div className="flex items-center">
								  <Phone className="h-4 w-4 text-gray-500 mr-3" />
								  <span className="text-sm">(555) 123-4567</span>
								</div>
								<div className="flex items-center">
								  <MapPin className="h-4 w-4 text-gray-500 mr-3" />
								  <span className="text-sm">123 Business Ave, San Francisco</span>
								</div>
								<div className="flex items-center">
								  <LinkIcon className="h-4 w-4 text-gray-500 mr-3" />
								  <a href="#" className="text-sm text-blue-600 hover:underline">acme.com</a>
								</div>
							  </div>
							</CardContent>
						  </Card>
						</div>
					  </div>
					</div>
				  );
				}`
			break;
		case "FeedComponents":
			viewSelected = <FeedsDemo />;
				selectedCode= `import React from 'react';
import { 
  MessageCircle, 
  Heart, 
  Share, 
  MoreHorizontal, 
  User, 
  Calendar,
  MapPin,
  Star,
  ThumbsUp,
  Reply,
  Download,
  ExternalLink,
  FileText,
  Video
} from 'lucide-react';

// Simple Activity Feed
export function  SimpleActivityFeed   ()   {
  const activities = [
    {
      id: 1,
      user: { name: 'Emily Johnson', avatar: null },
      action: 'commented on',
      target: 'Wireframe Review',
      time: '2 hours ago',
      type: 'comment'
    },
    {
      id: 2,
      user: { name: 'Michael Chen', avatar: null },
      action: 'uploaded',
      target: 'Design System v2.0',
      time: '4 hours ago',
      type: 'upload'
    },
    {
      id: 3,
      user: { name: 'Sarah Williams', avatar: null },
      action: 'created',
      target: 'New Project Proposal',
      time: '1 day ago',
      type: 'create'
    },
    {
      id: 4,
      user: { name: 'Alex Rodriguez', avatar: null },
      action: 'completed',
      target: 'User Research Phase',
      time: '2 days ago',
      type: 'complete'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'comment': return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'upload': return <Download className="h-4 w-4 text-green-500" />;
      case 'create': return <FileText className="h-4 w-4 text-purple-500" />;
      case 'complete': return <Star className="h-4 w-4 text-yellow-500" />;
      default: return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user.name}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Social Media Feed
export function  SocialMediaFeed  ()   {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Jessica Parker',
        username: '@jessicaparker',
        avatar: null
      },
      content: 'Just launched our new design system! Really excited about the improved accessibility features and component flexibility. Thanks to the amazing team who made this possible. 🎉',
      timestamp: '3 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      type: 'text'
    },
    {
      id: 2,
      author: {
        name: 'David Kim',
        username: '@davidkim',
        avatar: null
      },
      content: 'Beautiful sunset from today\'s team retreat. Sometimes the best ideas come when you step away from the screen.',
      timestamp: '1 day ago',
      likes: 45,
      comments: 12,
      shares: 7,
      type: 'image'
    },
    {
      id: 3,
      author: {
        name: 'Maria Santos',
        username: '@mariasantos',
        avatar: null
      },
      content: 'Quick tip: Always prototype your responsive designs on actual devices. What looks good in dev tools might not work in reality.',
      timestamp: '2 days ago',
      likes: 67,
      comments: 15,
      shares: 23,
      type: 'text'
    }
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border shadow-sm">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{post.author.name}</h4>
                  <p className="text-xs text-gray-500">{post.author.username}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{post.timestamp}</span>
                <MoreHorizontal className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-900 text-sm leading-relaxed">{post.content}</p>
              {post.type === 'image' && (
                <div className="mt-3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-gray-400">📷 Image</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Share className="h-4 w-4" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// News Feed with Rich Content
export function  NewsFeed   ()  {
  const articles = [
    {
      id: 1,
      title: 'The Future of Remote Work: Trends and Predictions for 2025',
      summary: 'Exploring how remote work culture continues to evolve and what companies need to know about hybrid workplace strategies.',
      author: 'Taylor Wilson',
      publishedAt: '4 hours ago',
      readTime: '5 min read',
      category: 'Technology',
      image: true,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Sustainable Design Practices: Building for the Future',
      summary: 'How modern design teams are incorporating sustainability principles into their workflow and product development.',
      author: 'Rachel Green',
      publishedAt: '1 day ago',
      readTime: '8 min read',
      category: 'Design',
      image: true,
      bookmarked: true
    },
    {
      id: 3,
      title: 'AI in Creative Industries: Collaboration, Not Replacement',
      summary: 'Understanding how artificial intelligence is becoming a creative partner rather than a threat to human creativity.',
      author: 'James Martinez',
      publishedAt: '3 days ago',
      readTime: '6 min read',
      category: 'AI & Innovation',
      image: false,
      bookmarked: false
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Design': return 'bg-purple-100 text-purple-800';
      case 'AI & Innovation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <article key={article.id} className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium $ {getCategoryColor(article.category)}'}>
                {article.category}
              </span>
              <button className={'p-1 rounded-full hover:bg-gray-100 $ {article.bookmarked ? 'text-yellow-500' : 'text-gray-400'}'}>
                <Star className={'h-4 w-4 $ {article.bookmarked ? 'fill-current' : ''}'} />
              </button>
            </div>
            
            {article.image && (
              <div className="mb-4 bg-gray-100 rounded-lg h-40 flex items-center justify-center">
                <div className="text-gray-400">📸 Article Image</div>
              </div>
            )}
            
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              {article.title}
            </h2>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{article.author}</span>
                <span>{article.publishedAt}</span>
                <span>{article.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="hover:text-gray-700 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                </button>
                <button className="hover:text-gray-700 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button className="hover:text-gray-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

// Timeline Feed
export function  TimelineFeed  ()   {
  const events = [
    {
      id: 1,
      title: 'Project Kickoff Meeting',
      description: 'Initial planning session for the new mobile app redesign project.',
      date: 'Today',
      time: '2:00 PM',
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Design Review Completed',
      description: 'Successfully reviewed and approved the wireframes for the dashboard interface.',
      date: 'Yesterday',
      time: '4:30 PM',
      type: 'milestone',
      status: 'completed'
    },
    {
      id: 3,
      title: 'User Research Phase',
      description: 'Conducted interviews with 15 users to gather insights on current pain points.',
      date: '3 days ago',
      time: '10:00 AM',
      type: 'research',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Prototype Testing',
      description: 'Testing session scheduled with the QA team for the interactive prototype.',
      date: 'Next Monday',
      time: '9:00 AM',
      type: 'testing',
      status: 'scheduled'
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'meeting': return <Calendar className="h-4 w-4" />;
      case 'milestone': return <Star className="h-4 w-4" />;
      case 'research': return <User className="h-4 w-4" />;
      case 'testing': return <FileText className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 border-green-200 text-green-700';
      case 'upcoming': return 'bg-blue-100 border-blue-200 text-blue-700';
      case 'scheduled': return 'bg-yellow-100 border-yellow-200 text-yellow-700';
      default: return 'bg-gray-100 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {index !== events.length - 1 && (
                <div className="absolute top-8 left-4 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center $ {getStatusColor(event.status)}'}>
                  {getEventIcon(event.type)}
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                    <div className="text-xs text-gray-500 flex items-center space-x-2">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component showcasing all feed types
export function FeedsDemo  ()  {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feed Components</h1>
          <p className="text-gray-600">A collection of feed components built with React, Tailwind CSS, and Lucide icons.</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <SimpleActivityFeed />
            <TimelineFeed />
          </div>
          
          <div className="space-y-8">
            <SocialMediaFeed />
          </div>
          
          <div className="lg:col-span-2">
            <NewsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};
`
			break;
		case "GridLists":
			viewSelected = <GridLists />;
				selectedCode= `export function GridLists() {
	const items = [
		{ id: 1, name: "Project Alpha", category: "Development", stars: 85, url: "#" },
		{ id: 2, name: "Marketing Campaign", category: "Marketing", stars: 42, url: "#" },
		{ id: 3, name: "User Research", category: "Research", stars: 30, url: "#" },
		{ id: 4, name: "Q3 Roadmap", category: "Planning", stars: 64, url: "#" },
		{ id: 5, name: "Website Redesign", category: "Design", stars: 93, url: "#" },
		{ id: 6, name: "Customer Feedback", category: "Research", stars: 27, url: "#" },
	];

	return (
		<div className="p-8 max-w-7xl mx-auto">
			<h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>

			{/* Basic Grid List */}
			<div className="mb-12">
				<h3 className="text-lg font-medium text-gray-900 mb-4">Basic Grid</h3>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => (
						<Card key={item.id}>
							<CardHeader className="pb-0">
								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
										<p className="text-sm text-gray-500">{item.category}</p>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
												<MoreVertical className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>View</DropdownMenuItem>
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Delete</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</CardHeader>
							<CardContent className="mt-4">
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-400" />
									<span className="ml-2 text-sm text-gray-700">{item.stars}</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button asChild variant="outline" className="w-full">
									<Link to={item.url}>View project</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}`
			break;
				case "GridListwithAvatars":
			viewSelected = <GridListwithAvatars />;
				selectedCode= `// app/routes/grid-lists.tsx
import { Link } from "@remix-run/react";
import { Star, MoreVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Circle, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function GridListwithAvatars() {
	const teamMembers = [
		{ id: 1, name: "Alex Johnson", role: "Frontend Developer", avatar: "", status: "active" },
		{ id: 2, name: "Maria Garcia", role: "UX Designer", avatar: "", status: "active" },
		{ id: 3, name: "Sam Wilson", role: "Backend Developer", avatar: "", status: "away" },
		{ id: 4, name: "Taylor Smith", role: "Product Manager", avatar: "", status: "active" },
		{ id: 5, name: "Jordan Lee", role: "QA Engineer", avatar: "", status: "offline" },
		{ id: 6, name: "Casey Kim", role: "DevOps Engineer", avatar: "", status: "active" },
	];

	return (
		<div className="mb-12">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Team Members with Avatars</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{teamMembers.map((member) => (
					<Card key={member.id}>
						<CardContent className="pt-6">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src={member.avatar} />
									<AvatarFallback>
										{member.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">{member.name}</h4>
									<p className="text-sm text-gray-500">{member.role}</p>
									<div className="flex items-center">
										<span className={'inline-block h-2 w-2 rounded-full mr-2 $ {member.status === "active" ? "bg-green-500" : member.status === "away" ? "bg-yellow-500" : "bg-gray-500"}'} />
										<span className="text-xs text-gray-500 capitalize">{member.status}</span>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm">
								Message
							</Button>
							<Button variant="ghost" size="sm">
								Profile
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}`
break;
	case "GridListwithStatusIndicators":
			viewSelected = <GridListwithStatusIndicators />;
				selectedCode= `// app/routes/grid-lists.tsx
import { Link } from "@remix-run/react";
import { Star, MoreVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Circle, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function GridListwithStatusIndicators() {
	const tasks = [
		{ id: 1, title: "Implement user authentication", project: "Project Alpha", status: "completed", due: "2023-06-15" },
		{ id: 2, title: "Design dashboard UI", project: "Website Redesign", status: "in-progress", due: "2023-06-20" },
		{ id: 3, title: "Write API documentation", project: "Project Alpha", status: "pending", due: "2023-06-18" },
		{ id: 4, title: "Fix mobile layout issues", project: "Website Redesign", status: "in-progress", due: "2023-06-16" },
		{ id: 5, title: "Conduct user testing", project: "User Research", status: "overdue", due: "2023-06-10" },
		{ id: 6, title: "Deploy to production", project: "Project Alpha", status: "pending", due: "2023-06-25" },
	];

	return (
		// Add this section to your return statement
		<div className="mb-12">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Tasks with Status Indicators</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{tasks.map((task) => {
					const statusIcon = {
						completed: <CheckCircle2 className="h-5 w-5 text-green-500" />,
						"in-progress": <Circle className="h-5 w-5 text-blue-500" />,
						pending: <Clock className="h-5 w-5 text-yellow-500" />,
						overdue: <AlertCircle className="h-5 w-5 text-red-500" />,
					}[task.status];

					return (
						<Card key={task.id}>
							<CardHeader>
								<div className="flex justify-between items-start">
									<h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
									<div className="flex items-center">{statusIcon}</div>
								</div>
								<p className="text-sm text-gray-500">{task.project}</p>
							</CardHeader>
							<CardContent>
								<div className="flex justify-between text-sm">
									<span className="text-gray-500">Due date</span>
									<span className={'font-medium $ {task.status === "overdue" ? "text-red-500" : "text-gray-700"}'}>{new Date(task.due).toLocaleDateString()}</span>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="ghost" size="sm">
									Details
								</Button>
								<Button size="sm">{task.status === "completed" ? "View" : "Update"}</Button>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
`
break;
		case "HomeScreen":
			viewSelected = <HomePageSection />;
				selectedCode= `// app/routes/_index.tsx
import { Link, } from "@remix-run/react";
import { Bell, Search, ChevronDown, Menu, Home, FileText, Users, Settings, LogOut, } from "lucide-react";
import { Button, } from "~/components/ui/button";
import { Input, } from "~/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "~/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "~/components/ui/card";

export   function HomePageSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <h1 className="text-xl font-semibold text-gray-900">Acme Inc</h1>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              <Link
                to="#"
                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 bg-gray-100"
              >
                <Home className="mr-3 h-5 w-5 text-gray-500" />
                Dashboard
              </Link>
              <Link
                to="#"
                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileText className="mr-3 h-5 w-5 text-gray-400" />
                Documents
              </Link>
              <Link
                to="#"
                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="mr-3 h-5 w-5 text-gray-400" />
                Team
              </Link>
              <Link
                to="#"
                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-3 h-5 w-5 text-gray-400" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4">
            <div className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    John Doe
                  </p>
                  <button className="text-xs font-medium text-gray-500 group-hover:text-gray-700 flex items-center">
                    View profile <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Acme Inc</h1>
          </div>
          <div>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1 items-center">
              <div className="flex w-full max-w-lg">
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon" className="relative">
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-indigo-600"></span>
                <Bell className="h-6 w-6" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">John Doe</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Revenue
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Subscriptions
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Sales</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Now
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        You have 3 new tasks this week
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                      <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">
                            Olivia Martin
                          </p>
                          <p className="text-sm text-muted-foreground">
                            olivia.martin@email.com
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$1,999.00</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/02.png" alt="Avatar" />
                          <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">
                            Jackson Lee
                          </p>
                          <p className="text-sm text-muted-foreground">
                            jackson.lee@email.com
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$39.00</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/03.png" alt="Avatar" />
                          <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">
                            Isabella Nguyen
                          </p>
                          <p className="text-sm text-muted-foreground">
                            isabella.nguyen@email.com
                          </p>
                        </div>
                        <div className="ml-auto font-medium">+$299.00</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}`
			break;
		case "IncentiveSection":
			viewSelected = <IncentiveDemo />;
				selectedCode= `import { 
  Truck, 
  RotateCcw, 
  Shield, 
  Headphones, 
  CreditCard, 
  Award,
  Clock,
  Star,
  Gift,
  Zap
} from 'lucide-react';

// Simple grid layout with icons
export function SimpleIncentives() {
  const incentives = [
    {
      name: 'Free shipping',
      description: 'Free shipping on orders over $25',
      icon: Truck,
    },
    {
      name: 'Free returns',
      description: '30-day return policy',
      icon: RotateCcw,
    },
    {
      name: 'Warranty',
      description: '2-year manufacturer warranty',
      icon: Shield,
    },
    {
      name: '24/7 support',
      description: 'Call us anytime at 1-800-555-0199',
      icon: Headphones,
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <incentive.icon className="mx-auto h-16 w-16 text-gray-400" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-semibold text-gray-900">{incentive.name}</h3>
                <p className="mt-3 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Card-based layout with background colors
export function CardIncentives() {
  const incentives = [
    {
      name: 'Free Shipping',
      description: 'Free shipping worldwide on orders over $50',
      icon: Truck,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Easy Returns',
      description: '30-day hassle-free returns',
      icon: RotateCcw,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      name: 'Secure Payment',
      description: 'Your payment information is safe with us',
      icon: CreditCard,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Premium Support',
      description: '24/7 customer support via chat and email',
      icon: Headphones,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why shop with us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10">
              <div>
                <div className={"inline-flex h-16 w-16 items-center justify-center rounded-lg $ {incentive.bgColor}"}>
                  <incentive.icon className={'h-8 w-8 $ {incentive.iconColor}'} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Banner style incentives
export function BannerIncentives() {
  const incentives = [
    {
      name: 'Free shipping on orders over $75',
      icon: Truck,
    },
    {
      name: '30-day money-back guarantee',
      icon: RotateCcw,
    },
    {
      name: 'Award-winning customer service',
      icon: Award,
    },
  ]

  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <Gift className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
              <span>Limited time offer!</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <div className="flex space-x-6">
              {incentives.map((incentive, index) => (
                <div key={index} className="flex items-center text-sm text-indigo-200">
                  <incentive.icon className="mr-2 h-4 w-4" />
                  <span>{incentive.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature grid with emphasis
export function FeatureIncentives() {
  const incentives = [
    {
      name: 'Lightning Fast Delivery',
      description: 'Get your order delivered in 24-48 hours with our express shipping option.',
      icon: Zap,
      featured: true,
    },
    {
      name: 'Quality Guarantee',
      description: 'Every product comes with our quality promise and full manufacturer warranty.',
      icon: Shield,
      featured: false,
    },
    {
      name: 'Expert Support',
      description: 'Our product experts are available 7 days a week to help you make the right choice.',
      icon: Headphones,
      featured: false,
    },
    {
      name: '5-Star Reviews',
      description: 'Join thousands of happy customers who have rated us 5 stars.',
      icon: Star,
      featured: true,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping made simple
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've built our reputation on providing exceptional service and quality products that exceed expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={'flex h-10 w-10 items-center justify-center rounded-lg $ {
                    incentive.featured ? 'bg-indigo-600' : 'bg-gray-100'
                  }'}>
                    <incentive.icon 
                      className={'h-6 w-6 $ {incentive.featured ? 'text-white' : 'text-gray-600'}'} 
                      aria-hidden="true" 
                    />
                  </div>
                  {incentive.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{incentive.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Compact horizontal layout
export function CompactIncentives() {
  const incentives = [
    { name: 'Free shipping over $50', icon: Truck },
    { name: '24/7 customer support', icon: Clock },
    { name: '30-day returns', icon: RotateCcw },
    { name: 'Secure payments', icon: Shield },
  ]

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {incentives.map((incentive, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-white">
              <incentive.icon className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">{incentive.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Demo component showing all variations
export   function IncentiveDemo() {
  return (
    <div className="space-y-0">
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ecommerce Incentive Sections</h1>
          <p className="text-gray-600 mb-8">Different styles of incentive sections to build trust and encourage purchases</p>
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Simple Grid Layout</h2>
            <p className="text-gray-600 text-sm">Clean icons with minimal text in a responsive grid</p>
          </div>
          <SimpleIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Card-Based Layout</h2>
            <p className="text-gray-600 text-sm">Cards with colored backgrounds and detailed descriptions</p>
          </div>
          <CardIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Banner Style</h2>
            <p className="text-gray-600 text-sm">Compact banner highlighting key incentives</p>
          </div>
          <BannerIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Feature Grid</h2>
            <p className="text-gray-600 text-sm">Detailed descriptions with featured highlights</p>
          </div>
          <FeatureIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Compact Footer Style</h2>
            <p className="text-gray-600 text-sm">Minimal horizontal layout perfect for footers</p>
          </div>
          <CompactIncentives />
        </section>
      </div>
    </div>
  )
}`
			break;
		case "LandingPage":
			viewSelected = <LandingPageSection />;
				selectedCode= `import { Link, } from "@remix-run/react";
import { Button, } from "~/components/ui/button";
import { Badge, } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "~/components/ui/card";
import { Input, } from "~/components/ui/input";
import { Separator, } from "~/components/ui/separator";
import { ArrowRight, Check, Star, Zap, Shield, Users, BarChart3, Globe, Smartphone, Menu, X, ChevronDown, } from "lucide-react";
import { useState, } from "react";

export   function LandingPageSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every layer of our platform."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using real-time collaboration tools."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your data with comprehensive analytics."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Deploy worldwide with our global content delivery network."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Ready",
      description: "Fully responsive design that works perfectly on all devices."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom solutions",
        "Unlimited storage",
        "SSO integration",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "This platform has completely transformed how we work. The productivity gains are incredible.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "SJ"
    },
    {
      quote: "The best investment we've made for our development team. Highly recommended!",
      author: "Michael Chen",
      role: "CTO, StartupXYZ",
      avatar: "MC"
    },
    {
      quote: "Outstanding customer support and a product that just works. Five stars!",
      author: "Emily Davis",
      role: "Product Manager, BigTech",
      avatar: "ED"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="ml-2 text-xl font-bold">ProductName</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="#features" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link to="#pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link to="#testimonials" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Testimonials
                </Link>
                <Link to="#contact" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link to="#features" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link to="#pricing" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link to="#testimonials" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Testimonials
              </Link>
              <Link to="#contact" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <Badge className="mb-4" variant="secondary">
            🎉 New: Advanced Analytics Dashboard
          </Badge>
          
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl dark:text-slate-100">
            Build your next
            <span className="relative whitespace-nowrap text-primary">
              <span className="relative"> amazing project</span>
            </span>
            faster than ever
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-300">
            The ultimate platform for developers and teams to build, deploy, and scale applications with unprecedented speed and reliability.
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative rounded-2xl bg-slate-50 p-2 ring-1 ring-inset ring-slate-900/10 lg:rounded-2xl lg:p-4 dark:bg-slate-800/50 dark:ring-slate-800">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Product screenshot"
                className="rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-slate-100/10"
                width="1824"
                height="1080"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful features for modern development
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform provides all the tools you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-slate-50 py-24 sm:py-32 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by thousands of developers
            </p>
          </div>
          
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {testimonial.avatar}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Choose the right plan for you
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start free and scale as you grow. All plans include our core features.
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={'relative $ {plan.popular ? 'ring-2 ring-primary' : ''}'}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-base font-semibold leading-6 text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
              Join thousands of developers who trust our platform to build amazing applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                Start your free trial
              </Button>
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                Contact sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay updated</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get the latest updates, tips, and announcements delivered to your inbox.
            </p>
            <div className="mt-6 flex max-w-md mx-auto gap-x-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-auto"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              We care about your data. Read our{' '}
              <Link to="#" className="underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; 2024 ProductName, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}`
			break;
		case "OrderDetailsPage":
			viewSelected = <OrderDetailsPage />;
				selectedCode= `import { Link, useLoaderData } from "@remix-run/react";
import { ChevronLeft, Package, Calendar, CreditCard, Truck, Check, MoreVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

/**export async function loader() {
  // In a real app, you'd fetch this data from your database/API
  return {
    order: {
      id: "WU88191111",
      date: "January 22, 2024",
      status: "delivered",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        phone: "555-123-4567",
      },
      shipping: {
        address: "1234 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94111",
        country: "United States",
        method: "Express",
        estimatedDelivery: "January 26, 2024",
        actualDelivery: "January 25, 2024",
      },
      payment: {
        method: "Visa",
        cardNumber: "•••• •••• •••• 4242",
        total: "$135.00",
        subtotal: "$120.00",
        tax: "$10.00",
        shipping: "$5.00",
      },
      items: [
        {
          id: 1,
          name: "Basic Tee",
          price: "$35.00",
          quantity: 2,
          total: "$70.00",
          color: "Black",
          size: "M",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/order-history-03.jpg",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          price: "$35.00",
          quantity: 1,
          total: "$35.00",
          color: "White",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/order-history-02.jpg",
        },
      ],
    },
  };
} */

export function OrderDetailsPage() {
	///const { order } = useLoaderData<typeof loader>();
	const order = {
		id: "WU88191111",
		date: "January 22, 2024",
		status: "delivered",
		customer: {
			name: "John Smith",
			email: "john@example.com",
			phone: "555-123-4567",
		},
		shipping: {
			address: "1234 Main St",
			city: "San Francisco",
			state: "CA",
			zip: "94111",
			country: "United States",
			method: "Express",
			estimatedDelivery: "January 26, 2024",
			actualDelivery: "January 25, 2024",
		},
		payment: {
			method: "Visa",
			cardNumber: "•••• •••• •••• 4242",
			total: "$135.00",
			subtotal: "$120.00",
			tax: "$10.00",
			shipping: "$5.00",
		},
		items: [
			{
				id: 1,
				name: "Basic Tee",
				price: "$35.00",
				quantity: 2,
				total: "$70.00",
				color: "Black",
				size: "M",
				imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-03.jpg",
			},
			{
				id: 2,
				name: "Nomad Tumbler",
				price: "$35.00",
				quantity: 1,
				total: "$35.00",
				color: "White",
				imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-02.jpg",
			},
		],
	};
	return (
		<div className="bg-background">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Back button */}
				<div className="mb-6">
					<Button variant="ghost" asChild>
						<Link to="/orders" className="flex items-center">
							<ChevronLeft className="mr-2 h-4 w-4" />
							Back to orders
						</Link>
					</Button>
				</div>

				{/* Order header */}
				<div className="flex flex-col justify-between sm:flex-row sm:items-center">
					<div>
						<h1 className="text-2xl font-bold tracking-tight text-foreground">Order #{order.id}</h1>
						<p className="mt-2 text-sm text-muted-foreground">Placed on {order.date}</p>
					</div>
					<div className="mt-4 sm:mt-0">
						<Badge variant={order.status === "delivered" ? "success" : order.status === "shipped" ? "default" : "secondary"} className="text-sm">
							{order.status.charAt(0).toUpperCase() + order.status.slice(1)}
						</Badge>
					</div>
				</div>

				{/* Order details */}
				<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
					{/* Shipping information */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<Truck className="h-5 w-5 text-muted-foreground" />
								<span>Shipping information</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Shipping address</h3>
									<p className="mt-1 text-sm text-foreground">{order.customer.name}</p>
									<p className="text-sm text-foreground">{order.shipping.address}</p>
									<p className="text-sm text-foreground">
										{order.shipping.city}, {order.shipping.state} {order.shipping.zip}
									</p>
									<p className="text-sm text-foreground">{order.shipping.country}</p>
								</div>

								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Shipping method</h3>
									<p className="mt-1 text-sm text-foreground">
										{order.shipping.method} • {order.shipping.estimatedDelivery}
									</p>
								</div>

								{order.status === "delivered" && (
									<div>
										<h3 className="text-sm font-medium text-muted-foreground">Delivered</h3>
										<p className="mt-1 text-sm text-foreground">{order.shipping.actualDelivery}</p>
									</div>
								)}
							</div>
						</CardContent>
					</Card>

					{/* Payment information */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<CreditCard className="h-5 w-5 text-muted-foreground" />
								<span>Payment information</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Payment method</h3>
									<p className="mt-1 text-sm text-foreground">
										{order.payment.method} {order.payment.cardNumber}
									</p>
								</div>

								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Billing address</h3>
									<p className="mt-1 text-sm text-foreground">Same as shipping address</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Order items */}
				<Card className="mt-8">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Package className="h-5 w-5 text-muted-foreground" />
							<span>Order items</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px]">Product</TableHead>
									<TableHead>Price</TableHead>
									<TableHead>Qty</TableHead>
									<TableHead className="text-right">Total</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.items.map((item) => (
									<TableRow key={item.id}>
										<TableCell className="font-medium">
											<div className="flex items-center">
												<div className="mr-4 h-16 w-16 overflow-hidden rounded-md border border-border">
													<img src={item.imageSrc} alt={item.name} className="h-full w-full object-cover object-center" />
												</div>
												<div>
													<p className="text-sm font-medium text-foreground">{item.name}</p>
													<p className="text-sm text-muted-foreground">
														{item.color}
														{item.size && ' • $ {item.size}'}
													</p>
												</div>
											</div>
										</TableCell>
										<TableCell>{item.price}</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell className="text-right">{item.total}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						{/* Order summary */}
						<div className="mt-8 border-t border-border pt-6">
							<div className="space-y-3">
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Subtotal</p>
									<p className="text-sm text-foreground">{order.payment.subtotal}</p>
								</div>
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Shipping</p>
									<p className="text-sm text-foreground">{order.payment.shipping}</p>
								</div>
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Tax</p>
									<p className="text-sm text-foreground">{order.payment.tax}</p>
								</div>
								<div className="flex justify-between border-t border-border pt-3">
									<p className="text-base font-medium text-foreground">Total</p>
									<p className="text-base font-medium text-foreground">{order.payment.total}</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Order status timeline */}
				<Card className="mt-8">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Calendar className="h-5 w-5 text-muted-foreground" />
							<span>Order status</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="relative">
							{/* Timeline */}
							<div className="space-y-6">
								{/* Order placed */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Order placed</h3>
											<time dateTime={order.date} className="text-sm text-muted-foreground">
												{order.date}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order was placed and is being processed.</p>
									</div>
								</div>

								{/* Payment processed */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Payment processed</h3>
											<time dateTime={order.date} className="text-sm text-muted-foreground">
												{order.date}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your payment was successfully processed.</p>
									</div>
								</div>

								{/* Shipped */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Shipped</h3>
											<time dateTime={order.shipping.estimatedDelivery} className="text-sm text-muted-foreground">
												January 24, 2024
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order has been shipped.</p>
									</div>
								</div>

								{/* Delivered */}
								<div className="relative flex items-start">
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Delivered</h3>
											<time dateTime={order.shipping.actualDelivery} className="text-sm text-muted-foreground">
												{order.shipping.actualDelivery}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order has been delivered.</p>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Actions */}
				<div className="mt-8 flex justify-end space-x-4">
					<Button variant="outline" asChild>
						<Link to="#">Invoice</Link>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<MoreVertical className="h-4 w-4" />
								<span className="sr-only">More actions</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>Reorder</DropdownMenuItem>
							<DropdownMenuItem>Return items</DropdownMenuItem>
							<DropdownMenuItem>Contact support</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
`
			break;
		case "OrderHistory":
			viewSelected = <OrderHistory />;
				selectedCode= `import { ChevronRight, Package, Truck, CheckCircle, Clock, } from 'lucide-react';
import { Button, } from '~/components/ui/button';
import { Badge, } from '~/components/ui/badge';

export function OrderHistory   ()  {
  const orders = [
    {
      id: 'WU88191111',
      date: 'January 22, 2021',
      total: '$302.00',
      status: 'delivered',
      items: [
        {
          id: 1,
          name: 'Micro Backpack',
          description: 'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          price: '$70.00',
          color: 'Moss',
          size: '5L',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
        },
        {
          id: 2,
          name: 'Basic Tee 6-Pack',
          description: 'Get back to basics with our everyday T-shirts. From the studio to the streets, this versatile essential delivers cool comfort.',
          price: '$192.00',
          color: 'Black',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        }
      ]
    },
    {
      id: 'WU88191112',
      date: 'March 15, 2021',
      total: '$157.00',
      status: 'out-for-delivery',
      items: [
        {
          id: 3,
          name: 'Nomad Tumbler',
          description: 'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          price: '$35.00',
          color: 'White',
          size: '20oz',
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
        }
      ]
    },
    {
      id: 'WU88191113',
      date: 'April 2, 2021',
      total: '$89.00',
      status: 'processing',
      items: [
        {
          id: 4,
          name: 'Focus Paper Refill',
          description: 'Get the most out of your Focus system with this set of paper refills. Available in lined, graph, or blank options.',
          price: '$89.00',
          color: 'White',
          size: 'Letter',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'out-for-delivery':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      delivered: 'bg-green-100 text-green-800',
      'out-for-delivery': 'bg-blue-100 text-blue-800',
      processing: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <Badge className={'$ {variants[status]} hover:$ {variants[status]}'}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </Badge>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Order history
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download invoices.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-16 sm:space-y-24">
            {orders.map((order) => (
              <div key={order.id}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.date}>{order.date}</time>
                </h3>

                <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <dl className="flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between md:block">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="md:mt-1">{order.id}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="md:mt-1">
                        <time dateTime={order.date}>{order.date}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                      <dt>Total amount</dt>
                      <dd className="md:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex items-center space-x-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Order
                      </Button>
                      <Button variant="outline" size="sm">
                        View Invoice
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {item.name}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {item.description}
                                </p>
                              </div>
                              <p className="mt-1 font-medium text-gray-900 sm:ml-6 sm:mt-0">
                                {item.price}
                              </p>
                            </div>
                            <div className="mt-2 flex text-sm font-medium sm:mt-4">
                              <span className="text-gray-500">Color: {item.color}</span>
                              <span className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            {order.status === 'delivered' ? (
                              <div className="flex space-x-4">
                                <Button variant="outline" size="sm">
                                  Buy again
                                </Button>
                                <Button variant="outline" size="sm">
                                  Shop similar
                                </Button>
                              </div>
                            ) : (
                              <Button variant="link" className="p-0 h-auto text-indigo-600 hover:text-indigo-500">
                                View product <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-center">
          <Button variant="outline">
            View all orders
          </Button>
        </div>
      </div>
    </div>
  );
};
`
			break;
		case "OrdersSummaries":
			viewSelected = <OrderSummaries />;
				selectedCode= `import { ChevronRight, Package, Truck, CheckCircle, Clock, Calendar, CreditCard, MapPin } from "lucide-react";
				import { Button } from "~/components/ui/button";
				
				export function OrderSummaries() {
					const orders = [
						{
							id: "WU88191111",
							number: "#4376",
							date: "July 12, 2021",
							datetime: "2021-07-12",
							status: "delivered",
							total: "$160.00",
							items: [
								{
									id: 1,
									name: "Micro Backpack",
									price: "$70.00",
									color: "Moss",
									size: "Large",
									image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
								},
								{
									id: 2,
									name: "Basic Tee",
									price: "$32.00",
									color: "Sienna",
									size: "Large",
									image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
								},
								{
									id: 3,
									name: "Basic Tee",
									price: "$32.00",
									color: "Natural",
									size: "Large",
									image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
								},
							],
							deliveredTo: "Front door",
							deliveryDate: "July 15, 2021",
						},
						{
							id: "WU88191112",
							number: "#4375",
							date: "July 6, 2021",
							datetime: "2021-07-06",
							status: "out-for-delivery",
							total: "$104.00",
							items: [
								{
									id: 4,
									name: "Basic Tee",
									price: "$32.00",
									color: "Black",
									size: "Large",
									image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
								},
								{
									id: 5,
									name: "Basic Tee",
									price: "$32.00",
									color: "Sienna",
									size: "Large",
									image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
								},
							],
							estimatedDelivery: "July 8, 2021",
						},
						{
							id: "WU88191113",
							number: "#4374",
							date: "June 24, 2021",
							datetime: "2021-06-24",
							status: "processing",
							total: "$35.00",
							items: [
								{
									id: 6,
									name: "Nomad Tumbler",
									price: "$35.00",
									color: "White",
									size: "20oz",
									image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
								},
							],
						},
					];
				
					const getStatusIcon = (status) => {
						switch (status) {
							case "delivered":
								return <CheckCircle className="h-5 w-5 text-green-500" />;
							case "out-for-delivery":
								return <Truck className="h-5 w-5 text-blue-500" />;
							case "processing":
								return <Clock className="h-5 w-5 text-yellow-500" />;
							default:
								return <Package className="h-5 w-5 text-gray-400" />;
						}
					};
				
					const getStatusText = (status) => {
						switch (status) {
							case "delivered":
								return "Delivered";
							case "out-for-delivery":
								return "Out for delivery";
							case "processing":
								return "Processing";
							default:
								return "Unknown";
						}
					};
				
					const getStatusColor = (status) => {
						switch (status) {
							case "delivered":
								return "text-green-600";
							case "out-for-delivery":
								return "text-blue-600";
							case "processing":
								return "text-yellow-600";
							default:
								return "text-gray-600";
						}
					};
				
					return (
						<div className="bg-white">
							<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
								<div className="max-w-xl">
									<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Orders</h1>
									<p className="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
								</div>
				
								<section aria-labelledby="recent-heading" className="mt-16">
									<h2 id="recent-heading" className="sr-only">
										Recent orders
									</h2>
				
									<div className="space-y-20">
										{orders.map((order) => (
											<div key={order.id}>
												<h3 className="sr-only">
													Order placed on <time dateTime={order.datetime}>{order.date}</time>
												</h3>
				
												<div className="rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
													<dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
														<div className="flex justify-between sm:block">
															<dt className="font-medium text-gray-900">Date placed</dt>
															<dd className="sm:mt-1">
																<time dateTime={order.datetime}>{order.date}</time>
															</dd>
														</div>
														<div className="flex justify-between pt-6 sm:block sm:pt-0">
															<dt className="font-medium text-gray-900">Order number</dt>
															<dd className="sm:mt-1">{order.number}</dd>
														</div>
														<div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
															<dt>Total amount</dt>
															<dd className="sm:mt-1">{order.total}</dd>
														</div>
													</dl>
													<Button
														className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
														variant="outline"
													>
														View Order
														<ChevronRight className="ml-2 h-4 w-4" />
													</Button>
												</div>
				
												<table className="mt-4 w-full text-gray-500 sm:mt-6">
													<caption className="sr-only">Products</caption>
													<thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
														<tr>
															<th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
																Product
															</th>
															<th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
																Price
															</th>
															<th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
																Status
															</th>
															<th scope="col" className="w-0 py-3 text-right font-normal">
																Info
															</th>
														</tr>
													</thead>
													<tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
														{order.items.map((item) => (
															<tr key={item.id}>
																<td className="py-6 pr-8">
																	<div className="flex items-center">
																		<img src={item.image} alt={item.name} className="mr-6 h-16 w-16 rounded object-center object-cover" />
																		<div>
																			<div className="font-medium text-gray-900">{item.name}</div>
																			<div className="mt-1 sm:hidden">{item.price}</div>
																		</div>
																	</div>
																</td>
																<td className="hidden py-6 pr-8 sm:table-cell">{item.price}</td>
																<td className="hidden py-6 pr-8 sm:table-cell">
																	<div className="flex items-center">
																		{getStatusIcon(order.status)}
																		<span className={'ml-2 text-sm font-medium $ {getStatusColor(order.status)}'}>{getStatusText(order.status)}</span>
																		{order.status === "delivered" && order.deliveredTo && <div className="ml-2 text-sm text-gray-500">to {order.deliveredTo}</div>}
																	</div>
																	{order.status === "delivered" && order.deliveryDate && (
																		<div className="mt-1 text-sm text-gray-500">
																			on <time dateTime={order.deliveryDate}>{order.deliveryDate}</time>
																		</div>
																	)}
																	{order.status === "out-for-delivery" && order.estimatedDelivery && <div className="mt-1 text-sm text-gray-500">Arrives {order.estimatedDelivery}</div>}
																</td>
																<td className="whitespace-nowrap py-6 text-right font-medium">
																	<Button variant="link" className="text-indigo-600 hover:text-indigo-500 p-0 h-auto">
																		View
																	</Button>
																</td>
															</tr>
														))}
													</tbody>
												</table>
				
												<div className="sm:hidden">
													{order.items.map((item) => (
														<div key={item.id} className="mt-6 flex space-x-6">
															<div className="flex-auto">
																<div className="flex items-center">
																	{getStatusIcon(order.status)}
																	<span className={'ml-2 text-sm font-medium $ {getStatusColor(order.status)}'}>{getStatusText(order.status)}</span>
																	{order.status === "delivered" && order.deliveredTo && <span className="ml-2 text-sm text-gray-500">to {order.deliveredTo}</span>}
																</div>
																{order.status === "delivered" && order.deliveryDate && (
																	<p className="mt-1 text-sm text-gray-500">
																		on <time dateTime={order.deliveryDate}>{order.deliveryDate}</time>
																	</p>
																)}
																{order.status === "out-for-delivery" && order.estimatedDelivery && <p className="mt-1 text-sm text-gray-500">Arrives {order.estimatedDelivery}</p>}
															</div>
															<Button variant="link" className="text-indigo-600 hover:text-indigo-500 p-0 h-auto">
																View
															</Button>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								</section>
							</div>
						</div>
					);
				}
				`
			break;
		case "PageHeadings":
			viewSelected = <PageHeadingsSection />;
				selectedCode= `import { Briefcase, Calendar, Check, ChevronDown, DollarSign, Link, MapPin, Pencil } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";

export function PageHeadingsSection() {
	return (
		<div className="lg:flex lg:items-center lg:justify-between">
			<div className="min-w-0 flex-1">
				<h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer</h2>
				<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
					<div className="mt-2 flex items-center text-sm text-gray-400">
						<Briefcase className="mr-1.5 size-5 shrink-0 text-gray-500" />
						Full-time
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-400">
						<MapPin className="mr-1.5 size-5 shrink-0 text-gray-500" />
						Remote
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-400">
						<DollarSign className="mr-1.5 size-5 shrink-0 text-gray-500" />
						$120k &ndash; $140k
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-400">
						<Calendar className="mr-1.5 size-5 shrink-0 text-gray-500" />
						Closing on January 9, 2020
					</div>
				</div>
			</div>
			<div className="mt-5 flex lg:ml-4 lg:mt-0">
				<span className="hidden sm:block">
					<Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
						<Pencil className="-ml-0.5 mr-1.5 size-5 text-white" />
						Edit
					</Button>
				</span>

				<span className="ml-3 hidden sm:block">
					<Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
						<Link className="-ml-0.5 mr-1.5 size-5 text-white" />
						View
					</Button>
				</span>

				<span className="sm:ml-3">
					<Button className="bg-indigo-500 text-white hover:bg-indigo-400">
						<Check className="-ml-0.5 mr-1.5 size-5" />
						Publish
					</Button>
				</span>

				{/* Dropdown */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild className="sm:hidden">
						<Button variant="ghost" className="ml-3 bg-white/10 text-white hover:bg-white/20">
							More
							<ChevronDown className="-mr-1 ml-1.5 size-5 text-white" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-24 bg-gray-800 outline outline-1 outline-white/10">
						<DropdownMenuItem className="text-gray-300 focus:bg-white/5">Edit</DropdownMenuItem>
						<DropdownMenuItem className="text-gray-300 focus:bg-white/5">View</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
`
			break;
		case "PricingPage":
			viewSelected = <PricingPage />;
				selectedCode= `// app/routes/pricing.tsx
import { Link } from "@remix-run/react";
import { Check, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export function PricingPage() {
	const plans = [
		{
			name: "Free",
			price: "$0",
			description: "For hobby projects or small teams.",
			features: ["1 team member", "2GB storage", "Upto 10 projects", "Basic support"],
			missingFeatures: ["Advanced analytics", "API access", "Priority support"],
			cta: "Get started",
			popular: false,
		},
		{
			name: "Pro",
			price: "$15",
			description: "For growing teams with bigger needs.",
			features: ["5 team members", "10GB storage", "Upto 50 projects", "Advanced analytics", "API access"],
			missingFeatures: ["Priority support"],
			cta: "Get started",
			popular: true,
		},
		{
			name: "Enterprise",
			price: "$30",
			description: "For large companies with complex needs.",
			features: ["Unlimited team members", "Unlimited storage", "Unlimited projects", "Advanced analytics", "API access", "Priority support"],
			missingFeatures: [],
			cta: "Contact sales",
			popular: false,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing plans for teams of all sizes</h1>
					<p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Choose an affordable plan that's packed with the best features for engaging your audience.</p>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-5">
					{plans.map((plan) => (
						<Card key={plan.name} className={'relative rounded-2xl shadow-sm $ {plan.popular ? "ring-2 ring-indigo-500" : "ring-1 ring-gray-200"}'}>
							{plan.popular && <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-2 text-sm font-medium text-white text-center">Most popular</div>}
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
								<p className="mt-4 flex items-baseline text-gray-900">
									<span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
									<span className="ml-1 text-xl font-semibold">/month</span>
								</p>
								<p className="mt-4 text-gray-500">{plan.description}</p>
							</CardHeader>
							<CardContent className="pt-0">
								<ul className="space-y-4">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-start">
											<Check className="h-5 w-5 text-green-500 flex-shrink-0" />
											<span className="ml-3 text-gray-700">{feature}</span>
										</li>
									))}
									{plan.missingFeatures.map((feature) => (
										<li key={feature} className="flex items-start text-gray-400">
											<X className="h-5 w-5 flex-shrink-0" />
											<span className="ml-3">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button asChild size="lg" className={`w-full ${plan.popular ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" : ""}`}>
									<Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="mt-16 bg-white rounded-lg shadow-sm p-8">
					<h2 className="text-2xl font-bold text-gray-900">Compare plans</h2>
					<div className="mt-8 overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr>
									<th className="pb-4 text-left text-sm font-medium text-gray-500">Feature</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-gray-500">Free</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-gray-500">Pro</th>
									<th className="pb-4 px-4 text-center text-sm font-medium text-gray-500">Enterprise</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">Team members</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">1</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">5</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">Storage</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">2GB</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">10GB</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">Projects</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">Up to 10</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">Up to 50</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">Unlimited</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">Advanced analytics</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<X className="h-5 w-5 mx-auto text-gray-400" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">API access</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<X className="h-5 w-5 mx-auto text-gray-400" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
								<tr>
									<td className="py-4 text-sm font-medium text-gray-900">Priority support</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<X className="h-5 w-5 mx-auto text-gray-400" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<X className="h-5 w-5 mx-auto text-gray-400" />
									</td>
									<td className="py-4 px-4 text-center text-sm text-gray-500">
										<Check className="h-5 w-5 mx-auto text-green-500" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="mt-16 text-center">
					<h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
					<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
							<p className="mt-2 text-gray-500">Yes, you can upgrade or downgrade your plan at any time. Your billing will be prorated accordingly.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">Do you offer discounts for non-profits?</h3>
							<p className="mt-2 text-gray-500">Yes, we offer a 50% discount for non-profit organizations. Please contact our sales team for verification.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">Is there a free trial?</h3>
							<p className="mt-2 text-gray-500">All plans come with a 14-day free trial. No credit card required.</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
							<p className="mt-2 text-gray-500">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
`
			break;
		case "ProductLists":
			viewSelected = <ProductListPage />;
				selectedCode= ``
			break;
		case "ProductOverviews":
			viewSelected = <ProductOverviews />;
				selectedCode= ``
			break;
		case "ProductPages":
			viewSelected = <ProductPage />;
				selectedCode= ``
			break;
		case "ProductQuickviews":
			viewSelected = <ProductQuickviewsSection />;
				selectedCode= ``
			break;
		case "ProductsFeatures":
			viewSelected = <ProductsFeaturesSection />;
				selectedCode= ``
			break;
		case "PromoSection":
			viewSelected = <PromoSection />;
				selectedCode= ``
			break;
		case "ReviewsSection":
			viewSelected = <ReviewsSection />;
				selectedCode= ``
			break;
		case "SectionHeadings":
			viewSelected = <SectionHeadings />;
				selectedCode= ``
			break;
		case "SettingsScreen":
			viewSelected = <SettingsScreen />;
				selectedCode= ``
			break;
		case "ShoppingCart":
			viewSelected = <ShoppingCartSection />;
				selectedCode= ``
			break;
		case "ShoppingCartPage":
			viewSelected = <ShoppingCartPage />;
				selectedCode= ``
			break;
		case "StackedLayouts":
			viewSelected = <StackedLayoutsSection />;
				selectedCode= ``
			break;
		case "StackedLists":
			viewSelected = <StackedListsSection />;
				selectedCode= ``
			break;
		case "StorefrontPages":
			viewSelected = <StorefrontPage />;
				selectedCode= ``
			break;
		case "StoreNav":
			viewSelected = <StoreNavSection />;
				selectedCode= ``
			break;
		default:
			viewSelected = <LandingPage />;
				selectedCode= ``
			break;
	}

	return (
		 <div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={selectedCode} renderComp={<Page
			sel={sel}
			setSel={setSel}
			sections={sections}
			viewSelected={viewSelected}
			 />} />
	  </div>
	);
}

function Page({sel,
setSel,
sections,
viewSelected,}) {
  return (
	  <div className="flex flex-col justify-center gap-3 w-full">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Label>E-Commerce Sections</Label>
				<Select
					value={sel}
					onValueChange={(value) => {
						setSel(value);
					}}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{sections.map((item, index) => {
							return (
								<SelectItem key={index} value={item.value}>
									{item.name}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</div>
			<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewSelected}</section>
		</div>
  )
}

export async function loader({ request }: LoaderArgs) {
	return null;
}

export const meta: MetaFunction = () => {
	return [{ title: "E-Commerce - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
