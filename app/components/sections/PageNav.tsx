import { cn, } from "~/components/ui/utils";
import { ThemeSelector } from "../customUi/theme-selector";
import { ExamplesNav } from "../ui/examples-nav";

export function PageNav({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-wrapper scroll-mt-24", className)} {...props}>
      <div className="container flex items-center justify-between gap-4 py-4">
        {children}
      </div>
    </div>
  )
}

export function PageNavDemo() {
  return (
    <PageNav className="hidden md:flex">
        <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
  )
}