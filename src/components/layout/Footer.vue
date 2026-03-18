<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <router-link to="/" class="footer__logo">
            <img 
              src="/src/assets/images/LimpioVital-Logo.png" 
              alt="Limpi'O' Vital" 
              class="footer__logo-img"
              width="150"
              height="39"
              loading="lazy"
            />
          </router-link>
          <p class="footer__description">
            Transformando la limpieza del hogar con soluciones sostenibles y profesionales para Honduras.
          </p>
          <div class="footer__social">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              class="footer__social-link"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span v-html="social.icon"></span>
            </a>
          </div>
        </div>

        <div v-for="column in footerColumns" :key="column.title" class="footer__column">
          <h4 class="footer__column-title">{{ column.title }}</h4>
          <ul class="footer__list">
            <li v-for="item in column.items" :key="item.label">
              <a :href="item.url" class="footer__link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ year }} Limpi'O' Vital. Todos los derechos reservados.
        </p>
        <div class="footer__legal">
          <a href="/privacidad" class="footer__legal-link">Privacidad</a>
          <a href="/terminos" class="footer__legal-link">Términos</a>
          <a href="/cookies" class="footer__legal-link">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()

const socialLinks = [
  { name: 'LinkedIn', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' },
  { name: 'Twitter', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.6 9 4.5 0 0-.5-3 2-5 2 2 6 2 8 0z"/></svg>' },
  { name: 'Instagram', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>' }
]

const footerColumns = [
  {
    title: 'Compañía',
    items: [
      { label: 'Sobre Nosotros', url: '/sobre-nosotros' },
      { label: 'Carreras', url: '/carreras' },
      { label: 'Prensa', url: '/prensa' },
      { label: 'Blog', url: '/blog' }
    ]
  },
  {
    title: 'Servicios',
    items: [
      { label: 'Plan Básico', url: '/#suscripcion' },
      { label: 'Plan Plus', url: '/#suscripcion' },
      { label: 'Plan Premium', url: '/#suscripcion' },
      { label: 'Plan Empresarial', url: '/#suscripcion' }
    ]
  },
  {
    title: 'Soporte',
    items: [
      { label: 'Centro de Ayuda', url: '/ayuda' },
      { label: 'Contacto', url: '/contacto' },
      { label: 'FAQ', url: '/faq' },
      { label: 'Garantía', url: '/garantia' }
    ]
  }
]
</script>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border-light);
  padding: var(--space-xl) 0 var(--space-lg);
  margin-top: var(--space-xl);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer__brand {
  max-width: 350px;
}

.footer__logo {
  display: inline-block;
  margin-bottom: var(--space-md);
  line-height: 0;
}

.footer__logo-img {
  width: auto;
  height: 45px;
  object-fit: contain;
  transition: opacity var(--transition-fast);
}

.footer__logo:hover .footer__logo-img {
  opacity: 0.8;
}

.footer__description {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.footer__social {
  display: flex;
  gap: var(--space-sm);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--surface-alt);
  border: 1px solid var(--border-light);
  color: var(--text-tertiary);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  color: var(--primary);
  background: var(--primary-soft);
  transform: translateY(-2px);
  border-color: var(--primary);
}

.footer__column-title {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.footer__list {
  list-style: none;
}

.footer__link {
  display: inline-block;
  color: var(--text-tertiary);
  font-size: 0.95rem;
  padding: var(--space-xs) 0;
  transition: all var(--transition-fast);
}

.footer__link:hover {
  color: var(--primary);
  transform: translateX(4px);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border-light);
}

.footer__copyright {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  margin: 0;
}

.footer__legal {
  display: flex;
  gap: var(--space-md);
}

.footer__legal-link {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: var(--primary);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }
  
  .footer__brand {
    grid-column: 1 / -1;
    max-width: 100%;
    text-align: center;
  }
  
  .footer__logo {
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer__social {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--space-lg) 0 var(--space-md);
  }
  
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  
  .footer__column {
    text-align: center;
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
  
  .footer__legal {
    justify-content: center;
  }
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  .footer__logo-img {
    filter: brightness(0.9);
  }
}
</style>