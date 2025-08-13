import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";


export function SinglePriceDetails() {
	return (
		<section className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-900">
			<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-4">Basic Plan</h2>
			<div className="flex items-baseline mb-4">
				<span className="text-3xl font-bold text-slate-900 dark:text-slate-200">$29</span>
				<span className="ml-1 text-sm text-slate-500 dark:text-slate-400">/mo</span>
			</div>
			<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Perfect for individuals just getting started.</p>
			<ul className="space-y-3 mb-6">
				{["Feature One", "Feature Two", "Feature Three"].map((feature) => (
					<li key={feature} className="flex items-center text-slate-600 dark:text-slate-400">
						<Check className="w-4 h-4 text-emerald-500 mr-2" />
						{feature}
					</li>
				))}
			</ul>
			<Button variant="primary" className="w-full">
				Get Started
			</Button>
		</section>
	);
}

