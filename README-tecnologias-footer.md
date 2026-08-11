# Footer de contacto — Tecnologías utilizadas

Componente de footer desarrollado para la sección de Contacto del sitio,
con enlaces del equipo (GitHub y correo) e interacciones en JavaScript.

## Stack utilizado

- **HTML5**: estructura semántica (`<footer>`, `<nav>`, listas, atributos
  ARIA para accesibilidad).
- **CSS3**:
  - Variables CSS (custom properties) para manejar el tema claro/oscuro
    desde un solo lugar.
  - CSS Grid para el layout de columnas del footer.
  - Flexbox para alinear enlaces e íconos.
  - Media queries para diseño responsive.
  - Transiciones CSS y soporte para `prefers-reduced-motion`.
- **JavaScript (Vanilla, sin frameworks)**:
  - `IntersectionObserver` — animación de aparición al hacer scroll.
  - `Clipboard API` (`navigator.clipboard`) — copiar correos con un clic.
  - `localStorage` — recordar la preferencia de tema entre visitas.
  - `matchMedia` — detectar si el sistema usa tema claro u oscuro.
  - `requestAnimationFrame` — botón "volver arriba" eficiente en scroll.
  - Scroll suave (`scrollIntoView`) para las anclas internas.
- **Git / GitHub**: control de versiones, trabajo por branches individuales.

No se utilizaron frameworks ni librerías externas, todo el componente es HTML, CSS y JavaScript
puro, para mantenerlo liviano y sin dependencias al integrarlo con el resto del sitio del equipo.
