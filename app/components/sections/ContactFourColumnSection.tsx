import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Checkbox } from "~/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { useFetcher } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";



export function ContactFourColumnSection() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We'd love to hear from you. Get in touch with our team using any of the
            methods below.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <Card className="border-0 shadow-none">
              <CardHeader className="flex flex-row items-center gap-x-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our friendly team is here to help.</p>
                <Button variant="link" className="mt-4 p-0 text-base">
                  hello@example.com
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-0 shadow-none">
              <CardHeader className="flex flex-row items-center gap-x-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
                <Button variant="link" className="mt-4 p-0 text-base">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            {/* Office */}
            <Card className="border-0 shadow-none">
              <CardHeader className="flex flex-row items-center gap-x-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Come say hello at our office HQ.</p>
                <Button variant="link" className="mt-4 p-0 text-base">
                  123 Main St, Anytown, USA
                </Button>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-none">
              <CardHeader className="flex flex-row items-center gap-x-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our current opening hours.</p>
                <div className="mt-4 space-y-1 text-base">
                  <p>Mon - Fri: 9:00 - 17:00</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}