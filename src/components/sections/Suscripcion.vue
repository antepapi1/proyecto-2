<template>
  <section id="suscripcion" class="section suscripcion">
    <div class="container">
      <div class="suscripcion__header">
        <span class="suscripcion__badge">Planes y precios</span>
        <h2 class="suscripcion__title">Elige el plan perfecto para tu hogar</h2>
        <p class="suscripcion__subtitle">
          Todos nuestros planes incluyen productos biodegradables, personal certificado y seguro incluido.
        </p>
      </div>

      <div class="suscripcion__toggle">
        <button 
          :class="['suscripcion__toggle-btn', { 'suscripcion__toggle-btn--active': billing === 'monthly' }]"
          @click="billing = 'monthly'"
        >
          Mensual
        </button>
        <button 
          :class="['suscripcion__toggle-btn', { 'suscripcion__toggle-btn--active': billing === 'annual' }]"
          @click="billing = 'annual'"
        >
          Anual
          <span class="suscripcion__toggle-badge">Ahorra 20%</span>
        </button>
      </div>

      <div class="suscripcion__grid">
        <div 
          v-for="plan in planes" 
          :key="plan.id" 
          :class="['suscripcion__card', { 'suscripcion__card--popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="suscripcion__card-badge">Más popular</div>
          
          <div class="suscripcion__card-header">
            <h3 class="suscripcion__card-name">{{ plan.name }}</h3>
            <div class="suscripcion__card-price">
              <span class="suscripcion__card-amount">{{ plan.prices[billing] }}</span>
              <span class="suscripcion__card-period">/{{ billing === 'monthly' ? 'mes' : 'año' }}</span>
            </div>
            <p class="suscripcion__card-description">{{ plan.description }}</p>
          </div>

          <ul class="suscripcion__card-features">
            <li v-for="feature in plan.features" :key="feature" class="suscripcion__feature">
              <span class="suscripcion__feature-icon">✓</span>
              {{ feature }}
            </li>
          </ul>

          <div class="suscripcion__card-footer">
            <button 
              class="btn suscripcion__card-btn"
              :class="{ 'btn-primary': !plan.popular, 'suscripcion__card-btn--popular': plan.popular }"
              @click="selectedPlan = plan.id"
            >
              {{ selectedPlan === plan.id ? 'Seleccionado' : 'Elegir plan' }}
            </button>
          </div>
        </div>
      </div>

      <div class="suscripcion__form-container">
        <h3 class="suscripcion__form-title">Comienza tu suscripción</h3>
        
        <form @submit.prevent="handleSubmit" class="suscripcion__form">
          <div class="suscripcion__form-grid">
            <div class="suscripcion__form-field">
              <label for="nombre">Nombre completo</label>
              <input 
                id="nombre"
                v-model="form.nombre"
                type="text"
                required
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div class="suscripcion__form-field">
              <label for="email">Correo electrónico</label>
              <input 
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div class="suscripcion__form-field">
              <label for="telefono">Teléfono</label>
              <input 
                id="telefono"
                v-model="form.telefono"
                type="tel"
                required
                placeholder="(+504) 9999-9999"
              />
            </div>

            <div class="suscripcion__form-field">
              <label for="direccion">Dirección</label>
              <input 
                id="direccion"
                v-model="form.direccion"
                type="text"
                required
                placeholder="Ciudad, colonia"
              />
            </div>
          </div>

          <div class="suscripcion__payment">
            <h4 class="suscripcion__payment-title">Métodos de pago aceptados</h4>
            <div class="suscripcion__payment-methods">
              <div v-for="method in paymentMethods" :key="method.name" class="suscripcion__payment-method">
                <span class="suscripcion__payment-icon">{{ method.icon }}</span>
                <span>{{ method.name }}</span>
              </div>
            </div>
          </div>

          <div class="suscripcion__terms">
            <label class="suscripcion__checkbox">
              <input type="checkbox" v-model="form.acceptTerms" required>
              <span>Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a></span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary suscripcion__submit">
            Completar suscripción
          </button>

          <p v-if="mensaje" class="suscripcion__message">{{ mensaje }}</p>
        </form>
      </div>

      <div class="suscripcion__guarantee">
        <div class="suscripcion__guarantee-icon">🛡️</div>
        <div class="suscripcion__guarantee-content">
          <h4>Garantía de satisfacción</h4>
          <p>Si no estás satisfecho con el primer servicio, te devolvemos tu dinero sin preguntas.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const billing = ref('monthly')
const selectedPlan = ref('basico')
const mensaje = ref('')

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  acceptTerms: false
})

