<template>
  <section class="diferenciadores">
    <div class="section-header">
      <span class="section-tag">¿POR QUÉ ELEGIRNOS?</span>
      <h2>Enfoque integral y preventivo</h2>
    </div>
    <div class="diferenciadores-grid">
      <div v-for="(diferenciador, index) in diferenciadores" :key="index" class="diferenciador">
        <div class="diferenciador-icon">{{ diferenciador.icon }}</div>
        <h3>{{ diferenciador.titulo }}</h3>
        <p>{{ diferenciador.descripcion }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const diferenciadores = [
  {
    icon: '🛡️',
    titulo: 'Enfoque Preventivo',
    descripcion: 'No esperamos a que ocurra el problema. Anticipamos riesgos y construimos estrategias sostenibles.'
  },
  {
    icon: '📋',
    titulo: 'Base Legal Sólida',
    descripcion: 'Todos nuestros protocolos y recomendaciones están alineados con normativa vigente y mejores prácticas.'
  },
  {
    icon: '👥',
    titulo: 'Perspectiva Humana',
    descripcion: 'Enfoque en derechos humanos, lenguaje claro y soluciones realistas adaptadas a cada contexto.'
  },
  {
    icon: '✓',
    titulo: 'Experiencia Técnica',
    descripcion: 'Años de trabajo en seguridad ciudadana, riesgos sociales y temas sensibles complejos.'
  },
  {
    icon: '⭐',
    titulo: 'Soluciones a Medida',
    descripcion: 'No usamos plantillas genéricas. Cada diagnóstico y protocolo es diseñado para tu institución específica.'
  },
  {
    icon: '🔄',
    titulo: 'Acompañamiento Continuo',
    descripcion: 'No te dejamos solo después de la entrega. Ofrecemos seguimiento y asesoría permanente.'
  }
]
</script>

<style scoped>
.diferenciadores {
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

.diferenciadores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 48px auto 0;
  padding: 0 24px;
}

.diferenciador {
  background: white;
  padding: 32px;
  border-radius: 12px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
}

.diferenciador:hover {
  border-color: var(--azul-medio);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.diferenciador-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--azul-medio) 0%, var(--lila) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
}

.diferenciador h3 {
  font-family: 'Libre Baskerville', serif;
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text);
}

.diferenciador p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .diferenciadores-grid {
    grid-template-columns: 1fr;
  }
}
</style>
