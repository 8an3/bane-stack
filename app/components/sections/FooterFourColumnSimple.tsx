
import { Button } from "~/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "~/components/ui/input";


export function FooterFourColumnSimple() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
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
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
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
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
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
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
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

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
