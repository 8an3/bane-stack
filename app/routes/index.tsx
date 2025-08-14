import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { PageHeaderFunction } from "~/components/customUi/page-header";
import { Component, ComponentContent, ComponentName } from "~/components/lo-fi/component";
import { CartLoFi } from "~/components/lo-fi/ecommerce/cart";
import { CategoryFilterLoFi } from "~/components/lo-fi/ecommerce/category-filter";
import { CategoryPageLoFi } from "~/components/lo-fi/ecommerce/categoryPage";
import { CategoryPreviewsLoFi } from "~/components/lo-fi/ecommerce/categoryPreviews";
import { CheckoutFormLoFi } from "~/components/lo-fi/ecommerce/checkout-form";
import { CheckoutPageLoFi } from "~/components/lo-fi/ecommerce/checkoutPage";
import { GridListsLoFi } from "~/components/lo-fi/ecommerce/gridLists";
import { IncentivesLoFi } from "~/components/lo-fi/ecommerce/incentives";
import { OrderDetailsPageLoFi } from "~/components/lo-fi/ecommerce/orderDetails";
import { OrderHistoryLoFi } from "~/components/lo-fi/ecommerce/orderHistory";
import { OrderSummariesLoFi } from "~/components/lo-fi/ecommerce/orderSumaries";
import { PageHeadingLoFi } from "~/components/lo-fi/ecommerce/pageHeading";
import { PricingLoFi } from "~/components/lo-fi/ecommerce/pricing";
import { PricingPageLoFi } from "~/components/lo-fi/ecommerce/pricingPage";
import { ProductCardLoFi } from "~/components/lo-fi/ecommerce/product-card";
import { ProductGalleryLoFi } from "~/components/lo-fi/ecommerce/product-gallery";
import { ProductOverviewLoFi } from "~/components/lo-fi/ecommerce/productOverview";
import { ProductListLoFi } from "~/components/lo-fi/ecommerce/productList";
import { ProductsFeaturedLoFi } from "~/components/lo-fi/ecommerce/productsOverview";
import { PromoSectionLoFi } from "~/components/lo-fi/ecommerce/promo";
import { ReviewLoFi } from "~/components/lo-fi/ecommerce/review";
import { ReviewsSectionLoFi } from "~/components/lo-fi/ecommerce/reviews";
import { ShoppingCartLoFi } from "~/components/lo-fi/ecommerce/shoppingCart";
import { StackedLayoutsLoFi } from "~/components/lo-fi/ecommerce/stacked";
import { StoreFrontPagesLoFi } from "~/components/lo-fi/ecommerce/storeFront";
import { StoreNavLoFi } from "~/components/lo-fi/ecommerce/storeNav";
import { DetailsSectionLoFi } from "~/components/lo-fi/sections/details.";
import { FeatureLoFi } from "~/components/lo-fi/sections/feature";
import { FeedListLoFi } from "~/components/lo-fi/sections/feedList";
import { FooterLoFi } from "~/components/lo-fi/sections/footer";
import { HeaderLoFi } from "~/components/lo-fi/sections/header";
import { HeroLoFi } from "~/components/lo-fi/sections/hero";
import { HomeScreenLoFi } from "~/components/lo-fi/sections/homeScreen";
import { ImageLoFi } from "~/components/lo-fi/sections/image";
import { LandingPageLoFi } from "~/components/lo-fi/sections/landingPage";
import { NewsletterLoFi } from "~/components/lo-fi/sections/newsletter";
import { PageNavLoFi } from "~/components/lo-fi/sections/pageNav";
import { SettingsSectionLoFi } from "~/components/lo-fi/sections/settings";
import { StackedListsLoFi } from "~/components/lo-fi/sections/stacked";
import { StatsLoFi } from "~/components/lo-fi/sections/stats";
import { TeamLoFi } from "~/components/lo-fi/sections/team";
import { TestimonialLoFi } from "~/components/lo-fi/sections/testtimonial";
import { HeroSection } from "~/components/sections/HeroSection";
import { cn } from "~/components/ui/utils";
import { AccordionLoFi } from "~/components/lo-fi/components/accordion";
import { AlertLoFi } from "~/components/lo-fi/components/alert";
import { ButtonLoFi } from "~/components/lo-fi/components/button";
import { CardLoFi } from "~/components/lo-fi/components/card";
import { DropdownLoFi } from "~/components/lo-fi/components/dropdown";
import { InputLoFi } from "~/components/lo-fi/components/input";
import { TabsLoFi } from "~/components/lo-fi/components/tabs";
import { ToggleLoFi } from "~/components/lo-fi/components/toggle";

