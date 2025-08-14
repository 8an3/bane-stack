// components/lo-fi.tsx
import { AccordionLoFi } from "~/components/lo-fi/components/accordion";
import { AlertLoFi } from "~/components/lo-fi/components/alert";
import { ButtonLoFi } from "~/components/lo-fi/components/button";
import { CardLoFi } from "~/components/lo-fi/components/card";
import { DropdownLoFi } from "~/components/lo-fi/components/dropdown";
import { InputLoFi } from "~/components/lo-fi/components/input";
import { TabsLoFi } from "~/components/lo-fi/components/tabs";
import { ToggleLoFi } from "~/components/lo-fi/components/toggle";
import { Component, ComponentContent, ComponentName } from "~/components/lo-fi/component";
import { CartLoFi } from "~/components/lo-fi/ecommerce/cart";
import { CategoryFilterLoFi } from "~/components/lo-fi/ecommerce/category-filter";
import { CheckoutFormLoFi } from "~/components/lo-fi/ecommerce/checkout-form";
import { ProductCardLoFi } from "~/components/lo-fi/ecommerce/product-card";
import { ProductGalleryLoFi } from "~/components/lo-fi/ecommerce/product-gallery";
import { ReviewLoFi } from "~/components/lo-fi/ecommerce/review";
import { FeatureLoFi } from "~/components/lo-fi/sections/feature";
import { FeedListLoFi } from "~/components/lo-fi/sections/feedList";
import { FooterLoFi } from "~/components/lo-fi/sections/footer";
import { HeaderLoFi } from "~/components/lo-fi/sections/header";
import { HeroLoFi } from "~/components/lo-fi/sections/hero";
import { HomeScreenLoFi } from "~/components/lo-fi/sections/homeScreen";
import { ImageLoFi } from "~/components/lo-fi/sections/image";
import { NewsletterLoFi } from "~/components/lo-fi/sections/newsletter";
import { PageNavLoFi } from "~/components/lo-fi/sections/pageNav";
import { StackedListsLoFi } from "~/components/lo-fi/sections/stacked";
import { StatsLoFi } from "~/components/lo-fi/sections/stats";
import { TeamLoFi } from "~/components/lo-fi/sections/team";
import { TestimonialLoFi } from "~/components/lo-fi/sections/testtimonial";
import { HeroSection } from "~/components/sections/HeroSection";
import { PricingLoFi } from "~/components/lo-fi/ecommerce/pricing";

export function LoFi() {
	return (
		<div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Component href="/docs/components/accordion">
				<ComponentContent>
					<HeroSection />
				</ComponentContent>
				<ComponentName>Hero Section</ComponentName>
			</Component>
      <Component href="/docs/components/accordion">
				<ComponentContent>
					<PricingLoFi />
				</ComponentContent>
				<ComponentName>Pricing</ComponentName>
			</Component>


			<Component href="/docs/components/accordion">
				<ComponentContent>
					<AccordionLoFi />
				</ComponentContent>
				<ComponentName>Accordion</ComponentName>
			</Component>
			<Component href="/docs/components/alert">
				<ComponentContent>
					<AlertLoFi />
				</ComponentContent>
				<ComponentName>Alert</ComponentName>
			</Component>
			<Component href="/docs/components/button">
				<ComponentContent>
					<ButtonLoFi />
				</ComponentContent>
				<ComponentName>Button</ComponentName>
			</Component>
			<Component href="/docs/components/card">
				<ComponentContent>
					<CardLoFi />
				</ComponentContent>
				<ComponentName>Card</ComponentName>
			</Component>
			<Component href="/docs/components/dropdown">
				<ComponentContent>
					<DropdownLoFi />
				</ComponentContent>
				<ComponentName>Dropdown</ComponentName>
			</Component>
			<Component href="/docs/components/input">
				<ComponentContent>
					<InputLoFi />
				</ComponentContent>
				<ComponentName>Input</ComponentName>
			</Component>
			<Component href="/docs/components/tabs">
				<ComponentContent>
					<TabsLoFi />
				</ComponentContent>
				<ComponentName>Tabs</ComponentName>
			</Component>
			<Component href="/docs/components/toggle">
				<ComponentContent>
					<ToggleLoFi />
				</ComponentContent>
				<ComponentName>Toggle</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/product-card">
				<ComponentContent>
					<HeaderLoFi />
				</ComponentContent>
				<ComponentName>Header</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/cart">
				<ComponentContent>
					<HeroLoFi />
				</ComponentContent>
				<ComponentName>Hero</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/product-gallery">
				<ComponentContent>
					<FeatureLoFi />
				</ComponentContent>
				<ComponentName>Feature</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/checkout-form">
				<ComponentContent>
					<FeedListLoFi />
				</ComponentContent>
				<ComponentName>Feed List</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/category-filter">
				<ComponentContent>
					<HomeScreenLoFi />
				</ComponentContent>
				<ComponentName>Home Screen</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<ImageLoFi />
				</ComponentContent>
				<ComponentName>Image Gallery</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<NewsletterLoFi />
				</ComponentContent>
				<ComponentName>Newsletter</ComponentName>
			</Component>

			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<PageNavLoFi />
				</ComponentContent>
				<ComponentName>Page Navigation</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<StackedListsLoFi />
				</ComponentContent>
				<ComponentName>Stacked Lists</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<StatsLoFi />
				</ComponentContent>
				<ComponentName>Stats</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<TeamLoFi />
				</ComponentContent>
				<ComponentName>Team</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<TestimonialLoFi />
				</ComponentContent>
				<ComponentName>Testimonial</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<FooterLoFi />
				</ComponentContent>
				<ComponentName>Footer</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/product-card">
				<ComponentContent>
					<ProductCardLoFi />
				</ComponentContent>
				<ComponentName>Product Card</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/cart">
				<ComponentContent>
					<CartLoFi />
				</ComponentContent>
				<ComponentName>Shopping Cart</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/product-gallery">
				<ComponentContent>
					<ProductGalleryLoFi />
				</ComponentContent>
				<ComponentName>Product Gallery</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/checkout-form">
				<ComponentContent>
					<CheckoutFormLoFi />
				</ComponentContent>
				<ComponentName>Checkout Form</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/category-filter">
				<ComponentContent>
					<CategoryFilterLoFi />
				</ComponentContent>
				<ComponentName>Category Filter</ComponentName>
			</Component>
			<Component href="/docs/ecommerce/review">
				<ComponentContent>
					<ReviewLoFi />
				</ComponentContent>
				<ComponentName>Product Review</ComponentName>
			</Component>
		</div>
	);
}

//

/** */
