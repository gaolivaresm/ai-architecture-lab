import { Brain, Zap, Shield } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "De prompts a producción",
    description: "No es teoría abstracta. Metodologías aplicadas en proyectos reales de infraestructura crítica.",
  },
  {
    icon: Zap,
    title: "Automatiza tu oficina",
    description: "Micro-servicios, RAG, BIM-Automation. Reduce hasta 70% el tiempo en tareas repetitivas.",
  },
  {
    icon: Shield,
    title: "Decisiones seguras",
    description: "Rigor técnico + análisis de datos. Respaldado por +20 años de experiencia internacional.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Propuesta de valor
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          ¿Por qué este taller?
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-lg p-8 hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <card.icon size={24} className="text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
