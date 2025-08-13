import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
import { ChevronDown, Phone, Play, Menu, X, BarChart3, MousePointer, Shield, Grid3X3, RefreshCw } from "lucide-react";
import { Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";


export function HeaderSimple() {
	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl">
					{/* Main Title */}
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We make the complex simple</h1>

					{/* Description */}
					<p className="mt-6 text-lg leading-8 text-muted-foreground">Our platform helps teams of all sizes deliver projects on time and under budget. Get started today to see how we can help you.</p>

					{/* CTA Button */}
					<div className="mt-10 flex items-center gap-x-6">
						<Button>
							Get started
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
