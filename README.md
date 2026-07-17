# Tienda de Uniformes Médicos

E-commerce de presentación (landing + catálogo) para una tienda de uniformes médicos, construido con **HTML, CSS y JavaScript vanilla** (sin frameworks) y desplegado en **GitHub Pages**.

## Características

- Catálogo de productos médicos con showcase visual.
- Animaciones e interacciones en el cliente con JavaScript vanilla (`main.js`, `anim.js`).
- Estilos propios en CSS (96% del proyecto) — incluyendo la página interactiva `flower.html`.
- Activos reales: imágenes de productos y sonidos para feedback en la UI.
- 100% estático: listo para servir en cualquier hosting (GitHub Pages, Netlify, etc.).

## Tech Stack

| Capa       | Tecnología                        |
|------------|-----------------------------------|
| Estructura | HTML5                             |
| Estilos    | CSS3 (vanilla, sin preprocesador) |
| Lógica     | JavaScript (sin frameworks)       |
| Assets     | Imágenes y sonidos propios        |
| Deploy     | GitHub Pages                      |

## Estructura

```
index.html   → página principal (catálogo)
flower.html  → página interactiva con animación
css/         → hojas de estilo
img/         → imágenes de productos
sound/       → sonidos de feedback de UI
main.js      → lógica principal del store
anim.js      → scripts de animación
```

## Cómo ejecutarlo

No requiere build ni dependencias. Simplemente abrir `index.html` en el navegador o servir el directorio:

```bash
python -m http.server 8000
# o
npx serve
```

Desplegado en: [https://ashcroft08.github.io](https://ashcroft08.github.io)

## Sobre el enfoque

El proyecto optó por **vanilla JS y CSS puro** en lugar de un framework: el foco está en construir una interfaz funcional e interactiva cuidando el detalle visual y el rendimiento, sin el peso de un bundler.