const planes = [
  {
    id: 'basico',
    name: 'Básico',
    description: 'Mantenimiento regular para hogares pequeños',
    popular: false,
    prices: {
      monthly: 'L 1,800',
      annual: 'L 18,500'
    },
    features: [
      '2 horas por visita',
      'Limpieza de superficies',
      'Barrer y trapear',
      'Baño y cocina básico',
      'Frecuencia semanal',
      'Productos ecológicos'
    ]
  },
  {
    id: 'plus',
    name: 'Plus',
    description: 'Limpieza profunda para hogares medianos',
    popular: true,
    prices: {
      monthly: 'L 3,500',
      annual: 'L 35,000'
    },
    features: [
      '3 horas por visita',
      'Todo el plan Básico',
      'Limpieza de ventanas',
      'Desinfección profunda',
      'Electrodomésticos',
      'Prioridad en agenda'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Servicio completo tipo hotel',
    popular: false,
    prices: {
      monthly: 'L 6,000',
      annual: 'L 60,000'
    },
    features: [
      '4 horas por visita',
      'Todo el plan Plus',
      'Organización de espacios',
      'Limpieza de interiores',
      'Productos premium',
      'Mismo equipo asignado'
    ]
  }
]

const paymentMethods = [
  { name: 'Tarjeta crédito/débito', icon: '💳' },
  { name: 'PayPal', icon: '🅿️' },
  { name: 'Transferencia bancaria', icon: '🏦' },
  { name: 'Efectivo', icon: '💵' }
]

function handleSubmit() {
  const planSeleccionado = planes.find(p => p.id === selectedPlan.value)
  
  mensaje.value = `¡Gracias ${form.value.nombre}! Hemos recibido tu solicitud para el plan ${planSeleccionado.name}. Te contactaremos en las próximas 24 horas.`
  
  // Reset form
  form.value = {
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    acceptTerms: false
  }
  
  // Scroll to message
  setTimeout(() => {
    document.querySelector('.suscripcion__message')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 100)
}

onMounted(() => {
  // Cargar datos guardados si existen
  const saved = localStorage.getItem('limpiovital-subscription')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.nombre) form.value.nombre = data.nombre
      if (data.email) form.value.email = data.email
    } catch (e) {
      console.error('Error loading saved data')
    }
  }
})
</script>

<style scoped>
.suscripcion {
  background: var(--surface-alt);
}

.suscripcion__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.suscripcion__badge {
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

.suscripcion__title {
  margin-bottom: var(--space-sm);
}

.suscripcion__subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.suscripcion__toggle {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
  background: var(--surface);
  padding: var(--space-xs);
  border-radius: var(--radius-lg);
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--border-light);
}

.suscripcion__toggle-btn {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.suscripcion__toggle-btn--active {
  background: var(--primary);
  color: white;
}

.suscripcion__toggle-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-2);
  color: var(--text-primary);
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.suscripcion__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.suscripcion__card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  position: relative;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.suscripcion__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.suscripcion__card--popular {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
  transform: scale(1.05);
  z-index: 2;
}

.suscripcion__card-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 4px var(--space-sm);
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.suscripcion__card-header {
  text-align: center;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--border-light);
}

.suscripcion__card-name {
  font-size: 1.3rem;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.suscripcion__card-price {
  margin-bottom: var(--space-sm);
}

.suscripcion__card-amount {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.suscripcion__card-period {
  font-size: 0.95rem;
  color: var(--text-tertiary);
}

.suscripcion__card-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  margin: 0;
}

.suscripcion__card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-md) 0;
  flex-grow: 1;
}

.suscripcion__feature {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
}

.suscripcion__feature:last-child {
  border-bottom: none;
}

.suscripcion__feature-icon {
  color: var(--primary);
  font-weight: bold;
}

.suscripcion__card-btn {
  width: 100%;
  padding: var(--space-md);
  background: transparent;
  border: 1px solid var(--border-medium);
  color: var(--text-primary);
}

.suscripcion__card-btn--popular {
  background: var(--primary);
  color: white;
  border: none;
}

.suscripcion__card-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.suscripcion__form-container {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.suscripcion__form-title {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.suscripcion__form {
  max-width: 800px;
  margin: 0 auto;
}

.suscripcion__form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.suscripcion__form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.suscripcion__form-field label {
  font-weight: 500;
  color: var(--text-primary);
}

.suscripcion__payment {
  background: var(--surface-alt);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
}

.suscripcion__payment-title {
  font-size: 1.1rem;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.suscripcion__payment-methods {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-sm);
}

.suscripcion__payment-method {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.suscripcion__payment-icon {
  font-size: 1.2rem;
}

.suscripcion__terms {
  margin-bottom: var(--space-lg);
}

.suscripcion__checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  cursor: pointer;
  color: var(--text-secondary);
}

.suscripcion__checkbox a {
  color: var(--primary);
  text-decoration: underline;
}

.suscripcion__submit {
  width: 100%;
  padding: var(--space-md);
  font-size: 1.1rem;
}

.suscripcion__message {
  margin-top: var(--space-md);
  padding: var(--space-md);
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: 500;
}

.suscripcion__guarantee {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  max-width: 600px;
  margin: 0 auto;
}

.suscripcion__guarantee-icon {
  font-size: 3rem;
  line-height: 1;
}

.suscripcion__guarantee-content h4 {
  font-size: 1.2rem;
  margin-bottom: var(--space-xs);
  color: var(--text-primary);
}

.suscripcion__guarantee-content p {
  margin: 0;
  color: var(--text-tertiary);
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .suscripcion__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .suscripcion__card--popular {
    transform: scale(1);
    order: -1;
  }
  
  .suscripcion__payment-methods {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .suscripcion__grid {
    grid-template-columns: 1fr;
  }
  
  .suscripcion__form-grid {
    grid-template-columns: 1fr;
  }
  
  .suscripcion__payment-methods {
    grid-template-columns: 1fr;
  }
  
  .suscripcion__guarantee {
    flex-direction: column;
    text-align: center;
  }
}
</style>