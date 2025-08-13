// components/lo-fi.tsx
import { AccordionLoFi } from "~/components/lo-fi/accordion"
import { AlertLoFi } from "~/components/lo-fi/alert"
import { ButtonLoFi } from "~/components/lo-fi/button"
import { CardLoFi } from "~/components/lo-fi/card"
import { DropdownLoFi } from "~/components/lo-fi/dropdown"
import { InputLoFi } from "~/components/lo-fi/input"
import { TabsLoFi } from "~/components/lo-fi/tabs"
import { ToggleLoFi } from "~/components/lo-fi/toggle"
import {
  Component,
  ComponentContent,
  ComponentName,
} from "~/components/lo-fi/component"

export function LoFi() {
  return (
    <div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Component href="/docs/components/accordion">
        <ComponentContent>
          <AccordionLoFi />
        </ComponentContent>
        <ComponentName>Accordion</ComponentName>
      </Component>
      <Component href="/docs/components/alert">
        <ComponentContent>
          <AlertLoFi />
        </ComponentContent>
        <ComponentName>Alert</ComponentName>
      </Component>
      <Component href="/docs/components/button">
        <ComponentContent>
          <ButtonLoFi />
        </ComponentContent>
        <ComponentName>Button</ComponentName>
      </Component>
      <Component href="/docs/components/card">
        <ComponentContent>
          <CardLoFi />
        </ComponentContent>
        <ComponentName>Card</ComponentName>
      </Component>
      <Component href="/docs/components/dropdown">
        <ComponentContent>
          <DropdownLoFi />
        </ComponentContent>
        <ComponentName>Dropdown</ComponentName>
      </Component>
      <Component href="/docs/components/input">
        <ComponentContent>
          <InputLoFi />
        </ComponentContent>
        <ComponentName>Input</ComponentName>
      </Component>
      <Component href="/docs/components/tabs">
        <ComponentContent>
          <TabsLoFi />
        </ComponentContent>
        <ComponentName>Tabs</ComponentName>
      </Component>
      <Component href="/docs/components/toggle">
        <ComponentContent>
          <ToggleLoFi />
        </ComponentContent>
        <ComponentName>Toggle</ComponentName>
      </Component>
    </div>
  )
}


