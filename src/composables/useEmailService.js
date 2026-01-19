import emailjs from '@emailjs/browser'
import { ref } from 'vue'

export function useEmailService() {
  const isLoading = ref(false)
  const error = ref(null)
  const success = ref(false)

  // Configuración de EmailJS
  // IMPORTANTE: Estas credenciales deben obtenerse de https://www.emailjs.com/
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  /**
   * Envía un email usando EmailJS
   * @param {Object} formData - Datos del formulario
   * @returns {Promise<boolean>} - true si el envío fue exitoso
   */
  const sendEmail = async (formData) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      // Preparar los parámetros del template
      const templateParams = {
        to_email: 'info@seguridadintegralhub.com',
        from_name: formData.nombre,
        from_email: formData.email,
        institution: formData.institucion,
        phone: formData.telefono,
        message: formData.mensaje || 'No se proporcionó mensaje adicional',
        reply_to: formData.email
      }

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      if (response.status === 200) {
        success.value = true
        return true
      } else {
        throw new Error('Error al enviar el email')
      }
    } catch (err) {
      console.error('Error sending email:', err)
      error.value = err.text || err.message || 'Error al enviar el formulario. Por favor, intenta nuevamente.'
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    sendEmail,
    isLoading,
    error,
    success
  }
}
