# Bane - Remix-Run Stack

>Start with a project that already includes all the resources you need to build complete features—hero sections, sidebars, pre-configured tables, and more. This eliminates the time-consuming cycle of searching the internet for inspiration, hunting down components, reading documentation, or looking for code examples.

>The core stack intentionally remains the default Remix with Vite setup. I've found that the real time sink isn't in the initial framework configuration—it's in the endless cycle of designing layouts, testing them with users, redesigning based on feedback, and iterating until you get it right.
>By keeping the core stack simple and focusing on providing ready-to-use components and layouts, you can cut down time where you have the most impact doing so.

>[8an3/bane Monorepo](https://github.com/8an3/bane-stack-monorepo.git)


## TOC
- I.  [Getting Started](#getting-started)
- II.  [Tech](#tech)
- III.   [Included Components](#included-components)
  - [Blocks Route](#blocks-route)
  - [portal Route](#portal-route)
  - [__auth Route](#__auth-route)
  - [__client Route](#__client-route)
  - [Custom UI Components](#custom-ui-components)
  - [Utils](#utils)
  - [Auth](#auth)
- IV.  [Dev](#dev)
- V.  [Acknowledgments](#acknowledgments)

---

## Getting Started

## Tech
- @remix-run
- @radix-ui / ShadCN 
- @remix-run/v1-route-convention
- superuser-task-runner
- @tanstack/react-table
- react-day-picker
- remix-auth
- @faker-js/faker
- remix-auth-totp
- sonner
- tailwindcss
- vite
- @tabler/icons-react
- lucide-react
- @prisma/client
- input-otp
- react-day-picker
- recharts
- monaco editor

## Included Components

>Using this as I was coding, I got really annoyed that I either had to go to github or open the project locally to get the code after looking at it. So I started to add an editor for each component with its corresponding code. I made the editor so you can make edits before copying without having to leave the page. I will come back to finish this off and add all the sections. I might even do it for all the useable code you might want, have a page named editor in blocks, with a drop down, selecting and item, it just inserts the code for any components that either doesn't display well if at all... but anyways, just a thought but you can now stand it up with a personal deployment and treat it like any other components library and visit it when you need it. You can do that for free on vercel. or I might say fuck it... add a section to the web ui of devstack to include this... sigh, I'll probably end up doing that since devstack gets so much use... god damnit, trying to NOT increase my workload, lol

## Blocks Route

>Examples and sidebar are there for you to view, along with their children examples. Each section will either have 1 or many code examples to view. The following items code is in components/blocks

- Sidebars 
  - Calendars
  - Charts
  - Dashboards
- Examples 
  - Authentication
    - OTP Login and Sign Up pages
  - Cards
  - Dashboard
  - Ecommerce ( some examples have more than one )
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
  - Forms
  - Mail
  - Music
  - Playground
  - Sections
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
  - Tasks
- Tickets

---

## portal Route
- Dashbord
- Default template route

---
## __auth Route
- login
- logout

---
## __client Route
- client
  - login ( using otp )
  - logout
  - dashboard

---

## Custom UI Components
- announcement
- app-sidebar
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
- nav-main
- nav-projects
- nav-user
- NavButton
- NavButtonStyled
- options.ts
- page-header
- PaginationButton
- smallTable
- team-switcher
- theme-selector
- tooltipButton

 
---

## Auth

>user: testuser@example.com
>password: password123

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
 

## Dev
- Sections will continue to be added overtime, as of right I do plan on adding more to ecommerce and sections
- When this happens instead of starting fresh, just download the new pages and paste them into your project
- If a new library is needed for that section, I'll leave a note at the top of the file under imports

## Acknowledgments
>To shadcn and tailwind
