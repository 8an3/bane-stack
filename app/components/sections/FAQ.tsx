import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export function FAQCenteredAccordion() {
  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes basic features for up to 5 users. You get access to our core functionality but with limited advanced options and support."
    },
    {
      question: "How can I upgrade my account?",
      answer: "You can upgrade at any time from your account settings. We accept all major credit cards and offer both monthly and annual billing options."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "No, you can cancel your subscription at any time. We don't believe in locking you into long-term contracts."
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is based on the number of active users and the features you need. You only pay for what you use, and we offer discounts for annual billing."
    }
  ];

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-foreground text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold leading-7 text-foreground py-6">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </dl>
        </div>
      </div>
    </div>
  );
}


