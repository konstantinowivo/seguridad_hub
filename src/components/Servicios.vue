<template>
  <section class="servicios" id="servicios">
    <div class="section-header">
      <span class="section-tag">NUESTROS SERVICIOS</span>
      <h2>Soluciones integrales para tu institución</h2>
      <p>
        Elegí el servicio que necesitás o comenzá con un Diagnóstico Inicial para identificar prioridades
      </p>
    </div>
    <div class="servicios-grid">
      <div
        v-for="(servicio, index) in servicios"
        :key="index"
        :class="['servicio-card', { 'destacado': servicio.destacado }]"
      >
        <h3 class="servicio-titulo">{{ servicio.titulo }}</h3>
        <p class="servicio-descripcion">{{ servicio.descripcion }}</p>
        <span v-if="servicio.badge" class="badge-destacado">{{ servicio.badge }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicios = [
  {
    titulo: 'Diagnóstico Integral',
    descripcion: 'Evaluación profesional de riesgos y vulnerabilidades. Punto de partida ideal para fortalecer la seguridad institucional.',
    destacado: true,
    badge: '✓ Punto de partida ideal'
  },
  {
    titulo: 'Auditoría de Seguridad',
    descripcion: 'Análisis técnico profundo del sistema de seguridad. Matriz de riesgos y plan de mejora a corto, mediano y largo plazo.'
  },
  {
    titulo: 'Diseño de Protocolos',
    descripcion: 'Protocolos de actuación y prevención. Reducí riesgos legales y fortalecé la responsabilidad operativa.'
  },
  {
    titulo: 'Capacitación Profesional',
    descripcion: 'Formación presencial, virtual o asincrónica. Temáticas: grooming, violencias, seguridad ciudadana, prevención.'
  },
  {
    titulo: 'Abordaje de Riesgos Sociales',
    descripcion: 'Prevención especializada frente a delitos complejos. Detección temprana y fortalecimiento institucional.'
  },
  {
    titulo: 'Seguridad Digital',
    descripcion: 'Reducción de riesgos tecnológicos. Cultura preventiva digital para instituciones que trabajan con NNyA.'
  },
  {
    titulo: 'Asesoría Estratégica',
    descripcion: 'Acompañamiento técnico para toma de decisiones. Orientación profesional sin necesidad de auditoría completa.'
  },
  {
    titulo: 'Seguimiento Continuo',
    descripcion: 'Garantizá la implementación sostenida. Asistencia ante emergencias y actualización periódica de medidas.'
  }
]
</script>

<style scoped>
.servicios {
  background: var(--bg);
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

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.servicio-card {
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.servicio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--azul-medio) 0%, var(--celeste) 50%, var(--lila) 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.servicio-card.destacado {
  border-color: var(--azul-medio);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.servicio-card.destacado::before {
  transform: scaleX(1);
}

.servicio-card:hover {
  transform: translateY(-4px);
  border-color: var(--azul-medio);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.2);
}

.servicio-card:hover::before {
  transform: scaleX(1);
}

.servicio-titulo {
  font-family: 'Libre Baskerville', serif;
  font-size: 22px;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 700;
}

.servicio-descripcion {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-light);
}

.badge-destacado {
  display: inline-block;
  background: linear-gradient(135deg, var(--azul-medio) 0%, var(--lila) 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .servicios-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 36px;
  }
}
</style>
