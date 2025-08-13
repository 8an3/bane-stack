import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield, Play, CheckCircle} from 'lucide-react';


export function HeroSection({
	title = "Theme Builder",
	desc = "Build VSCode themes visually without hunting down property names. Because life's too short for endless documentation searches.",
	className = `text-foreground bg-background`,
	className2 = `text-muted-foreground `,
}) {
	return (
		<div className="sticky top-0 z-10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background pb-4 pt-8">
			<div className="text-center">
				<h2 className={cn("text-2xl md:text-3xl font-bold mb-4 text-foreground", className)}>{title}</h2>
				<p className={cn("max-w-3xl mx-auto leading-relaxed", className2)}>{desc}</p>
			</div>
		</div>
	);
}






