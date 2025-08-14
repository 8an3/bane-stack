import { useState, } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown, ChevronRight, Star, Truck, Gift, Shield, } from "lucide-react";
import { Button, } from "~/components/ui/button";
import { Input, } from "~/components/ui/input";
import { Badge, } from "~/components/ui/badge";

// Navigation data with image grids
const navigationData = {
  categories: [
    {
      name: "Women",
      href: "/women",
      featured: [
        {
          name: "New Arrivals",
          href: "/women/new",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=200&fit=crop"
        },
        {
          name: "Best Sellers",
          href: "/women/bestsellers",
          image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=200&fit=crop"
        }
      ],
      sections: [
        {
          name: "Clothing",
          items: [
            { name: "Dresses", href: "/women/dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150&h=150&fit=crop" },
            { name: "Tops", href: "/women/tops", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop" },
            { name: "Sweaters", href: "/women/sweaters", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=150&h=150&fit=crop" },
            { name: "Jeans", href: "/women/jeans", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=150&h=150&fit=crop" }
          ]
        },
        {
          name: "Accessories",
          items: [
            { name: "Bags", href: "/women/bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop" },
            { name: "Jewelry", href: "/women/jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop" },
            { name: "Watches", href: "/women/watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=150&h=150&fit=crop" },
            { name: "Shoes", href: "/women/shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop" }
          ]
        }
      ]
    },
    {
      name: "Men",
      href: "/men",
      featured: [
        {
          name: "New Arrivals",
          href: "/men/new",
          image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&h=200&fit=crop"
        },
        {
          name: "Best Sellers",
          href: "/men/bestsellers",
          image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=300&h=200&fit=crop"
        }
      ],
      sections: [
        {
          name: "Clothing",
          items: [
            { name: "T-Shirts", href: "/men/tshirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop" },
            { name: "Hoodies", href: "/men/hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=150&h=150&fit=crop" },
            { name: "Jeans", href: "/men/jeans", image: "https://images.unsplash.com/photo-1542272454315-7ad9f9d1e65a?w=150&h=150&fit=crop" },
            { name: "Jackets", href: "/men/jackets", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=150&fit=crop" }
          ]
        },
        {
          name: "Accessories",
          items: [
            { name: "Backpacks", href: "/men/backpacks", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop" },
            { name: "Wallets", href: "/men/wallets", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=150&h=150&fit=crop" },
            { name: "Watches", href: "/men/watches", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=150&h=150&fit=crop" },
            { name: "Sneakers", href: "/men/sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop" }
          ]
        }
      ]
    },
    {
      name: "Kids",
      href: "/kids",
      featured: [
        {
          name: "Back to School",
          href: "/kids/back-to-school",
          image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop"
        },
        {
          name: "New Collection",
          href: "/kids/new",
          image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=300&h=200&fit=crop"
        }
      ],
      sections: [
        {
          name: "Boys",
          items: [
            { name: "T-Shirts", href: "/kids/boys/tshirts", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop" },
            { name: "Hoodies", href: "/kids/boys/hoodies", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=150&h=150&fit=crop" },
            { name: "Jeans", href: "/kids/boys/jeans", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=150&h=150&fit=crop" },
            { name: "Sneakers", href: "/kids/boys/sneakers", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=150&h=150&fit=crop" }
          ]
        },
        {
          name: "Girls",
          items: [
            { name: "Dresses", href: "/kids/girls/dresses", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop" },
            { name: "Tops", href: "/kids/girls/tops", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=150&h=150&fit=crop" },
            { name: "Leggings", href: "/kids/girls/leggings", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=150&h=150&fit=crop" },
            { name: "Accessories", href: "/kids/girls/accessories", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop" }
          ]
        }
      ]
    }
  ],
  quickLinks: [
    { name: "Sale", href: "/sale", badge: "Up to 50% off" },
    { name: "New Arrivals", href: "/new" },
    { name: "Gift Cards", href: "/gift-cards" }
  ]
};

export default function StoreNavigationWithImageGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          Free shipping on orders over $75 • 30-day returns
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">STORE</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationData.categories.map((category) => (
                <div
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 py-2 text-sm font-medium">
                    <span>{category.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Mega Menu with Image Grid */}
                  {hoveredCategory === category.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-6xl mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                          {/* Featured Section */}
                          <div className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured</h3>
                            <div className="space-y-4">
                              {category.featured.map((item) => (
                                <div key={item.name} className="group cursor-pointer">
                                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-2">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                    <div className="absolute bottom-3 left-3 text-white">
                                      <h4 className="font-semibold text-sm">{item.name}</h4>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Category Sections with Image Grid */}
                          <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    {section.name}
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4">
                                    {section.items.map((item) => (
                                      <div key={item.name} className="group cursor-pointer">
                                        <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                                          <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                          />
                                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                        </div>
                                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                                          {item.name}
                                        </h4>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              Explore all {category.name.toLowerCase()} products
                            </div>
                            <Button variant="outline" size="sm">
                              Shop All {category.name}
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Links */}
              {navigationData.quickLinks.map((link) => (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <Badge variant="destructive" className="text-xs">
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-4 w-4 text-xs flex items-center justify-center">
                  3
                </Badge>
              </button>
              <button className="text-gray-700 hover:text-gray-900 relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-4 w-4 text-xs flex items-center justify-center">
                  2
                </Badge>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-1">
                {navigationData.categories.map((category) => (
                  <div key={category.name}>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === category.name ? null : category.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span className="font-medium">{category.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        mobileSubmenu === category.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {mobileSubmenu === category.name && (
                      <div className="mt-2 ml-4 space-y-4">
                        {/* Featured Items */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Featured</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group">
                                <div className="relative aspect-[3/2] overflow-hidden rounded-md mb-1">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <p className="text-xs font-medium text-gray-900">{item.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Category Sections */}
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.name}</h4>
                            <div className="grid grid-cols-4 gap-2">
                              {section.items.map((item) => (
                                <div key={item.name} className="group text-center">
                                  <div className="relative aspect-square overflow-hidden rounded-md mb-1">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <p className="text-xs text-gray-700">{item.name}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Quick Links */}
                <div className="pt-4 border-t border-gray-200">
                  {navigationData.quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span className="font-medium">{link.name}</span>
                      {link.badge && (
                        <Badge variant="destructive" className="text-xs">
                          {link.badge}
                        </Badge>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area - Demo */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Store Navigation with Image Grid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hover over the category navigation items to see the mega menu with image grids in action.
            </p>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Navigation</h3>
              <p className="text-gray-600">Browse categories with beautiful image grids that showcase your products</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
              <p className="text-gray-600">Fully responsive design that works perfectly on all devices</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Built with shadcn/ui components and ready for Remix integration</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}