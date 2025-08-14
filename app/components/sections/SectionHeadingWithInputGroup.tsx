import { ChevronRightIcon } from "lucide-react";
import { Link } from "@remix-run/react";

import { SearchIcon } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";



export function SectionHeadingWithInputGroup() {
  return (
    <div className="border-b border-border pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg font-medium leading-6 text-foreground">
        Team Members
      </h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </div>
          <Input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-foreground ring-1 ring-inset ring-gray-300 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
        <Button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add member
        </Button>
      </div>
    </div>
  );
}
