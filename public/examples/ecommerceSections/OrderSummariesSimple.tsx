import React from 'react';
import { Check, Package, Truck, CreditCard, MapPin, User } from 'lucide-react';

// Template 1: Simple with full order details
export function  OrderSummariesSimple  ()  {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Order Confirmed</h1>
            <p className="mt-2 text-base text-gray-500">
              Thank you for your order. We'll send you a shipping confirmation email as soon as your order ships.
            </p>
          </div>

          <div className="mt-12">
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
              <dl className="mt-4 text-sm font-medium">
                <div className="flex justify-between">
                  <dt className="text-gray-900">Order number</dt>
                  <dd className="text-gray-700">#14034</dd>
                </div>
                <div className="mt-2 flex justify-between">
                  <dt className="text-gray-900">Order date</dt>
                  <dd className="text-gray-700">March 22, 2024</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Items ordered</h3>
              <div className="mt-6 flow-root">
                <ul role="list" className="-mb-6">
                  <li className="relative pb-6">
                    <div className="relative flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop"
                          alt="Basic Tee"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm">
                          <h4 className="font-medium text-gray-900">Basic Tee</h4>
                          <p className="mt-0.5 text-gray-500">Aspen White</p>
                          <p className="mt-0.5 text-gray-500">Size L</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-gray-500">Qty 1</p>
                          <p className="text-sm font-medium text-gray-900">$32.00</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative pb-6">
                    <div className="relative flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop"
                          alt="Nomad Tumbler"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm">
                          <h4 className="font-medium text-gray-900">Nomad Tumbler</h4>
                          <p className="mt-0.5 text-gray-500">White</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-gray-500">Qty 1</p>
                          <p className="text-sm font-medium text-gray-900">$35.00</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <dt className="text-gray-900">Subtotal</dt>
                  <dd className="text-gray-700">$67.00</dd>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <dt className="text-gray-900">Shipping</dt>
                  <dd className="text-gray-700">$5.00</dd>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <dt className="text-gray-900">Tax</dt>
                  <dd className="text-gray-700">$5.36</dd>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-medium">
                  <dt className="text-gray-900">Order total</dt>
                  <dd className="text-gray-900">$77.36</dd>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Shipping & Billing Information</h3>
              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 flex items-center">
                    <Truck className="mr-2 h-4 w-4" />
                    Shipping Address
                  </h4>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Floyd Miles</p>
                    <p>7363 Cynthia Pass</p>
                    <p>Toronto, ON M5V 2L7</p>
                    <p>Canada</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Method
                  </h4>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Ending with 4242</p>
                    <p>Expires 12/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
