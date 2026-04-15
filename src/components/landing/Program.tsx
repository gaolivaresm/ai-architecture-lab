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
      "Google Colab + Python: entorno de trabajo",
      "Datasets de proyectos reales",
    ],
  },
  {
    id: "s2",
    label: "S2",
    title: "Integración de Datos y APIs",
    topics: [
      "APIs urbanas, climáticas y normativas",
      "Diagnóstico territorial con datos abiertos",
      "Conexión de fuentes de datos en tiempo real",
    ],
  },
  {
    id: "s3",
    label: "S3",
    title: "Inteligencia Documental con RAG",
    topics: [
      "Retrieval-Augmented Generation (RAG)",
      "Automatización de Especificaciones Técnicas",
      "Memoria de Oficina: base de conocimiento interna",
    ],
  },
  {
    id: "s4",
    label: "S4",
    title: "IA Generativa y Post-Producción",
    topics: [
      "Diffusion Models + ControlNet",
      "Renders hiperrealistas con control geométrico",
      "Flujo de trabajo: boceto → render final",
    ],
  },
  {
    id: "s5",
    label: "S5",
    title: "Ecosistema BIM + Cloud Automation",
    topics: [
      "Dynamo + Python en Revit",
      "AppScript + Google Drive para automatización",
      "Proyecto Final Autoguiado",
    ],
  },
];

const Program = () => {
  return (
    <section id="programa" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Contenido programático
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          5 Sesiones
        </p>
        <p className="text-sm text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Cada sesión de 1h 15min combina teoría aplicada, código en vivo y ejercicios prácticos
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {modules.map((m) => (
            <AccordionItem
              key={m.id}
              value={m.id}
              className="border border-border rounded-lg px-6 data-[state=open]:border-accent/40"
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
