<template>
  <section id="hero" class="hero" role="region" aria-label="Hero">
    <div class="content container">
      <h1>Limpieza ecológica segura</h1>
      <p class="lead">
        Servicio de limpieza sostenible diseñado para hogares urbanos en Honduras.
      </p>
      <button class="btn btn-primary" aria-label="Suscribirse ahora">Suscríbete ahora</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), #38bdf8);
  color: white;
  text-align: center;
  padding: 3rem 0;
}

.content {
  max-width: 720px;
}

h1 {
  font-size: clamp(1.6rem, 3.6vw, 2.6rem);
  margin: 0 0 0.75rem 0;
}

.lead {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  opacity: 0.95;
  margin-bottom: 1.25rem;
}

/* Ensure button uses global btn styles if present */
/* hero button uses global .btn and .btn-primary from global CSS */
</style>