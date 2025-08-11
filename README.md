# Bane Stack

>The goal? Starting off with a project, that already has the recources to complete everything you need to code. From hero sections, to sidebars, to pre configured tables... That way your not off wondering the internet looking for ideas, components or code, thus wasting a huge amount of time. 

>Intentionally leaving the core of the stack, the default remix stack w/ vite, unchanged as most of the time this is one of the items that seems to take the least amount of time because your only doing it once for the project, not 1-10 times per route

>Remix single project config stack, will soon create a mono repo with its base apps being remix-run, and will eventually be converted to react-router. Will not be devoting the 
      



i am using remix run, with tailwind and shadcn components and lucide icons can you recreate the Order Detail Pages found on this page here     https://tailwindcss.com/plus/ui-blocks/ecommerce/page-examples/order-detail-pages

i am using remix run, with tailwind and shadcn components and lucide icons can you recreate the Checkout Pages Pages found on this page here    https://tailwindcss.com/plus/ui-blocks/ecommerce/page-examples/checkout-pages

i am using remix run, with tailwind and shadcn components and lucide icons can you recreate the Product Pages found on this page here   https://tailwindcss.com/plus/ui-blocks/ecommerce/page-examples/product-pages

i am using remix run, with tailwind and shadcn components and lucide icon can you recreate the Storefront Pages found on this page here   https://tailwindcss.com/plus/ui-blocks/ecommerce/page-examples/storefront-pages




 i am using remix run, with tailwind and shadcn components  and lucide iconscan you recreate the Home Screen on this page   https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/home-screens

 i am using remix run, with tailwind and shadcn components and lucide icons can you recreate the Settings Screen on this page https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/settings-screens
## TOC

- I.  [Tech](#tech)
- II.  [Project Structure](#project-structure)
- III.   [Included Components](#included-components)
  - [Blocks](#blocks)
  - [Custom UI](#custom-ui)
  - [Ecommerce](#ecommerce)
  - [Examples](#examples)
  - [Sections](#sections)
  - [Utils](#utils)
  - [Auth](#auth)
IV.  [Getting Started](#getting-started)
V.  [Project Roadmap](#project-roadmap)
VI.  [Contributing](#contributing)
VII.  [License](#license)
VIII.  [Acknowledgments](#acknowledgments)

---

## Tech
- [x] Radix ui / shadCN components
- [x] v1 route convention
- [x] Superuser Task Runner
- [x] TanStack Tables
- [x] React Day Picker 
- [x] Remix Auth
- [x] Contains default route template
- [x] pre-made sidebar with header and footer dropdowns
- [x] Clean pre configured tanstack table, one for any type of data, and another designed for a ticketing system
 

 ## Project Structure
 >Components section will not be up to date
---
 Project Structure
└── bane/
    ├── .vscode
    ├── app
    │   ├── components
    |   │   ├── components
    │   |   └── shared.tsx
    │   ├── hooks
    │   |   └── use-mobile.ts
    │   ├── modules
    |   │   ├── auth
    |   |   │   ├── auth.ts
    │   |   |   └── auth_session.tsx        
    │   |   └── libs
    │   |   |   └── prisma.tsx        
    │   ├── routes
    |   |   ├── __auth
    |   |   │   ├── login.tsx
    │   |   |   └── logout.tsx    
    |   │   ├── portal
    |   │   ├── _index.tsx
    │   |   └── portal.tsx    
    │   ├── entry.client.tsx
    │   ├── entry.server.tsx
    │   ├── root.tsx
    │   └── tailwind.css
    ├── prisma
    |   ├── schema.prisma
    |   └── seed.ts
    ├── public
    │   ├── .DS_Store
    │   └── wrapper
    ├── .gitignore
    ├── components.json
    ├── package.json
    ├── .eslintrc.cjs
    ├── pnpm-lock.yaml
    ├── README.md
    ├── str.json
    ├── vite.config.ts
    ├── .env
    ├── postcss.config.js
    ├── tailwind.config.ts
    └── tsconfig.json
---

## Included Components

## Blocks

- sidebars
- calendars
- charts
- dashboards


---

## Custom UI
- announcement
- app
- ButtonStyled
- callout
- data
- debouncedInput
- filter
- fuzzyFilter
- fuzzySort
- incId
- loadErrorPage
- loading
- loadingPage
- nav
- nav
- nav
- NavButton
- NavButtonStyled
- options
- PaginationButton
- smallTable
- team
- tooltipButton
- table ( need to add )



---

## Examples
- Authentication
- Cards
- Dashboard
- Forms
- Mail
- Music
- Playground
- Tasks


---


## Sections
- BentoGrid
- Blog
- Changelog
- ConfigSection
- Contact
- Content
- CTA
- DisplayCode
- DisplayGithubInstall
- DisplayInstallCode
- DisplayInstallCodeArray
- FeatureSection
- HeroSection
- ImageSection
- JsonSection
- Newsletter
- NoteSection
- PageHeader
- PageNav
- Pricing
- SectionTitle
- Stats
- Team
- Testimonial
- TsxSection
- UsageSection
- UsageSectionNoDash
 
---

## Utils
   

   --- 

   ## Ecommerce

- CategoryFilters
- CategoryPage
- CategoryPreviews
- CheckoutForm
- CheckoutPage
- DetailsScreen
- FeedComponents
- GridLists
- HomeScreen
- IncentiveSection
- LandingPage
- OrderDetailsPage
- OrderHistory
- OrdersSummaries
- PageHeadings
- PricingPage
- ProductLists
- ProductOverviews
- ProductPages
- ProductQuickviews
- ProductsFeatures
- PromoSection
- ReviewsSection
- SectionHeadings
- SettingsScreen
- ShoppingCart
- ShoppingCartPage
- StackedLists
- StorefrontPages
- StoreNav

---

## Auth
- Remix auth login ( this one is being used as the current auth config )
- Remix auth logout ( ^ )
- Sessions and authenticator configuration
  - /components/auth/remix
  - /modules/auth
- OTP Login
- OTP Logout
- email & authenticating functionality
- with its own sessions within the otp folder
  - /components/auth/otp
  - /modules/otp
 
---
🙌 Acknowledgments
 
---