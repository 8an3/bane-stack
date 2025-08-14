import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
import { ChevronDown, Phone, Play, Menu, X, BarChart3, MousePointer, Shield, Grid3X3, RefreshCw } from "lucide-react";
import { Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";


export function HeaderCenteredWithEyebrow() {
	return (
		<div className="bg-background py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Eyebrow */}
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<p className="text-base font-semibold leading-7 text-primary">Boost your productivity</p>

					{/* Main Title */}
					<h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">A better way to ship projects</h1>

					{/* Description */}
					<p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>

					{/* CTA Buttons */}
					<div className="mt-10 flex items-center gap-x-6">
						<Button>
							Get started
							<Rocket className="ml-2 h-4 w-4" />
						</Button>
						<Button variant="outline">
							Learn more <span aria-hidden="true">→</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}