import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { eP } from "~/utils/ext";
import { authSessionStorage } from "~/sessions/session";
import { axios } from "axios";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { PageHeaderFunction } from "~/components/customUi/page-header";
import { NotificationDemo } from "~/components/sections/Alerts";
import { BannerSection } from "~/components/sections/Banner";
import { BentoDemo } from "~/components/sections/BentoGrid";
import { BlogSection } from "~/components/sections/Blog";
import { ChangelogDemo } from "~/components/sections/Changelog";
import { ConfigDemo } from "~/components/sections/ConfigSection";
import { ContactSection } from "~/components/sections/Contact";
import { CTASection } from "~/components/sections/CTA";
import { DescriptionList } from "~/components/sections/DescriptionList";
import { DisplayCodeDemo } from "~/components/sections/DisplayCode";
import { DisplayGithubInstall } from "~/components/sections/DisplayGithubInstall";
import { DisplayInstallCode } from "~/components/sections/DisplayInstallCode";
import { DisplayInstallCodeArray } from "~/components/sections/DisplayInstallCodeArray";
import { FeatureSectionDemo, FeaturesGridSection, FeaturesSection2 } from "~/components/sections/FeatureSection";
import { FlyoutMenu } from "~/components/sections/FlyoutMenu";
import { HeadersSection } from "~/components/sections/Headers";
import { HeroCTASection, HeroSection, HeroStatsSection } from "~/components/sections/HeroSection";
import { ImageSection } from "~/components/sections/ImageSection";
import { JsonSectionDemo } from "~/components/sections/JsonSection";
import { NewsletterSection } from "~/components/sections/Newsletter";
import { NoteSectionDemo } from "~/components/sections/NoteSection";
import { UseHeader } from "~/components/sections/PageHeader";
import { PageNavDemo } from "~/components/sections/PageNav";
import { PricingSection2Cards, PricingSection1Card, PricingSection3Cards } from "~/components/sections/Pricing";
import { SectionTitle } from "~/components/sections/SectionTitle";
import { StatsCardSection, StatsSection } from "~/components/sections/Stats";
import { TeamSection } from "~/components/sections/Team";
import { TestimonialSection, TestimonialsGridSection } from "~/components/sections/Testimonial";
import { TsxFunctionDemo } from "~/components/sections/TsxSection";
import { UseSectionDemo } from "~/components/sections/UsageSection";
import { StackedLayoutsSection } from "~/components/ecommerceSections/StackedLayouts";
import { LoFi } from "~/components/lo-fi";
import { UseageSectionNoDashDemo } from "~/components/sections/UsageSectionNoDash";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import MonacoEditor from "../editor/components2";

