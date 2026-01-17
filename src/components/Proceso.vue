<template>
  <section class="proceso">
    <div class="section-header">
      <span class="section-tag">CÓMO TRABAJAMOS</span>
      <h2>Proceso claro y profesional</h2>
      <p>Un método probado para resultados concretos</p>
    </div>
    <div class="proceso-steps">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
        <h3 class="step-titulo">{{ step.titulo }}</h3>
        <p class="step-descripcion">{{ step.descripcion }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    titulo: 'Diagnóstico Inicial',
    descripcion: 'Evaluamos tu institución: necesidades, riesgos visibles y áreas de mejora prioritarias.'
  },
  {
    titulo: 'Evaluación de Riesgos',
    descripcion: 'Identificamos vulnerabilidades físicas, organizacionales y sociales con enfoque técnico.'
  },
  {
    titulo: 'Plan de Acción',
    descripcion: 'Diseñamos protocolos, capacitaciones y estrategias preventivas adaptadas a tu contexto.'
  },
  {
    titulo: 'Implementación',
    descripcion: 'Acompañamos la puesta en marcha con capacitaciones y asesoría permanente.'
  },
  {
    titulo: 'Seguimiento',
    descripcion: 'Garantizamos sostenibilidad con revisiones periódicas y asistencia ante emergencias.'
  }
]
</script>

<style scoped>
.proceso {
  background: white;
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--azul-medio) 0%, var(--lila) 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-header h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: var(--text);
  letter-spacing: -1px;
}

.section-header p {
  font-size: 20px;
  color: var(--text-light);
  line-height: 1.6;
}

.proceso-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
  max-width: 1200px;
  margin: 48px auto 0;
  padding: 0 24px;
}

.step {
  position: relative;
  padding-top: 80px;
}

.step-number {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Libre Baskerville', serif;
  font-size: 72px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--azul-claro) 0%, var(--lila-claro) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  line-height: 1;
}

.step-titulo {
  font-family: 'Libre Baskerville', serif;
  font-size: 24px;
  margin-bottom: 12px;
  color: var(--text);
  position: relative;
  z-index: 2;
}

.step-descripcion {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-light);
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .proceso-steps {
    grid-template-columns: 1fr;
  }
}
</style>
