import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export function CenteredAccordionFAQ() {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold leading-7 text-gray-900 py-6">
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


export function SideBySideFAQ() {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
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
                    <AccordionTrigger className="text-lg font-semibold leading-7 text-gray-900 text-left">
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


export function ThreeColumnFAQ() {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
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
                    <AccordionTrigger className="text-lg font-semibold leading-7 text-gray-900 text-left">
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