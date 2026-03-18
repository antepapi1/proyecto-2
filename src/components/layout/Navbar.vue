<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="container navbar__container">
      <router-link to="/" class="navbar__logo">
        <img 
          src="/src/assets/images/LimpioVital-Logo.png" 
          alt="Limpi'O' Vital" 
          class="navbar__logo-img"
          width="120"
          height="31"
          loading="eager"
        />
      </router-link>

      <button 
        class="navbar__toggle" 
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
        aria-label="Menú de navegación"
      >
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>

      <nav :class="['navbar__nav', { 'navbar__nav--open': isMenuOpen }]">
        <ul class="navbar__menu">
          <li v-for="item in menuItems" :key="item.id">
            <a 
              :href="`#${item.id}`" 
              class="navbar__link"
              :class="{ 'navbar__link--active': activeSection === item.id }"
              @click.prevent="navigateTo(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        
        <div class="navbar__actions">
          <button class="btn btn-primary navbar__cta">
            Iniciar
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('inicio')

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'problema', label: 'Problema' },
  { id: 'propuesta', label: 'Propuesta' },
  { id: 'suscripcion', label: 'Suscripción' },
  { id: 'impacto', label: 'Impacto' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

function navigateTo(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  
  // Detectar sección activa
  const sections = menuItems.map(item => document.getElementById(item.id))
  const scrollPosition = window.scrollY + 100
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = menuItems[i].id
      break
    }
  }
}

function handleResize() {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-sm);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: height var(--transition-base);
}

.navbar--scrolled .navbar__container {
  height: 64px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;
}

.navbar__logo-img {
  width: auto;
  height: 40px;
  object-fit: contain;
  transition: height var(--transition-base);
}

.navbar--scrolled .navbar__logo-img {
  height: 32px;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 40px;
  height: 40px;
  padding: 10px;
  background: transparent;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  cursor: pointer;
  z-index: 100;
}

.navbar__toggle-bar {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-fast);
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.navbar__menu {
  display: flex;
  gap: var(--space-md);
  list-style: none;
}

.navbar__link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.navbar__link:hover {
  color: var(--primary);
  background: var(--primary-soft);
}

.navbar__link--active {
  color: var(--primary);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: var(--space-sm);
  right: var(--space-sm);
  height: 2px;
  background: var(--primary);
  border-radius: var(--radius-sm);
}

.navbar__cta {
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .navbar__container {
    height: 64px;
  }
  
  .navbar__logo-img {
    height: 32px;
  }
  
  .navbar--scrolled .navbar__logo-img {
    height: 28px;
  }
  
  .navbar__toggle {
    display: flex;
  }
  
  .navbar__nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    gap: var(--space-xl);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    transform: translateY(-20px);
  }
  
  .navbar__nav--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .navbar__menu {
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }
  
  .navbar__link {
    font-size: 1.5rem;
    padding: var(--space-sm) var(--space-lg);
  }
  
  .navbar__actions {
    width: 100%;
    max-width: 300px;
  }
  
  .navbar__cta {
    width: 100%;
  }
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(30, 32, 36, 0.9);
  }
  
  .navbar--scrolled {
    background: rgba(30, 32, 36, 0.95);
  }
  
  .navbar__logo-img {
    filter: brightness(0.9);
  }
  
  @media (max-width: 768px) {
    .navbar__nav {
      background: rgba(30, 32, 36, 0.98);
    }
  }
}
</style>