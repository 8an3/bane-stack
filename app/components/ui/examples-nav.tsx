import { useLocation, useNavigation } from "@remix-run/react";
import { ButtonNL } from "./button-loading";
import { cn } from "./utils";

export const HomeExamples1 = [
	{
		name: "The Advantage",
		title: "The Advantage",
		to: "/items/advantage",
		href: "/items/advantage",
		hidden: false,
	},
	{
		name: "Features",
		title: "Features",
		href: "/items/features",
		to: "/items/features",
		hidden: false,
	},
	{
		name: "Pricing",
		title: "Pricing",
		to: "/items/pricing",
		href: "/items/pricing",
		hidden: false,
	},
	{
		name: "FAQ",
		title: "FAQ",
		to: "/items/faq",
		href: "/items/faq",
		hidden: false,
	},
];
const HomeExamples = [
	{
		name: "Authentication",
		to: "/blocks/examples/authentication",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
		hidden: false,
	},
	{
		name: "Cards",
		to: "/blocks/examples/cards",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
		hidden: false,
	},
	{
		name: "Dashboard",
		to: "/blocks/examples/dashboard",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
		hidden: false,
	},
	{
		name: "E-Commerce",
		to: "/blocks/examples/ecommerce",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
		hidden: false,
	},
	{
		name: "Components Editor",
		to: "/blocks/examples/editor/components",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
		hidden: false,
	},
	{
		name: "Forms",
		to: "/blocks/examples/forms/profile",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
		hidden: false,
	},
	{
		name: "Mail",
		to: "/blocks/examples/mail",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
		hidden: false,
	},
	{
		name: "Music",
		to: "/blocks/examples/music",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
		hidden: false,
	},
	{
		name: "Playground",
		to: "/blocks/examples/playground",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
		hidden: false,
	},
	{
		name: "Products",
		to: "/blocks/examples/products/table",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
		hidden: false,
	},
	{
		name: "Sections",
		to: "/blocks/examples/sections/viewer",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
		hidden: false,
	},
	{
		name: "Tasks",
		to: "/blocks/examples/tasks",
		code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/tasks",
		hidden: false,
	},
];
interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
	const location = useLocation();
	const pathname = location.pathname;
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<div className="relative">
			<div className="max-w-[600px] lg:max-w-none overflow-x-auto overflow-hidden">
				<div className={cn("flex items-center", className)} {...props}>
					{HomeExamples.map((example) => (
						<ExampleLink key={example.to} example={example} isSubmitting={isSubmitting} isActive={pathname?.startsWith(example.to) ?? false} />
					))}
				</div>
			</div>
		</div>
	);
}

function ExampleLink({ example, isActive, isSubmitting, loadingText = "Navigating...", spinnerColor = "border-blue-500", spinnerSize = 6 }: { example: (typeof HomeExamples)[number]; isActive: boolean; isSubmitting: boolean }) {
	if (example.hidden) {
		return null;
	}

	const nav = useNavigation();

	const isNavigating = nav.state === "loading" && nav.location?.pathname === example.to;

	return (
		<ButtonNL
			to={example.to}
			key={example.to}
			isSubmitting={isSubmitting}
			className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-foreground data-[active=true]:hover:text-primary hover:bg-transparent"
			data-active={isActive}
		>
			{isNavigating ? (
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center h-full">
						<div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
					</div>
					<p className="ml-3">{loadingText}</p>
				</div>
			) : (
				<span>{example.name}</span>
			)}
		</ButtonNL>
	);
}
