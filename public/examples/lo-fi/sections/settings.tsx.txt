import { Atom } from "~/components/lo-fi/atom"
// Settings Section
export function SettingsSectionLoFi() {
  return (
    <div className="p-2 space-y-2 h-[353px]">
      <Atom shade="400" className="h-2 w-12" />
      <div className="space-y-2">
        <div className="p-1 border rounded-sm space-y-1">
          <Atom shade="400" className="h-1 w-16" />
          <div className="grid grid-cols-2 gap-1">
            <Atom shade="100" className="h-2 w-full rounded-sm border" />
            <Atom shade="100" className="h-2 w-full rounded-sm border" />
          </div>
          <Atom shade="500" className="h-2 w-12 rounded-sm" />
        </div>
        <div className="p-1 border rounded-sm space-y-1">
          <Atom shade="400" className="h-1 w-14" />
          {[1, 2].map((setting) => (
            <div key={setting} className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Atom shade="300" className="h-1 w-16" />
                <Atom shade="200" className="h-1 w-24" />
              </div>
              <Atom shade="300" className="h-1 w-6 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

