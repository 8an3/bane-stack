import { ChevronRightIcon } from "lucide-react";
import { Link } from "@remix-run/react";

import { SearchIcon } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function SectionHeadingWithDescription() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 className="text-lg font-medium text-gray-900">
            Job Postings
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">
            Check out the latest job postings from your team.
          </p>
        </div>

        <div className="mt-4 flex items-center sm:ml-6 sm:mt-0">
          <Link
            to="#"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            View all
            <ChevronRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}


