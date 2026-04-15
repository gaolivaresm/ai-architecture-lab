import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "s1",
    label: "S1",
    title: "Arquitectura de IA + Análisis Exploratorio (EDA)",
    topics: [
      "Redes neuronales en contexto arquitectónico",
      "Google Colab + Python: configuración de entorno profesional",
      "Datasets de proyectos reales: limpieza y preparación de datos",
      "Entregable: Notebook base de análisis territorial"
    ],
  },
  {
    id: "s2",
    label: "S2",
    title: "Integración de Datos y APIs Urbanas",
    topics: [
      "Conexión con APIs climáticas y normativas en tiempo real",
      "Diagnóstico automatizado con datos abiertos",
      "Script listo: Extracción masiva de datos municipales",
    ],
  },
  {
    id: "s3",
    label: "S3",
    title: "Inteligencia Documental con RAG",
    topics: [
      "Retrieval-Augmented Generation (RAG) para oficinas",
      "Automatización de Especificaciones Técnicas (EETT)",
      "Sistema de consulta inteligente para la Memoria de Oficina",
      "Entregable: Prototipo funcional de RAG local",
    ],
  },
  {
    id: "s4",
    label: "S4",
    title: "IA Generativa y Control Geométrico",
    topics: [
      "Diffusion Models + ControlNet: Rigor en la visualización",
      "Flujo de trabajo: de boceto técnico a render de alta fidelidad",
      "Workflow optimizado para post-producción arquitectónica",
    ],
  },
  {
    id: "s5",
    label: "S5",
    title: "BIM-Automation + Cloud Ecosystem",
    topics: [
      "Integración Dynamo + Python para Revit",
      "Automatización de tareas repetitivas en la nube",
      "Presentación de Proyecto Final Personalizado",
      "Script listo: Automatización de reportes de superficies",
    ],
  },
];

const Program = () => {
  return (
    <section id="programa" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Currículum Técnico
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          5 Sesiones de Alto Impacto
        </p>
        <p className="text-sm text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Cada sesión combina transferencia metodológica, código en vivo y la entrega de activos listos para producción.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {modules.map((m) => (
            <AccordionItem
              key={m.id}
              value={m.id}
              className="border border-border rounded-lg px-6 data-[state=open]:border-accent/40 bg-background"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-xs font-mono bg-secondary text-muted-foreground px-2.5 py-1 rounded">
                    {m.label}
                  </span>
                  <span className="font-semibold text-foreground">{m.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="space-y-2 ml-14">
                  {m.topics.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Program;
