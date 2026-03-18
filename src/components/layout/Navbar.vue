<template>
  <nav :class="['navbar', { 'is-open': menuOpen }]" role="navigation" aria-label="Principal">
    <div class="container navbar__inner">
      <div class="navbar__brand">
        <a href="#hero" class="logo" @click="closeMenu">LimpioVital</a>
      </div>

      <button
        class="nav-toggle"
        :aria-expanded="menuOpen.toString()"
        aria-controls="primary-navigation"
        @click="toggleMenu"
        aria-label="Alternar menú"
      >
        <span class="sr-only">Alternar navegación</span>
        <svg v-if="!menuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>

      <ul id="primary-navigation" class="nav-links" :aria-hidden="(!menuOpen).toString()">
        <li><a href="#hero" @click.prevent="navigate('hero')">Inicio</a></li>
        <li><a href="#propuesta" @click.prevent="navigate('propuesta')">Propuesta</a></li>
        <li><a href="#segmentos" @click.prevent="navigate('segmentos')">Clientes</a></li>
        <li><a href="#suscripcion" @click.prevent="navigate('suscripcion')">Suscripción</a></li>
        <li><a href="#impacto" @click.prevent="navigate('impacto')">Impacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function navigate(sectionId) {
  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  closeMenu()
}

function handleKey(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--card);
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
  text-decoration: none;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  padding: 0.35rem;
  border-radius: 8px;
  color: var(--text-dark);
}

.nav-toggle:focus-visible {
  outline: 3px solid rgba(37,99,235,0.12);
  outline-offset: 3px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  padding: 0.35rem 0.45rem;
  border-radius: 8px;
  transition: color var(--transition) ease, background var(--transition) ease, transform var(--transition) ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--primary);
  background: rgba(37,99,235,0.05);
  transform: translateY(-2px);
}

/* Mobile: hide links and show toggle */
@media (max-width: 720px) {
  .nav-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: var(--card);
    flex-direction: column;
    gap: 0;
    padding: 0.5rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    transform-origin: top center;
    box-shadow: var(--shadow-md);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.28s ease;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    padding: 0.85rem 1rem;
  }

  /* When open, expand the menu */
  .is-open .nav-links {
    max-height: 480px; /* enough for menu items */
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .nav-links {
    transition: none !important;
  }
}

</style>