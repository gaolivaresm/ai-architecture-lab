import { ArrowRight, Monitor, CreditCard, Headphones, Award } from "lucide-react";

const rows = [
  { icon: Monitor, label: "Modalidad", value: "5 sesiones Zoom (1h 15min) + Proyecto aplicado" },
  { icon: CreditCard, label: "Inversión", value: "12 UF (IVA incluido) · Factura exenta disponible", highlight: true },
  { icon: CreditCard, label: "Pago", value: "3 cuotas precio contado con tarjeta de crédito" },
  { icon: Headphones, label: "Soporte", value: "Acceso vitalicio a código, grabaciones y actualizaciones" },
  { icon: Award, label: "Certificación", value: "Constancia con sello TAETT" },
];

const Investment = () => {
  return (
    <section id="inversion" className="py-24 px-6 bg-secondary scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Condiciones
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
          Inversión
        </p>

        <div className="bg-background border border-border rounded-lg overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-6 py-5 ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <row.icon size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{row.label}</p>
                <p className={`text-sm ${row.highlight ? "font-bold text-foreground" : "text-foreground"}`}>
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          *Cupos limitados para garantizar acompañamiento personalizado
        </p>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/56900000000?text=Hola%2C%20quiero%20reservar%20mi%20cupo%20en%20el%20taller%20de%20IA%20para%20Arquitectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded text-sm hover:opacity-90 transition-opacity"
          >
            Reservar mi cupo
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Investment;
