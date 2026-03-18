<template>
  <section id="problema" class="section problema">
    <div class="container container--narrow">
      <div class="problema__header">
        <span class="problema__badge">El Desafío</span>
        <h2 class="problema__title">La limpieza tradicional tiene un costo oculto</h2>
        <p class="problema__subtitle">
          Los productos convencionales afectan tu salud y el medio ambiente sin que lo notes.
        </p>
      </div>

      <div class="problema__grid">
        <div v-for="(item, index) in problemItems" :key="index" class="problema__card">
          <div class="problema__card-icon">{{ item.icon }}</div>
          <h3 class="problema__card-title">{{ item.title }}</h3>
          <p class="problema__card-description">{{ item.description }}</p>
          <div class="problema__card-impact">
            <span class="problema__card-stat">{{ item.stat }}</span>
            <span class="problema__card-label">{{ item.statLabel }}</span>
          </div>
        </div>
      </div>

      <div class="problema__comparison">
        <h3 class="problema__comparison-title">Impacto anual por hogar</h3>
        <div class="problema__comparison-grid">
          <div class="problema__comparison-item problema__comparison-item--negative">
            <span class="problema__comparison-label">Productos tradicionales</span>
            <span class="problema__comparison-value">24kg CO₂</span>
            <span class="problema__comparison-unit">emisiones</span>
          </div>
          <div class="problema__comparison-item problema__comparison-item--positive">
            <span class="problema__comparison-label">LimpioVital</span>
            <span class="problema__comparison-value">2kg CO₂</span>
            <span class="problema__comparison-unit">emisiones</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const problemItems = ref([
  {
    icon: '⚗️',
    title: 'Químicos Agresivos',
    description: 'Fosfatos, cloro y amoníaco que irritan vías respiratorias y causan alergias.',
    stat: '78%',
    statLabel: 'contienen tóxicos'
  },
  {
    icon: '🌍',
    title: 'Contaminación',
    description: 'Residuos que terminan en ríos y mantos acuíferos, afectando ecosistemas.',
    stat: '1.2M',
    statLabel: 'litros contaminados/año'
  },
  {
    icon: '💰',
    title: 'Costo Oculto',
    description: 'Compras frecuentes y productos especializados elevan el gasto mensual.',
    stat: '35%',
    statLabel: 'más costoso'
  }
])
</script>

<style scoped>
.problema {
  background: var(--surface-alt);
}

.problema__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.problema__badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-sm);
}

.problema__title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: var(--space-sm);
}

.problema__subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.problema__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.problema__card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
  text-align: center;
}

.problema__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.problema__card-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.problema__card-title {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.problema__card-description {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  margin-bottom: var(--space-md);
  line-height: 1.5;
}

.problema__card-impact {
  background: var(--surface-alt);
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  margin-top: var(--space-sm);
}

.problema__card-stat {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.problema__card-label {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.problema__comparison {
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  text-align: center;
}

.problema__comparison-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.problema__comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  max-width: 600px;
  margin: 0 auto;
}

.problema__comparison-item {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  transition: transform var(--transition-fast);
}

.problema__comparison-item:hover {
  transform: scale(1.05);
}

.problema__comparison-item--negative {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.problema__comparison-item--positive {
  background: var(--primary-soft);
  border: 1px solid var(--border-light);
}

.problema__comparison-label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-tertiary);
  margin-bottom: var(--space-xs);
}

.problema__comparison-value {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
}

.problema__comparison-item--negative .problema__comparison-value {
  color: #ef4444;
}

.problema__comparison-item--positive .problema__comparison-value {
  color: var(--primary);
}

.problema__comparison-unit {
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

@media (max-width: 768px) {
  .problema__grid {
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }
  
  .problema__comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>