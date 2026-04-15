import { ArrowRight } from "lucide-react";

const CTAFinal = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-3xl sm:text-4xl font-bold mb-4">
          ¿Listo para transformar tu práctica profesional?
        </p>
        <p className="text-white/60 mb-10">
          Cupos limitados · Inicio: Abril 2026
        </p>
        <a
          href="https://wa.me/56900000000?text=Hola%2C%20quiero%20reservar%20mi%20cupo%20en%20el%20taller%20de%20IA%20para%20Arquitectos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-10 py-4 rounded text-sm hover:opacity-90 transition-opacity"
        >
          Reservar mi cupo ahora
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default CTAFinal;
