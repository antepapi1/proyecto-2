<template>
  <section id="inicio" class="hero">
    <div class="container hero__container">
      <div class="hero__content">
        <span class="hero__badge">Limpieza Profesional Sostenible</span>
        <h1 class="hero__title">
          Transformamos tu hogar<br>con <span class="hero__title-highlight">responsabilidad</span>
        </h1>
        <p class="hero__description">
          Servicio de limpieza ecológica para hogares urbanos en Honduras. Productos biodegradables, personal certificado y resultados excepcionales.
        </p>
        <div class="hero__actions">
          <button class="btn btn-primary hero__btn hero__btn--primary">
            Comenzar ahora
          </button>
          <button class="btn hero__btn hero__btn--secondary">
            Conocer más
          </button>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-number">500+</span>
            <span class="hero__stat-label">Hogares</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-number">98%</span>
            <span class="hero__stat-label">Satisfacción</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-number">100%</span>
            <span class="hero__stat-label">Ecológico</span>
          </div>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__circle"></div>
        <div class="hero__circle hero__circle--secondary"></div>
        <div class="hero__card">
          <div class="hero__card-icon">🌱</div>
          <div class="hero__card-content">
            <h4>Certificado</h4>
            <p>Biodegradable</p>
          </div>
        </div>
        <div class="hero__card hero__card--alt">
          <div class="hero__card-icon">👪</div>
          <div class="hero__card-content">
            <h4>Familiar</h4>
            <p>Seguro</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--background);
  position: relative;
  overflow: hidden;
  padding: var(--space-xl) 0;
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero__content {
  max-width: 600px;
}

.hero__badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.hero__title-highlight {
  color: var(--primary);
  position: relative;
  display: inline-block;
}

.hero__title-highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--primary-soft);
  z-index: -1;
  border-radius: var(--radius-sm);
}

.hero__description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.hero__btn {
  padding: 1rem 2rem;
  font-size: 1rem;
}

.hero__btn--secondary {
  background: transparent;
  border: 1px solid var(--border-medium);
  color: var(--text-primary);
}

.hero__btn--secondary:hover {
  background: var(--surface);
  border-color: var(--primary);
}

.hero__stats {
  display: flex;
  gap: var(--space-xl);
}

.hero__stat {
  display: flex;
  flex-direction: column;
}

.hero__stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.hero__stat-label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero__visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: var(--primary-soft);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;
}

.hero__circle--secondary {
  width: 300px;
  height: 300px;
  background: var(--accent-2);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite reverse;
}

.hero__card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  animation: float 5s ease-in-out infinite;
  z-index: 2;
  min-width: 200px;
}

.hero__card--alt {
  bottom: 20%;
  right: 10%;
  animation: float 7s ease-in-out infinite;
}

.hero__card-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.hero__card-content h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.hero__card-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-lg);
  }
  
  .hero__content {
    max-width: 100%;
  }
  
  .hero__actions {
    justify-content: center;
  }
  
  .hero__stats {
    justify-content: center;
  }
  
  .hero__visual {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
  }
  
  .hero__actions {
    flex-direction: column;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero__stats {
    gap: var(--space-lg);
  }
  
  .hero__visual {
    display: none;
  }
}
</style>