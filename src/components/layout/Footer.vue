<template>
  <footer class="footer" role="contentinfo" aria-label="Pie de página">
    <div class="container footer__inner">
      <div class="footer__brand">
        <h3 class="footer__title">LimpioVital</h3>
        <p class="footer__tag">Proyecto Universitario - CEUTEC</p>
      </div>

      <nav class="footer__links" aria-label="Enlaces legales">
        <a href="#" class="footer__link">Aviso de privacidad</a>
        <a href="#" class="footer__link">Términos</a>
        <a href="#" class="footer__link">Contacto</a>
      </nav>

      <div class="footer__meta">
        <div class="footer__social" aria-hidden="false" aria-label="Redes sociales">
          <!-- Small accessible SVG icons -->
          <a href="#" class="social" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.92c-.66.3-1.36.5-2.1.6.76-.46 1.35-1.2 1.63-2.08-.71.42-1.5.72-2.34.89A4.05 4.05 0 0 0 12 9.9c0 .32.03.64.1.94-3.36-.17-6.34-1.78-8.33-4.22-.35.6-.55 1.3-.55 2.05 0 1.4.71 2.64 1.79 3.37-.66-.02-1.28-.2-1.82-.5v.05c0 1.97 1.4 3.62 3.26 3.99-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.6 2.03 2.77 3.82 2.8A8.14 8.14 0 0 1 2 19.54a11.5 11.5 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.6 1.5-1.36 2.05-2.22-.72.32-1.5.54-2.3.64z"/></svg>
          </a>
          <a href="#" class="social" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm4.7-3.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/></svg>
          </a>
          <a href="#" class="social" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1 1.6.7 2 1.1.2-.8.5-1.4.9-1.8-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.3-.2-.3-.6-1.7.1-3.5 0 0 1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0C17 3 18 3.3 18 3.3c.7 1.8.3 3.2.1 3.5.8.9 1.3 2 1.3 3.3 0 4.6-2.8 5.6-5.3 5.9.5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
          </a>
        </div>

        <p class="footer__copyright">© <span>{{ year }}</span> Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--secondary);
  color: var(--primary-contrast, #fff);
  padding: 2.5rem 0;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
}

.footer__brand {
  text-align: left;
}

.footer__title {
  margin: 0 0 0.25rem 0;
  font-size: 1.125rem;
}

.footer__tag {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.85);
}

.footer__links {
  display: flex;
  gap: 0.75rem;
}

.footer__link {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
}

.footer__link:hover,
.footer__link:focus-visible {
  background: rgba(255,255,255,0.06);
}

.footer__meta {
  text-align: right;
}

.footer__social {
  display: inline-flex;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: inherit;
  background: transparent;
  text-decoration: none;
  transition: background var(--transition) ease, transform var(--transition) ease;
}

.social:hover,
.social:focus-visible {
  background: rgba(255,255,255,0.06);
  transform: translateY(-3px);
}

.footer__copyright {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.75);
}

/* Responsive: stack on small screens */
@media (max-width: 720px) {
  .footer__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__brand {
    order: 1;
  }

  .footer__links {
    order: 3;
    justify-content: center;
  }

  .footer__meta {
    order: 2;
  }
}

</style>