<template>
  <section id="impacto" class="section reveal" ref="root" aria-labelledby="impactoTitle">
    <div class="container container--narrow">
      <h2>Impacto Ambiental</h2>

      <p>
        Contribuimos al ODS 12 promoviendo producción y consumo responsable,
        reduciendo el uso de químicos tóxicos en hogares hondureños.
      </p>

      <div class="kpis" role="list">
        <div class="kpi card">
          <strong aria-hidden="true">−60%</strong>
          <span class="kpi__label">Plástico en envases*</span>
        </div>

        <div class="kpi card">
          <strong aria-hidden="true">−40%</strong>
          <span class="kpi__label">Emisiones logísticas</span>
        </div>

        <div class="kpi card">
          <strong aria-hidden="true">100%</strong>
          <span class="kpi__label">Biodegradabilidad</span>
        </div>
      </div>

      <small class="kpi__note">
        *Estimaciones con base en reposición mensual y envases recargables.
      </small>
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
.kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin: 18px 0 6px;
}

.kpi {
  display: grid;
  place-items: center;
  gap: 6px;
}

.kpi strong {
  font-size: 32px;
  color: var(--primary);
}

.kpi span {
  color: var(--text-muted);
}

.container--narrow {
  max-width: 780px;
}

.kpi__note {
  color: var(--text-muted);
  display: block;
  margin-top: 8px;
}
</style>