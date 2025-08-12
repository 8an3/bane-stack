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
import MonacoEditor from "../editor";

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
			selectedCode= CategoryFiltersSection
			break;
		case "CategoryPage":
			viewSelected = <CategoryPage />;
				selectedCode= CategoryPage
			break;
		case "CategoryPreviews":
			viewSelected = <CategoryPreviewsSection />;
				selectedCode= CategoryPreviewsSection
			break;
		case "CheckoutForm":
			viewSelected = <CheckoutForm />;
				selectedCode= CheckoutForm
			break;
		case "CheckoutPage":
			viewSelected = <CheckoutPage />;
				selectedCode= CheckoutPage
			break;
		case "DetailsScreen":
			viewSelected = <DetailsScreen />;
				selectedCode= DetailsScreen
			break;
		case "FeedComponents":
			viewSelected = <FeedsDemo />;
				selectedCode= FeedsDemo
			break;
		case "GridLists":
			viewSelected = <GridLists />;
				selectedCode= GridLists
			break;
				case "GridListwithAvatars":
			viewSelected = <GridListwithAvatars />;
				selectedCode= GridListwithAvatars
break;
	case "GridListwithStatusIndicators":
			viewSelected = <GridListwithStatusIndicators />;
				selectedCode= GridListwithStatusIndicators
break;
		case "HomeScreen":
			viewSelected = <HomePageSection />;
				selectedCode= HomePageSection
			break;
		case "IncentiveSection":
			viewSelected = <IncentiveDemo />;
				selectedCode= IncentiveDemo
			break;
		case "LandingPage":
			viewSelected = <LandingPageSection />;
				selectedCode= LandingPageSection
			break;
		case "OrderDetailsPage":
			viewSelected = <OrderDetailsPage />;
				selectedCode= OrderDetailsPage
			break;
		case "OrderHistory":
			viewSelected = <OrderHistory />;
				selectedCode= OrderHistory
			break;
		case "OrdersSummaries":
			viewSelected = <OrderSummaries />;
				selectedCode= OrderSummaries
			break;
		case "PageHeadings":
			viewSelected = <PageHeadingsSection />;
				selectedCode= PageHeadingsSection
			break;
		case "PricingPage":
			viewSelected = <PricingPage />;
				selectedCode= PricingPage
			break;
		case "ProductLists":
			viewSelected = <ProductListPage />;
				selectedCode= ProductListPage
			break;
		case "ProductOverviews":
			viewSelected = <ProductOverviews />;
				selectedCode= ProductOverviews
			break;
		case "ProductPages":
			viewSelected = <ProductPage />;
				selectedCode= ProductPage
			break;
		case "ProductQuickviews":
			viewSelected = <ProductQuickviewsSection />;
				selectedCode= ProductQuickviewsSection
			break;
		case "ProductsFeatures":
			viewSelected = <ProductsFeaturesSection />;
				selectedCode= ProductsFeaturesSection
			break;
		case "PromoSection":
			viewSelected = <PromoSection />;
				selectedCode= PromoSection
			break;
		case "ReviewsSection":
			viewSelected = <ReviewsSection />;
				selectedCode= ReviewsSection
			break;
		case "SectionHeadings":
			viewSelected = <SectionHeadings />;
				selectedCode=SectionHeadings
			break;
		case "SettingsScreen":
			viewSelected = <SettingsScreen />;
				selectedCode= SettingsScreen
			break;
		case "ShoppingCart":
			viewSelected = <ShoppingCartSection />;
				selectedCode= ShoppingCartSection
			break;
		case "ShoppingCartPage":
			viewSelected = <ShoppingCartPage />;
				selectedCode= ShoppingCartPage
			break;
		case "StackedLayouts":
			viewSelected = <StackedLayoutsSection />;
				selectedCode= StackedLayoutsSection
			break;
		case "StackedLists":
			viewSelected = <StackedListsSection />;
				selectedCode= StackedListsSection
			break;
		case "StorefrontPages":
			viewSelected = <StorefrontPage />;
				selectedCode= StorefrontPage
			break;
		case "StoreNav":
			viewSelected = <StoreNavSection />;
				selectedCode= StoreNavSection
			break;
		default:
			viewSelected = <LandingPage />;
				selectedCode= LandingPage
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
