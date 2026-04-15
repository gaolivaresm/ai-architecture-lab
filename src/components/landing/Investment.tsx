import { ArrowRight, Monitor, CreditCard, Headphones, Award, Sparkles } from "lucide-react";

const rows = [
  { icon: Monitor, label: "Formato", value: "Programa de Mentoría: 5 sesiones síncronas + Consultoría de proyecto" },
  { icon: Sparkles, label: "Inscripción Temprana", value: "18 UF (Hasta agotar cupos preventa)", highlight: true },
  { icon: CreditCard, label: "Precio Lista", value: "22 UF (IVA incluido) · Factura disponible" },
  { icon: CreditCard, label: "Facilidades", value: "3 cuotas sin interés o pago vía Webpay" },
  { icon: Headphones, label: "Activos", value: "Acceso vitalicio a Scripts, Notebooks y Base de Conocimiento" },
  { icon: Award, label: "Acreditación", value: "Certificado de Especialización Técnica TAETT" },
];

const Investment = () => {
  return (
    <section id="inversion" className="py-24 px-6 bg-secondary scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">
          Inversión Profesional
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Cierre de Inscripciones
        </p>
        <p className="text-sm text-muted-foreground text-center mb-16 max-w-md mx-auto">
          Inversión estratégica diseñada para el ahorro de cientos de horas hombre en flujos de oficina.
        </p>

        <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-8 py-6 ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <row.icon size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-bold">{row.label}</p>
                <p className={`text-base ${row.highlight ? "font-bold text-accent" : "text-foreground"}`}>
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <a
            href="https://wa.me/56985336183?text=Hola%2C%20quiero%20postular%20al%20Programa%20de%20Mentoria%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-10 py-5 rounded text-sm hover:opacity-90 transition-all shadow-md"
          >
            Reservar cupo preventa (18 UF)
            <ArrowRight size={16} />
          </a>
          <p className="text-[11px] text-muted-foreground italic">
            *Grupos reducidos para garantizar la transferencia metodológica directa del instructor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Investment;
