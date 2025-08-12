import { Announcement, } from "~/components/customUi/announcement";
import { ExamplesNav, } from "~/components/examples-nav";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, } from "~/components/page-header";
import { Button, } from "~/registry/new-york/ui/button";
import { NavLink, Outlet, } from "@remix-run/react";


export default function ExamplesLayout() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          A set of beautifully-designed, accessible components and a code
          distribution platform. Works with your favorite frameworks. Open
          Source. Open Code.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <NavLink href="/docs">Get Started</NavLink>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <NavLink href="/blocks">Browse Blocks</NavLink>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  )
}
