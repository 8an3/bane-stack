import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Component, ComponentContent, ComponentName } from "~/components/lo-fi/component";
import { HeroSection } from "~/components/sections/HeroSection";
import { cn } from "~/components/ui/utils";
import { BannerLoFi } from "~/components/lo-fi/sections/banner";
import { customSections, ecommercSsections, pageComponents, sections, uiComponents } from "~/components/sections/sections";
import { Separator } from "~/components/ui";
import { NavButtonStyled } from "~/components/customUi/NavButtonStyled";

export function HomeNav() {
    return (
 <div className='flex items-center gap-3 justify-center mx-auto'>
                    <NavButtonStyled to='/blocks/examples/home/sections' primary={false} className='rounded-lg'>Sections</NavButtonStyled>
                    <NavButtonStyled to='/blocks/examples/home/ecommerce' primary={false} className='rounded-lg' >E-Commerce</NavButtonStyled>
                    <NavButtonStyled to='/blocks/examples/home/examples' primary={false} className='rounded-lg' >Pages</NavButtonStyled>
                    <NavButtonStyled to='/blocks/examples/home/ui' primary={false} className='rounded-lg' >shadCN</NavButtonStyled>
                    <NavButtonStyled to='/blocks/examples/home/customUi' primary={false} className='rounded-lg' >Custom UI</NavButtonStyled>
                    <NavButtonStyled to='/blocks/examples/home/lofi' primary={false} className='rounded-lg' >Lo-Fi</NavButtonStyled>
                </div>
    )
}

export default function Dashboard() {
    return (
        <div className={cn(`w-[100%] mx-auto  grid  text-foreground bg-background`)}>
            <div className="w-[95%]  mx-auto  grid gap-3 justify-center">
                <HeroSection className={`text-foreground bg-background`} className2={`text-muted-foreground `} title="Sections - 8an3/Bane" desc="Pieces of code to use throughout the project on various pages" />
               <HomeNav />
                <Sections />
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

export function Sections() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                    {sections.map((i, index) => {
                        return <MapLoFi key={index} value={i.value} func={i.lofi} name={i.name} />;
                    })}
                </div>
            </div>
        </div>
    );
}
