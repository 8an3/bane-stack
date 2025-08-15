import { Atom } from "~/components/lo-fi/atom"
// Promo Section
export function PromoSectionLoFi() {
  return (
    <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded">
      <div className="grid grid-cols-2 gap-2 items-center">
        <div className="space-y-1">
          <div className="space-y-0.5">
            <Atom shade="300" className="h-1 w-3 bg-red-500 text-white rounded" />
            <Atom shade="400" className="h-2 w-3/4" />
            <Atom shade="300" className="h-1 w-2/3" />
          </div>
          <div className="space-y-0.5">
            <Atom shade="200" className="h-1 w-full" />
            <Atom shade="200" className="h-1 w-5/6" />
          </div>
          <div className="flex gap-1">
            <Atom shade="500" className="h-3 w-8 rounded-sm" />
            <Atom shade="200" className="h-3 w-7 rounded-sm border" />
          </div>
        </div>
        <div className="space-y-1">
          <Atom shade="100" className="h-8 w-full rounded" />
          <div className="flex justify-center gap-0.5">
            {[1, 2, 3].map((dot) => (
              <Atom key={dot} shade={dot === 1 ? "500" : "200"} className="h-0.5 w-0.5 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}