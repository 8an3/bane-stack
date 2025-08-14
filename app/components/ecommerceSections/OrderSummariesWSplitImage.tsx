import React from "react";
import { Check, Package, Truck, CreditCard, MapPin, User } from "lucide-react";

// Template 2: With split image
export function OrderSummariesWSplitImage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
				<div className="relative col-start-2 row-start-1 flex h-full flex-col py-6 px-4 sm:px-6 lg:px-8 xl:px-12">
					<div className="flex-1">
						<div className="flex items-center">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
								<Check className="h-5 w-5 text-green-600" />
							</div>
							<h1 className="ml-3 text-xl font-medium text-gray-900">Order Confirmed</h1>
						</div>
						<p className="mt-2 text-sm text-gray-500">Your order #14034 has been confirmed and will be shipping soon.</p>

						<ul role="list" className="divide-y divide-gray-200 mt-8">
							<li className="flex py-6 space-x-6">
								<img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop" alt="Basic Tee" className="h-16 w-16 flex-none rounded-md bg-gray-100 object-cover object-center" />
								<div className="flex-auto">
									<div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
										<div className="flex-auto space-y-1 text-sm font-medium">
											<h3 className="text-gray-900">Basic Tee</h3>
											<p className="text-gray-500">Aspen White</p>
											<p className="text-gray-500">Size L</p>
										</div>
										<div className="flex flex-none space-x-4">
											<div className="flex border-l border-gray-300 pl-4">
												<dt className="sr-only">Price</dt>
												<dd className="text-sm font-medium text-gray-900">$32.00</dd>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="flex py-6 space-x-6">
								<img src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop" alt="Nomad Tumbler" className="h-16 w-16 flex-none rounded-md bg-gray-100 object-cover object-center" />
								<div className="flex-auto">
									<div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
										<div className="flex-auto space-y-1 text-sm font-medium">
											<h3 className="text-gray-900">Nomad Tumbler</h3>
											<p className="text-gray-500">White</p>
										</div>
										<div className="flex flex-none space-x-4">
											<div className="flex border-l border-gray-300 pl-4">
												<dt className="sr-only">Price</dt>
												<dd className="text-sm font-medium text-gray-900">$35.00</dd>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>

						<dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium">
							<div className="flex justify-between">
								<dt className="text-gray-900">Subtotal</dt>
								<dd className="text-gray-700">$67.00</dd>
							</div>
							<div className="flex justify-between">
								<dt className="text-gray-900">Shipping</dt>
								<dd className="text-gray-700">$5.00</dd>
							</div>
							<div className="flex justify-between">
								<dt className="text-gray-900">Tax</dt>
								<dd className="text-gray-700">$5.36</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
								<dt className="text-base">Total</dt>
								<dd className="text-base">$77.36</dd>
							</div>
						</dl>
					</div>

					<div className="border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
						<div className="flex items-center">
							<MapPin className="mr-2 h-4 w-4" />
							<span>Shipping to Floyd Miles, 7363 Cynthia Pass, Toronto, ON</span>
						</div>
						<div className="mt-2 flex items-center">
							<Package className="mr-2 h-4 w-4" />
							<span>Expected delivery: March 25-27, 2024</span>
						</div>
					</div>
				</div>

				<div className="bg-gray-50 col-start-1 row-start-1 py-6 px-4 sm:px-6 lg:py-16 lg:px-8 xl:px-12">
					<div className="mx-auto w-full max-w-lg">
						<img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" alt="Order confirmation" className="w-full rounded-lg shadow-lg" />
						<div className="mt-8 text-center">
							<h2 className="text-lg font-medium text-gray-900">Thank you for your order!</h2>
							<p className="mt-2 text-sm text-gray-500">We're processing your order and will send you a confirmation email shortly with tracking information.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
