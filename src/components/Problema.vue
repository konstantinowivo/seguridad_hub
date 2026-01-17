<template>
  <section class="problema">
    <div class="container">
      <div class="problema-grid">
        <div class="problema-content">
          <h2>
            ¿Tu institución está realmente preparada?
          </h2>
          <p>
            La improvisación en seguridad tiene costos: exposición legal, riesgos operativos y falta de respaldo ante situaciones críticas.
          </p>
          <p>
            Las instituciones que trabajan con personas —especialmente con niños, niñas y adolescentes— necesitan protocolos claros, equipos capacitados y estrategias preventivas reales.
          </p>
        </div>

        <div class="problema-list">
          <div v-for="(item, index) in problemas" :key="index" class="problema-item">
            <span class="problema-item-text">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const problemas = [
  'Falta de protocolos actualizados o inexistencia de procedimientos claros',
  'Equipos sin formación en prevención de violencias, grooming o delitos digitales',
  'Riesgos legales por actuaciones sin respaldo normativo',
  'Ausencia de cultura preventiva y dependencia de soluciones reactivas',
  'Desconocimiento de cómo actuar ante situaciones de vulnerabilidad'
]
</script>

<style scoped>
.problema {
  background: white;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.problema-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.problema-content h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: var(--text);
  letter-spacing: -1px;
}

.problema-content p {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 16px;
}

.problema-list {
  margin-top: 32px;
}

.problema-item {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  padding: 20px;
  background: var(--bg);
  border-radius: 8px;
  border-left: 4px solid var(--lila);
}

.problema-item::before {
  content: '✓';
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--lila);
  font-weight: bold;
  font-size: 20px;
}

.problema-item-text {
  font-size: 16px;
  color: var(--text);
  font-weight: 500;
}

@media (max-width: 968px) {
  .problema-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .problema-content h2 {
    font-size: 36px;
  }
}
</style>
