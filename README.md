# Portfolio · Valentín Juarez

Sitio web personal / portfolio profesional para posiciones de Soporte IT, Help Desk e Infraestructura.

## Stack
- HTML5 semántico
- CSS3 (custom properties, grid, flexbox)
- JavaScript vanilla (Intersection Observer, scroll effects)
- Sin frameworks ni dependencias de build

## Estructura
```
portfolio-valen/
├── index.html      # Estructura y contenido
├── style.css       # Estilos y design tokens
├── script.js       # Interactividad
├── vercel.json     # Config de despliegue
└── README.md
```

## Deploy en Vercel (método 1 — CLI)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desde la carpeta del proyecto
cd portfolio-valen
vercel

# 3. Seguir el asistente. En las preguntas:
#    - Set up and deploy? → Y
#    - Which scope? → tu cuenta
#    - Link to existing project? → N
#    - Project name → portfolio-valentin-juarez (o el que quieras)
#    - Directory? → ./ (esta carpeta)
#    - Override settings? → N
```

## Deploy en Vercel (método 2 — GitHub + Vercel web)

1. Subir esta carpeta a un repositorio de GitHub
2. Entrar a https://vercel.com/new
3. Importar el repositorio
4. Framework preset: **Other** (no framework)
5. Root directory: dejar en `.`
6. Hacer clic en **Deploy**

> Cada vez que hagas `git push`, Vercel redespliega automáticamente.

## Agregar el CV

Colocar el archivo PDF del CV en la raíz del proyecto con el nombre exacto:
```
CV_Valentin_Juarez.pdf
```

## Dominio personalizado

Una vez desplegado en Vercel, podés agregar un dominio propio desde:
`Dashboard → Settings → Domains`

## Personalización futura

- **Artículos de Aprendizaje**: reemplazar las cards actuales con links reales a posts
- **Proyectos**: agregar links directos a repositorios de GitHub
- **Certificaciones**: actualizar cuando obtengas nuevas
- **Foto de perfil**: agregar un `<img>` en la sección About con tu foto
