<template>
  <section id="segmentos" class="section segmentos">
    <div class="container">
      <div class="segmentos__header">
        <span class="segmentos__badge">¿Para quién es?</span>
        <h2 class="segmentos__title">Segmentos de clientes</h2>
        <p class="segmentos__subtitle">
          Diseñamos soluciones específicas para cada tipo de hogar y necesidad.
        </p>
      </div>

      <div class="segmentos__grid">
        <div v-for="(segment, index) in segments" :key="index" class="segmentos__card">
          <div class="segmentos__card-header">
            <span class="segmentos__card-icon">{{ segment.icon }}</span>
            <h3 class="segmentos__card-title">{{ segment.title }}</h3>
          </div>
          <p class="segmentos__card-description">{{ segment.description }}</p>
          <div class="segmentos__card-stats">
            <div v-for="(stat, statIndex) in segment.stats" :key="statIndex" class="segmentos__stat">
              <span class="segmentos__stat-value">{{ stat.value }}</span>
              <span class="segmentos__stat-label">{{ stat.label }}</span>
            </div>
          </div>
          <div class="segmentos__card-tags">
            <span v-for="tag in segment.tags" :key="tag" class="segmentos__tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="segmentos__personalization">
        <div class="segmentos__personalization-content">
          <h3 class="segmentos__personalization-title">¿No encuentras tu perfil?</h3>
          <p class="segmentos__personalization-text">
            Creamos planes personalizados para necesidades específicas. 
            Contáctanos y diseñamos una solución a tu medida.
          </p>
          <button class="btn btn-primary">Solicitar asesoría</button>
        </div>
        <div class="segmentos__personalization-image">
          <span class="segmentos__personalization-icon">✨</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const segments = [
  {
    icon: '🏠',
    title: 'Hogares Eco-conscientes',
    description: 'Familias que buscan reducir su impacto ambiental sin comprometer la limpieza.',
    stats: [
      { value: '65%', label: 'Millennials' },
      { value: '80%', label: 'Dispuestos a pagar más' }
    ],
    tags: ['Reciclaje', 'Zero waste', 'Orgánico']
  },
  {
    icon: '👪',
    title: 'Familias con niños',
    description: 'Hogares con niños pequeños que requieren productos seguros y no tóxicos.',
    stats: [
      { value: '3+', label: 'Miembros' },
      { value: '95%', label: 'Priorizan seguridad' }
    ],
    tags: ['Hipoalergénico', 'Baby-friendly', 'Educativo']
  },
  {
    icon: '🏢',
    title: 'Pequeñas empresas',
    description: 'Oficinas y locales comerciales que buscan servicio profesional y sostenible.',
    stats: [
      { value: '10-50', label: 'Empleados' },
      { value: '40%', label: 'Ahorro anual' }
    ],
    tags: ['Certificación LEED', 'Eficiencia', 'Profesional']
  },
  {
    icon: '🌿',
    title: 'Personas sensibles',
    description: 'Individuos con alergias, asma o sensibilidad química.',
    stats: [
      { value: '1/4', label: 'Población' },
      { value: '100%', label: 'Libre de químicos' }
    ],
    tags: ['Sin fragancia', 'Hipoalergénico', 'Médico']
  }
]
</script>

<style scoped>
.segmentos {
  background: var(--background);
}

.segmentos__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.segmentos__badge {
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

.segmentos__title {
  margin-bottom: var(--space-sm);
}

.segmentos__subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.segmentos__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.segmentos__card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.segmentos__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.segmentos__card-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.segmentos__card-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.segmentos__card-title {
  font-size: 1.2rem;
  margin: 0;
  color: var(--text-primary);
}

.segmentos__card-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  margin-bottom: var(--space-md);
  line-height: 1.5;
  flex-grow: 1;
}

.segmentos__card-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  padding: var(--space-sm) 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.segmentos__stat {
  text-align: center;
}

.segmentos__stat-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.segmentos__stat-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
}

.segmentos__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.segmentos__tag {
  padding: 4px var(--space-xs);
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.8rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.segmentos__tag:hover {
  background: var(--primary);
  color: white;
}

.segmentos__personalization {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-xl);
  background: var(--primary);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  color: white;
  align-items: center;
}

.segmentos__personalization-content {
  max-width: 500px;
}

.segmentos__personalization-title {
  font-size: 1.8rem;
  color: white;
  margin-bottom: var(--space-sm);
}

.segmentos__personalization-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: var(--space-lg);
}

.segmentos__personalization-content .btn {
  background: white;
  color: var(--primary);
  border: none;
}

.segmentos__personalization-content .btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.segmentos__personalization-icon {
  font-size: 6rem;
  line-height: 1;
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .segmentos__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .segmentos__personalization {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .segmentos__personalization-content {
    max-width: 100%;
  }
  
  .segmentos__personalization-icon {
    display: none;
  }
}

@media (max-width: 768px) {
  .segmentos__grid {
    grid-template-columns: 1fr;
  }
}
</style>