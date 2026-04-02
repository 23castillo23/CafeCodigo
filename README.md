# ☕ Café </>
### Mi guía personal de programación web — desde cero

> Una guía que crece conmigo. Cada capítulo explica un concepto con analogías del mundo real, ejemplos de código y ejercicios prácticos. Sin resumir nada, sin saltarse pasos.

---

## 🗺️ ¿Qué es esto?

**Café </>** es mi guía de aprendizaje personal de programación web, construida como una Progressive Web App (PWA). La desarrollé para entender de verdad cada concepto — no solo memorizarlo — usando analogías, diagramas y código real que puedo modificar directamente.

La guía está organizada en **4 niveles** con **13 capítulos** que van desde "¿qué es programar?" hasta conectar con bases de datos en la nube.

---

## 📚 Contenido

### Tema 00 · Antes de Empezar
| Cap | Título | Temas |
|-----|--------|-------|
| 00 | Antes de empezar | ¿Qué es programar?, lenguajes, navegador, terminal, Git, APIs, glosario |

### Tema 01 · Fundamentos Web
| Cap | Título | Temas |
|-----|--------|-------|
| 01 | Los bloques de construcción | Etiquetas, elementos, atributos, anidamiento |
| 02 | El cerebro de la página | Variables, funciones, eventos, DOM |
| 03 | El estilo de la página | Selectores, Box Model, Flexbox, variables CSS, responsive |
| 04 | Estructuras de control | Booleanos, comparadores, if/else, switch, bucles |
| 05 | Arreglos y Objetos | Arrays, métodos, objetos, JSON |

### Tema 02 · Nivel Intermedio
| Cap | Título | Temas |
|-----|--------|-------|
| 06 | Funciones avanzadas | Arrow functions, callbacks, scope, closures |
| 07 | DOM en profundidad | Crear, modificar, eliminar elementos, delegación de eventos |
| 08 | Formularios y validaciones | Inputs, lectura de valores, validación, submit |
| 09 | Código asíncrono | Síncrono vs asíncrono, Promises, async/await |
| 10 | Almacenamiento local | localStorage, sessionStorage, JSON |

### Tema 03 · Proyectos Reales
| Cap | Título | Temas |
|-----|--------|-------|
| 11 | Conexión con APIs | fetch, GET/POST, CORS, manejo de errores HTTP |
| 12 | Base de datos en la nube | Firebase, Firestore, Auth, tiempo real |

---

## 🏗️ Estructura del proyecto

```
CafeCodigo/
│
├── index.html              ← Portada de la guía
├── capitulos.html          ← Biblioteca con todos los capítulos
├── sw.js                   ← Service Worker (PWA offline)
├── manifest.webmanifest    ← Configuración de la PWA
│
├── css/
│   └── style.css           ← Todo el diseño visual
│
├── js/
│   └── script.js           ← Lógica, datos y funciones
│
├── capitulos/
│   ├── cap00-conceptos.html
│   ├── cap01-html.html
│   ├── cap02-javascript.html
│   ├── cap03-css.html
│   ├── cap04-control.html
│   ├── cap05-datos.html
│   ├── cap06-funciones.html
│   ├── cap07-dom.html
│   ├── cap08-formularios.html
│   ├── cap09-async.html
│   ├── cap10-almacenamiento.html
│   ├── cap11-api.html
│   └── cap12-firebase.html
│
├── icons/
│   └── icon.svg            ← Ícono de la PWA
│
└── image/
    └── icons/
        ├── icon-192.png
        └── icon-512.png
```

---

## ⚡ Tecnologías usadas

| Tecnología | Para qué |
|-----------|---------|
| HTML5 | Estructura de cada capítulo |
| CSS3 | Diseño, variables, Flexbox, Grid, responsive |
| JavaScript | Lógica, DOM, construcción dinámica de la UI |
| PWA (Service Worker) | Funciona sin internet, instalable en celular |
| Web Manifest | Ícono y comportamiento como app nativa |
| LocalStorage | Sistema de progreso (en desarrollo) |

---

## 📱 Características

