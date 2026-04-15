import guillermoPhoto from "@/assets/guillermo-olivares.jpg";

const credentials = [
  "Socio Director | TAETT Arquitectura & Estructuras",
  "Consultor Estructural MINVU 1ª Categoría",
  "MSc Computational Simulation (en curso)",
  "Magíster en Estructuras, UPC Barcelona",
  "Diplomado en Inteligencia Artificial, UC",
  "Curso Avanzado, Laboratorio Nacional de Computación de Alto Rendimiento (NLHPC)",
  "+20 años de experiencia en 7 países",
];

const specializations = [
  "Machine Learning para diagnóstico estructural",
  "Automatización BIM con Python/Dynamo",
  "Sistemas RAG para gestión documental",
  "IA generativa aplicada a visualización arquitectónica",
];

const About = () => {
  return (
    <section id="instructor" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Tu instructor
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          Guillermo Olivares Martínez
        </p>

        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="mx-auto md:mx-0 w-60 h-72 rounded-lg border border-border overflow-hidden">
            <img src={guillermoPhoto} alt="Guillermo Olivares Martínez" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Credenciales</h3>
            <ul className="space-y-2 mb-8">
              {credentials.map((c) => (
                <li key={c} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Especialización técnica</h3>
            <ul className="space-y-2 mb-8">
              {specializations.map((s) => (
                <li key={s} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <blockquote className="border-l-2 border-accent pl-5 italic text-sm text-muted-foreground leading-relaxed">
              "No enseñamos teoría abstracta: transferimos metodologías probadas en proyectos reales. Cada módulo está diseñado para que apliques inmediatamente en tu práctica profesional."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
