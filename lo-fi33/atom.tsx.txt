import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/components/ui/utils"

const atomVariants = cva(
  "inline-flex rounded-lg border-border ",
  {
    variants: {
      shade: {
        "50": "bg-background",
        "100": "bg-muted",
        "200": "bg-muted/80",
        "300": "bg-muted/60",
        "400": "bg-muted/40",
        "500": "bg-primary/20",
        "600": "bg-primary/40",
        "700": "bg-primary/60",
        "800": "bg-primary/80",
        "900": "bg-primary",
      },
    },
    defaultVariants: {
      shade: "50",
    },
  }
)

function Atom({
  className,
  shade,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof atomVariants>) {
  return (
    <div
      data-slot="button"
      className={cn(atomVariants({ shade, className }))}
      {...props}
    />
  )
}

export { Atom }

