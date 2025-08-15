import { Loader2, ChevronDown } from "lucide-react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Atom } from "~/components/lo-fi/atom"

export function AccordionLoFi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90px] gap-1">
      {/* Loading spinner with accordion icon */}
      <div className="flex items-center gap-2">
        <ChevronDown className="size-3 text-primary/60" />
        <Loader2 className="size-5 animate-spin text-primary" />
      </div>
      
      {/* Loading skeleton content */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {/* Accordion items skeleton */}
        <div className="flex flex-col gap-2">
          {/* First accordion item */}
          <div className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
            <Atom shade="200" className="h-4 w-3/4 animate-pulse" />
            <div className="w-4 h-4 rounded bg-muted animate-pulse" />
          </div>
          
          {/* Second accordion item */}
          <div className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
            <Atom shade="150" className="h-4 w-2/3 animate-pulse" />
            <div className="w-4 h-4 rounded bg-muted animate-pulse" />
          </div>
          
          {/* Third accordion item (expanded state) */}
          <div className="border rounded-md bg-muted/20">
            <div className="flex items-center justify-between p-3">
              <Atom shade="200" className="h-4 w-1/2 animate-pulse" />
              <div className="w-4 h-4 rounded bg-muted animate-pulse" />
            </div>
            <div className="px-3 pb-3 flex flex-col gap-2">
              <Atom shade="100" className="h-3 w-full animate-pulse" />
              <Atom shade="150" className="h-3 w-4/5 animate-pulse" />
              <Atom shade="100" className="h-3 w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccordionLoFi() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-1/3" />
          <ChevronDownIcon className="size-3" />
        </div>
      </div>
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-1/2" />
          <ChevronUpIcon className="size-3" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Atom shade="200" className="h-2 w-2/3" />
          <Atom shade="200" className="h-2 w-1/3" />
        </div>
      </div>
      <div className="flex flex-col gap-1 py-2">
        <div className="flex items-center justify-between">
          <Atom shade="300" className="h-2 w-2/3" />
          <ChevronDownIcon className="size-3" />
        </div>
      </div>
    </div>
  )
}