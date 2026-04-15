
# Landing Page: "Aprendizaje Máquina para Arquitectos" — TAETT

## Resumen
Landing page one-page scroll completa para el curso de Machine Learning para Arquitectos de TAETT, con diseño minimalista, responsive mobile-first, y todas las secciones especificadas.

## Diseño
- Paleta: gris oscuro (#333333), gris medio (#5A5A5A), fondo blanco/gris claro (#F5F5F5), verde técnico (#2E7D32) para CTAs
- Tipografía sans-serif limpia (Helvetica Neue/Arial), monospace para fragmentos técnicos
- Mucho espacio en blanco, líneas divisorias sutiles, iconografía lineal
- Navegación sticky con scroll suave a secciones ancla

## Secciones a implementar
1. **Hero** — Headline, subheadline, badge "Edición Abril 2026", dos CTAs, fondo con overlay oscuro y patrón visual técnico (CSS)
2. **Propuesta de Valor** — 3 cards en columnas con iconos y descripciones
3. **Objetivos de Aprendizaje** — Lista con iconos técnicos (Data Mining, Micro-servicios, BIM-Automation, Gestión Documental, Visualización)
4. **Programa del Curso** — 5 módulos en acordeón expandible con detalles de cada sesión
5. **Inversión** — Tabla clara con modalidad, precio (12 UF), pagos, soporte, certificación + CTA
6. **Quiénes Somos** — Perfil de Guillermo Olivares con credenciales, especialización y cita destacada
7. **FAQ** — Acordeón con 5 preguntas frecuentes
8. **CTA Final + Footer** — Cierre con botón grande, logo TAETT, enlaces, copyright

## Funcionalidad
- Scroll suave entre secciones con navegación ancla sticky
- Acordeones interactivos para programa y FAQ (usando componentes shadcn)
- Botones CTA enlazando a WhatsApp (configurable)
- SEO: meta tags optimizados para "Curso IA para Arquitectos"
- Responsive mobile-first con botones táctiles grandes
- Contraste WCAG AA

## Archivos
- `src/pages/Index.tsx` — Componente principal con todas las secciones
- Componentes separados por sección para mantener el código limpio
- `index.html` — Meta tags SEO actualizados
- `src/index.css` — Variables de color actualizadas a la paleta TAETT
