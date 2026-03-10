<template>
  <section id="segmentos" class="section reveal" ref="root" aria-labelledby="segmentosTitle">
    <div class="container container--narrow">
      <h2 id="segmentosTitle">Segmentos de Clientes</h2>

      <ul class="list" role="list">
        <li>Hogares eco-conscientes urbanos</li>
        <li>Familias con niños y mascotas</li>
        <li>Pequeñas empresas sostenibles</li>
        <li>Personas sensibles a químicos</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin-top: 14px;
  display: grid;
  gap: 10px;
}

.list li {
  background: var(--card);
  border-radius: 12px;
  padding: 14px 16px;
  text-align: left;
  border: 1px solid rgba(2,6,23,0.06);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition) ease, box-shadow var(--transition) ease;
}

.container--narrow { max-width: 760px; }

/* Ensure heading and list items are left-aligned and visually card-like */
h2 {
  text-align: left;
  margin-bottom: 0.6rem;
}

.list li:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Center section heading */
h2 {
  text-align: center;
  margin-bottom: 0.6rem;
}
</style>