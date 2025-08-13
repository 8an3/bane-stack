
import { cn } from "~/components/ui/utils";
import {Check,CloudUpload, Lock, Server, Shield, BarChart3, CheckCircle, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Star, Smartphone, Globe, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";


export function FeaturesSection2({
    subtitle = "Deploy faster",
    title = "A better workflow",
    description = "Streamline your development process with our powerful tools designed to help teams ship faster and more reliably.",
    features = [
        {
            name: "Push to deploy.",
            description: "Deploy your applications instantly with our streamlined CI/CD pipeline. No complex configurations required.",
            icon: CloudUpload,
        },
        {
            name: "SSL certificates.",
            description: "Automatic SSL certificate provisioning and renewal keeps your applications secure without manual intervention.",
            icon: Lock,
        },
        {
            name: "Database backups.",
            description: "Automated daily backups with point-in-time recovery ensure your data is always protected and recoverable.",
            icon: Server,
        },
    ],
    image = {
        src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
        alt: "Product screenshot",
        width: 2432,
        height: 1442,
    },
    layout = "image-right", // "image-right", "image-left", "no-image"
    theme = "dark", // "dark" or "light"
    className,
    containerClassName,
    titleClassName,
    descriptionClassName,
    featuresClassName,
    imageClassName,
}) {
    const isDark = theme === "dark";

    return (
        <section className={cn("overflow-hidden py-24 sm:py-32", isDark ? "bg-gray-900" : "bg-background", className)}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={cn("mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none", layout !== "no-image" ? "lg:grid-cols-2" : "lg:grid-cols-1", containerClassName)}>
                    {/* Content */}
                    <div className={cn(layout === "image-left" ? "lg:order-2 lg:pl-8" : "lg:pr-8", layout === "no-image" ? "max-w-4xl mx-auto text-center" : "", "lg:pt-4")}>
                        <div className={cn(layout !== "no-image" ? "lg:max-w-lg" : "max-w-3xl mx-auto")}>
                            {subtitle && <h2 className={cn("text-base/7 font-semibold", isDark ? "text-primary" : "text-primary")}>{subtitle}</h2>}
                            <p className={cn("mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl", isDark ? "text-white" : "text-foreground", titleClassName)}>{title}</p>
                            <p className={cn("mt-6 text-lg/8", isDark ? "text-gray-300" : "text-muted-foreground", descriptionClassName)}>{description}</p>

                            {/* Features List */}
                            <dl className={cn("mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none", featuresClassName)}>
                                {features.map((feature) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className={cn("inline font-semibold", isDark ? "text-white" : "text-foreground")}>
                                                <IconComponent aria-hidden="true" className={cn("absolute top-1 left-1 size-5", isDark ? "text-primary" : "text-primary")} />
                                                {feature.name}
                                            </dt>{" "}
                                            <dd className={cn("inline", isDark ? "text-gray-400" : "text-muted-foreground")}>{feature.description}</dd>
                                        </div>
                                    );
                                })}
                            </dl>
                        </div>
                    </div>

                    {/* Image */}
                    {layout !== "no-image" && image && (
                        <div className={cn(layout === "image-left" ? "lg:order-1" : "", "flex items-center")}>
                            <img
                                alt={image.alt}
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                className={cn("w-full max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem]", isDark ? "ring-white/10" : "ring-gray-200", layout === "image-left" ? "md:-mr-4 lg:-mr-0" : "md:-ml-4 lg:-ml-0", imageClassName)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}