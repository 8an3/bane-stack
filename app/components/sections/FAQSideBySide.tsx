import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { ChevronDown } from "lucide-react";



export function FAQSideBySide() {
  const faqColumns = [
    [
      {
        question: "How do I get started?",
        answer: "Sign up for an account, complete your profile, and you'll be guided through the onboarding process."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and in some regions, bank transfers."
      },
      {
        question: "Can I try before I buy?",
        answer: "Absolutely! We offer a 14-day free trial with full access to all features."
      }
    ],
    [
      {
        question: "How secure is my data?",
        answer: "We use enterprise-grade security including encryption at rest and in transit, with regular security audits."
      },
      {
        question: "Do you offer discounts for nonprofits?",
        answer: "Yes, we offer 25% off for registered nonprofits. Contact our sales team for verification."
      },
      {
        question: "What's your uptime SLA?",
        answer: "We guarantee 99.9% uptime for all paid plans, with credits issued if we fall below that."
      }
    ]
  ];

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Can't find the answer you're looking for? Reach out to our 
            <a href="#" className="font-semibold text-primary hover:text-primary/80"> customer support</a> team.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <Accordion type="single" collapsible className="w-full space-y-8">
                {column.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${columnIndex}-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold leading-7 text-foreground text-left">
                      {faq.question}
                      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-7 text-muted-foreground mt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

