import { Mail, Globe, Linkedin } from "lucide-react";
import logoTaett from "@/assets/logo-taett.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logoTaett} alt="TAETT" className="w-12 h-12 rounded-full" />
            <div className="text-center md:text-left">
              <p className="text-primary-foreground font-bold text-lg tracking-tight">TAETT</p>
              <p className="text-white/40 text-xs mt-0.5">
                Taller de Arquitectura, Estructuras y Tecnologías
              </p>
              <p className="text-white/30 text-xs mt-0.5 italic">
                Rigor técnico + Análisis de datos = Decisiones seguras
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.taett.cl" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors">
              <Globe size={18} />
            </a>
            <a href="mailto:hola@taett.cl" className="text-white/40 hover:text-white/70 transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/guillermoolivaresarq/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 TAETT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
