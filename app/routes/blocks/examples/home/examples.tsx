import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Component, ComponentContent, ComponentName } from "~/components/lo-fi/component";
import { HeroSection } from "~/components/sections/HeroSection";
import { cn } from "~/components/ui/utils";
import { BannerLoFi } from "~/components/lo-fi/sections/banner";
import { customSections, ecommercSsections, pageComponents, sections, uiComponents } from "~/components/sections/sections";
import { HomeNav } from "./sections";

export default function Dashboard() {
    return (
        <div className={cn(`w-[100%] mx-auto  grid  text-foreground bg-background`)}>
            <div className="w-[95%]  mx-auto  grid gap-3 justify-center">
                <HeroSection className={`text-foreground bg-background`} className2={`text-muted-foreground `} title="Examples - 8an3/Bane" desc="Full page examples that, get ideas or copy/paste" />
                  <HomeNav />
            <Examples />
            </div>
        </div>
    );
}

export async function loader({ request }: LoaderArgs) {
    return null;
}

export const meta: MetaFunction = () => {
    return [{ title: "8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};

function MapLoFi({ value = "Banner", func = <BannerLoFi />, name = "Banner" }) {
    const url = `/blocks/examples/code/${value}`;
    return (
        <Component href={url}>
            <ComponentContent>{func}</ComponentContent>
            <ComponentName>{name}</ComponentName>
        </Component>
    );
}

 
export function Examples() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
                <div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {pageComponents.map((i, index) => {
                        return <MapLoFi key={index} value={i.value} func={i.lofi} name={i.name} />;
                    })}
                </div>
               
              
            </div>
        </div>
    );
}
 