export default function Dashboard() {
	return (
		<div className={cn(`w-[100%] mx-auto  grid  text-foreground bg-background`)}>
			<div className="w-[95%]  mx-auto  grid gap-3 justify-center">
				<HeroSection className={`text-foreground bg-background`} className2={`text-muted-foreground `} title="8an3/Bane Remix Stack" desc="Pre-made components and page sections" />
				<Sections />
				<Ecommerce />
				<Examples />
                <UI />
			</div>
		</div>
	);
}

export async function loader({ request }: LoaderArgs) {
	return null;
}

export const meta: MetaFunction = () => {
	return [{ title: "8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};

export function Sections() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 mb-5">
					<h2 className="text-foreground text-4xl font-semibold tracking-tight text-white sm:text-2xl">Sections</h2>
					<p className="mt-2 text-lg/8 text-muted-foreground">Pieces of code to use throughout the project on various pages</p>
				</div>
				<div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    	<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<PageNavLoFi />
						</ComponentContent>
						<ComponentName>Page Navigation</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<StatsLoFi />
						</ComponentContent>
						<ComponentName>Stats</ComponentName>
					</Component>


                    <Component href="/docs/ecommerce/product-gallery">
						<ComponentContent>
							<FeatureLoFi />
						</ComponentContent>
						<ComponentName>Feature</ComponentName>
					</Component>
	<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<NewsletterLoFi />
						</ComponentContent>
						<ComponentName>Newsletter</ComponentName>
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

                    
					
					<Component href="/docs/ecommerce/cart">
						<ComponentContent>
							<HeroLoFi />
						</ComponentContent>
						<ComponentName>Hero</ComponentName>
					</Component>
					
					<Component href="/docs/ecommerce/checkout-form">
						<ComponentContent>
							<FeedListLoFi />
						</ComponentContent>
						<ComponentName>Feed List</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<ImageLoFi />
						</ComponentContent>
						<ComponentName>Image Gallery</ComponentName>
					</Component>
				

				
					<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<StackedListsLoFi />
						</ComponentContent>
						<ComponentName>Stacked Lists</ComponentName>
					</Component>
                    
					<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<TeamLoFi />
						</ComponentContent>
						<ComponentName>Team</ComponentName>
					</Component>
			

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<GridListsLoFi />
						</ComponentContent>
						<ComponentName>Grid Lists</ComponentName>
					</Component>
                    <Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<HeaderLoFi />
						</ComponentContent>
						<ComponentName>Header</ComponentName>
					</Component>
				</div>
			</div>
		</div>
	);
}
export function Ecommerce() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-foreground text-4xl font-semibold tracking-tight text-white sm:text-2xl">E-Commerce</h2>
					<p className="mt-2 text-lg/8 text-muted-foreground">Sections to help build your next project</p>
				</div>
				<div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<CategoryFilterLoFi />
						</ComponentContent>
						<ComponentName>Category Filter</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<CategoryPreviewsLoFi />
						</ComponentContent>
						<ComponentName>Category Previews</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<CheckoutFormLoFi />
						</ComponentContent>
						<ComponentName>Checkout Form</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<DetailsSectionLoFi />
						</ComponentContent>
						<ComponentName>Details Section</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<IncentivesLoFi />
						</ComponentContent>
						<ComponentName>Incentives Section</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<OrderHistoryLoFi />
						</ComponentContent>
						<ComponentName>Order History</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<OrderSummariesLoFi />
						</ComponentContent>
						<ComponentName>Order Summaries</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<PageHeadingLoFi />
						</ComponentContent>
						<ComponentName>Page Heading</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<ProductListLoFi />
						</ComponentContent>
						<ComponentName>Product List</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<ProductOverviewLoFi />
						</ComponentContent>
						<ComponentName>Product Overview</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<ProductsFeaturedLoFi />
						</ComponentContent>
						<ComponentName>Products Featured</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<PromoSectionLoFi />
						</ComponentContent>
						<ComponentName>Promo Section</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<ReviewsSectionLoFi />
						</ComponentContent>
						<ComponentName>Reviews Section</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<ShoppingCartLoFi />
						</ComponentContent>
						<ComponentName>Shopping Cart</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<StackedLayoutsLoFi />
						</ComponentContent>
						<ComponentName>Stacked Layouts</ComponentName>
					</Component>

					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<StoreNavLoFi />
						</ComponentContent>
						<ComponentName>Store Nav</ComponentName>
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
					<Component href="/docs/ecommerce/review">
						<ComponentContent>
							<PricingLoFi />
						</ComponentContent>
						<ComponentName>Pricing</ComponentName>
					</Component>
				</div>
			</div>
		</div>
	);
}
export function UI() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 mb-5">
					<h2 className="text-foreground text-4xl font-semibold tracking-tight text-white sm:text-2xl">UI</h2>
					<p className="mt-2 text-lg/8 text-muted-foreground">Reusable components</p>
				</div>
				<div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<Component href="#">
						<ComponentContent>
							<AccordionLoFi />
						</ComponentContent>
						<ComponentName>Accordion</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<AlertLoFi />
						</ComponentContent>
						<ComponentName>Alert</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<ButtonLoFi />
						</ComponentContent>
						<ComponentName>Button</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<CardLoFi />
						</ComponentContent>
						<ComponentName>Card</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<DropdownLoFi />
						</ComponentContent>
						<ComponentName>Dropdown</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<InputLoFi />
						</ComponentContent>
						<ComponentName>Input</ComponentName>
					</Component>
					<Component href="/#">
						<ComponentContent>
							<TabsLoFi />
						</ComponentContent>
						<ComponentName>Tabs</ComponentName>
					</Component>
					<Component href="#">
						<ComponentContent>
							<ToggleLoFi />
						</ComponentContent>
						<ComponentName>Toggle</ComponentName>
					</Component>
				</div>
			</div>
		</div>
	);
}

