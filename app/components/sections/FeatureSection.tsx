import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";

export const FeatureSection = ({ title, items, className = "" }) => (
	<div className={`mb-8 ${className}`}>
		<h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
		<ul className="text-muted-foreground space-y-2">
			{items.map((item, index) => (
				<li key={index} className="flex items-start">
					<span className="text-green-500 mr-2 mt-1">✓</span>
					<span>{item}</span>
				</li>
			))}
		</ul>
	</div>
);

export function FeatureSectionDemo() {
	return (
		<FeatureSection
			title="Files"
			items={[
				"Quick access to your most-used files.",
				"Add files to custom folders and subfolders.",
				"Edit display labels for files.",
				"Remove files from the navigation pane.",
				"Copy file paths with a single click.",
				"Reveal files in your system’s file explorer.",
				"Add multiple files to the quick access pane at once.",
			]}
		/>
	);
}








