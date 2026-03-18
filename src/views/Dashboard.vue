<template>
  <div class="dashboard">
    <div class="container">
      <header class="dashboard__header">
        <h1 class="dashboard__title">Dashboard</h1>
        <p class="dashboard__subtitle">Panel de control y métricas del servicio</p>
      </header>

      <div class="dashboard__grid">
        <div v-for="(stat, index) in stats" :key="index" class="dashboard__stat-card">
          <div class="dashboard__stat-icon" :style="{ backgroundColor: stat.color + '20', color: stat.color }">
            {{ stat.icon }}
          </div>
          <div class="dashboard__stat-content">
            <span class="dashboard__stat-value">{{ stat.value }}</span>
            <span class="dashboard__stat-label">{{ stat.label }}</span>
          </div>
          <div class="dashboard__stat-trend" :class="`dashboard__stat-trend--${stat.trend.direction}`">
            {{ stat.trend.value }}% vs mes anterior
          </div>
        </div>
      </div>

      <div class="dashboard__charts">
        <div class="dashboard__chart">
          <h3>Servicios por mes</h3>
          <div class="dashboard__chart-placeholder">
            <div v-for="n in 6" :key="n" class="dashboard__bar" :style="{ height: (40 + Math.random() * 60) + 'px' }"></div>
          </div>
        </div>

        <div class="dashboard__chart">
          <h3>Distribución de clientes</h3>
          <div class="dashboard__pie-placeholder">
            <div class="dashboard__pie-segment" v-for="(segment, i) in pieSegments" :key="i" 
                 :style="{ transform: `rotate(${segment.start}deg)`, background: segment.color }">
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard__recent">
        <h3>Actividad reciente</h3>
        <div class="dashboard__activity-list">
          <div v-for="(activity, index) in recentActivities" :key="index" class="dashboard__activity-item">
            <span class="dashboard__activity-time">{{ activity.time }}</span>
            <span class="dashboard__activity-desc">{{ activity.description }}</span>
            <span class="dashboard__activity-status" :class="`dashboard__activity-status--${activity.status}`">
              {{ activity.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { icon: '🧹', value: '25', label: 'Servicios Activos', color: '#0B4F3A', trend: { direction: 'up', value: 12 } },
  { icon: '👥', value: '120', label: 'Clientes', color: '#2D8C6B', trend: { direction: 'up', value: 8 } },
  { icon: '💰', value: 'L 4,500', label: 'Ingresos Mensuales', color: '#E3A587', trend: { direction: 'up', value: 15 } },
  { icon: '⭐', value: '4.8', label: 'Calificación Promedio', color: '#5B8C7A', trend: { direction: 'up', value: 5 } }
])

const pieSegments = ref([
  { start: 0, color: '#0B4F3A' },
  { start: 120, color: '#2D8C6B' },
  { start: 240, color: '#E3A587' }
])

const recentActivities = ref([
  { time: 'Hace 5 min', description: 'Nueva suscripción - Plan Premium', status: 'completado' },
  { time: 'Hace 2 horas', description: 'Servicio completado - Col. Lomas', status: 'completado' },
  { time: 'Hace 3 horas', description: 'Pago recibido - Plan Básico', status: 'procesado' },
  { time: 'Ayer', description: 'Nuevo cliente registrado', status: 'pendiente' }
])
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: var(--space-xl) 0;
  background: var(--surface-alt);
}

.dashboard__header {
  margin-bottom: var(--space-xl);
}

.dashboard__title {
  font-size: 2.5rem;
  margin-bottom: var(--space-xs);
}

.dashboard__subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.dashboard__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.dashboard__stat-card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
}

.dashboard__stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.dashboard__stat-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
}

.dashboard__stat-content {
  margin-bottom: var(--space-sm);
}

.dashboard__stat-value {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.dashboard__stat-label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.dashboard__stat-trend {
  font-size: 0.85rem;
  padding: var(--space-xs) 0;
  border-top: 1px solid var(--border-light);
}

.dashboard__stat-trend--up {
  color: #10b981;
}

.dashboard__stat-trend--down {
  color: #ef4444;
}

.dashboard__charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.dashboard__chart {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.dashboard__chart h3 {
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.dashboard__chart-placeholder {
  display: flex;
  align-items: flex-end;
  gap: var(--space-sm);
  height: 200px;
  padding: var(--space-md) 0;
}

.dashboard__bar {
  flex: 1;
  background: var(--primary-soft);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: height var(--transition-base);
  position: relative;
}

.dashboard__bar:hover {
  background: var(--primary);
}

.dashboard__pie-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.dashboard__pie-segment {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%);
  transform-origin: 50% 50%;
}

.dashboard__recent {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.dashboard__recent h3 {
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.dashboard__activity-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.dashboard__activity-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.dashboard__activity-item:hover {
  background: var(--surface-alt);
}

.dashboard__activity-time {
  min-width: 100px;
  color: var(--text-tertiary);
  font-size: 0.9rem;
}

.dashboard__activity-desc {
  flex: 1;
  color: var(--text-primary);
}

.dashboard__activity-status {
  padding: 4px var(--space-xs);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  text-transform: capitalize;
}

.dashboard__activity-status--completado {
  background: #10b98120;
  color: #10b981;
}

.dashboard__activity-status--procesado {
  background: #f59e0b20;
  color: #f59e0b;
}

.dashboard__activity-status--pendiente {
  background: #ef444420;
  color: #ef4444;
}

@media (max-width: 1024px) {
  .dashboard__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .dashboard__charts {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard__grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard__activity-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
  
  .dashboard__activity-time {
    min-width: auto;
  }
}
</style>