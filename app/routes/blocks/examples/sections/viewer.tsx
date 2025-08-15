import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { eP } from "~/utils/ext";
import { axios } from "axios";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";

import { PageHeaderFunction } from "~/components/customUi/page-header";
import { AlertNotificationDemo } from "~/components/sections/Alerts";
import { BannerSection } from "~/components/sections/Banner";
import { BentoDemo } from "~/components/sections/BentoGrid";
import { Blog } from "~/components/sections/Blog";
import { ChangelogDemo } from "~/components/sections/Changelog";
import { ConfigDemo } from "~/components/sections/ConfigSection";
import { Contact, } from "~/components/sections/Contact";
import { CTA,  } from "~/components/sections/CTA";
import { DescriptionList } from "~/components/sections/DescriptionList";
import { DisplayCodeDemo } from "~/components/sections/DisplayCode";
import { DisplayGithubInstall } from "~/components/sections/DisplayGithubInstall";
import { DisplayInstallCode } from "~/components/sections/DisplayInstallCode";
import { DisplayInstallCodeArray } from "~/components/sections/DisplayInstallCodeArray";
import { FeatureSection } from "~/components/sections/FeatureSection";
import { FlyoutMenu } from "~/components/sections/FlyoutMenu";
import { HeadersSection } from "~/components/sections/Headers";
import { HeroSection } from "~/components/sections/HeroSection";
import { ImageSection } from "~/components/sections/ImageSection";
import { JsonSectionDemo } from "~/components/sections/JsonSection";
import { NewsletterSection } from "~/components/sections/Newsletter";
import { NoteSectionDemo } from "~/components/sections/NoteSection";
import { UseHeader } from "~/components/sections/PageHeader";
import { PageNavDemo } from "~/components/sections/PageNav";
import { PricingSection1Card } from "~/components/sections/Pricing";
import { SectionTitle } from "~/components/sections/SectionTitle";
import { Stats } from "~/components/sections/Stats";
import { TeamSection } from "~/components/sections/Team";
import { Testimonial } from "~/components/sections/Testimonial";
import { TsxFunctionDemo } from "~/components/sections/TsxSection";
import { UseSectionDemo } from "~/components/sections/UsageSection";
import { StackedLayoutsSection } from "~/components/ecommerceSections/StackedLayouts";
import { LoFi } from "~/components/lo-fi";
import { UseageSectionNoDashDemo } from "~/components/sections/UsageSectionNoDash";
import MonacoEditor from "../editor/components2";
import { Atom } from "~/components/lo-fi/atom";
import { AlertLoFi } from "~/components/lo-fi/alert";
import { ButtonLoFi } from "~/components/lo-fi/button";
import { DropdownLoFi } from "~/components/lo-fi/dropdown";
import { InputLoFi } from "~/components/lo-fi/input";
import { TabsLoFi } from "~/components/lo-fi/tabs";
import { ToggleLoFi } from "~/components/lo-fi/toggle";
import { FeaturesGridSection } from "~/components/sections/FeaturesGridSection";
import { HeroStatsSection } from "~/components/sections/HeroStatsSection";
import { HeroCTASection } from "~/components/sections/HeroCTASection";
import { PricingSection2Cards } from "~/components/sections/PricingSection2Cards";
import { PricingSection3Cards } from "~/components/sections/PricingSection3Cards";
import { StatsCardSection } from "~/components/sections/StatsCardSection";
import { TestimonialsGridSection } from "~/components/sections/TestimonialsGridSection";
import { StatsSection } from "~/components/sections/StatsSection";
import { CardLoFi } from "~/components/lo-fi/card";
import { AccordionLoFi } from "~/components/lo-fi/accordion";
import { BentoGridTwoRowSecondRow } from "~/components/sections/BentoGridTwoRowSecondRow";
import { AlertSuccessSectionWithDismissalButton } from "~/components/sections/AlertSuccessSectionWithDismissalButton";
import { TestimonialsSubtleGrid } from "~/components/sections/TestimonialsSubtleGrid";
import { TestimonialsGrid } from "~/components/sections/TestimonialsGrid";
import { TeamWithRoundImages } from "~/components/sections/TeamWithRoundImages";
import { TeamWithMediumImages } from "~/components/sections/TeamWithMediumImages";
import { TeamWithLargeImages } from "~/components/sections/TeamWithLargeImages";
import { TeamMembersSection } from "~/components/sections/TeamMembersSection";
import { TeamLargeGrid } from "~/components/sections/TeamLargeGrid";
import { StatsWithDescription } from "~/components/sections/StatsWithDescription";
import { StatsSimpleGrid } from "~/components/sections/StatsSimpleGrid";
import { SectionHeadingWithInputGroup } from "~/components/sections/SectionHeadingWithInputGroup";
import { SectionHeadingWithDescription } from "~/components/sections/SectionHeadingWithDescription";
import { PricingComparison } from "~/components/sections/PricingComparison";
import { HeroWithAppScreenShot } from "~/components/sections/HeroWithAppScreenShot";
import { HeaderSimple } from "~/components/sections/HeaderSimple";
import { HeaderCenteredWithEyebrow } from "~/components/sections/HeaderCenteredWithEyebrow";
import { FooterSimpleCentered } from "~/components/sections/FooterSimpleCentered";
import { FooterFourColumnSimple } from "~/components/sections/FooterFourColumnSimple";
import { FooterFourColumnNewsletter } from "~/components/sections/FooterFourColumnNewsletter";
import { FooterFourColumnMission } from "~/components/sections/FooterFourColumnMission";
import { FeedListMultipleItemTypes } from "~/components/sections/FeedListMultipleItemTypes";
import { FeatureSectionWithScreenshot } from "~/components/sections/FeatureSectionWithScreenshot";
import { FeatureSectionOffset } from "~/components/sections/FeatureSectionOffset";
import { FAQThreeColumn } from "~/components/sections/FAQThreeColumn";
import { FAQSideBySide } from "~/components/sections/FAQSideBySide";
import { DescriptionListNarrow } from "~/components/sections/DescriptionListNarrow";
import { CTASimpleSection } from "~/components/sections/CTASimpleSection";
import { ContentTwoColumnWithScreenshot } from "~/components/sections/ContentTwoColumnWithScreenshot";
import { ContentSplitWithImage } from "~/components/sections/ContentSplitWithImage";
import { ContentCentered } from "~/components/sections/ContentCentered";
import { ContactFourColumnSection } from "~/components/sections/ContactFourColumnSection";
import { CardHeadingWithDescription } from "~/components/sections/CardHeadingWithDescription";
import { BlogWithFeaturedPost } from "~/components/sections/BlogWithFeaturedPost";
import { BlogThreeColumnWithImages } from "~/components/sections/BlogThreeColumnWithImages";
import { BlogSingleColumn } from "~/components/sections/BlogSingleColumn";
import { AlertSuccessSection } from "~/components/sections/AlertSuccessSection";
import { AlertInfoSection } from "~/components/sections/AlertInfoSection";
import { AlertErrorSection } from "~/components/sections/AlertErrorSection";
import { AlertAttentionSectionWithAccent } from "~/components/sections/AlertAttentionSectionWithAccent";
import { Component } from "~/components/lo-fi/component";
import { PricingSinglePriceDetails } from "~/components/sections/PricingSinglePriceDetails";
import { PricingThreeTiersAndFeatureComparison } from "~/components/sections/PricingThreeTiersAndFeatureComparison";
import { CardHeading } from "~/components/sections/CardHeading";
import { Content } from "~/components/sections/Content";
import { CTASectionLoFi } from "~/components/lo-fi/sections/cta-section";

