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

 
 

// Feature grid with emphasis
export function IncentivesFeature() {
  const incentives = [
    {
      name: 'Lightning Fast Delivery',
      description: 'Get your order delivered in 24-48 hours with our express shipping option.',
      icon: Zap,
      featured: true,
    },
    {
      name: 'Quality Guarantee',
      description: 'Every product comes with our quality promise and full manufacturer warranty.',
      icon: Shield,
      featured: false,
    },
    {
      name: 'Expert Support',
      description: 'Our product experts are available 7 days a week to help you make the right choice.',
      icon: Headphones,
      featured: false,
    },
    {
      name: '5-Star Reviews',
      description: 'Join thousands of happy customers who have rated us 5 stars.',
      icon: Star,
      featured: true,
    },
  ]

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shopping made simple
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've built our reputation on providing exceptional service and quality products that exceed expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    incentive.featured ? 'bg-indigo-600' : 'bg-background/70'
                  }`}>
                    <incentive.icon 
                      className={`h-6 w-6 ${incentive.featured ? 'text-white' : 'text-muted-foreground'}`} 
                      aria-hidden="true" 
                    />
                  </div>
                  {incentive.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{incentive.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
