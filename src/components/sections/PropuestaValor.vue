<template>
  <section id="propuesta" class="section" ref="root" aria-labelledby="propuestaTitle">
    <div class="container" style="background: var(--surface); padding: 1.5rem; border-radius: 12px;">
      <h2 id="propuestaTitle">Nuestra Propuesta de Valor</h2>

      <div class="cards">
        <article class="card pv" aria-labelledby="pv1">
          <div class="icon" aria-hidden="true">🌱</div>
          <h3 id="pv1">Biodegradables certificados</h3>
          <p>Fórmulas responsables sin tóxicos de alta preocupación.</p>
        </article>

        <article class="card pv" aria-labelledby="pv2">
          <div class="icon" aria-hidden="true">👶</div>
          <h3 id="pv2">Seguridad comprobada</h3>
          <p>Aptos para hogares con niños, mascotas y personas sensibles.</p>
        </article>

        <article class="card pv" aria-labelledby="pv3">
          <div class="icon" aria-hidden="true">🔄</div>
          <h3 id="pv3">Suscripción flexible</h3>
          <p>Entrega recurrente, sin permanencia, pausa cuando quieras.</p>
        </article>

        <article class="card pv" aria-labelledby="pv4">
          <div class="icon" aria-hidden="true">📊</div>
          <h3 id="pv4">Impacto medible</h3>
          <p>Indicadores de ahorro de plásticos y químicos por hogar.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="propuesta-resumen" class="section" aria-labelledby="propuestaResumenTitle">
    <div class="container" style="background: var(--surface); padding: 1.5rem; border-radius: 12px;">
      <h2 id="propuestaResumenTitle">¿Por qué elegirnos y no a otros como Macdel?</h2>
      <p>Nos tomamos tu hogar en serio: adaptamos el servicio, somos flexibles y cuidamos cada detalle.</p>
      <ul class="resumen-list">
        <li><strong>Atención personalizada:</strong> nos adaptamos a tus necesidades, escuchamos y tratamos con calidez.</li>
        <li><strong>Flexibilidad:</strong> horarios cómodos, cambios de fecha sin problema y opciones según presupuesto.</li>
        <li><strong>Productos eco-friendly:</strong> biodegradables, seguros para niños y mascotas.</li>
        <li><strong>Calidad constante:</strong> personal estable, supervisión directa y control de cada visita.</li>
        <li><strong>Precio-valor superior:</strong> precios justos, más beneficios y ahorro con suscripción.</li>
        <li><strong>Confianza y seguridad:</strong> personal responsable, respeto absoluto y trato serio.</li>
      </ul>
      <p>Otros limpian. Nosotros mejoramos tu calidad de vida.</p>
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
.cards {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.pv {
  transition: transform var(--transition) ease, box-shadow var(--transition) ease;
}

.pv:hover,
.pv:focus-within {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.icon {
  font-size: 26px;
  margin-bottom: 0.5rem;
}

.resumen-list {
  margin: 1rem 0;
  padding-left: 1.2rem;
}

.resumen-list li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
</style>