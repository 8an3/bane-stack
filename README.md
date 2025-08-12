# Bane - Remix-Run Stack

>The goal? Starting off with a project, that already has the recources to complete everything you need to code. From hero sections, to sidebars, to pre configured tables... That way your not off wondering the internet looking for ideas, components or code, thus wasting a huge amount of time. 

>Intentionally leaving the core of the stack, the default remix stack w/ vite, unchanged as most of the time this is one of the items that seems to take the least amount of time because your only doing it once for the project, not 1-10 times per route

>Remix single project config stack, will soon create a mono repo with its base apps being remix-run, and will eventually be converted to react-router. Will not be devoting the 


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
- [x] Radix ui / shadCN components
- [x] v1 route convention
- [x] Superuser Task Runner
- [x] TanStack Tables
- [x] React Day Picker 
- [x] Remix Auth

## Included Components

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
