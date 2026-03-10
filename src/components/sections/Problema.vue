<template>
  <section id="problema" class="section reveal" ref="root" aria-labelledby="problemaTitle">
    <div class="container container--narrow">
      <h2 id="problemaTitle">Problema Identificado</h2>

      <p class="intro">
        Los hogares urbanos en Honduras dependen de productos químicos agresivos
        que pueden afectar la salud familiar y el medio ambiente.
      </p>

      <div class="grid" role="list">
        <div class="card">
          <h3>🧪 Químicos agresivos</h3>
          <p>Ingredientes con compuestos volátiles que irritan vías respiratorias y piel.</p>
        </div>

        <div class="card">
          <h3>🌍 Impacto ambiental</h3>
          <p>Contaminación de agua y suelos por residuos y envases de un solo uso.</p>
        </div>

        <div class="card">
          <h3>💸 Gasto ineficiente</h3>
          <p>Compras frecuentes elevan el costo mensual.</p>
        </div>
      </div>
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.intro {
  max-width: 760px;
  margin: 8px auto 24px;
  color: var(--text-muted);
}
</style>