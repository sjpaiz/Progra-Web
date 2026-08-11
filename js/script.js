/* ============================================================
   HU-1: Comportamiento del encabezado   (Guillermo)
   El menú en celular lo maneja Bootstrap; aquí solo va el
   efecto de la barra al bajar y el cierre del menú al navegar.
   ============================================================ */

const navPrincipal = document.getElementById("navPrincipal");

if (navPrincipal) {
    const marcarScroll = () => {
        navPrincipal.classList.toggle("esta-abajo", window.scrollY > 40);
    };

    marcarScroll();
    window.addEventListener("scroll", marcarScroll, { passive: true });
}

// Cerrar el menú desplegable al tocar un enlace en celular
const menuPrincipal = document.getElementById("menuPrincipal");

if (menuPrincipal) {
    menuPrincipal.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            if (menuPrincipal.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menuPrincipal).hide();
            }
        });
    });
}

/* ===== Fin HU-1. Compañeros: agreguen su JS abajo. ===== */
