import { Atom } from "~/components/lo-fi/atom"
// Store Front Pages
export function StoreFrontPagesLoFi() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <div className="relative h-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-2 flex items-center">
        <div className="space-y-1">
          <Atom shade="400" className="h-2 w-16" />
          <Atom shade="300" className="h-1 w-12" />
          <Atom shade="500" className="h-2 w-8 rounded-sm" />
        </div>
        <Atom shade="200" className="absolute right-2 h-8 w-8 rounded" />
      </div>
      
      {/* Categories */}
      <div className="p-2">
        <Atom shade="400" className="h-1 w-10 mb-2" />
        <div className="grid grid-cols-6 gap-1">
          {[1, 2, 3, 4, 5, 6].map((category) => (
            <div key={category} className="text-center space-y-0.5">
              <Atom shade="200" className="h-4 w-4 rounded-full mx-auto" />
              <Atom shade="300" className="h-0.5 w-4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="p-2 bg-neutral-50 dark:bg-neutral-900">
        <div className="flex justify-between items-center mb-2">
          <Atom shade="400" className="h-1 w-11" />
          <Atom shade="200" className="h-2 w-5 rounded-sm" />
        </div>
        <div className="grid grid-cols-4 gap-1">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="space-y-1">
              <Atom shade="100" className="h-10 w-full rounded" />
              <div className="space-y-0.5">
                <Atom shade="400" className="h-0.5 w-3/4" />
                <Atom shade="500" className="h-1 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Promotions */}
      <div className="p-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-red-50 dark:bg-red-950 rounded space-y-1">
            <Atom shade="300" className="h-1 w-6 bg-red-500 text-white rounded" />
            <Atom shade="400" className="h-1 w-3/4" />
            <Atom shade="200" className="h-2 w-6 rounded-sm" />
          </div>
          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded space-y-1">
            <Atom shade="300" className="h-1 w-8 bg-blue-500 text-white rounded" />
            <Atom shade="400" className="h-1 w-2/3" />
            <Atom shade="200" className="h-2 w-7 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
