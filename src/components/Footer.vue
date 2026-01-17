<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">Seguridad Integral Hub</div>
      <p class="footer-text">
        Consultoría especializada en seguridad integral para instituciones, municipios y organizaciones.
      </p>
      <div class="footer-contact">
        <a href="mailto:danielaflorido47@gmail.com">danielaflorido47@gmail.com</a>
        <a href="tel:+5492804001045">+54 9 280 400-1045</a>
        <a href="https://www.linkedin.com/in/laura-daniela-florido" target="_blank">LinkedIn</a>
      </div>
      <div class="footer-legal">
        © 2025 Seguridad Integral Hub - Laura Daniela Florido. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--azul-oscuro);
  color: white;
  padding: 48px 0 32px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.footer-logo {
  font-family: 'Libre Baskerville', serif;
  font-size: 28px;
  margin-bottom: 16px;
}

.footer-text {
  font-size: 15px;
  opacity: 0.7;
  margin-bottom: 24px;
}

.footer-contact {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.footer-contact a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  font-size: 14px;
}

.footer-contact a:hover {
  opacity: 1;
}

.footer-legal {
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 13px;
  opacity: 0.6;
}
</style>
