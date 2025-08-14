import { Atom } from "~/components/lo-fi/atom"

// app/components/lo-fi/sections/blog.tsx
export function BlogLoFi() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-1/3" />
          <div className="flex items-center gap-2">
            <Atom shade="200" className="h-2 w-2" />
            <Atom shade="200" className="h-2 w-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-2/3" />
          <div className="flex items-center gap-2">
            <Atom shade="200" className="h-2 w-2" />
            <Atom shade="200" className="h-2 w-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-2/3" />
          <div className="flex items-center gap-2">
            <Atom shade="200" className="h-2 w-2" />
            <Atom shade="200" className="h-2 w-2" />
          </div>
        </div>
      </div>
    </div>
  )
}