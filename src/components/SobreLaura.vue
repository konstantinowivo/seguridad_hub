<template>
  <section class="sobre-laura">
    <div class="sobre-grid">
      <div class="sobre-imagen">
        <img src="/resources/daniela_seguridad_hub.png" alt="Laura Daniela Florido" class="foto-daniela" />
      </div>
      <div class="sobre-content">
        <h2>Laura Daniela Florido</h2>
        <p>
          Técnica Universitaria en Seguridad Ciudadana, especializada en seguridad interior y narcotráfico, con formación continua en ciudadanía digital y delitos contra las infancias.
        </p>
        <p>
          Mi diferencial profesional es la capacidad de ver lo que otros no ven: anticipo riesgos, diseño soluciones completas y creo estrategias de prevención, protección y gestión integral.
        </p>
        <div class="credenciales">
          <div v-for="(credencial, index) in credenciales" :key="index" class="credencial">
            <span class="credencial-text">{{ credencial }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const credenciales = [
  'Especialista en Seguridad y Narcotráfico',
  'Formación en Grooming y Delitos Digitales',
  'Prevención Comunitaria',
  'Diseño Estratégico en Seguridad'
]
</script>

<style scoped>
.sobre-laura {
  background: linear-gradient(135deg, var(--azul-oscuro) 0%, var(--azul-medio) 50%, var(--lila) 100%);
  color: white;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.sobre-laura::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.sobre-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.sobre-imagen {
  aspect-ratio: 4/5;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  border: 3px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.foto-daniela {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.sobre-content h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 42px;
  margin-bottom: 24px;
  line-height: 1.2;
}

.sobre-content p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
  opacity: 0.95;
}

.credenciales {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.credencial {
  display: flex;
  align-items: start;
  gap: 12px;
}

.credencial::before {
  content: '★';
  flex-shrink: 0;
  font-size: 20px;
  color: var(--celeste);
}

.credencial-text {
  font-size: 15px;
  font-weight: 500;
}

@media (max-width: 968px) {
  .sobre-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .credenciales {
    grid-template-columns: 1fr;
  }
}
</style>
