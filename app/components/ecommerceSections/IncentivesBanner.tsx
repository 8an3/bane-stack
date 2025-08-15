import { 
  Truck, 
  RotateCcw, 
  Shield, 
  Headphones, 
  CreditCard, 
  Award,
  Clock,
  Star,
  Gift,
  Zap
} from 'lucide-react';

 
// Banner style incentives
export function IncentivesBanner() {
  const incentives = [
    {
      name: 'Free shipping on orders over $75',
      icon: Truck,
    },
    {
      name: '30-day money-back guarantee',
      icon: RotateCcw,
    },
    {
      name: 'Award-winning customer service',
      icon: Award,
    },
  ]

  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <Gift className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
              <span>Limited time offer!</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <div className="flex space-x-6">
              {incentives.map((incentive, index) => (
                <div key={index} className="flex items-center text-sm text-indigo-200">
                  <incentive.icon className="mr-2 h-4 w-4" />
                  <span>{incentive.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}