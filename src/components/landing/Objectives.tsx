import { BarChart3, Bot, Building2, FileText, Palette } from "lucide-react";

const objectives = [
  {
    icon: BarChart3,
    title: "Data Mining",
    description: "Extraer y procesar datos públicos para arquitectura y urbanismo",
  },
  {
    icon: Bot,
    title: "Micro-servicios",
    description: "Crear utilitarios locales y en la nube para automatizar flujos",
  },
  {
    icon: Building2,
    title: "BIM-Automation",
    description: "Automatizar procesos en Revit con Python y Dynamo",
  },
  {
    icon: FileText,
    title: "Gestión Documental Inteligente",
    description: "Generar presupuestos y EETT con sistemas RAG",
  },
  {
    icon: Palette,
    title: "Visualización Avanzada",
    description: "Elevar bocetos a renders finales con IA generativa",
  },
];

const Objectives = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Objetivos de aprendizaje
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          Al finalizar, podrás:
        </p>

        <div className="space-y-6">
          {objectives.map((obj, i) => (
            <div
              key={obj.title}
              className="flex items-start gap-5 bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <obj.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-bold text-foreground">{obj.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
