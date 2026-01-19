# Configuración del Servicio de Email

Este proyecto utiliza **EmailJS** para el envío de emails desde el formulario de contacto sin necesidad de un backend.

## Configuración Inicial

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu email
3. Verifica tu cuenta

### 2. Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Anota el **Service ID** que se genera

### 3. Crear un template de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura el template con los siguientes campos:

**Template Name:** `diagnostico_inicial`

**Subject:** `Nueva Solicitud de Diagnóstico - {{from_name}}`

**Content:**
```
Nueva solicitud de diagnóstico inicial

Datos del solicitante:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Teléfono: {{phone}}
- Institución: {{institution}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de Seguridad Hub.
```

**To Email:** `info@seguridadintegralhub.com`

4. Guarda el template y anota el **Template ID**

### 4. Obtener la Public Key

1. Ve a **Account** > **General**
2. En la sección **API Keys**, encontrarás tu **Public Key**
3. Cópiala para usarla en la configuración

### 5. Configurar las variables de entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y reemplaza los valores:
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   ```

3. Reinicia el servidor de desarrollo si está corriendo:
   ```bash
   npm run dev
   ```

## Campos del Formulario

El formulario envía los siguientes datos:

- `from_name`: Nombre completo del solicitante
- `from_email`: Email del solicitante
- `phone`: Teléfono de contacto
- `institution`: Nombre de la institución
- `message`: Mensaje adicional (opcional)
- `to_email`: Destinatario fijo (info@seguridadintegralhub.com)

## Solución de Problemas

### El formulario no envía emails

1. Verifica que las variables de entorno estén correctamente configuradas
2. Asegúrate de que el servidor de desarrollo esté reiniciado después de cambiar el `.env`
3. Revisa la consola del navegador para ver errores
4. Verifica que tu cuenta de EmailJS esté activa y con cuota disponible

### Errores comunes

- **"Public key is required"**: Falta configurar `VITE_EMAILJS_PUBLIC_KEY`
- **"Template not found"**: El `VITE_EMAILJS_TEMPLATE_ID` es incorrecto
- **"Service not found"**: El `VITE_EMAILJS_SERVICE_ID` es incorrecto

## Límites del Plan Gratuito

EmailJS ofrece:
- 200 emails por mes (plan gratuito)
- 1000 emails por mes (plan básico - $7/mes)

Si necesitas más capacidad, considera actualizar tu plan en EmailJS.

## Seguridad

- El archivo `.env` está en `.gitignore` para no exponer las credenciales
- Las credenciales son solo del lado del cliente (public key)
- EmailJS valida el origen de las solicitudes
- Se recomienda configurar un dominio permitido en la configuración de EmailJS para mayor seguridad

## Alternativas

Si prefieres usar otro servicio:

1. **FormSubmit** - https://formsubmit.co/
2. **Formspree** - https://formspree.io/
3. **Backend personalizado** con NodeMailer o similar

El código está estructurado en un composable (`src/composables/useEmailService.js`) que puede ser fácilmente adaptado para otros servicios.
