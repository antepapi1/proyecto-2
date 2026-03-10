<template>
  <section id="suscripcion" class="section" aria-labelledby="suscripcionTitle">
    <h2 id="suscripcionTitle">Modelo de Suscripción</h2>

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
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const mensaje = ref('')

function suscribirse() {
  // Simulación de registro; aquí conectarías con tu API
  mensaje.value = `Gracias ${nombre.value}, tu suscripción fue registrada correctamente.`
  nombre.value = ''
  correo.value = ''
}
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