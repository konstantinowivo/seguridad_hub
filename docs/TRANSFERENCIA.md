# Documentación Técnica - Seguridad Integral Hub

## Stack Técnico

- **Framework:** Vue 3.5.26 (Composition API)
- **Build Tool:** Vite 5.4.21
- **Tipo:** SPA estática
- **Dependencias:**
  - `vue` 3.4.21
  - `@emailjs/browser` 4.4.1
- **Dev Dependencies:**
  - `@vitejs/plugin-vue` 5.0.4
  - `vite` 5.2.0

**Build output:** `dist/`

---

## Configuración EmailJS

### Setup en EmailJS.com

1. **Crear cuenta:** https://www.emailjs.com/
2. **Service (Email Services → Add New Service):**
   - Conectar Gmail: `info@seguridadintegralhub.com`
   - Copiar **Service ID**
3. **Template (Email Templates → Create New):**
   - Subject: `Nuevo contacto desde Seguridad Integral Hub - {{from_name}}`
   - Content:
   ```
   Nombre: {{from_name}}
   Email: {{from_email}}
   Institución: {{institution}}
   Teléfono: {{phone}}
   Mensaje: {{message}}

   Reply-to: {{reply_to}}
   ```
   - To Email: `{{to_email}}`
   - Copiar **Template ID**
4. **Public Key (Account → API Keys):**
   - Copiar **Public Key**

### Implementación

**Composable:** `src/composables/useEmailService.js`

```javascript
import emailjs from '@emailjs/browser'

export function useEmailService() {
  const sendEmail = async (formData) => {
    const templateParams = {
      to_email: 'info@seguridadintegralhub.com',
      from_name: formData.nombre,
      from_email: formData.email,
      institution: formData.institucion,
      phone: formData.telefono,
      message: formData.mensaje || 'Sin mensaje adicional',
      reply_to: formData.email
    }

    return await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
  }

  return { sendEmail }
}
```

**Componente:** `src/components/CtaForm.vue`
- Formulario en sección `#diagnostico`
- Campos: nombre, institución, email, teléfono, mensaje

---

## Variables de Entorno

**Archivo:** `.env` (raíz del proyecto)

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Notas:**
- Prefijo `VITE_` requerido para exposición al cliente
- Archivo `.env` está en `.gitignore` (NO commitear)
- Template: `.env.example`
- Acceso en código: `import.meta.env.VITE_*`

---

## Testing Local

```bash
npm install
npm run dev  # localhost:5173
```

Probar formulario → verificar email llega a `info@seguridadintegralhub.com`

---

## Estructura Relevante

```
src/
├── components/
│   └── CtaForm.vue              # Formulario de contacto
├── composables/
│   └── useEmailService.js       # Lógica EmailJS
└── main.js

.env                              # Variables (NO commitear)
.env.example                      # Template
vite.config.js                    # Build config
```