export default function Dashboard() {
	const [selectedCode, setSelectedCode] = useState("");
	const [code, setCode] = useState("");
	const [name, setName] = useState("NotificationDemo");
	const sections = [
		{ name: "Alerts", value: "Alerts", path: "/examples/sections/Alerts.tsx.txt" },
		{ name: "Lofi", value: "Lofi", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Alert", value: "Lofi - Alert", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Accordian", value: "Lofi - Accordian", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Atom", value: "Lofi - Atom", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Component", value: "Lofi - Component", path: "/examples/lo-fi/index.tsx.txt" },
		{ name: "Banner", value: "Banner", path: "/examples/sections/Banner.tsx.txt" },
		{ name: "Blog", value: "Blog", path: "/examples/sections/Blog.tsx.txt" },
		{ name: "Contact", value: "Contact", path: "/examples/sections/Contact.tsx.txt" },
		{ name: "Content", value: "Content", path: "/examples/sections/Content.tsx.txt" },
		{ name: "CTA", value: "CTA", path: "/examples/sections/CTA.tsx.txt" },
		{ name: "Description List", value: "DescriptionList", path: "/examples/sections/DescriptionList.tsx.txt" },
		{ name: "Flyout Menu", value: "FlyoutMenu", path: "/examples/sections/FlyoutMenu.tsx.txt" },


		{ name: "Bento Grid", value: "BentoGrid", path: "/examples/sections/BentoGrid.tsx.txt" },
		{ name: "Bento Grid Two Row Second Row", value: "BentoGridTwoRowSecondRow", path: "/examples/sections/BentoGridTwoRowSecondRow.tsx.txt" },
		{ name: "Feature Section", value: "FeatureSection", path: "/examples/sections/FeatureSection.tsx.txt" },
		{ name: "FeatureSectionOffset", value: "FeatureSectionOffset", path: "/examples/sections/FeatureSectionOffset.tsx.txt" },
		{ name: "FeatureSectionWithScreenshot 3", value: "FeatureSectionWithScreenshot", path: "/examples/sections/FeatureSectionWithScreenshot.tsx.txt" },
		{ name: "FeaturesGridSection", value: "FeaturesGridSection", path: "/examples/sections/FeaturesGridSection.tsx.txt" },
		{ name: "FeaturesSection", value: "FeaturesSection2", path: "/examples/sections/FeaturesSection2.tsx.txt" },
		{ name: "Hero CTA Section", value: "HeroCTASection", path: "/examples/sections/HeroCTASection.tsx.txt" },
		{ name: "Hero Section", value: "HeroSection", path: "/examples/sections/HeroSection.tsx.txt" },
		{ name: "Hero Stats Section", value: "HeroStatsSection", path: "/examples/sections/HeroStatsSection.tsx.txt" },
		{ name: "Hero With App Screen Shot", value: "HeroWithAppScreenShot", path: "/examples/sections/HeroWithAppScreenShot.tsx.txt" },
		{ name: "Hero Section Bordered App", value: "HeroSectionBorderedApp", path: "/examples/sections/HeroSectionBorderedApp.tsx.txt" },
	{ name: "Pricing", value: "Pricing", path: "/examples/sections/Pricing.tsx.txt" },
		{ name: "PricingComparison", value: "PricingComparison", path: "/examples/sections/PricingComparison.tsx.txt" },
		{ name: "PricingSection2Cards", value: "PricingSection2Cards", path: "/examples/sections/PricingSection2Cards.tsx.txt" },
		{ name: "PricingSection3Cards", value: "PricingSection3Cards", path: "/examples/sections/PricingSection3Cards.tsx.txt" },
		{ name: "PricingSinglePriceDetails", value: "PricingSinglePriceDetails", path: "/examples/sections/PricingSinglePriceDetails.tsx.txt" },
		{ name: "PricingThreeTiersAndFeatureComparison", value: "PricingThreeTiersAndFeatureComparison", path: "/examples/sections/PricingThreeTiersAndFeatureComparison.tsx.txt" },
		{ name: "Headers", value: "Headers", path: "/examples/sections/Headers.tsx.txt" },
		{ name: "Header Centered With Eyebrow", value: "HeaderCenteredWithEyebrow", path: "/examples/sections/Headers.tsx.txt" },
		{ name: "Header Simple", value: "HeaderSimple", path: "/examples/sections/HeaderSimple.tsx.txt" },
				{ name: "Stats", value: "Stats", path: "/examples/sections/Stats.tsx.txt" },
		{ name: "StatsCardSection", value: "StatsCardSection", path: "/examples/sections/StatsCardSection.tsx.txt" },
		{ name: "StatsSection", value: "StatsSection", path: "/examples/sections/StatsSection.tsx.txt" },
		{ name: "StatsSimpleGrid", value: "StatsSimpleGrid", path: "/examples/sections/StatsSimpleGrid.tsx.txt" },
		{ name: "StatsWithDescription", value: "StatsWithDescription", path: "/examples/sections/StatsWithDescription.tsx.txt" },

AlertAttentionSectionWithAccent.tsx
AlertErrorSection.tsx
AlertInfoSection.tsx
Alerts.tsx
AlertSuccessSection.tsx
AlertSuccessSectionWithDismissalButton.tsx
Blog.tsx
BlogSingleColumn.tsx
BlogThreeColumnWithImages.tsx
BlogWithFeaturedPost.tsx
CardHeading.tsx
CardHeadingWithDescription.tsx
Contact.tsx
ContactFourColumnSection.tsx
Content.tsx
ContentCentered.tsx
ContentSplitWithImage.tsx
ContentTwoColumnWithScreenshot.tsx
CTA.tsx
CTASimpleSection.tsx
DescriptionListNarrow
DescriptionList
FAQThreeColumn
FAQSideBySide
FeedListMultipleItemTypes
FeedLists
FooterFourColumnMission.tsx
FooterFourColumnNewsletter.tsx
FooterFourColumnSimple.tsx
FooterSimpleCentered.tsx
SectionHeadingWithDescription.tsx
SectionHeadingWithInputGroup.tsx
		{ name: "Newsletter", value: "Newsletter", path: "/examples/sections/Newsletter.tsx.txt" },
		{ name: "PageHeader", value: "PageHeader", path: "/examples/sections/PageHeader.tsx.txt" },
		{ name: "PageNav", value: "PageNav", path: "/examples/sections/PageNav.tsx.txt" },
		{ name: "PageHeaderFunction", value: "PageHeaderFunction", path: "/examples/sections/" },
	
		{ name: "StackedLayouts", value: "StackedLayouts", path: "/examples/sections/StackedLayouts.tsx.txt" },

		{ name: "Team", value: "Team", path: "/examples/sections/Team.tsx.txt" },
		{ name: "Testimonial", value: "Testimonial", path: "/examples/sections/Testimonial.tsx.txt" },
		{ name: "Testimonial2", value: "Testimonial2", path: "/examples/sections/Testimonial.tsx.txt" },

		{ name: "Note Section", value: "NoteSection", path: "/examples/sections/NoteSection.tsx.txt" },
		{ name: "SectionTitle", value: "SectionTitle", path: "/examples/sections/SectionTitle.tsx.txt" },
		{ name: "Image Section", value: "ImageSection", path: "/examples/sections/ImageSection.tsx.txt" },
		{ name: "Json Section", value: "JsonSection", path: "/examples/sections/JsonSection.tsx.txt" },
		{ name: "TsxSection", value: "TsxSection", path: "/examples/sections/TsxSection.tsx.txt" },
		{ name: "UsageSection", value: "UsageSection", path: "/examples/sections/UsageSection.tsx.txt" },
		{ name: "UsageSectionNoDash", value: "UsageSectionNoDash", path: "/examples/sections/UsageSectionNoDash.tsx.txt" },
		{ name: "Changelog", value: "Changelog", path: "/examples/sections/Changelog.tsx.txt" },
		{ name: "Config Section", value: "ConfigSection", path: "/examples/sections/ConfigSection.tsx.txt" },
		{ name: "Display Code", value: "DisplayCode", path: "/examples/sections/DisplayCode.tsx.txt" },
		{ name: "Display Github Install", value: "DisplayGithubInstall", path: "/examples/sections/DisplayGithubInstall.tsx.txt" },
		{ name: "Display Install Code", value: "DisplayInstallCode", path: "/examples/sections/DisplayInstallCode.tsx.txt" },
		{ name: "Display Install Code Array", value: "DisplayInstallCodeArray", path: "/examples/sections/DisplayInstallCodeArray.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
		case "Alerts":
			viewSelected = <NotificationDemo />;
			break;
		case "NotificationDemo":
			viewSelected = <NotificationDemo />;
			break;
		case "Lofi":
			viewSelected = <LoFi />;
			break;
		case "Banner":
			viewSelected = <BannerSection />;
			break;
		case "BentoGrid":
			viewSelected = <BentoDemo />;
			break;
		case "Blog":
			viewSelected = <BlogSection />;
			break;
		case "Changelog":
			viewSelected = <ChangelogDemo />;
			break;
		case "ConfigSection":
			viewSelected = <ConfigDemo />;
			break;
		case "Contact":
			viewSelected = <ContactSection />;
			break;
		case "CTA":
			viewSelected = <CTASection />;
			break;
		case "DescriptionList":
			viewSelected = <DescriptionList />;
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
		case "FeatureSection":
			viewSelected = <FeatureSectionDemo />;
			break;
		case "FeatureSection2":
			viewSelected = <FeaturesSection2 />;
			break;
		case "FeatureSection3":
			viewSelected = <FeaturesGridSection />;
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
		case "Stats":
			viewSelected = <StatsSection />;
			break;
		case "Stats2":
			viewSelected = <StatsCardSection />;
			break;
		case "Team":
			viewSelected = <TeamSection />;
			break;
		case "Testimonial":
			viewSelected = <TestimonialSection />;
			break;
		case "Testimonial2":
			viewSelected = <TestimonialsGridSection />;
			break;
		case "TsxSection":
			viewSelected = <TsxFunctionDemo />;
			break;
		case "UsageSection":
			viewSelected = <UseSectionDemo />;
			break;
		case "UsageSectionNoDash":
			viewSelected = <UseageSectionNoDashDemo />;
			break;
		case "PageHeaderFunction":
			viewSelected = <PageHeaderFunction />;
			break;
		case "HeroSection":
			viewSelected = <HeroSection />;
			break;
		case "HeroSection2":
			viewSelected = <HeroStatsSection />;
			break;
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
		default:
			viewSelected = <NotificationDemo />;
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
