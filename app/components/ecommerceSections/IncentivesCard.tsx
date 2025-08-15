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

 
// Card-based layout with background colors
export function IncentivesCard() {
  const incentives = [
    {
      name: 'Free Shipping',
      description: 'Free shipping worldwide on orders over $50',
      icon: Truck,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Easy Returns',
      description: '30-day hassle-free returns',
      icon: RotateCcw,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      name: 'Secure Payment',
      description: 'Your payment information is safe with us',
      icon: CreditCard,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Premium Support',
      description: '24/7 customer support via chat and email',
      icon: Headphones,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why shop with us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex rounded-2xl bg-background p-8 shadow-sm ring-1 ring-gray-900/10">
              <div>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-lg ${incentive.bgColor}`}>
                  <incentive.icon className={`h-8 w-8 ${incentive.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-foreground">{incentive.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}