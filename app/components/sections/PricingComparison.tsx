import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, X, Zap } from "lucide-react";



const plans = [
	{
		name: "Basic",
		price: "$29/mo",
		features: { A: true, B: false, C: true },
	},
	{
		name: "Pro",
		price: "$59/mo",
		features: { A: true, B: true, C: true },
	},
];

const features = ["Feature A", "Feature B", "Feature C"];

export function PricingComparison() {
	return (
		<div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:grid-cols-4">
			<div className="font-medium text-slate-900 dark:text-slate-200"></div>
			{plans.map((plan) => (
				<div key={plan.name} className="text-center">
					<div className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-200">{plan.name}</div>
					<div className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-200">{plan.price}</div>
				</div>
			))}
			{features.map((feat) => (
				<React.Fragment key={feat}>
					<div className="py-2 font-medium text-slate-700 dark:text-slate-400">{feat}</div>
					{plans.map((plan) => (
						<div key={plan.name + feat} className="py-2 flex justify-center">
							{plan.features[feat.charAt(feat.length - 1) as keyof typeof plan.features] ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-red-500" />}
						</div>
					))}
				</React.Fragment>
			))}
		</div>
	);
}
