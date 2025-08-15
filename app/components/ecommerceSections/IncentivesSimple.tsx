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

// Simple grid layout with icons
export function IncentivesSimple() {
  const incentives = [
    {
      name: 'Free shipping',
      description: 'Free shipping on orders over $25',
      icon: Truck,
    },
    {
      name: 'Free returns',
      description: '30-day return policy',
      icon: RotateCcw,
    },
    {
      name: 'Warranty',
      description: '2-year manufacturer warranty',
      icon: Shield,
    },
    {
      name: '24/7 support',
      description: 'Call us anytime at 1-800-555-0199',
      icon: Headphones,
    },
  ]

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <incentive.icon className="mx-auto h-16 w-16 text-muted-foreground" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-semibold text-foreground">{incentive.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}