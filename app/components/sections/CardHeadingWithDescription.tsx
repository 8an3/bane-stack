import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { MoreVertical } from "lucide-react";


export function CardHeadingWithDescription() {
  return (
    <div className="border rounded-lg shadow-sm">
      <div className="px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-lg font-medium leading-6 text-foreground">Job Postings</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>
          </div>
          <div className="ml-4 mt-4 flex-shrink-0">
            <Button>Create new job</Button>
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex space-x-6">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                Full-time
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                Remote
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800">
                $120k – $140k
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span>Closing on January 9, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}