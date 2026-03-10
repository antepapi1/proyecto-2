<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="cards">
      <div class="card">Servicios Activos: 25</div>
      <div class="card">Clientes: 120</div>
      <div class="card">Ingresos: $4,500</div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 2rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>