<template>
  <section id="suscripcion" class="section" aria-labelledby="suscripcionTitle">
    <h2 id="suscripcionTitle">Modelo de Suscripción</h2>

    <div class="plan-grid" role="list" aria-label="Modelos de suscripción">
      <article v-for="plan in planes" :key="plan.id" role="listitem" :class="['plan-card', { 'plan-card--selected': selectedPlan === plan.id }]" @click="selectPlan(plan.id)" tabindex="0" @keydown.enter="selectPlan(plan.id)" @keydown.space.prevent="selectPlan(plan.id)">
        <h3 class="plan-title">{{ plan.name }}</h3>
        <p class="plan-price">{{ plan.price }}</p>
        <p class="plan-description">{{ plan.description }}</p>
        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
        </ul>
        <span class="plan-cta" aria-hidden="true">{{ selectedPlan === plan.id ? 'Seleccionado' : 'Elegir' }}</span>
      </article>
    </div>

    <div class="payment-section">
      <h3>Métodos de pago disponibles</h3>
      <div class="payment-options">
        <article class="payment-info" aria-label="Pago con tarjeta">
          <strong>Tarjeta de crédito/débito</strong>
          <p>Para pagos rápidos con seguridad. Aplican 3D Secure y cifrado.</p>
        </article>
        <article class="payment-info" aria-label="Pago con PayPal">
          <strong>PayPal</strong>
          <p>Pago a través de tu cuenta PayPal, ideal si prefieres no compartir datos bancarios.</p>
        </article>
      </div>
      <p class="payment-note">Solo informativo: estos son los métodos que aceptamos.</p>
    </div>

    <div class="sus-card">
      <form @submit.prevent="suscribirse" class="sus-form" aria-describedby="sus-note">
        <label class="field">
          <span class="label">Nombre completo</span>
          <input aria-label="Nombre completo" type="text" v-model="nombre" placeholder="Nombre completo" required />
        </label>

        <label class="field">
          <span class="label">Correo electrónico</span>
          <input aria-label="Correo electrónico" type="email" v-model="correo" placeholder="Correo electrónico" required />
        </label>

        <button class="btn btn-primary" type="submit">Suscribirme</button>
      </form>

      <p id="sus-note" v-if="mensaje" class="mensaje" role="status" aria-live="polite">{{ mensaje }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'limpiovital-subscription'
const nombre = ref('')
const correo = ref('')
const mensaje = ref('')
const selectedPlan = ref('basico')

const planes = [
  {
    id: 'basico',
    name: 'Plan Básico – Hogar Esencial',
    price: 'Casa pequeña: L 1,800 – L 2,800',
    description: 'Ideal para mantenimiento regular del hogar.',
    features: [
      'Barrer y trapear',
      'Limpieza de superficies',
      'Limpieza básica de baño',
      'Limpieza básica de cocina',
      'Frecuencia sugerida: 1 vez por semana o quincenal'
    ]
  },
  {
    id: 'plus',
    name: 'Plan Plus – Hogar Plus',
    price: 'Casa pequeña: L 3,500 – L 5,000',
    description: 'Incluye todo el plan básico + limpieza más detallada.',
    features: [
      'Limpieza de ventanas',
      'Limpieza de azulejos',
      'Eliminación de grasa en cocina',
      'Desinfección más profunda',
      'Limpieza más detallada de baños',
      'Frecuencia sugerida: 1–2 veces por semana'
    ]
  },
  {
    id: 'premium',
    name: 'Plan Premium – Hogar Total',
    price: 'Casa pequeña: L 6,000 – L 8,500',
    description: 'Incluye todo lo anterior + servicio completo tipo hotel.',
    features: [
      'Limpieza profunda completa programada',
      'Organización de espacios (cocina, sala, habitaciones)',
      'Limpieza de interiores de electrodomésticos',
      'Prioridad en horarios',
      'Productos premium o ecológicos incluidos',
      'Atención personalizada',
      'Frecuencia sugerida: 2–3 veces por semana'
    ]
  },
  {
    id: 'empresarial',
    name: 'Plan Empresarial (Extra)',
    price: 'Oficina pequeña: L 2,500 – L 4,000 / mes',
    description: 'Limpieza de oficinas y mantenimiento para locales comerciales.',
    features: [
      'Limpieza de oficinas',
      'Mantenimiento diario o semanal',
      'Baños, escritorios, áreas comunes',
      'Opcional: desinfección',
      'Plan personalizado: según contrato'
    ]
  }
]

function selectPlan(planId) {
  selectedPlan.value = planId
}

function saveToStorage(suscripcion) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(suscripcion))
  } catch (error) {
    console.warn('No se pudo guardar la suscripción en localStorage', error)
  }
}

