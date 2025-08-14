import { Atom } from "~/components/lo-fi/atom"
// Promo Section
export function PromoSectionLoFi() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <Atom shade="300" className="h-6 w-12 bg-red-500 text-white rounded px-2 py-1" />
            <Atom shade="400" className="h-8 w-3/4" />
            <Atom shade="300" className="h-5 w-2/3" />
          </div>
          <div className="space-y-2">
            <Atom shade="200" className="h-3 w-full" />
            <Atom shade="200" className="h-3 w-5/6" />
          </div>
          <div className="flex gap-4">
            <Atom shade="500" className="h-12 w-32 rounded-md" />
            <Atom shade="200" className="h-12 w-28 rounded-md border-2" />
          </div>
        </div>
        <div className="space-y-4">
          <Atom shade="100" className="h-64 w-full rounded-lg" />
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((dot) => (
              <Atom key={dot} shade={dot === 1 ? "500" : "200"} className="h-2 w-2 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
