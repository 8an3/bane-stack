import { Linkedin, Twitter } from "lucide-react";
import { Atom } from "~/components/lo-fi/atom";

// Team Section
export function TeamLoFi() {
  return (
    <div className="p-2">
      <div className="text-center mb-2">
        <Atom shade="400" className="h-2 w-16 mx-auto mb-1" />
        <Atom shade="200" className="h-1 w-24 mx-auto" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((member) => (
          <div key={member} className="text-center space-y-1">
            <Atom shade="300" className="h-8 w-8 rounded-full mx-auto" />
            <Atom shade="400" className="h-1 w-6 mx-auto" />
            <Atom shade="300" className="h-1 w-4 mx-auto" />
            <div className="flex justify-center gap-1">
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
