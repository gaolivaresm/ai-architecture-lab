import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "Se parte desde conceptos básicos. El taller es ideal para arquitectos con experiencia en BIM que quieran incorporar herramientas de IA a su flujo de trabajo.",
  },
  {
    q: "¿Qué software necesito?",
    a: "Acceso a Google Colab (gratuito), Revit (versión educativa válida), y conexión a internet estable.",
  },
  {
    q: "¿Hay grabaciones?",
    a: "Sí, acceso vitalicio a todas las sesiones grabadas y material actualizado.",
  },
  {
    q: "¿Emiten certificado?",
    a: "Constancia de participación con sello institucional TAETT.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí, 3 cuotas precio contado con tarjeta de crédito.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-secondary scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Dudas
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          Preguntas Frecuentes
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
