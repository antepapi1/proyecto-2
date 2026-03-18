<template>
  <div class="app">
    <Navbar />
    
    <router-view v-slot="{ Component, route }">
      <transition 
        :name="route.meta.transition || 'fade'"
        mode="out-in"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<style>
/* Transiciones mejoradas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface-alt);
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-light);
}

/* Selección de texto */
::selection {
  background: var(--primary);
  color: white;
}

/* Focus styles globales */
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Eliminar outline para mouse */
:focus:not(:focus-visible) {
  outline: none;
}

/* Animaciones de carga */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.loading {
  animation: shimmer 2s infinite;
  background: linear-gradient(
    to right,
    var(--surface) 4%,
    var(--surface-alt) 25%,
    var(--surface) 36%
  );
  background-size: 1000px 100%;
}

/* Mejoras de rendimiento */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>