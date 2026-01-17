<template>
  <nav class="navbar">
    <div class="nav-content">
      <a href="#" style="line-height: 0;">
        <img src="/resources/LOGO.png" alt="Seguridad Integral Hub" class="logo">
      </a>
      <a href="#diagnostico" class="nav-cta">Solicitar Diagnóstico</a>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: rgba(250, 250, 249, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  padding: 2px 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100px;
  overflow: visible;
}

.logo {
  height: 310px;
  width: auto;
  object-fit: contain;
  position: relative;
  z-index: 10;
}

.nav-cta {
  background: var(--azul-medio);
  color: white;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-cta:hover {
  background: var(--azul-oscuro);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

@media (max-width: 968px) {
  .logo {
    height: 200px;
  }

  .nav-content {
    height: 80px;
  }
}

@media (max-width: 768px) {
  .logo {
    height: 150px;
  }

  .nav-content {
    height: 60px;
  }
}

@media (max-width: 480px) {
  .logo {
    height: 100px;
  }

  .nav-content {
    height: 50px;
  }
}
</style>
