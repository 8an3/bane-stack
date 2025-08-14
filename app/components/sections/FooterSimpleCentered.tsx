import { Button } from "~/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "~/components/ui/input";




export function FooterSimpleCentered() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Company
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Making the world a better place through technology.
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-muted-foreground">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-muted-foreground">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-muted-foreground">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-muted-foreground">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}