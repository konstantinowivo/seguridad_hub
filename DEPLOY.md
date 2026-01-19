# Guía de Deployment a GitHub Pages

## Configuración Actual

El proyecto está configurado para deployarse automáticamente a GitHub Pages usando GitHub Actions.

### Archivos Configurados

1. **vite.config.js** - Configurado con `base: '/seguridad_hub/'` para rutas correctas
2. **.github/workflows/deploy.yml** - Workflow de GitHub Actions para deployment automático
3. **package.json** - Scripts de build configurados

## Pasos para Activar GitHub Pages

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio: https://github.com/konstantinowivo/seguridad_hub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 2. Configurar Permisos de GitHub Actions

1. Ve a **Settings** > **Actions** > **General**
2. Scroll hasta **Workflow permissions**
3. Selecciona **Read and write permissions**
4. Marca **Allow GitHub Actions to create and approve pull requests**
5. Click en **Save**

### 3. Hacer Push y Deployar

Haz push de tus cambios a la rama `main`:

```bash
git add .
git commit -m "feat: configure GitHub Pages deployment"
git push origin main
```

El deployment se ejecutará automáticamente.

### 4. Verificar el Deployment

1. Ve a la pestaña **Actions** en GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera 1-2 minutos a que complete
4. Tu sitio estará disponible en:

   **https://konstantinowivo.github.io/seguridad_hub/**

## Cómo Funciona el Deployment Automático

Cada vez que haces `git push` a la rama `main`:

1. GitHub Actions detecta el push
2. Instala las dependencias (`npm ci`)
3. Ejecuta el build (`npm run build`)
4. Despliega la carpeta `dist/` a GitHub Pages
5. El sitio se actualiza automáticamente

## Verificación Local del Build

Antes de hacer push, puedes verificar que el build funciona:

```bash
# Generar build
npm run build

# Ver el contenido generado
ls dist

# Previsualizar el build localmente
npm run preview
```

El comando `preview` te mostrará el sitio en http://localhost:4173

## Estructura de URLs en Producción

- **Página principal:** https://konstantinowivo.github.io/seguridad_hub/
- **Assets:** https://konstantinowivo.github.io/seguridad_hub/assets/
- **Imágenes:** https://konstantinowivo.github.io/seguridad_hub/resources/

Todas las rutas incluyen el prefijo `/seguridad_hub/` gracias a la configuración en `vite.config.js`.

## Troubleshooting

### El workflow falla con error de permisos

**Solución:** Verifica los permisos en Settings > Actions > General > Workflow permissions

### El sitio muestra 404

**Soluciones:**
1. Verifica que GitHub Pages esté configurado con Source: **GitHub Actions**
2. Asegúrate de que el workflow se ejecutó exitosamente
3. Espera unos minutos (puede tomar hasta 5 minutos)
4. Limpia caché del navegador (Ctrl + Shift + R)

### Los assets no cargan (CSS, JS, imágenes)

**Solución:** Esto ya está resuelto con `base: '/seguridad_hub/'`. Si persiste:
1. Verifica que el build generó correctamente: `npm run build`
2. Revisa que las rutas en `dist/index.html` tengan el prefijo `/seguridad_hub/`

### Quiero deployar desde otra rama

Edita `.github/workflows/deploy.yml` línea 5:

```yaml
on:
  push:
    branches:
      - main      # Cambia esto a la rama deseada
      - develop   # O agrega más ramas
```

## Deployment Manual (No Recomendado)

Si por alguna razón no puedes usar GitHub Actions:

```bash
# Instalar gh-pages
npm install -D gh-pages

# Agregar script en package.json
# "deploy": "gh-pages -d dist"

# Generar build y deployar
npm run build
npm run deploy
```

Pero se **recomienda fuertemente usar GitHub Actions** por deployment automático.

## Rollback a una Versión Anterior

Si necesitas volver a una versión anterior:

1. Ve a **Actions** en GitHub
2. Encuentra el workflow exitoso de la versión anterior
3. Click en **Re-run jobs** > **Re-run all jobs**

O haz un `git revert` del commit problemático y push.

## Monitoreo

- **Status del sitio:** https://konstantinowivo.github.io/seguridad_hub/
- **Workflows:** https://github.com/konstantinowivo/seguridad_hub/actions
- **Settings:** https://github.com/konstantinowivo/seguridad_hub/settings/pages

## Próximos Pasos

Una vez que GitHub Pages esté activo:

1. Configura un dominio personalizado (opcional)
2. Habilita HTTPS (automático con GitHub Pages)
3. Configura variables de entorno para EmailJS (ver CONFIGURACION_EMAIL.md)
