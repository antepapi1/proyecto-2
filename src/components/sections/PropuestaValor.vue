<template>
  <section id="propuesta" class="section propuesta">
    <div class="container">
      <div class="propuesta__header">
        <span class="propuesta__badge">Nuestra Solución</span>
        <h2 class="propuesta__title">Limpieza que respeta tu hogar y el planeta</h2>
        <p class="propuesta__subtitle">
          Desarrollamos un servicio integral que combina efectividad, seguridad y sostenibilidad.
        </p>
      </div>

      <div class="propuesta__grid">
        <div v-for="(item, index) in propuestaItems" :key="index" class="propuesta__item">
          <div class="propuesta__item-icon">{{ item.icon }}</div>
          <h3 class="propuesta__item-title">{{ item.title }}</h3>
          <p class="propuesta__item-description">{{ item.description }}</p>
          <ul class="propuesta__item-features">
            <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>

      <div class="propuesta__diff">
        <h3 class="propuesta__diff-title">¿Por qué somos diferentes?</h3>
        <div class="propuesta__diff-grid">
          <div class="propuesta__diff-card" v-for="(diff, index) in differences" :key="index">
            <span class="propuesta__diff-check">✓</span>
            <div>
              <strong>{{ diff.title }}</strong>
              <p>{{ diff.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="propuesta__certifications">
        <h3 class="propuesta__cert-title">Certificaciones y avales</h3>
        <div class="propuesta__cert-grid">
          <div v-for="cert in certifications" :key="cert.name" class="propuesta__cert-item">
            <div class="propuesta__cert-icon">{{ cert.icon }}</div>
            <span class="propuesta__cert-name">{{ cert.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const propuestaItems = [
  {
    icon: '🌱',
    title: 'Biodegradable Certificado',
    description: 'Fórmulas 100% biodegradables sin fosfatos ni cloro.',
    features: [
      'Descomposición en 28 días',
      'Sin residuos tóxicos',
      'Aprobado por laboratorios'
    ]
  },
  {
    icon: '👶',
    title: 'Seguridad Total',
    description: 'Productos seguros para toda la familia.',
    features: [
      'No tóxico para niños',
      'Seguro para mascotas',
      'Hipoalergénico'
    ]
  },
  {
    icon: '🔄',
    title: 'Suscripción Flexible',
    description: 'Adaptamos el servicio a tus necesidades.',
    features: [
      'Sin permanencia',
      'Pausa cuando quieras',
      'Cambios de plan gratis'
    ]
  },
  {
    icon: '📊',
    title: 'Impacto Medible',
    description: 'Reportes trimestrales de tu impacto ambiental.',
    features: [
      'Ahorro de plástico',
      'Reducción de CO₂',
      'Certificado personal'
    ]
  }
]

const differences = [
  {
    title: 'Atención Personalizada',
    description: 'Evaluamos tu hogar y creamos un plan a tu medida'
  },
  {
    title: 'Flexibilidad Total',
    description: 'Cambia horarios, servicios o pausa sin costo'
  },
  {
    title: 'Calidad Constante',
    description: 'Mismo equipo asignado, supervisión continua'
  },
  {
    title: 'Precio Justo',
    description: 'Ahorras hasta 35% vs servicios tradicionales'
  },
  {
    title: 'Confianza Garantizada',
    description: 'Personal verificado, seguro incluido'
  },
  {
    title: 'Innovación Continua',
    description: 'Mejoramos constantemente productos y procesos'
  }
]

const certifications = [
  { name: 'Biodegradable', icon: '🌿' },
  { name: 'ISO 14001', icon: '✓' },
  { name: 'Libre de Crueldad', icon: '🐰' },
  { name: 'Carbono Neutro', icon: '♻️' }
]
</script>

<style scoped>
.propuesta__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.propuesta__badge {
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

.propuesta__title {
  margin-bottom: var(--space-sm);
}

.propuesta__subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.propuesta__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.propuesta__item {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
  text-align: center;
}

.propuesta__item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.propuesta__item-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.propuesta__item-title {
  font-size: 1.2rem;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.propuesta__item-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  margin-bottom: var(--space-md);
}

.propuesta__item-features {
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
}

.propuesta__item-features li {
  padding: var(--space-xs) 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
}

.propuesta__item-features li:last-child {
  border-bottom: none;
}

.propuesta__item-features li::before {
  content: '•';
  color: var(--primary);
  font-weight: bold;
  margin-right: var(--space-xs);
}

.propuesta__diff {
  background: var(--surface-alt);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.propuesta__diff-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.propuesta__diff-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.propuesta__diff-card {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--card-bg);
  border-radius: var(--radius-md);
  transition: transform var(--transition-fast);
}

.propuesta__diff-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.propuesta__diff-check {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}

.propuesta__diff-card strong {
  display: block;
  margin-bottom: var(--space-xs);
  color: var(--text-primary);
}

.propuesta__diff-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.propuesta__certifications {
  text-align: center;
}

.propuesta__cert-title {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  font-weight: 400;
}

.propuesta__cert-grid {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.propuesta__cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.propuesta__cert-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-soft);
  border-radius: 50%;
  font-size: 1.8rem;
  color: var(--primary);
}

.propuesta__cert-name {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .propuesta__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .propuesta__diff-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .propuesta__grid {
    grid-template-columns: 1fr;
  }
  
  .propuesta__diff-grid {
    grid-template-columns: 1fr;
  }
  
  .propuesta__cert-grid {
    gap: var(--space-md);
  }
  
  .propuesta__cert-item {
    width: calc(50% - var(--space-md));
  }
}
</style>