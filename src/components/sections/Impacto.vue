<template>
  <section id="impacto" class="section impacto">
    <div class="container">
      <div class="impacto__header">
        <span class="impacto__badge">Impacto real</span>
        <h2 class="impacto__title">Nuestro compromiso con el planeta</h2>
        <p class="impacto__subtitle">
          Cada servicio contribuye directamente a los Objetivos de Desarrollo Sostenible de la ONU.
        </p>
      </div>

      <div class="impacto__grid">
        <div v-for="(metric, index) in metrics" :key="index" class="impacto__metric">
          <div class="impacto__metric-icon">{{ metric.icon }}</div>
          <div class="impacto__metric-value">{{ metric.value }}</div>
          <div class="impacto__metric-label">{{ metric.label }}</div>
          <div class="impacto__metric-description">{{ metric.description }}</div>
        </div>
      </div>

      <div class="impacto__ods">
        <h3 class="impacto__ods-title">Contribución a los ODS</h3>
        <div class="impacto__ods-grid">
          <div v-for="ods in odsList" :key="ods.number" class="impacto__ods-item">
            <div class="impacto__ods-number">{{ ods.number }}</div>
            <div class="impacto__ods-name">{{ ods.name }}</div>
            <div class="impacto__ods-contribution">{{ ods.contribution }}</div>
          </div>
        </div>
      </div>

      <div class="impacto__calculator">
        <h3 class="impacto__calculator-title">Calcula tu impacto</h3>
        <p class="impacto__calculator-text">
          Con nuestro servicio, en un año tu hogar puede:
        </p>
        <div class="impacto__calculator-grid">
          <div class="impacto__calculator-item">
            <span class="impacto__calculator-icon">🌳</span>
            <span class="impacto__calculator-value">Equivalente a plantar {{ calculateTrees }} árboles</span>
          </div>
          <div class="impacto__calculator-item">
            <span class="impacto__calculator-icon">💧</span>
            <span class="impacto__calculator-value">{{ calculateWater }}L de agua ahorrados</span>
          </div>
          <div class="impacto__calculator-item">
            <span class="impacto__calculator-icon">♻️</span>
            <span class="impacto__calculator-value">{{ calculatePlastic }}kg de plástico evitados</span>
          </div>
        </div>
      </div>

      <div class="impacto__testimonials">
        <h3 class="impacto__testimonials-title">Lo que dicen nuestros clientes</h3>
        <div class="impacto__testimonials-grid">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="impacto__testimonial">
            <div class="impacto__testimonial-content">"{{ testimonial.text }}"</div>
            <div class="impacto__testimonial-author">
              <span class="impacto__testimonial-name">{{ testimonial.name }}</span>
              <span class="impacto__testimonial-role">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const metrics = [
  {
    icon: '🌿',
    value: '60%',
    label: 'Reducción de plástico',
    description: 'En envases gracias a nuestro sistema recargable'
  },
  {
    icon: '🚛',
    value: '40%',
    label: 'Menos emisiones',
    description: 'Optimización de rutas y logística eficiente'
  },
  {
    icon: '💧',
    value: '100%',
    label: 'Biodegradable',
    description: 'Todos nuestros productos se descomponen naturalmente'
  },
  {
    icon: '🌍',
    value: '28 días',
    label: 'Degradación',
    description: 'Tiempo promedio de descomposición completa'
  }
]

const odsList = [
  {
    number: '12',
    name: 'Producción y consumo responsables',
    contribution: 'Reducción de residuos y productos sostenibles'
  },
  {
    number: '13',
    name: 'Acción por el clima',
    contribution: 'Disminución de huella de carbono en limpieza'
  },
  {
    number: '14',
    name: 'Vida submarina',
    contribution: 'Evitamos contaminación de mantos acuíferos'
  },
  {
    number: '15',
    name: 'Vida de ecosistemas terrestres',
    contribution: 'Protección de suelos con productos biodegradables'
  }
]

const testimonials = [
  {
    text: 'Desde que uso LimpioVital, mis alergias desaparecieron. El servicio es impecable y me encanta saber que ayudo al planeta.',
    name: 'María Fernanda',
    role: 'Cliente desde 2023'
  },
  {
    text: 'La flexibilidad del servicio me permite adaptarlo a mis horarios. El equipo es profesional y los productos huelen increíble.',
    name: 'Carlos Rivera',
    role: 'Cliente desde 2023'
  },
  {
    text: 'Como mamá de dos niños pequeños, la seguridad es prioridad. LimpioVital me da la tranquilidad que necesito.',
    name: 'Ana Lucía',
    role: 'Cliente desde 2023'
  }
]

// Valores calculados (ejemplo)
const calculateTrees = computed(() => '15')
const calculateWater = computed(() => '2,500')
const calculatePlastic = computed(() => '24')
</script>

<style scoped>
.impacto {
  background: var(--background);
}

.impacto__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.impacto__badge {
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

.impacto__title {
  margin-bottom: var(--space-sm);
}

.impacto__subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.impacto__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.impacto__metric {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  text-align: center;
  transition: all var(--transition-base);
}

.impacto__metric:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.impacto__metric-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.impacto__metric-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
  margin-bottom: var(--space-xs);
}

.impacto__metric-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.impacto__metric-description {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.5;
}

.impacto__ods {
  background: var(--surface-alt);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.impacto__ods-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.impacto__ods-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.impacto__ods-item {
  background: var(--card-bg);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  text-align: center;
  transition: transform var(--transition-fast);
}

.impacto__ods-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.impacto__ods-number {
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 auto var(--space-sm);
}

.impacto__ods-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  font-size: 0.95rem;
}

.impacto__ods-contribution {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.4;
}

.impacto__calculator {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
  color: white;
  text-align: center;
}

.impacto__calculator-title {
  color: white;
  font-size: 1.8rem;
  margin-bottom: var(--space-sm);
}

.impacto__calculator-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: var(--space-lg);
}

.impacto__calculator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  max-width: 800px;
  margin: 0 auto;
}

.impacto__calculator-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.impacto__calculator-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.impacto__calculator-value {
  font-size: 1.1rem;
  font-weight: 500;
}

.impacto__testimonials {
  padding: var(--space-xl) 0;
}

.impacto__testimonials-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.impacto__testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.impacto__testimonial {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  position: relative;
  transition: all var(--transition-base);
}

.impacto__testimonial:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.impacto__testimonial-content {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  font-style: italic;
  position: relative;
  padding-left: var(--space-md);
}

.impacto__testimonial-content::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.3;
  font-family: serif;
}

.impacto__testimonial-author {
  border-top: 1px solid var(--border-light);
  padding-top: var(--space-md);
}

.impacto__testimonial-name {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.impacto__testimonial-role {
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

@media (max-width: 1024px) {
  .impacto__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .impacto__ods-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .impacto__testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .impacto__grid {
    grid-template-columns: 1fr;
  }
  
  .impacto__ods-grid {
    grid-template-columns: 1fr;
  }
  
  .impacto__calculator-grid {
    grid-template-columns: 1fr;
  }
  
  .impacto__testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>