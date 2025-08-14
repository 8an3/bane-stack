import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { cn } from "~/components/ui/utils";
import { FeedListMultipleItemTypes } from "./FeedListMultipleItemTypes";

type FeedItem = {
	id: string;
	type: "completed" | "in-progress" | "error";
	title: string;
	description: string;
	date: string;
	datetime: string;
};

export function FeedListSimpleFeedWithIcons({ items }: { items: FeedItem[] }) {
	return (
		<div className="flow-root">
			<ul role="list" className="-mb-8">
				{items.map((item, itemIdx) => (
					<li key={item.id}>
						<div className="relative pb-8">
							{itemIdx !== items.length - 1 ? <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" /> : null}
							<div className="relative flex space-x-3">
								<div>
									<span
										className={cn("flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white", {
											"bg-green-500": item.type === "completed",
											"bg-yellow-500": item.type === "in-progress",
											"bg-red-500": item.type === "error",
										})}
									>
										{item.type === "completed" && <CheckCircle2 className="h-5 w-5 text-white" />}
										{item.type === "in-progress" && <Clock className="h-5 w-5 text-white" />}
										{item.type === "error" && <AlertCircle className="h-5 w-5 text-white" />}
									</span>
								</div>
								<div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
									<div>
										<p className="text-sm text-gray-800">{item.title}</p>
										<p className="text-sm text-muted-foreground">{item.description}</p>
									</div>
									<div className="whitespace-nowrap text-right text-sm text-muted-foreground">
										<time dateTime={item.datetime}>{item.date}</time>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function FeedPage() {
	const simpleItems = [
		{
			id: "1",
			type: "completed",
			title: "Application UI",
			description: "Completed the design system for the application",
			date: "2h ago",
			datetime: "2023-01-23T11:00",
		},
		// More items...
	];

	const multipleTypeItems = [
		{
			id: "1",
			type: "user",
			title: "New user registered",
			description: "John Smith just created an account",
			date: "1h ago",
			datetime: "2023-01-23T12:00",
			badge: "User",
		},
		// More items with different types...
	];

	return (
		<div className="space-y-8 p-4">
			<div className="max-w-2xl">
				<h2 className="text-lg font-medium mb-4">Simple Feed with Icons</h2>
				<FeedListSimpleFeedWithIcons items={simpleItems} />
			</div>

			<div className="max-w-2xl">
				<h2 className="text-lg font-medium mb-4">Multiple Item Types</h2>
				<FeedListMultipleItemTypes items={multipleTypeItems} />
			</div>
		</div>
	);
}
