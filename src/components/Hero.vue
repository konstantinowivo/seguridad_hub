<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-tag">✓ Consultoría Especializada</span>
        <h1>
          Protegé tu institución<br>
          con seguridad real
        </h1>
        <p class="hero-subtitle">
          Diagnóstico profesional, protocolos actualizados y acompañamiento técnico para instituciones que necesitan prevenir riesgos y fortalecer su seguridad.
        </p>
        <div class="hero-ctas">
          <a href="#diagnostico" class="btn-primary">
            Solicitar Diagnóstico Inicial →
          </a>
          <a href="#servicios" class="btn-secondary">
            Ver Todos los Servicios
          </a>
        </div>
      </div>

      <div class="hero-logo">
        <img src="/resources/logo_seguridad_hub_sin_fondo.png" alt="Seguridad Hub Logo" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--azul-oscuro) 0%, var(--azul-medio) 50%, var(--lila) 100%);
  color: white;
  padding: 31px 0 90px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
}

.hero-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo img {
  width: 100%;
  height: auto;
  max-width: 600px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero h1 {
  font-family: 'Libre Baskerville', serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  max-width: 900px;
  letter-spacing: -1.5px;
}

.hero-subtitle {
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 700px;
  opacity: 0.95;
  font-weight: 300;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: var(--azul-oscuro);
  padding: 18px 36px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 18px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.5);
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-logo {
    order: -1;
  }

  .hero-logo img {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px 0 50px;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-ctas {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .hero-logo img {
    max-width: 300px;
  }
}
</style>
