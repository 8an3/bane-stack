import { Atom } from "~/components/lo-fi/atom"
// Store Front Pages
export function StoreFrontPagesLoFi() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 flex items-center">
        <div className="space-y-4">
          <Atom shade="400" className="h-6 w-64" />
          <Atom shade="300" className="h-5 w-48" />
          <Atom shade="500" className="h-10 w-32 rounded-md" />
        </div>
        <Atom shade="200" className="absolute right-8 h-32 w-32 rounded-lg" />
      </div>
      
      {/* Categories */}
      <div className="p-8">
        <Atom shade="400" className="h-5 w-40 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((category) => (
            <div key={category} className="text-center space-y-2">
              <Atom shade="200" className="h-16 w-16 rounded-full mx-auto" />
              <Atom shade="300" className="h-3 w-16 mx-auto" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="p-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="flex justify-between items-center mb-6">
          <Atom shade="400" className="h-5 w-44" />
          <Atom shade="200" className="h-8 w-20 rounded-md" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="space-y-3">
              <Atom shade="100" className="h-40 w-full rounded-lg" />
              <div className="space-y-2">
                <Atom shade="400" className="h-3 w-3/4" />
                <Atom shade="500" className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Promotions */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-50 dark:bg-red-950 rounded-lg space-y-3">
            <Atom shade="300" className="h-4 w-24 bg-red-500 text-white rounded px-2" />
            <Atom shade="400" className="h-5 w-3/4" />
            <Atom shade="200" className="h-8 w-24 rounded-md" />
          </div>
          <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg space-y-3">
            <Atom shade="300" className="h-4 w-32 bg-blue-500 text-white rounded px-2" />
            <Atom shade="400" className="h-5 w-2/3" />
            <Atom shade="200" className="h-8 w-28 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}