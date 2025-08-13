import { Announcement, } from "~/components/customUi/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderFunction, PageHeaderHeading, } from "~/components/customUi/page-header";
import { Button, } from "~/components/ui/button";
import { NavLink, Outlet, } from "@remix-run/react";
import { ExamplesNav } from "./examples/examples-nav";



export default function ExamplesLayout() {
  // <PageHeaderFunction title="E-Commerce Component Viewer" description="View each item before implementation" announcement="More sections coming soon!" />
  /** <div className=" flex items-center justify-center w-full">
        <PageHeaderFunction />
      </div> */
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <div className="border-grid  flex-shrink-0 w-full">
        <div className="container flex justify-center">
          
        </div>
      </div>
      
      <div className="container-wrapper flex-1 w-full">
         <Outlet />
      </div>
    </div>
  )
}