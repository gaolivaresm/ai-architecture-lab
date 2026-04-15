import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-wider uppercase mb-8 text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Edición Abril 2026 · Mentoría Personalizada
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Aprendizaje Máquina
          <br />
          <span className="text-white/60">para Arquitectos</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          Programa de Mentoría Técnica: Transferencia de metodologías avanzadas de IA y automatización para el rigor de la práctica profesional.
        </p>

        <p className="text-sm font-mono text-white/40 mb-10 uppercase tracking-widest">
          Python · RAG · BIM-Automation · Data Science
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inversion"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded text-sm hover:opacity-90 transition-opacity"
          >
            Postular al programa
            <ArrowRight size={16} />
          </a>
          <a
            href="#programa"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-8 py-4 rounded text-sm hover:border-white/40 hover:text-white transition-colors"
          >
            Explorar currículum técnico
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
