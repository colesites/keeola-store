import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export default function FAQ() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif text-center mb-10">FAQ</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-black">
            <AccordionTrigger className="text-left text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
