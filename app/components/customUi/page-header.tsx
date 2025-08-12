import React from "react";
import { cn } from "~/components/ui/utils";
import { NavButton } from "~/components/customUi/NavButton";
import { Announcement } from "./announcement";

export function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("border-grid border-b", className)} {...props}>
			<div className="container-wrapper">
				<div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">{children}</div>
			</div>
		</section>
	);
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]", className)} {...props} />;
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={cn("  text-lg max-w-2xl text-balance font-light text-foreground", className)} {...props} />;
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex w-full items-center justify-start gap-2 pt-2", className)} {...props} />;
}

export function PageHeaderFunction({ title = "Page Title", description = "Page Description", announcement = "Page Announcement", aLink = "#" }) {
	return (
		<PageHeader>
			<Announcement announcement={announcement} link={aLink} />
			<PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
			<PageHeaderDescription>{description}</PageHeaderDescription>
			<PageActions>
				<NavButton href="/docs/components">Get Started</NavButton>
				<NavButton href="/docs/components">View Components</NavButton>
			</PageActions>
		</PageHeader>
	);
}
