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

export function ContactSection({ 
  title = "Get in touch", 
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.", 
  handleSubmit
 }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [agreedToTerms, setAgreedToTerms] = useState(false);
			const fetcher = useFetcher()
const defaultHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      company: formData.get("company"),
      email: formData.get("email"),
      country: selectedCountry,
      phone: formData.get("phone"),
      message: formData.get("message"),
      agreedToTerms: agreedToTerms,
      intent: 'contactUsForm',
    }
    
    if (handleSubmit) {
      handleSubmit(data)
    } else {
      fetcher.submit(data, { method: "post" })
    }
    
    setIsSubmitting(false)
  }
	return (
		<section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
			<div className="mx-auto max-w-2xl">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
				</div>

				{/* Form */}
				<fetcher.Form onSubmit={defaultHandleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{/* First Name */}
						<div className="space-y-2">
							<Label htmlFor="firstName">First name</Label>
							<Input id="firstName" name="firstName" type="text" required className="w-full" />
						</div>

						{/* Last Name */}
						<div className="space-y-2">
							<Label htmlFor="lastName">Last name</Label>
							<Input id="lastName" name="lastName" type="text" required className="w-full" />
						</div>
					</div>

					{/* Company */}
					<div className="space-y-2">
						<Label htmlFor="company">Company</Label>
						<Input id="company" name="company" type="text" className="w-full" />
					</div>

					{/* Email */}
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" type="email" required className="w-full" />
					</div>

					{/* Phone Number */}
					<div className="space-y-2">
						<Label htmlFor="phone">Phone number</Label>
						<div className="flex space-x-2">
							<Select value={selectedCountry} onValueChange={setSelectedCountry}>
								<SelectTrigger className="w-32">
									<SelectValue placeholder="Country" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="US">🇺🇸 US</SelectItem>
									<SelectItem value="CA">🇨🇦 CA</SelectItem>
									<SelectItem value="UK">🇬🇧 UK</SelectItem>
									<SelectItem value="AU">🇦🇺 AU</SelectItem>
								</SelectContent>
							</Select>
							<Input id="phone" name="phone" type="tel" placeholder="123-456-7890" className="flex-1" />
						</div>
					</div>

					{/* Message */}
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea id="message" name="message" rows={4} required className="w-full" />
					</div>

					{/* Privacy Agreement */}
					<div className="flex items-center space-x-2">
						<Checkbox id="terms" checked={agreedToTerms} onCheckedChange={setAgreedToTerms} />
						<Label htmlFor="terms" className="text-sm text-muted-foreground">
							I agree to the{" "}
							<a href="#" className="text-primary hover:underline">
								privacy policy
							</a>
						</Label>
					</div>

					{/* Submit Button */}
					<Button type="submit" disabled={isSubmitting || !agreedToTerms} className="w-full">
						{isSubmitting ? (
							<>
								<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
								Sending...
							</>
						) : (
							<>
								<Send className="w-4 h-4 mr-2" />
								Let's talk
							</>
						)}
					</Button>
				</fetcher.Form>
			</div>
		</section>
	);
}



export function FourColumnContactSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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