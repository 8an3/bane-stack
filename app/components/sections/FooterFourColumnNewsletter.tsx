import { Button } from "~/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "~/components/ui/input";



export function FooterFourColumnNewsletter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* 4-Column Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Social
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-muted-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-muted-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-muted-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-muted-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 border-t border-border pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
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

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
