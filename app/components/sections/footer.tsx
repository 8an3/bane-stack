import { Button } from "~/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "~/components/ui/input";

export function FourColumnMissionFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold">Company</h3>
            <p className="mt-4 text-gray-300">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              {['Marketing', 'Analytics', 'Commerce', 'Insights'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {['Privacy', 'Terms', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 flex justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function FourColumnSimpleFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Products</h3>
            <ul className="mt-4 space-y-2">
              {['Features', 'Pricing', 'Templates', 'Integrations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              {['Help Center', 'Guides', 'Webinars', 'API Docs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              {['Privacy', 'Terms', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FourColumnNewsletterFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* 4-Column Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              About
            </h3>
            <ul className="mt-4 space-y-2">
              {['Company', 'Team', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {['Help Center', 'Safety', 'Community', 'Feedback'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {['Privacy', 'Terms', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Social
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
            Subscribe to our newsletter
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="mt-4 sm:flex sm:max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:max-w-xs"
            />
            <Button type="submit" className="mt-3 sm:ml-3 sm:mt-0">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SimpleCenteredFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Company
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Making the world a better place through technology.
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}