function loadFromStorage() {
  try {
    const item = localStorage.getItem(STORAGE_KEY)
    if (!item) return

    const data = JSON.parse(item)
    if (data?.nombre) nombre.value = data.nombre
    if (data?.correo) correo.value = data.correo
    if (data?.planId) selectedPlan.value = data.planId
    mensaje.value = `Cargado registro previo: ${data.nombre || ''} (${data.correo || ''}) - plan ${data.planName || ''}`
  } catch (error) {
    console.warn('No se pudo cargar la suscripción de localStorage', error)
  }
}

function suscribirse() {
  const plan = planes.find(p => p.id === selectedPlan.value)
  const suscripcion = {
    nombre: nombre.value,
    correo: correo.value,
    planId: selectedPlan.value,
    planName: plan.name,
    planPrice: plan.price,
    fecha: new Date().toISOString()
  }

  saveToStorage(suscripcion)

  mensaje.value = `Gracias ${suscripcion.nombre}, seleccionaste el plan ${suscripcion.planName} (${suscripcion.planPrice}) y tu suscripción fue registrada correctamente.`

  nombre.value = ''
  correo.value = ''
}

onMounted(() => {
  loadFromStorage()
})
</script>

<style scoped>
.sus-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* increased gap for better spacing */
  max-width: 440px;
  margin: 0 auto;
}

.sus-form input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(15,23,42,0.08);
  background: var(--card);
}

.sus-card {
  background: var(--card);
  padding: 1.75rem; /* more breathing room */
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  max-width: 560px;
  margin: 1rem auto 2rem; /* space from heading above and next section below */
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* slightly larger gap between label and input */
}

.label {
  font-size: 0.95rem;
  color: var(--text-dark);
  display: block;
}

.sus-form input {
  width: 100%;
}

.sus-form input:focus-visible {
  outline: 3px solid rgba(37,99,235,0.12);
  outline-offset: 2px;
}

.mensaje {
  margin-top: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  text-align: center;
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.8rem;
}

.plan-card {
  border: 2px solid rgba(15,23,42,0.08);
  border-radius: 12px;
  padding: 1rem;
  background: var(--surface);
  cursor: pointer;
  transition: transform var(--transition) ease, border-color var(--transition) ease, box-shadow var(--transition) ease;
}

.plan-card:hover,
.plan-card:focus-visible {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.plan-card--selected {
  border-color: var(--primary);
  background: rgba(34,197,94,0.1);
  box-shadow: 0 10px 24px rgba(22,163,74,0.2);
}

.plan-title {
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  color: var(--text-dark);
}

.plan-price {
  margin: 0 0 .45rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
}

.plan-description {
  margin-bottom: 0.7rem;
  color: var(--text-muted);
}

.plan-features {
  padding-left: 1.2rem;
  margin: 0 0 .8rem;
}

.plan-features li {
  margin-bottom: 0.3rem;
}

.plan-cta {
  display: inline-block;
  font-size: 0.88rem;
  color: var(--primary);
  font-weight: 700;
}

.plan-card--selected .plan-cta {
  color: var(--success);
}

.payment-section {
  background: var(--surface);
  border: 1px solid rgba(15,23,42,0.1);
  border-radius: 12px;
  padding: 1rem;
  margin: 1.25rem 0;
}

.payment-section h3 {
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
  color: var(--text-dark);
}

.payment-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.payment-option {
  background: var(--card);
  border: 1px solid rgba(15,23,42,0.12);
  border-radius: 8px;
  padding: 0.75rem;
  display: block;
  transition: transform var(--transition) ease, box-shadow var(--transition) ease;
}

.payment-info {
  background: var(--card);
  border: 1px solid rgba(15,23,42,0.12);
  border-radius: 10px;
  padding: 0.75rem;
  width: 100%;
}

.payment-info strong {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.payment-info p {
  margin: 0;
  color: var(--text-muted);
}

.payment-option:hover,
.payment-info:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}


.payment-note {
  margin-top: 0.75rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Ensure heading isn't too close to the card */
h2 {
  margin-bottom: 0.75rem;
}

/* Make the submit button slightly separated and responsive */
.sus-form .btn {
  align-self: stretch;
  max-width: 260px;
}

@media (max-width: 640px) {
  .sus-form .btn { width: 100%; }
}
</style>