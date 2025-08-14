import { Paperclip } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";





export function DescriptionListNarrow() {
	const items = [
		{
			label: "Full name",
			value: "Margot Foster",
		},
		{
			label: "Application for",
			value: "Backend Developer",
		},
		{
			label: "Email address",
			value: "margot@example.com",
		},
		{
			label: "Salary expectation",
			value: "$120,000",
		},
		{
			label: "About",
			value:
				"Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
		},
	];

	return (
		<Card>
			<CardContent className="p-0">
				<div className="divide-y divide-gray-200">
					{items.map((item, index) => (
						<div key={index} className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-muted-foreground sr-only">{item.label}</dt>
							<dd className="mt-1 text-sm text-foreground sm:col-span-2 sm:mt-0">{item.value}</dd>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