- **PWA completa** — se instala en el celular como app nativa y funciona sin internet
- **100% responsive** — diseñada para estudiar en cualquier pantalla
- **Sin dependencias** — no usa frameworks ni librerías externas, solo HTML, CSS y JS puro
- **Sidebar dinámico** — en móvil aparece como menú deslizable con botón flotante
- **Resaltado por scroll** — el sidebar marca automáticamente la lección que estás leyendo
- **Generación dinámica** — los capítulos se construyen desde el arreglo `TEMAS` en `script.js`

---

## 🚀 Cómo usar localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/CafeCodigo.git

# 2. Entra a la carpeta
cd CafeCodigo

# 3. Abre con Live Server en VS Code
# (clic derecho en index.html → Open with Live Server)
# O abre index.html directamente en el navegador
```

> **Nota:** Para que el Service Worker funcione correctamente, usa Live Server o cualquier servidor local. Abrir el archivo directamente (`file://`) puede limitar algunas funciones de la PWA.

---

## ➕ Cómo agregar un capítulo nuevo

La guía está diseñada para crecer. Agregar contenido nuevo es simple:

### Paso 1 — Crear el archivo HTML
Copia la estructura de cualquier capítulo existente (por ejemplo `cap05-datos.html`) y guárdalo como `cap13-nuevo-tema.html` en la carpeta `capitulos/`.

### Paso 2 — Registrarlo en `script.js`
Dentro del arreglo `TEMAS`, agrega un objeto al tema correspondiente:

```javascript
{
  id:        'cap13-nuevo-tema',
  numero:    '13',
  titulo:    'Nombre del capítulo',
  desc:      'Descripción corta de lo que aprenderás.',
  lang:      'js',            // 'html', 'css', 'js' o 'gen'
  archivo:   'capitulos/cap13-nuevo-tema.html',
  lecciones: ['🔑 Lección 1', '📦 Lección 2', '🔗 Lección 3']
}
```

### Paso 3 — Actualizarlo en `sw.js`
Agrega la ruta al arreglo `ARCHIVOS` para que funcione sin internet:

```javascript
'./capitulos/cap13-nuevo-tema.html'
```

### Paso 4 — Incrementa la versión del caché
Cambia `'cafe-codigo-v5'` a `'cafe-codigo-v6'` en `sw.js` para que el Service Worker se actualice.

---

## 📖 Filosofía de la guía

Cada concepto se explica con:

1. **Una analogía del mundo real** — antes del código
2. **La explicación** — qué es, para qué sirve, cuándo usarlo
3. **El código** — con comentarios línea por línea
4. **Un tip o advertencia** — lo que confunde a todos al principio
5. **Un ejemplo en la práctica** — cómo aparece en proyectos reales

No se resume nada. No se salta nada. Si algo puede confundir, se explica con más detalle.

---

## 🛣️ Roadmap

- [x] Cap 00 — Antes de empezar (conceptos, vocabulario, glosario)
- [x] Cap 01 — HTML
- [x] Cap 02 — JavaScript bases
- [x] Cap 03 — CSS completo
- [x] Cap 04 — Estructuras de control
- [x] Cap 05 — Arreglos y Objetos
- [x] Cap 06 — Funciones avanzadas
- [x] Cap 07 — DOM en profundidad
- [x] Cap 08 — Formularios y validaciones
- [x] Cap 09 — Código asíncrono
- [x] Cap 10 — Almacenamiento local
- [x] Cap 11 — Conexión con APIs
- [x] Cap 12 — Firebase
- [ ] Cap 13 — Herramientas del desarrollador
- [ ] Cap 14 — Git y Terminal (capítulo interactivo)
- [ ] Sistema de progreso con localStorage
- [ ] Sección de ejercicios por capítulo
- [ ] Modo oscuro / claro

---

## 📝 Notas personales

Esta guía la construí mientras aprendía — cada capítulo refleja lo que yo necesitaba entender en ese momento. Si algo no está claro, probablemente ya está marcado para mejorarse.

El objetivo final es poder leer código de cualquier proyecto real, modificarlo sin romper nada, y eventualmente construir apps propias de principio a fin.

---

*Hecho con paciencia, analogías y mucho ☕*