export default function SectionsViewer() {
	const [selectedCode, setSelectedCode] = useState("");
	const [code, setCode] = useState("");
	const [name, setName] = useState("AlertNotificationDemo");
	const sections = [
		{ name: "Lofi", value: "Lofi", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Alert", value: "Lofi - Alert", path: "/examples/lo-fi/alert.tsx.txt" },
		{ name: "Lofi - CardLoFi", value: "Lofi - CardLoFi", path: "/examples/lo-fi/card.tsx.txt" },
		{ name: "Lofi - Accordian", value: "Lofi - Accordian", path: "/examples/lo-fi/accordian.tsx.txt" },
		{ name: "Lofi - Atom", value: "Lofi - Atom", path: "/examples/lo-fi/atom.tsx.txt" },
		{ name: "Lofi - Button", value: "Lofi - Button", path: "/examples/lo-fi/button.tsx.txt" },
		{ name: "Lofi - Component", value: "Lofi - Component", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - dropdown", value: "Lofi - dropdown", path: "/examples/lo-fi/dropdown.tsx.txt" },
		{ name: "Lofi - input", value: "Lofi - input", path: "/examples/lo-fi/input.tsx.txt" },
		{ name: "Lofi - tabs", value: "Lofi - tabs", path: "/examples/lo-fi/tabs.tsx.txt" },
		{ name: "Lofi - toggle", value: "Lofi - toggle", path: "/examples/lo-fi/toggle.tsx.txt" },
		{ name: "Banner", value: "Banner", path: "/examples/sections/Banner.tsx.txt" },
		{ name: "Flyout Menu", value: "FlyoutMenu", path: "/examples/sections/FlyoutMenu.tsx.txt" },

		{ name: "Bento Grid", value: "BentoGrid", path: "/examples/sections/BentoGrid.tsx.txt" },
		{ name: "Bento Grid Two Row Second Row", value: "BentoGridTwoRowSecondRow", path: "/examples/sections/BentoGridTwoRowSecondRow.tsx.txt" },
		{ name: "Feature Section", value: "FeatureSection", path: "/examples/sections/FeatureSection.tsx.txt" },
		{ name: "Feature SectionOffset", value: "FeatureSectionOffset", path: "/examples/sections/FeatureSectionOffset.tsx.txt" },
		{ name: "Feature SectionWithScreenshot 3", value: "FeatureSectionWithScreenshot", path: "/examples/sections/FeatureSectionWithScreenshot.tsx.txt" },
		{ name: "Features GridSection", value: "FeaturesGridSection", path: "/examples/sections/FeaturesGridSection.tsx.txt" },
		{ name: "Feature Section", value: "FeatureSection", path: "/examples/sections/FeatureSection.tsx.txt" },
		{ name: "Hero CTA Section", value: "HeroCTASection", path: "/examples/sections/HeroCTASection.tsx.txt" },
		{ name: "Hero Section", value: "HeroSection", path: "/examples/sections/HeroSection.tsx.txt" },
		{ name: "Hero Stats Section", value: "HeroStatsSection", path: "/examples/sections/HeroStatsSection.tsx.txt" },
		{ name: "Hero With App Screen Shot", value: "HeroWithAppScreenShot", path: "/examples/sections/HeroWithAppScreenShot.tsx.txt" },
		{ name: "Hero Section Bordered App", value: "HeroSectionBorderedApp", path: "/examples/sections/HeroSectionBorderedApp.tsx.txt" },
		{ name: "Pricing", value: "Pricing", path: "/examples/sections/Pricing.tsx.txt" },
		{ name: "Pricing Comparison", value: "PricingComparison", path: "/examples/sections/PricingComparison.tsx.txt" },
		{ name: "Pricing Section 2 Cards", value: "PricingSection2Cards", path: "/examples/sections/PricingSection2Cards.tsx.txt" },
		{ name: "Pricing Section 3 Cards", value: "PricingSection3Cards", path: "/examples/sections/PricingSection3Cards.tsx.txt" },
		{ name: "Pricing Single PriceDetails", value: "PricingSinglePriceDetails", path: "/examples/sections/PricingSinglePriceDetails.tsx.txt" },
		{ name: "Pricing Three Tiers And Feature Comparison", value: "PricingThreeTiersAndFeatureComparison", path: "/examples/sections/PricingThreeTiersAndFeatureComparison.tsx.txt" },
		{ name: "Headers", value: "Headers", path: "/examples/sections/Headers.tsx.txt" },
		{ name: "Header Centered With Eyebrow", value: "HeaderCenteredWithEyebrow", path: "/examples/sections/Headers.tsx.txt" },
		{ name: "Header Simple", value: "HeaderSimple", path: "/examples/sections/HeaderSimple.tsx.txt" },
		{ name: "Stats", value: "Stats", path: "/examples/sections/Stats.tsx.txt" },
		{ name: "Stats CardSection", value: "StatsCardSection", path: "/examples/sections/StatsCardSection.tsx.txt" },
		{ name: "Stats Section", value: "StatsSection", path: "/examples/sections/StatsSection.tsx.txt" },
		{ name: "Stats Simple Grid", value: "StatsSimpleGrid", path: "/examples/sections/StatsSimpleGrid.tsx.txt" },
		{ name: "Stats With Description", value: "StatsWithDescription", path: "/examples/sections/StatsWithDescription.tsx.txt" },

		{ name: "Alert Attention Section With Accent", value: "AlertAttentionSectionWithAccent", path: "/examples/sections/AlertAttentionSectionWithAccent.tsx.txt" },
		{ name: "Alert Error Section", value: "AlertErrorSection", path: "/examples/sections/AlertErrorSection.tsx.txt" },
		{ name: "Alert Info Section", value: "AlertInfoSection", path: "/examples/sections/AlertInfoSection.tsx.txt" },
		{ name: "Alerts", value: "Alerts", path: "/examples/sections/Alerts.tsx.txt" },
		{ name: "Alert Success Section", value: "AlertSuccessSection", path: "/examples/sections/AlertSuccessSection.tsx.txt" },
		{ name: "Alert Success Section With Dismissal Button", value: "AlertSuccessSectionWithDismissalButton", path: "/examples/sections/AlertSuccessSectionWithDismissalButton.tsx.txt" },
		{ name: "Blog", value: "Blog", path: "/examples/sections/Blog.tsx.txt" },
		{ name: "Blog Singl eColumn", value: "BlogSingleColumn", path: "/examples/sections/BlogSingleColumn.tsx.txt" },
		{ name: "Blog Three Column With Images", value: "BlogThreeColumnWithImages", path: "/examples/sections/BlogThreeColumnWithImages.tsx.txt" },
		{ name: "BlogWithFeaturedPost", value: "BlogWithFeaturedPost", path: "/examples/sections/BlogWithFeaturedPost.tsx.txt" },
		{ name: "Card Heading", value: "CardHeading", path: "/examples/sections/CardHeading.tsx.txt" },
		{ name: "Card Heading With Description", value: "CardHeadingWithDescription", path: "/examples/sections/CardHeadingWithDescription.tsx.txt" },
		{ name: "Contact", value: "Contact", path: "/examples/sections/Contact.tsx.txt" },
		{ name: "Contact Four Column Section", value: "ContactFourColumnSection", path: "/examples/sections/ContactFourColumnSection.tsx.txt" },
		{ name: "Content", value: "Content", path: "/examples/sections/Content.tsx.txt" },
		{ name: "Content Centered", value: "ContentCentered", path: "/examples/sections/ContentCentered.tsx.txt" },
		{ name: "Content Split With Image", value: "ContentSplitWithImage", path: "/examples/sections/ContentSplitWithImage.tsx.txt" },
		{ name: "Content Two Column With Screenshot", value: "ContentTwoColumnWithScreenshot", path: "/examples/sections/ContentTwoColumnWithScreenshot.tsx.txt" },
		{ name: "CTA", value: "CTA", path: "/examples/sections/CTA.tsx.txt" },
		{ name: "CTA Simple Section", value: "CTASimpleSection", path: "/examples/sections/CTASimpleSection.tsx.txt" },
		{ name: "Description ListNarrow", value: "DescriptionListNarrow", path: "/examples/sections/DescriptionListNarrow.tsx.txt" },
		{ name: "Description List", value: "DescriptionList", path: "/examples/sections/DescriptionList.tsx.txt" },
		{ name: "FAQ Three Column", value: "FAQThreeColumn", path: "/examples/sections/FAQThreeColumn.tsx.txt" },
		{ name: "FAQ Side By Side", value: "FAQSideBySide", path: "/examples/sections/FAQSideBySide.tsx.txt" },
		{ name: "Feed List Multiple Item Types", value: "FeedListMultipleItemTypes", path: "/examples/sections/FeedListMultipleItemTypes.tsx.txt" },
		{ name: "Feed Lists", value: "FeedLists", path: "/examples/sections/FeedLists.tsx.txt" },
		{ name: "Footer Four Column Mission", value: "FooterFourColumnMission", path: "/examples/sections/FooterFourColumnMission.tsx.txt" },
		{ name: "Footer Four Column Newsletter", value: "FooterFourColumnNewsletter", path: "/examples/sections/FooterFourColumnNewsletter.tsx.txt" },
		{ name: "Footer Four Column Simple", value: "FooterFourColumnSimple", path: "/examples/sections/FooterFourColumnSimple.tsx.txt" },
		{ name: "Footer Simple Centered", value: "FooterSimpleCentered", path: "/examples/sections/FooterSimpleCentered.tsx.txt" },
		{ name: "Section Heading With Description", value: "SectionHeadingWithDescription", path: "/examples/sections/SectionHeadingWithDescription.tsx.txt" },
		{ name: "Section Heading With Input Group", value: "SectionHeadingWithInputGroup", path: "/examples/sections/SectionHeadingWithInputGroup.tsx.txt" },
		{ name: "Team", value: "Team", path: "/examples/sections/Team.tsx.txt" },
		{ name: "Team Large Grid", value: "TeamLargeGrid", path: "/examples/sections/TeamLargeGrid.tsx.txt" },
		{ name: "Team Members Section", value: "TeamMembersSection", path: "/examples/sections/TeamMembersSection.tsx.txt" },
		{ name: "Team With Large Images", value: "TeamWithLargeImages", path: "/examples/sections/TeamWithLargeImages.tsx.txt" },
		{ name: "Team With Medium Images", value: "TeamWithMediumImages", path: "/examples/sections/TeamWithMediumImages.tsx.txt" },
		{ name: "Team With Round Images", value: "TeamWithRoundImages", path: "/examples/sections/TeamWithRoundImages.tsx.txt" },
		{ name: "Testimonial", value: "Testimonial", path: "/examples/sections/Testimonial.tsx.txt" },
		{ name: "Testimonials Grid", value: "TestimonialsGrid", path: "/examples/sections/TestimonialsGrid.tsx.txt" },
		{ name: "Testimonials Grid Section", value: "TestimonialsGridSection", path: "/examples/sections/TestimonialsGridSection.tsx.txt" },
		{ name: "Testimonials Subtle Grid", value: "TestimonialsSubtleGrid", path: "/examples/sections/TestimonialsSubtleGrid.tsx.txt" },

		{ name: "Newsletter", value: "Newsletter", path: "/examples/sections/Newsletter.tsx.txt" },
		{ name: "Page Header", value: "PageHeader", path: "/examples/sections/PageHeader.tsx.txt" },
		{ name: "Page Nav", value: "PageNav", path: "/examples/sections/PageNav.tsx.txt" },
		{ name: "Page Header Function", value: "PageHeaderFunction", path: "/examples/sections/" },

		{ name: "Contact Section", value: "ContactSection", path: "/examples/sections/ContactSection.tsx.txt" },
		{ name: "CTA Section", value: "CTASection", path: "/examples/sections/CTASection.tsx.txt" },
		{ name: "Stacked Layouts", value: "StackedLayouts", path: "/examples/sections/StackedLayouts.tsx.txt" },
		{ name: "Note Section", value: "NoteSection", path: "/examples/sections/NoteSection.tsx.txt" },
		{ name: "Section Title", value: "SectionTitle", path: "/examples/sections/SectionTitle.tsx.txt" },
		{ name: "Image Section", value: "ImageSection", path: "/examples/sections/ImageSection.tsx.txt" },
		{ name: "Json Section", value: "JsonSection", path: "/examples/sections/JsonSection.tsx.txt" },
		{ name: "Tsx Section", value: "TsxSection", path: "/examples/sections/TsxSection.tsx.txt" },
		{ name: "Usage Section", value: "UsageSection", path: "/examples/sections/UsageSection.tsx.txt" },
		{ name: "Usage Section No Dash", value: "UsageSectionNoDash", path: "/examples/sections/UsageSectionNoDash.tsx.txt" },
		{ name: "Changelog", value: "Changelog", path: "/examples/sections/Changelog.tsx.txt" },
		{ name: "Config Section", value: "ConfigSection", path: "/examples/sections/ConfigSection.tsx.txt" },
		{ name: "Display Code", value: "DisplayCode", path: "/examples/sections/DisplayCode.tsx.txt" },
		{ name: "Display Github Install", value: "DisplayGithubInstall", path: "/examples/sections/DisplayGithubInstall.tsx.txt" },
		{ name: "Display Install Code", value: "DisplayInstallCode", path: "/examples/sections/DisplayInstallCode.tsx.txt" },
		{ name: "Display Install Code Array", value: "DisplayInstallCodeArray", path: "/examples/sections/DisplayInstallCodeArray.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
 

case "UseageSectionNoDashDemo":
			viewSelected = <UseageSectionNoDashDemo />;
			break;
		case "Alerts":
			viewSelected = <AlertNotificationDemo />;
			break;
		case "AlertNotificationDemo":
			viewSelected = <AlertNotificationDemo />;
			break;
		case "Lofi":
			viewSelected = <LoFi />;
			break;
		case "Lofi - Alert":
			viewSelected = <AlertLoFi />;
			break;
		case "Lofi - Accordian":
			viewSelected = <AccordionLoFi />;
			break;
		case "Lofi - Atom":
			viewSelected = <Atom />;
			break;
		case "Lofi - CardLoFi":
			viewSelected = <CardLoFi />;
			break;
		case "Lofi - Button":
			viewSelected = <ButtonLoFi />;
			break;
		case "Lofi - Component":
			viewSelected = <Component />;
			break;
		case "Lofi - Dropdown":
			viewSelected = <DropdownLoFi />;
			break;
		case "Lofi - Input":
			viewSelected = <InputLoFi />;
			break;
		case "Lofi - Tabs":
			viewSelected = <TabsLoFi />;
			break;
		case "Lofi - Toggle":
			viewSelected = <ToggleLoFi />;
			break;
		case "Banner":
			viewSelected = <BannerSection />;
			break;
		case "BentoGrid":
			viewSelected = <BentoDemo />;
			break;
		case "Changelog":
			viewSelected = <ChangelogDemo />;
			break;
		case "ConfigSection":
			viewSelected = <ConfigDemo />;
			break;
		case "DisplayCode":
			viewSelected = <DisplayCodeDemo />;
			break;
		case "DisplayGithubInstall":
			viewSelected = <DisplayGithubInstall />;
			break;
		case "DisplayInstallCode":
			viewSelected = <DisplayInstallCode />;
			break;
		case "DisplayInstallCodeArray":
			viewSelected = <DisplayInstallCodeArray />;
			break;
		case "FlyoutMenu":
			viewSelected = <FlyoutMenu />;
			break;
		case "Headers":
			viewSelected = <HeadersSection />;
			break;
		case "StackedLayouts":
			viewSelected = <StackedLayoutsSection />;
			break;
		case "Team":
			viewSelected = <TeamSection />;
			break;
		case "TsxSection":
			viewSelected = <TsxFunctionDemo />;
			break;
		case "UsageSection":
			viewSelected = <UseSectionDemo />;
			break;

		case "PageHeaderFunction":
			viewSelected = <PageHeaderFunction />;
			break;
				case "HeroSection":
			viewSelected = <HeroSection />;

		case "HeroSection3":
			viewSelected = <HeroCTASection />;
			break;
		case "ImageSection":
			viewSelected = <ImageSection />;
			break;
		case "JsonSection":
			viewSelected = <JsonSectionDemo />;
			break;
		case "Newsletter":
			viewSelected = <NewsletterSection />;
			break;
		case "NoteSection":
			viewSelected = <NoteSectionDemo />;
			break;
		case "PageHeader":
			viewSelected = <UseHeader />;
			break;
		case "PageNav":
			viewSelected = <PageNavDemo />;
			break;
		case "Pricing":
			viewSelected = <PricingSection1Card />;
			break;
		case "Pricing2":
			viewSelected = <PricingSection2Cards />;
			break;
		case "Pricing3":
			viewSelected = <PricingSection3Cards />;
			break;
		case "SectionTitle":
			viewSelected = <SectionTitle />;
			break;
		case "AlertAttentionSectionWithAccent":
			viewSelected = <AlertAttentionSectionWithAccent />;
			break;
		case "AlertErrorSection":
			viewSelected = <AlertErrorSection />;
			break;
		case "AlertInfoSection":
			viewSelected = <AlertInfoSection />;
			break;

		case "AlertSuccessSection":
			viewSelected = <AlertSuccessSection />;
			break;
		case "AlertSuccessSectionWithDismissalButton":
			viewSelected = <AlertSuccessSectionWithDismissalButton />;
			break;

		case "BentoGridTwoRowSecondRow":
			viewSelected = <BentoGridTwoRowSecondRow />;
			break;
		case "Blog":
			viewSelected = <Blog />;
			break;
		case "BlogSingleColumn":
			viewSelected = <BlogSingleColumn />;
			break;
		case "BlogThreeColumnWithImages":
			viewSelected = <BlogThreeColumnWithImages />;
			break;
		case "BlogWithFeaturedPost":
			viewSelected = <BlogWithFeaturedPost />;
			break;
		case "CardHeading":
			viewSelected = <CardHeading />;
			break;
		case "CardHeadingWithDescription":
			viewSelected = <CardHeadingWithDescription />;
			break;

		case "Contact":
			viewSelected = <Contact />;
			break;
		case "ContactFourColumnSection":
			viewSelected = <ContactFourColumnSection />;
			break;
		case "Content":
			viewSelected = <Content />;
			break;
		case "ContentCentered":
			viewSelected = <ContentCentered />;
			break;
		case "ContentSplitWithImage":
			viewSelected = <ContentSplitWithImage />;
			break;
		case "ContentTwoColumnWithScreenshot":
			viewSelected = <ContentTwoColumnWithScreenshot />;
			break;
		case "CTA":
			viewSelected = <CTA />;
			break;
		case "CTASimpleSection":
			viewSelected = <CTASimpleSection />;
			break;
		case "DescriptionList":
			viewSelected = <DescriptionList />;
			break;
		case "DescriptionListNarrow":
			viewSelected = <DescriptionListNarrow />;
			break;

		case "FAQ":
			viewSelected = <FAQ />;
			break;
		case "FAQSideBySide":
			viewSelected = <FAQSideBySide />;
			break;
		case "FAQThreeColumn":
			viewSelected = <FAQThreeColumn />;
			break;
		case "FeatureSection":
			viewSelected = <FeatureSection />;
			break;
		case "FeatureSectionOffset":
			viewSelected = <FeatureSectionOffset />;
			break;
		case "FeatureSectionWithScreenshot":
			viewSelected = <FeatureSectionWithScreenshot />;
			break;
		case "FeaturesGridSection":
			viewSelected = <FeaturesGridSection />;
			break;

		case "FeedListMultipleItemTypes":
			viewSelected = <FeedListMultipleItemTypes />;
			break;
		case "FeedLists":
			viewSelected = <FeedLists />;
			break;

		case "FooterFourColumnMission":
			viewSelected = <FooterFourColumnMission />;
			break;
		case "FooterFourColumnNewsletter":
			viewSelected = <FooterFourColumnNewsletter />;
			break;
		case "FooterFourColumnSimple":
			viewSelected = <FooterFourColumnSimple />;
			break;
		case "FooterSimpleCentered":
			viewSelected = <FooterSimpleCentered />;
			break;
		case "HeaderCenteredWithEyebrow":
			viewSelected = <HeaderCenteredWithEyebrow />;
			break;

		case "HeaderSimple":
			viewSelected = <HeaderSimple />;
			break;
		case "HeroCTASection":
			viewSelected = <HeroCTASection />;
			break;
	
		case "HeroSectionBorderedApp":
			viewSelected = <HeroSectionBorderedApp />;
			break;
		case "HeroStatsSection":
			viewSelected = <HeroStatsSection />;
			break;
		case "HeroWithAppScreenShot":
			viewSelected = <HeroWithAppScreenShot />;
			break;
		case "homeScreen":
			viewSelected = <homeScreen />;
			break;
		case "homeScreenStacked":
			viewSelected = <homeScreenStacked />;
			break;

		case "PricingComparison":
			viewSelected = <PricingComparison />;
			break;
		case "PricingSection2Cards":
			viewSelected = <PricingSection2Cards />;
			break;
		case "PricingSection3Cards":
			viewSelected = <PricingSection3Cards />;
			break;
		case "PricingSinglePriceDetails":
			viewSelected = <PricingSinglePriceDetails />;
			break;
		case "PricingThreeTiersAndFeatureComparison":
			viewSelected = <PricingThreeTiersAndFeatureComparison />;
			break;
		case "SectionHeadingWithDescription":
			viewSelected = <SectionHeadingWithDescription />;
			break;
		case "SectionHeadingWithInputGroup":
			viewSelected = <SectionHeadingWithInputGroup />;
			break;

		case "Stats":
			viewSelected = <Stats />;
			break;
		case "StatsCardSection":
			viewSelected = <StatsCardSection />;
			break;
		case "StatsSection":
			viewSelected = <StatsSection />;
			break;
		case "StatsSimpleGrid":
			viewSelected = <StatsSimpleGrid />;
			break;
		case "StatsWithDescription":
			viewSelected = <StatsWithDescription />;
			break;

		case "TeamLargeGrid":
			viewSelected = <TeamLargeGrid />;
			break;
		case "TeamMembersSection":
			viewSelected = <TeamMembersSection />;
			break;
		case "TeamWithLargeImages":
			viewSelected = <TeamWithLargeImages />;
			break;
		case "TeamWithMediumImages":
			viewSelected = <TeamWithMediumImages />;
			break;
		case "TeamWithRoundImages":
			viewSelected = <TeamWithRoundImages />;
			break;
		case "Testimonial":
			viewSelected = <Testimonial />;
			break;
		case "TestimonialsGrid":
			viewSelected = <TestimonialsGrid />;
			break;
		case "TestimonialsGridSection":
			viewSelected = <TestimonialsGridSection />;
			break;
		case "TestimonialsSubtleGrid":
			viewSelected = <TestimonialsSubtleGrid />;
			break;

		default:
			viewSelected = <AlertNotificationDemo />;
			break;
	}
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor viewSelected={viewSelected} code={code} sections={sections} setName={setName} name={name} />
		</div>
	);
}

function Page({ setSel, setSelectedCode, sections, viewSelected }) {
	return (
		<div className="flex flex-col justify-center gap-3 w-full">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Command className="rounded-lg border shadow-md md:min-w-[450px]">
					<CommandInput placeholder="Search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Sections">
							{sections.map((item, index) => {
								return (
									<CommandItem
										key={index}
										onSelect={() => {
											setSelectedCode(item.path);
											setName(item.value);
										}}
									>
										{item.name}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</div>
			<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewSelected}</section>
		</div>
	);
}

export async function loader({ request }: LoaderArgs) {
	return null;
}

export const meta: MetaFunction = () => {
	return [{ title: "Sections - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
