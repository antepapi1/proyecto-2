<template>
  <main class="home">
    <Hero />
    <Problema />
    <PropuestaValor />
    <Segmentos />
    <Suscripcion />
    <Impacto />
  </main>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import Problema from '../components/sections/Problema.vue'
import PropuestaValor from '../components/sections/PropuestaValor.vue'
import Segmentos from '../components/sections/Segmentos.vue'
import Suscripcion from '../components/sections/Suscripcion.vue'
import Impacto from '../components/sections/Impacto.vue'
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

/* Asegurar que las secciones tengan el espacio correcto */
.home > :deep(section) {
  scroll-margin-top: 80px;
}

@media (max-width: 768px) {
  .home > :deep(section) {
    scroll-margin-top: 64px;
  }
}
</style>