export function Examples() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-foreground text-4xl font-semibold tracking-tight text-white sm:text-2xl">Page Templates</h2>
					<p className="mt-2 text-lg/8 text-muted-foreground">Full page examples that, to help generate ideas on how to build something, or copy and paste and move on</p>
				</div>
				<div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<SettingsSectionLoFi />
						</ComponentContent>
						<ComponentName>Settings Section</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<LandingPageLoFi />
						</ComponentContent>
						<ComponentName>Landing Page</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<StoreFrontPagesLoFi />
						</ComponentContent>
						<ComponentName>Store Front Pages</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<PricingPageLoFi />
						</ComponentContent>
						<ComponentName>Pricing Page</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<CategoryPageLoFi />
						</ComponentContent>
						<ComponentName>Category Page</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<CheckoutPageLoFi />
						</ComponentContent>
						<ComponentName>Checkout Page</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/product-card">
						<ComponentContent>
							<OrderDetailsPageLoFi />
						</ComponentContent>
						<ComponentName>Order Details Page</ComponentName>
					</Component>
					<Component href="/docs/ecommerce/category-filter">
						<ComponentContent>
							<HomeScreenLoFi />
						</ComponentContent>
						<ComponentName>Home Screen</ComponentName>
					</Component>
				</div>
			</div>
		</div>
	);
}
