import { Atom } from "~/components/lo-fi/atom"
// Settings Section
export function SettingsSectionLoFi() {
  return (
    <div className="p-6 space-y-8">
      <Atom shade="400" className="h-5 w-24" />
      
      <div className="space-y-6">
        <div className="p-4 border rounded-lg space-y-4">
          <Atom shade="400" className="h-4 w-32" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Atom shade="300" className="h-3 w-16" />
              <Atom shade="100" className="h-10 w-full rounded-md border-2" />
            </div>
            <div className="space-y-2">
              <Atom shade="300" className="h-3 w-20" />
              <Atom shade="100" className="h-10 w-full rounded-md border-2" />
            </div>
          </div>
          <Atom shade="500" className="h-10 w-24 rounded-md" />
        </div>
        
        <div className="p-4 border rounded-lg space-y-4">
          <Atom shade="400" className="h-4 w-28" />
          <div className="space-y-3">
            {[1, 2, 3].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <div className="space-y-1">
                  <Atom shade="300" className="h-3 w-32" />
                  <Atom shade="200" className="h-3 w-48" />
                </div>
                <Atom shade="300" className="h-6 w-12 rounded-full" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border rounded-lg space-y-4">
          <Atom shade="400" className="h-4 w-20" />
          <div className="space-y-3">
            {[1, 2, 3].map((option) => (
              <div key={option} className="flex items-center gap-3">
                <Atom shade="200" className="h-4 w-4 rounded-full border-2" />
                <Atom shade="200" className="h-3 w-40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
