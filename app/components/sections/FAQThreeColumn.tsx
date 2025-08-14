import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { ChevronDown } from "lucide-react";


export function FAQThreeColumn() {
  const faqColumns = [
    [
      {
        question: "What's your cancellation policy?",
        answer: "You can cancel anytime with no penalties. We'll prorate your refund for unused time."
      },
      {
        question: "Do you offer phone support?",
        answer: "Phone support is available for enterprise plans. All other plans include email and chat support."
      }
    ],
    [
      {
        question: "How often do you release updates?",
        answer: "We release minor updates weekly and major feature updates quarterly."
      },
      {
        question: "Can I export my data?",
        answer: "Yes, you can export all your data at any time in multiple formats."
      }
    ],
    [
      {
        question: "Do you offer on-premise installation?",
        answer: "Yes, we offer on-premise solutions for enterprise customers with specific requirements."
      },
      {
        question: "How do you handle data backups?",
        answer: "We perform daily encrypted backups with 30-day retention for all customer data."
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
            Everything you need to know about our product and service.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-10">
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