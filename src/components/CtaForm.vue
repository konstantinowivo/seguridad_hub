<template>
  <section class="cta-form" id="diagnostico">
    <div class="section-header">
      <span class="section-tag">EMPEZÁ HOY</span>
      <h2>Solicitá tu Diagnóstico Inicial</h2>
      <p>
        Evaluamos tu institución y te entregamos un informe con recomendaciones priorizadas. Punto de partida ideal para fortalecer tu seguridad.
      </p>
    </div>

    <form class="form-container" @submit.prevent="handleSubmit">
      <div class="form-grid">
        <div class="form-group half">
          <label class="form-label">Nombre completo *</label>
          <input v-model="formData.nombre" type="text" class="form-input" placeholder="Tu nombre" required>
        </div>
        <div class="form-group half">
          <label class="form-label">Institución *</label>
          <input v-model="formData.institucion" type="text" class="form-input" placeholder="Nombre de la institución" required>
        </div>
        <div class="form-group half">
          <label class="form-label">Email *</label>
          <input v-model="formData.email" type="email" class="form-input" placeholder="tu@email.com" required>
        </div>
        <div class="form-group half">
          <label class="form-label">Teléfono *</label>
          <input v-model="formData.telefono" type="tel" class="form-input" placeholder="+54 9 280 400-1045" required>
        </div>
        <div class="form-group">
          <label class="form-label">Contanos brevemente tu situación</label>
          <textarea v-model="formData.mensaje" class="form-textarea" placeholder="¿Qué te preocupa? ¿Qué necesita tu institución? (Opcional)"></textarea>
        </div>
      </div>

      <button type="submit" class="form-submit">
        Solicitar Diagnóstico Inicial →
      </button>

      <p class="form-privacy">
        Al enviar este formulario, aceptás que nos contactemos para coordinar tu diagnóstico.
        Tus datos están protegidos y no serán compartidos con terceros.
      </p>
    </form>

  </section>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  nombre: '',
  institucion: '',
  email: '',
  telefono: '',
  mensaje: ''
})

const handleSubmit = () => {
  // Aquí puedes agregar la lógica de envío del formulario
  console.log('Form submitted:', formData)
  alert('Formulario enviado. Nos pondremos en contacto pronto.')
}
</script>

<style scoped>
.cta-form {
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

.form-container {
  max-width: 800px;
  margin: 48px auto 0;
  padding: 0 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  grid-column: span 2;
}

.form-group.half {
  grid-column: span 1;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--bg);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--azul-medio);
  background: white;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-submit {
  width: 100%;
  background: linear-gradient(135deg, var(--azul-medio) 0%, var(--lila) 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.form-privacy {
  font-size: 13px;
  color: var(--text-light);
  text-align: center;
  margin-top: 16px;
  line-height: 1.6;
}

.contacto-directo {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.contacto-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: var(--bg);
  border-radius: 8px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
}

.contacto-item:hover {
  border-color: var(--azul-medio);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.half {
    grid-column: span 1;
  }
}
</style>
