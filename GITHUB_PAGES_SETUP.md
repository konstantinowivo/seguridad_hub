# Configuración de GitHub Pages

## Pasos para Activar GitHub Pages

### 1. Habilitar GitHub Pages en el Repositorio

1. Ve a tu repositorio en GitHub: https://github.com/konstantinowivo/seguridad_hub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral izquierdo, busca **Pages** (bajo la sección "Code and automation")
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 2. Hacer Push del Código con la Configuración

El proyecto ya está configurado con:
- ✅ `vite.config.js` con la base correcta (`/seguridad_hub/`)
- ✅ Workflow de GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Build generado correctamente

Solo necesitas hacer push de los cambios:

```bash
git add .
git commit -m "feat: configure GitHub Pages deployment"
git push origin develop
```

O si quieres deployar desde main:
```bash
git checkout main
git merge develop
git push origin main
```

### 3. Verificar el Deployment

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (toma 1-2 minutos)
4. Una vez completado, tu sitio estará disponible en:

   **https://konstantinowivo.github.io/seguridad_hub/**

### 4. Verificar Permisos (Si el Workflow Falla)

Si el workflow falla con errores de permisos:

1. Ve a **Settings** > **Actions** > **General**
2. Busca la sección **Workflow permissions**
3. Selecciona **Read and write permissions**
4. Marca la casilla **Allow GitHub Actions to create and approve pull requests**
5. Guarda los cambios
6. Re-ejecuta el workflow fallido desde la pestaña **Actions**

## URLs del Proyecto

- **Repositorio:** https://github.com/konstantinowivo/seguridad_hub
- **GitHub Pages:** https://konstantinowivo.github.io/seguridad_hub/
- **Branch principal:** develop
- **Branch de producción:** main

## Cómo Funciona

1. Cada vez que hagas `git push` a las ramas `main` o `develop`, se dispara automáticamente el workflow
2. GitHub Actions:
   - Instala las dependencias
   - Ejecuta `npm run build`
   - Despliega la carpeta `dist` a GitHub Pages
3. El sitio se actualiza automáticamente en unos minutos

## Troubleshooting

### El sitio muestra 404
- Verifica que GitHub Pages esté configurado en **Source: GitHub Actions**
- Asegúrate de que el workflow se haya ejecutado correctamente
- Espera unos minutos después del deployment

### Los assets no cargan (imágenes, CSS, JS)
- Esto ya está solucionado con `base: '/seguridad_hub/'` en `vite.config.js`
- Si persiste, limpia el caché del navegador

### El workflow falla
- Verifica los permisos en Settings > Actions
- Revisa los logs en la pestaña Actions para ver el error específico

## Deployment Manual (Alternativa)

Si prefieres no usar GitHub Actions, puedes hacer deployment manual:

```bash
# Generar el build
npm run build

# Instalar gh-pages (solo la primera vez)
npm install -D gh-pages

# Agregar script en package.json:
# "deploy": "gh-pages -d dist"

# Deployar
npm run deploy
```

Pero se recomienda usar GitHub Actions para deployment automático.
