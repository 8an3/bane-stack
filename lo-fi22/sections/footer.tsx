import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";

// Footer Section
export function FooterLoFi() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 p-2 border-t">
      <div className="grid grid-cols-4 gap-2 mb-2">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <Atom shade="400" className="h-2 w-2 rounded-full" />
            <Atom shade="400" className="h-1 w-12" />
          </div>
          <div className="space-y-0.5">
            <Atom shade="200" className="h-1 w-full" />
            <Atom shade="200" className="h-1 w-4/5" />
          </div>
        </div>
        {[1, 2, 3].map((col) => (
          <div key={col} className="space-y-1">
            <Atom shade="400" className="h-1 w-10" />
            <div className="space-y-0.5">
              {[1, 2, 3].map((item) => (
                <Atom key={item} shade="200" className="h-1 w-8" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-1 border-t">
        <Atom shade="200" className="h-1 w-24" />
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}