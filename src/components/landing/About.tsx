import guillermoPhoto from "@/assets/guillermo-olivares.jpg";

const credentials = [
  "Consultor de Cálculo Estructural MINVU (1ª Categoría)",
  "Profesor Adjunto de Estructuras, PUCV",
  "Magíster en Estructuras, UPC Barcelona (España)",
  "MSc (c) Computational Simulation, IMA-PUCV",
  "Socio Director en TAETT | Especialista en SciML y Modelos de Riesgo",
  "Diplomado en Inteligencia Artificial, UC",
  "+20 años de trayectoria internacional en infraestructura crítica",
];

const specializations = [
  "Implementación de arquitecturas RAG para memorias de oficina",
  "Scientific Machine Learning (SciML) aplicado a física e ingeniería",
  "Desarrollo de modelos predictivos y optimización operativa",
  "Automatización avanzada BIM mediante Python y Dynamo",
];

const About = () => {
  return (
    <section id="instructor" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Experiencia y Rigor Técnico
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          Guillermo Olivares Martínez
        </p>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="mx-auto md:mx-0 w-full aspect-[4/5] rounded-lg border border-border overflow-hidden shadow-sm">
            <img src={guillermoPhoto} alt="Guillermo Olivares Martínez" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6 border-b pb-2">Trayectoria Académica y Profesional</h3>
            <ul className="space-y-3 mb-10">
              {credentials.map((c) => (
                <li key={c} className="text-sm text-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6 border-b pb-2">Enfoque en el Programa</h3>
            <ul className="space-y-3 mb-10">
              {specializations.map((s) => (
                <li key={s} className="text-sm text-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{s}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-accent pl-6 italic text-base text-muted-foreground leading-relaxed font-serif">
              "Mi objetivo no es solo enseñar código, sino transferir la capacidad de integrar la inteligencia computacional en el núcleo de la oficina de arquitectura, garantizando rigor técnico y eficiencia real."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
