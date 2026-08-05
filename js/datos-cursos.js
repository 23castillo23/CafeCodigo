/* ============================================
   CAFÉ </> · GUÍA DE APRENDIZAJE
   datos-cursos.js — Contenido del curso
   Para agregar/editar capítulos, temas o
   lecciones, solo modifica este archivo.
   No contiene lógica, solo datos.
   ============================================ */

const TEMAS = [
  {
    id:     'inicio',
    numero: '00',
    titulo: 'Antes de Empezar',
    desc:   'Conceptos, vocabulario y lógica — todo lo que necesitas entender antes de escribir tu primera línea de código.',
    bloqueado: false,
    capitulos: [
      {
        id:        'cap00-conceptos',
        numero:    '00',
        titulo:    'Antes de empezar',
        desc:      'Qué es programar, qué son HTML, CSS y JavaScript, cómo funciona el navegador y la lógica básica.',
        lang:      'gen',
        archivo:   'capitulos/cap00-conceptos.html',
        lecciones: ['💡 ¿Qué es programar?', '🗣️ Lenguajes', '🏷️ HTML', '🎨 CSS', '⚙️ JS', '🌐 Navegador', '✏️ Editor', '🐛 Errores', '🧠 Lógica', '🏗️ Front/Back', '🤝 Cliente/Servidor', '🔌 API', '⌨️ Terminal', '📸 Git', '🗄️ BD', '🧩 Frameworks', '📖 Glosario']
      }
    ]
  },
  {
    id:     'fundamentos',
    numero: '01',
    titulo: 'Fundamentos Web',
    desc:   'Las bases de HTML, CSS y JavaScript — todo lo que necesitas para leer y entender cualquier página web.',
    bloqueado: false,
    capitulos: [
      {
        id:        'cap01-html',
        numero:    '01',
        titulo:    'Los bloques de construcción',
        desc:      'Etiquetas, elementos y atributos — el vocabulario base de toda página web.',
        lang:      'html',
        archivo:   'capitulos/cap01-html.html',
        lecciones: ['🏷️ Etiqueta', '🪆 Elemento', '📋 Atributo', '🏠 Anidamiento']
      },
      {
        id:        'cap02-javascript',
        numero:    '02',
        titulo:    'El cerebro de la página',
        desc:      'Variables, funciones, eventos y el DOM.',
        lang:      'js',
        archivo:   'capitulos/cap02-javascript.html',
        lecciones: ['📦 Variable', '📋 Función', '🔔 Evento', '🗺️ DOM']
      },
      {
        id:        'cap03-css',
        numero:    '03',
        titulo:    'El estilo de la página',
        desc:      'Selectores, colores, tipografía, Box Model, Flexbox, variables y responsive.',
        lang:      'css',
        archivo:   'capitulos/cap03-css.html',
        lecciones: ['🎨 CSS', '🎯 Selectores', '🖌️ Propiedades', '📦 Box Model', '↔️ Flexbox', '🔧 Variables', '📱 Responsive', '🌊 Cascada']
      },
      {
        id:        'cap04-control',
        numero:    '04',
        titulo:    'Estructuras de control',
        desc:      'if/else, bucles y operadores — cómo el código toma decisiones y repite tareas.',
        lang:      'js',
        archivo:   'capitulos/cap04-control.html',
        lecciones: ['✅ Booleanos', '⚖️ Comparación', '🔗 Lógicos', '🔀 if/else', '🪜 else if', '🎛️ switch', '🔁 for', '⏳ while', '📋 forEach']
      },
      {
        id:        'cap05-datos',
        numero:    '05',
        titulo:    'Arreglos y Objetos',
        desc:      'Cómo guardar y organizar colecciones de datos — la base de cualquier app real.',
        lang:      'js',
        archivo:   'capitulos/cap05-datos.html',
        lecciones: ['📚 Arreglos', '🔑 Acceso', '🛠️ Métodos', '🗃️ Objetos', '📌 Propiedades', '🪆 Anidados']
      }
    ]
  },
  {
    id:     'intermedio',
    numero: '02',
    titulo: 'Nivel Intermedio',
    desc:   'Funciones avanzadas, manipulación del DOM en profundidad, formularios, validaciones y comunicación con servidores.',
    bloqueado: false,
    capitulos: [
      {
        id:        'cap06-funciones',
        numero:    '06',
        titulo:    'Funciones avanzadas',
        desc:      'Arrow functions, callbacks, scope, closures — cómo el código se organiza en piezas reutilizables.',
        lang:      'js',
        archivo:   'capitulos/cap06-funciones.html',
        lecciones: ['➡️ Arrow fn', '🔄 Callback', '📦 Scope', '🔒 Closure'],
        bloqueado: false
      },
      {
        id:        'cap07-dom',
        numero:    '07',
        titulo:    'DOM en profundidad',
        desc:      'Crear, eliminar y modificar elementos en la página desde JavaScript.',
        lang:      'js',
        archivo:   'capitulos/cap07-dom.html',
        lecciones: ['➕ Crear nodos', '✂️ Eliminar', '🔍 Buscar', '📋 Clonar'],
        bloqueado: false
      },
      {
        id:        'cap08-formularios',
        numero:    '08',
        titulo:    'Formularios y validaciones',
        desc:      'Cómo recolectar, validar y enviar datos que el usuario escribe.',
        lang:      'js',
        archivo:   'capitulos/cap08-formularios.html',
        lecciones: ['📝 Inputs', '✅ Validar', '🚫 Errores', '📤 Enviar'],
        bloqueado: false
      },
      {
        id:        'cap09-async',
        numero:    '09',
        titulo:    'Código asíncrono',
        desc:      'Promises, async/await — cómo JavaScript espera sin bloquear todo lo demás.',
        lang:      'js',
        archivo:   'capitulos/cap09-async.html',
        lecciones: ['⏳ Síncrono', '🔀 Asíncrono', '🤝 Promise', '⏱️ async/await'],
        bloqueado: false
      },
      {
        id:        'cap10-almacenamiento',
        numero:    '10',
        titulo:    'Almacenamiento local',
        desc:      'localStorage y sessionStorage — guardar datos en el navegador sin necesitar un servidor.',
        lang:      'js',
        archivo:   'capitulos/cap10-almacenamiento.html',
        lecciones: ['💾 localStorage', '🗑️ Eliminar', '📋 JSON', '🔄 Sincronizar'],
        bloqueado: false
      }
    ]
  },
  {
    id:     'proyectos',
    numero: '03',
    titulo: 'Proyectos Reales',
    desc:   'Construir apps completas, conectar con APIs externas, bases de datos y despliegue.',
    bloqueado: false,
    capitulos: [
      {
        id:        'cap11-api',
        numero:    '11',
        titulo:    'Conexión con APIs',
        desc:      'Cómo tu app habla con servidores externos y consume datos reales.',
        lang:      'js',
        archivo:   'capitulos/cap11-api.html',
        lecciones: ['🌐 fetch', '📡 JSON', '⏳ async/await', '🛡️ Errores'],
        bloqueado: false
      },
      {
        id:        'cap12-firebase',
        numero:    '12',
        titulo:    'Base de datos en la nube',
        desc:      'Firebase y Firestore — almacenar datos en la nube y sincronizarlos en tiempo real.',
        lang:      'js',
        archivo:   'capitulos/cap12-firebase.html',
        lecciones: ['🔥 Firebase', '💾 Firestore', '🔐 Auth', '📡 Tiempo real'],
        bloqueado: false
      },
      {
        id:        'cap13-herramientas',
        numero:    '13',
        titulo:    'Herramientas del Desarrollador',
        desc:      'VS Code, extensiones, Live Server, DevTools y flujo de trabajo diario — el kit completo del desarrollador.',
        lang:      'gen',
        archivo:   'capitulos/cap13-herramientas.html',
        lecciones: ['✏️ VS Code', '🧩 Extensiones', '🔴 Live Server', '🔍 DevTools', '⌨️ Consola', '🏗️ Inspector', '🌐 Network', '⚡ Atajos', '🔄 Flujo diario'],
        bloqueado: false
      }
    ]
  }
]

// ============================================
// DATOS — Mis Guías (panel "Mis Guías")
// Cada grupo tiene una etiqueta y una lista de
// tarjetas. Tipo "link" = guía lista, con href.
// Tipo "soon" = tarjeta placeholder ("próximamente").
// Para agregar una guía, copia un objeto tipo
// "link" dentro del grupo que corresponda.
// ============================================

const GUIAS = [
  {
    grupo: '🌐 HTML & CSS',
    items: [
      {
        tipo:       'link',
        href:       'guia-html-css/guia-html-css.html',
        icono:      '🏗️',
        gradiente:  'linear-gradient(135deg,#1a0f1a 60%,#2a1230)',
        badge:      'HTML + CSS',
        badgeEstilo:'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);',
        titulo:     'HTML & CSS desde Cero',
        desc:       'La guía completa de HTML semántico y CSS moderno. Desde la primera etiqueta hasta diseño responsive.',
        stats:      ['Parte A · HTML avanzado', 'Parte C · CSS avanzado', 'Parte E · Flexbox', 'Parte G · Grid']
      },
      {
        tipo:       'link',
        href:       'guia-holamundo-html/holamundo-html-parte-A.html',
        icono:      '📺',
        gradiente:  'linear-gradient(135deg, #1a1408 60%, #241c08)',
        badge:      'REPASO HTML',
        badgeEstilo:'background:rgba(232,93,47,0.2);color:#fab387;border:1px solid rgba(232,93,47,0.3);',
        titulo:     'Repaso HTML — HolaMundo',
        desc:       'Repaso rápido de HTML desde otro punto de vista: etiquetas, estructura mínima y atajos de VS Code.',
        stats:      ['Parte A · Etiquetas y estructura']
      },
      {
        tipo:   'soon',
        icono:  '➕',
        titulo: 'Próxima guía HTML/CSS',
        desc:   'Aquí puedes agregar otra guía de HTML o CSS cuando la tengas lista.'
      }
    ]
  },
  {
    grupo: '⚙️ JavaScript',
    items: [
      {
        tipo:       'link',
        href:       'guia-js/guia-js-parte-1.html',
        icono:      '⚡',
        gradiente:  'linear-gradient(135deg, #1a1408 60%, #241c08)',
        badge:      'JavaScript',
        badgeEstilo:'background:rgba(200,160,20,0.25);color:#f0d060;border:1px solid rgba(200,160,20,0.35);',
        titulo:     'Guía JavaScript Completa',
        desc:       'De cero a intermedio. Variables, funciones, DOM, eventos, asincronismo y más — en 4 partes.',
        stats:      ['Parte 1 · Fundamentos', 'Parte 2 · Funciones', 'Parte 3 · DOM', 'Parte 4 · Async']
      },
      {
        tipo:   'soon',
        icono:  '➕',
        titulo: 'Próxima guía JavaScript',
        desc:   'Agrega aquí tu siguiente guía de JS: APIs, frameworks, etc.'
      }
    ]
  },
  {
    grupo: '🔧 Herramientas',
    items: [
      {
        tipo:       'link',
        href:       'guia-vscode/guia-vscode.html',
        icono:      '✏️',
        gradiente:  'linear-gradient(135deg, #0d1a20 60%, #102028)',
        badge:      'HERRAMIENTA',
        badgeEstilo:'background:rgba(0,140,180,0.25);color:#70d0f0;border:1px solid rgba(0,140,180,0.35);',
        titulo:     'VS Code desde Cero',
        desc:       'Instalación, configuración, extensiones imprescindibles, atajos y flujo de trabajo diario con VS Code.',
        stats:      ['Instalación', 'Extensiones', 'Atajos clave']
      },
      {
        tipo:       'link',
        href:       'guia-linux-terminal/guia-linux-parte-A.html',
        icono:      '🐧',
        gradiente:  'linear-gradient(135deg, #0a1a12 60%, #0e2418)',
        badge:      'TERMINAL',
        badgeEstilo:'background:rgba(46,204,113,0.2);color:#7ee8a8;border:1px solid rgba(46,204,113,0.3);',
        titulo:     'Linux en la Terminal',
        desc:       'Distribuciones, sistema de archivos, rutas absolutas y relativas, y los atajos esenciales de la terminal.',
        stats:      ['Parte A · Terminal y rutas']
      },
      {
        tipo:   'soon',
        icono:  '➕',
        titulo: 'Guía Git desde Cero',
        desc:   'Control de versiones, ramas, merge y GitHub — todo lo que necesitas en equipo.'
      }
    ]
  },
  {
    grupo: '💡 General',
    items: [
      {
        tipo:   'soon',
        icono:  '➕',
        titulo: 'Próximo concepto',
        desc:   'Agrega aquí otra guía de conceptos cuando la tengas lista en la carpeta guia-conceptos/.'
      }
    ]
  }
]

// ============================================
// DATOS — Ejercicios (panel "Ejercicios")
// ============================================

const EJERCICIOS = [
  {
    grupo: '💾 Realizados',
    items: [
      {
        tipo: 'link', href: 'Mis-Ejercicios-Realizados/Mis-Ejercicios-Realizados.html',
        icono: '📁', gradiente: 'linear-gradient(135deg, #2a1008 60%, #3a1a10)',
        badge: 'MIS PROYECTOS', badgeEstilo: 'background:rgba(196,74,42,0.25);color:#f4a68a;border:1px solid rgba(196,74,42,0.35);',
        titulo: 'Mis Ejercicios Realizados',
        desc: 'Galería personal con todos los ejercicios que ya completaste. Ábrelos, revísalos y compártelos.',
        stats: ['🌐 HTML', '🎨 CSS', '📂 Mis proyectos'], cta: 'Ver mis ejercicios'
      },
      { tipo: 'soon', icono: '➕', titulo: 'Próximos ejercicios de JavaScript', desc: 'Aquí irán los ejercicios de JS cuando los tengas listos. Agrega la tarjeta igual que las de arriba.' }
    ]
  },
  {
    grupo: '🌐 HTML & CSS',
    items: [
      {
        tipo: 'link', href: 'Ejercicios/ejercicio1-receta-tacos.html',
        icono: '🌮', gradiente: 'linear-gradient(135deg, #1a1208 60%, #241a08)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(180,100,30,0.25);color:#f4c880;border:1px solid rgba(180,100,30,0.35);',
        titulo: '01 · Receta de Tacos',
        desc: 'Página de receta con HTML semántico: encabezados, listas, imágenes y estructura básica.',
        stats: ['HTML semántico', 'Listas', 'Estructura'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio2-pagina-negocio.html',
        icono: '🏪', gradiente: 'linear-gradient(135deg, #0f1a1a 60%, #132424)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(30,140,140,0.25);color:#80e0e0;border:1px solid rgba(30,140,140,0.35);',
        titulo: '02 · Página de Negocio',
        desc: 'Landing page de un negocio con secciones, estilos CSS y diseño básico responsive.',
        stats: ['CSS', 'Flexbox', 'Landing page'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio3-repaso-completo-barberia.html',
        icono: '💈', gradiente: 'linear-gradient(135deg, #0f1a1a 60%, #132424)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(197, 87, 14, 0.25);color:#e9781c;border:1px solid rgba(185, 100, 50, 0.35);',
        titulo: 'R-Ej 01 y 02 · Página de Barberia',
        desc: 'Repaso a fondo: TODO lo del Ejercicio 1 + TODO lo del Ejercicio 2, en un solo proyecto.',
        stats: ['CSS', 'Box Model', 'Barra de navegación'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio3-perfil-futbol.html',
        icono: '⚽', gradiente: 'linear-gradient(135deg, #0a1a0a 60%, #122012)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(40,160,40,0.25);color:#80e880;border:1px solid rgba(40,160,40,0.35);',
        titulo: '03 · Perfil de Fútbol',
        desc: 'Tarjeta de perfil de jugador con estadísticas, colores de equipo y diseño de tarjeta.',
        stats: ['CSS avanzado', 'Tarjeta', 'Grid'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio4-pagina-contacto.html',
        icono: '✉️', gradiente: 'linear-gradient(135deg, #1a0f1a 60%, #241224)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(160,60,180,0.25);color:#e0a0f0;border:1px solid rgba(160,60,180,0.35);',
        titulo: '04 · Página de Contacto',
        desc: 'Formulario de contacto con validación visual, inputs estilizados y feedback al usuario.',
        stats: ['Formularios', 'Inputs', 'CSS'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio5-portfolio-responsive.html',
        icono: '🗂️', gradiente: 'linear-gradient(135deg, #0d0d1a 60%, #14142a)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(60,80,200,0.25);color:#a0b0f8;border:1px solid rgba(60,80,200,0.35);',
        titulo: '05 · Portfolio Responsive',
        desc: 'Portfolio personal completo con navegación, secciones y diseño adaptable a móvil.',
        stats: ['Responsive', 'Grid', 'Portfolio'], cta: 'Ver ejercicio'
      },
      {
        tipo: 'link', href: 'Ejercicios/ejercicio6-dashboard-metricas.html',
        icono: '📊', gradiente: 'linear-gradient(135deg, #0a1520 60%, #101c2a)',
        badge: 'HTML + CSS', badgeEstilo: 'background:rgba(20,120,180,0.25);color:#80c8f0;border:1px solid rgba(20,120,180,0.35);',
        titulo: '06 · Dashboard de Métricas',
        desc: 'Interfaz de dashboard con paneles, estadísticas y diseño moderno en CSS.',
        stats: ['Dashboard', 'Paneles', 'CSS'], cta: 'Ver ejercicio'
      },
      { tipo: 'soon', icono: '➕', titulo: 'Agregar ejercicio HTML/CSS', desc: 'Crea un archivo en la carpeta Ejercicios/ y agrega la tarjeta aquí siguiendo el mismo patrón.' }
    ]
  },
  {
    grupo: '⚙️ JavaScript',
    items: [
      { tipo: 'soon', icono: '➕', titulo: 'Próximos ejercicios de JavaScript', desc: 'Aquí irán los ejercicios de JS cuando los tengas listos. Agrega la tarjeta igual que las de arriba.' }
    ]
  }
]

// ============================================
// DATOS — Práctica interactiva (panel "Práctica")
// Lista plana, sin grupos.
// ============================================

const PRACTICA = [
  {
    tipo: 'link', href: 'practica/nivel-01-variables.html',
    icono: '📦', gradiente: 'linear-gradient(135deg, #1a1408 60%, #241c08)',
    badge: 'JavaScript', badgeEstilo: 'background:rgba(200,160,20,0.25);color:#f0d060;border:1px solid rgba(200,160,20,0.35);',
    titulo: '01 · Variables', desc: 'const, let, tipos de datos, conversión y operaciones básicas.',
    stats: ['const / let', 'typeof'], cta: 'Ir al nivel'
  },
  {
    tipo: 'link', href: 'practica/nivel-02-condicionales.html',
    icono: '🔀', gradiente: 'linear-gradient(135deg, #1a0f0a 60%, #241410)',
    badge: 'JavaScript', badgeEstilo: 'background:rgba(200,100,30,0.25);color:#f0b870;border:1px solid rgba(200,100,30,0.35);',
    titulo: '02 · Condicionales', desc: 'if/else, else if, switch, operadores lógicos y ternario.',
    stats: ['if/else', 'switch'], cta: 'Ir al nivel'
  },
  {
    tipo: 'link', href: 'practica/nivel-03-funciones.html',
    icono: '⚙️', gradiente: 'linear-gradient(135deg, #0a1a14 60%, #10241a)',
    badge: 'JavaScript', badgeEstilo: 'background:rgba(30,160,100,0.25);color:#70e0b0;border:1px solid rgba(30,160,100,0.35);',
    titulo: '03 · Funciones', desc: 'Crear funciones, parámetros, return y arrow functions.',
    stats: ['function', 'return'], cta: 'Ir al nivel'
  },
  {
    tipo: 'link', href: 'practica/nivel-04-bucles.html',
    icono: '🔁', gradiente: 'linear-gradient(135deg, #1a0a1a 60%, #24102a)',
    badge: 'JavaScript', badgeEstilo: 'background:rgba(160,60,200,0.25);color:#d890f8;border:1px solid rgba(160,60,200,0.35);',
    titulo: '04 · Bucles y Arreglos', desc: 'for, while, forEach, map, filter y reduce.',
    stats: ['for / while', 'map / filter'], cta: 'Ir al nivel'
  },
  {
    tipo: 'link', href: 'practica/nivel-05-dom.html',
    icono: '🖥️', gradiente: 'linear-gradient(135deg, #0d1a2e 60%, #102040)',
    badge: 'HTML + JS', badgeEstilo: 'background:rgba(30,80,200,0.25);color:#80a8f8;border:1px solid rgba(30,80,200,0.35);',
    titulo: '05 · DOM — La página viva', desc: 'Modificar la página en tiempo real con JavaScript.',
    stats: ['querySelector', 'eventos'], cta: 'Ir al nivel'
  },
  {
    tipo: 'link', href: 'practica/nivel-06-proyecto.html',
    icono: '✅', gradiente: 'linear-gradient(135deg, #0a1a12 60%, #0e2418)',
    badge: 'Proyecto', badgeEstilo: 'background:rgba(20,140,80,0.25);color:#70e8a8;border:1px solid rgba(20,140,80,0.35);',
    titulo: '06 · Lista de Tareas', desc: 'Construye una app completa paso a paso con todo lo aprendido.',
    stats: ['DOM', 'localStorage'], cta: 'Ir al nivel'
  },
  { tipo: 'soon', icono: '➕', titulo: 'Agregar nuevo nivel', desc: 'Crea un archivo en la carpeta practica/ y agrega la tarjeta aquí siguiendo el mismo patrón.' }
]

// ============================================
// DATOS — Tutoriales en video (panel "Mis Videos")
// Lista plana, sin grupos.
// ============================================

const VIDEOS = [
  {
    tipo: 'link', href: 'tablero-videos/tablero-videos-cursos.html',
    icono: '💻', badge: 'CURSOS · TEMAS',
    titulo: 'Tablero de Videos Cursos',
    desc: 'Tu colección de Cursos de estudio. Cada tarjeta muestra la portada del video de YouTube, los temas que cubre y un enlace directo al recurso original.',
    stats: ['🔥 HTML Y CSS', '🎬 JAVA', '🔍 JAVASCRIPT'], cta: 'Abrir tablero'
  },
  {
    tipo: 'link', href: 'tablero-videos/tablero-videos-terminos.html',
    icono: '📋', badge: 'CONCEOTOS · TERMINOS',
    titulo: 'Tablero de Videos Terminos',
    desc: 'Tu colección completa de guías de estudio. Cada tarjeta muestra la portada del video de YouTube, los temas que cubre y un enlace directo al recurso original.',
    stats: ['🔥 JSON', '🎬 Lenguaje TIPADOS VS NO TIPADOS', '🔍 PROTOCOLO HTTP'], cta: 'Abrir tablero'
  },
  {
    tipo: 'link', href: 'tablero-videos/tablero-videos-aprendizaje.html',
    icono: '📚', badge: 'RECURSOS · DIDÁCTICOS',
    titulo: 'Videoteca de Aprendizaje',
    desc: 'Un repositorio curado con recursos didácticos y videos explicativos. Cada tarjeta te da el contexto del tema y te lleva al video original.',
    stats: ['💡 Análisis a fondo', '🎯 Contenido seleccionado', '🔍 Explora por temas'], cta: 'Abrir videoteca'
  },
  { tipo: 'soon', icono: '➕', titulo: 'Próximamente', desc: 'Aquí puedes agregar más secciones de guías cuando las tengas: apuntes de proyectos, resúmenes de cursos, cheat sheets, etc.' }
]

// ============================================
// DATOS — Guías adicionales (panel "Adicionales")
// tipo "bloqueada" = tarjeta con candado, sin link.
// ============================================

const ADICIONALES = [
  {
    grupo: '🧩 HTML, CSS y JavaScript',
    items: [
      {
        tipo: 'link', href: 'adicionales/guia-formularios-avanzados.html',
        icono: '📝', gradiente: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)',
        badge: 'HTML', badgeEstilo: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);',
        titulo: 'Formularios avanzados', desc: 'Validación nativa, patrones y atributos poco usados.'
      },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)', badgeEstilo: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);', icono: '♿', titulo: 'Accesibilidad web (a11y)', desc: 'ARIA, roles y navegación por teclado.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);', icono: '🧩', titulo: 'CSS Grid a fondo', desc: 'Áreas, auto-fit vs auto-fill y layouts complejos.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);', icono: '🎬', titulo: 'Animaciones con CSS', desc: 'Keyframes, transiciones y timing functions.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '🌐', titulo: 'Fetch API y promesas', desc: 'Consumir APIs y manejar errores en JavaScript.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '💾', titulo: 'LocalStorage vs SessionStorage vs Cookies', desc: 'Cuándo usar cada uno para guardar datos.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '🔄', titulo: 'Event loop y asincronía en JS', desc: 'Call stack, microtasks y macrotasks.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);', icono: '📱', titulo: 'Responsive design real', desc: 'Media queries, unidades relativas y mobile-first.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '📦', titulo: 'Módulos de JavaScript (ES Modules)', desc: 'Import/export y organización de código.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '🧱', titulo: 'Web Components', desc: 'Custom elements y Shadow DOM.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '⚡', titulo: 'Manipulación del DOM eficiente', desc: 'Fragmentos y delegación de eventos.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);', icono: '🎨', titulo: 'CSS Variables (custom properties)', desc: 'Theming dinámico sin preprocesadores.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#0e180e 60%,#122012)', badgeEstilo: 'background:rgba(40,180,80,0.2);color:#80e0a0;border:1px solid rgba(40,180,80,0.3);', icono: '🐛', titulo: 'Debugging en el navegador', desc: 'DevTools, breakpoints y consola avanzada.' },
      { tipo: 'bloqueada', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', icono: '📲', titulo: 'Service Workers y PWA', desc: 'Básicos de offline-first.' },
      { tipo: 'soon', icono: '➕', titulo: 'Agregar guía adicional', desc: 'Cuando escribas una guía nueva, agrega la tarjeta aquí siguiendo el mismo patrón.' }
    ]
  }
]

// ============================================
// DATOS — Datos curiosos (panel "Datos curiosos")
// ============================================

const DATOS_CURIOSOS = [
  {
    grupo: '🧠 Historia y curiosidades',
    items: [
      {
        tipo: 'link', href: 'datos-curiosos/guia-origen-javascript.html',
        icono: '☕', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)',
        badge: 'JS', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);',
        titulo: 'Por qué JavaScript se llama así', desc: 'Y por qué casi no tiene nada que ver con Java.'
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-guerra-navegadores.html',
        icono: '⚔️', gradiente: 'linear-gradient(135deg,#0e180e 60%,#122012)', 
        badge: 'WEB', badgeEstilo: 'background:rgba(40,180,80,0.2);color:#80e0a0;border:1px solid rgba(40,180,80,0.3);',         
        titulo: 'La guerra de los navegadores', desc: 'Cómo nació la necesidad de estándares web.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-quien-invento-css.html',
        icono: '🎨', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', 
        badge: 'CSS', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);',  
        titulo: 'Quién inventó el CSS', desc: 'Y por qué tardó tanto en ser compatible entre navegadores.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-etiquetas-olvidadas.html',
        icono: '😅', gradiente: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)', 
        badge: 'Y', badgeEstilo: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);',  
        titulo: 'El origen de <marquee> y <blink>', desc: 'Etiquetas que la web quiso olvidar.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-frameworks-js.html',
        icono: '🌀', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', 
        badge: 'FRAMEWORKS', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);',  
        titulo: 'Por qué existen tantos frameworks de JS', desc: 'La famosa "fatiga de JavaScript".' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-node-js.html',
        icono: '🟢', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', 
        badge: 'NODO', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);',  
        titulo: 'Cómo nació Node.js', desc: 'Y por qué cambió todo para JavaScript.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-caso-etiqueta-table.html',
        icono: '🔤', gradiente: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)', 
        badge: 'ETIQUETA', badgeEstilo: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);', 
        titulo: 'El caso de la etiqueta <font>', desc: 'Cómo el diseño migró del HTML al CSS.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-diez-dias-javascript.html',
        icono: '📅', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', 
        badge: 'JS', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);', 
        titulo: '10 días que crearon JavaScript', desc: 'La historia de Brendan Eich.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-html-mal-escrito.html',
        icono: '🩹', gradiente: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)', 
        badge: 'HTML', badgeEstilo: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3);', 
        titulo: 'Por qué el navegador "adivina" tu HTML mal escrito', desc: 'El parsing tolerante a errores.' 
      },
      { 
        tipo: 'link', href: 'datos-curiosos/guia-mito-pixel-perfect.html',
        icono: '🔍', gradiente: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', 
        badge: 'PIXEL', badgeEstilo: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3);', 
        titulo: 'El mito del "pixel perfect"', desc: 'Por qué cada navegador renderiza distinto.' 
      },
      { 
        tipo: 'bloqueada', href: 'datos-curiosos/guia-mito-pixel-perfect.html',
        icono: '🕰️', gradiente: 'linear-gradient(135deg,#0e180e 60%,#122012)', 
        badge: 'WEB', badgeEstilo: 'background:rgba(40,180,80,0.2);color:#80e0a0;border:1px solid rgba(40,180,80,0.3);', 
        titulo: 'Cómo era programar web antes de las DevTools', desc: 'Un vistazo al pasado del desarrollo web.' 
      },
      {
         tipo: 'bloqueada', href: 'datos-curiosos/guia-mito-pixel-perfect.html',
         icono: '📉', gradiente: 'linear-gradient(135deg,#1a1a08 60%,#282810)', 
         badge: 'jQuery', badgeEstilo: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3);',  
         titulo: 'jQuery: de salvador a "código legado"', desc: 'Su ascenso y su ocaso.' 
        },
      { tipo: 'soon', icono: '➕', titulo: 'Agregar dato curioso', desc: 'Cuando escribas una guía nueva, agrega la tarjeta aquí siguiendo el mismo patrón.' }
    ]
  }
]

// ============================================
// DATOS — Glosario (panel "Mi Glosario")
// GLOSARIO_ACCESOS = lista plana (sección superior)
// GLOSARIO_GRUPOS  = grupos con label (secciones de abajo)
// ============================================

const GLOSARIO_ACCESOS = [
  {
    tipo: 'link', href: 'glosario/glosario.html',
    icono: '📘', gradiente: 'linear-gradient(135deg, #1a1814 60%, #1e2a1a)',
    badge: 'FIREBASE · TIEMPO REAL', badgeEstilo: 'background:rgba(60,140,60,0.25);color:#8fd48f;border:1px solid rgba(60,140,60,0.35);',
    titulo: 'Mi Glosario',
    desc: 'Tu colección de términos y definiciones de desarrollo web. Agrega, busca y repasa conceptos clave en cualquier momento.',
    stats: ['🔥 Sincronizado con Firebase', '🔍 Búsqueda instantánea', '🏷️ Categorías por tema'], cta: 'Abrir glosario'
  },
  { tipo: 'soon', icono: '➕', titulo: 'Próximamente', desc: 'Aquí puedes agregar más secciones cuando las tengas: flashcards, cheat sheets, resúmenes por tema, etc.' }
]

const GLOSARIO_GRUPOS = [
  {
    grupo: '💡 General / Conceptos',
    items: [
      {
        tipo: 'link', href: 'glosario/guia-conceptos/guia-http-todocode.html',
        icono: '🌐', gradiente: 'linear-gradient(135deg, #0a1420 60%, #0e1c2c)',
        badge: 'CONCEPTO', badgeEstilo: 'background:rgba(30,100,180,0.25);color:#80b8f0;border:1px solid rgba(30,100,180,0.35);',
        titulo: '¿Qué es el Protocolo HTTP?',
        desc: 'Requests, Responses y métodos: GET, POST, PUT, PATCH y DELETE. La base de toda comunicación en la web.',
        stats: ['Ciclo Request/Response', 'Métodos HTTP', 'GET · POST · PUT'], cta: 'Ver guía'
      },
      {
        tipo: 'link', href: 'glosario/guia-conceptos/guia-json-todocode.html',
        icono: '📦', gradiente: 'linear-gradient(135deg, #1a1408 60%, #241e08)',
        badge: 'CONCEPTO', badgeEstilo: 'background:rgba(180,140,20,0.25);color:#f0d060;border:1px solid rgba(180,140,20,0.35);',
        titulo: '¿Qué es JSON?',
        desc: 'JavaScript Object Notation — el idioma universal del intercambio de datos entre sistemas.',
        stats: ['Clave-Valor', 'Objetos y Arrays', 'stringify / parse'], cta: 'Ver guía'
      },
      {
        tipo: 'link', href: 'glosario/guia-conceptos/guia-tipado-edteam.html',
        icono: '🔢', gradiente: 'linear-gradient(135deg, #141420 60%, #1c1c2c)',
        badge: 'CONCEPTO', badgeEstilo: 'background:rgba(100,80,200,0.25);color:#c0b0f8;border:1px solid rgba(100,80,200,0.35);',
        titulo: 'Lenguajes Tipados vs No Tipados',
        desc: 'Entiende el tipado estático, dinámico, fuerte y débil de una vez por todas.',
        stats: ['Tipado estático', 'Tipado dinámico', 'Fuerte vs débil'], cta: 'Ver guía'
      },
      { tipo: 'soon', icono: '➕', titulo: 'Próximo concepto', desc: 'Agrega aquí otra guía de conceptos cuando la tengas lista en la carpeta guia-conceptos/.' }
    ]
  },
  {
    grupo: '🤔 Aprendiendo / Interesante',
    items: [
      { tipo: 'soon', icono: '➕', titulo: 'Próximo concepto', desc: 'Agrega aquí otra guía de conceptos cuando la tengas lista en la carpeta guia-conceptos/.' }
    ]
  }
]

// ============================================
// DATOS — Consola (panel "Consola")
// Lista plana, sin grupos.
// ============================================

const CONSOLA = [
  {
    tipo: 'link', href: 'consola/consola-js.html',
    icono: '⚡', gradiente: 'linear-gradient(135deg, #1a140a 60%, #241c0e)',
    badge: 'JAVASCRIPT · INTERACTIVO', badgeEstilo: 'background:rgba(176,112,16,0.25);color:#f0c060;border:1px solid rgba(176,112,16,0.35);',
    titulo: 'Consola JS',
    desc: 'Escribe JS y ve los resultados al instante en la consola emulada. Usa console.log(), console.error() y atajos de teclado para probar tu lógica.',
    stats: ['⚡ Ejecución en vivo', '📋 Ejemplos integrados', '🎨 Output detallado'], cta: 'Abrir consola'
  },
  {
    tipo: 'link', href: 'consola/consola-web.html',
    icono: '🌐', gradiente: 'linear-gradient(135deg, #261512 60%, #331d18)',
    badge: 'HTML + CSS + JS', badgeEstilo: 'background:rgba(196,74,42,0.25);color:#f4a68a;border:1px solid rgba(196,74,42,0.35);',
    titulo: 'Consola Web',
    desc: 'Escribe código en los tres lenguajes web en paneles separados y presiona ejecutar para ver el resultado renderizado al instante en un iframe.',
    stats: ['🏗 HTML semántico', '🎨 Estilos CSS', '⚡ JS interactivo'], cta: 'Abrir consola'
  },
  {
    tipo: 'link', href: 'consola/consola-python.html',
    icono: '🐍', gradiente: 'linear-gradient(135deg, #0d1724 60%, #122133)',
    badge: 'PYTHON · PYODIDE', badgeEstilo: 'background:rgba(26,95,165,0.25);color:#86bef5;border:1px solid rgba(26,95,165,0.35);',
    titulo: 'Consola Python',
    desc: 'Intérprete ejecutable directamente en el navegador vía Pyodide. Escribe código real y ve el resultado al instante sin tener que instalar nada.',
    stats: ['🐍 WebAssembly', '⚡ Ejecución local', '📊 Ejemplos básicos'], cta: 'Abrir consola'
  },
  {
    tipo: 'link', href: 'consola/consola-java.html',
    icono: '☕', gradiente: 'linear-gradient(135deg, #121024 60%, #191633)',
    badge: 'JAVA · COMPILADO', badgeEstilo: 'background:rgba(83,74,183,0.25);color:#b4aef5;border:1px solid rgba(83,74,183,0.35);',
    titulo: 'Consola Java',
    desc: 'Escribe código en Java, cópialo con un solo clic y ejecútalo fácilmente utilizando las integraciones con editores online como OneCompiler.',
    stats: ['☕ Clases y objetos', '📋 Copiado rápido', '↗ Enlaces a IDEs'], cta: 'Abrir consola'
  },
  {
    tipo: 'link', href: 'consola/consola-personal.html',
    icono: '🧪', gradiente: 'linear-gradient(135deg, #0e1f18 60%, #132b21)',
    badge: 'MULTILENGUAJE · PRIVADO', badgeEstilo: 'background:rgba(26,122,90,0.25);color:#7ed4b4;border:1px solid rgba(26,122,90,0.35);',
    titulo: 'Mi Consola Personal',
    desc: 'Tu sandbox privado. Escribe en múltiples lenguajes, guarda tus snippets favoritos directo en el navegador y recupéralos cuando los necesites.',
    stats: ['💾 Snippets locales', '🔧 Selector de modos', '🔒 100% Privado'], cta: 'Abrir consola'
  },
  {
    tipo: 'link', href: 'consola/consola-referencia.html',
    icono: '📋', gradiente: 'linear-gradient(135deg, #1a1410 60%, #251e14)',
    badge: 'HTML · CSS · JS', badgeEstilo: 'background:rgba(196,74,42,0.2);color:#f4a68a;border:1px solid rgba(196,74,42,0.3);',
    titulo: 'Referencia rápida',
    desc: 'Las etiquetas, propiedades y métodos que más usarás. Clic en cualquier tarjeta para copiar el código al portapapeles al instante.',
    stats: ['🏷️ Etiquetas HTML', '🎨 Propiedades CSS', '📋 Clic para copiar'], cta: 'Ver referencia'
  },
  {
    tipo: 'link', href: 'consola/consola-herramientas.html',
    icono: '🛠', gradiente: 'linear-gradient(135deg, #111220 60%, #191a2e)',
    badge: 'GUÍA · HERRAMIENTAS', badgeEstilo: 'background:rgba(83,74,183,0.25);color:#b4aef5;border:1px solid rgba(83,74,183,0.35);',
    titulo: '¿Qué consola uso?',
    desc: 'Guía práctica sobre dónde escribir, cómo ejecutar y dónde ver el resultado para cada lenguaje: HTML, JS, Python y Java.',
    stats: ['📊 Tabla comparativa', '🔍 Detalle por lenguaje', '💡 Tip del F12'], cta: 'Ver guía'
  },
  { tipo: 'soon', icono: '➕', titulo: 'Próximamente', desc: 'Más herramientas de práctica: retos de código, sandbox de proyectos y más.' }
]

// ============================================
// DATOS — Mi Progreso (panel "Mi Progreso")
// Solo el acceso a la página de progreso.
// El dashboard con las barras es HTML fijo,
// no datos, así que no se movió aquí.
// ============================================

const PROGRESO = [
  {
    tipo: 'link', href: 'progreso/mi-progreso.html',
    icono: '📊', gradiente: 'linear-gradient(135deg, #0f1a0f 60%, #162016)',
    badge: 'LOCALSTORAGE · AUTOMÁTICO', badgeEstilo: 'background:rgba(42,122,42,0.25);color:#7ed47e;border:1px solid rgba(42,122,42,0.35);',
    titulo: 'Mi Progreso',
    desc: 'Marca lo que completaste, registra tu racha de estudio diaria y ve tu avance total con barras de progreso por categoría. Los datos se actualizan solos cuando agregas contenido nuevo al proyecto.',
    stats: ['📚 Capítulos', '✏️ Ejercicios', '🔥 Racha diaria'], cta: 'Ver mi progreso'
  },
  { tipo: 'soon', icono: '➕', titulo: 'Próximamente', desc: 'Más herramientas de seguimiento: historial de estudio, logros desbloqueables, exportar progreso, etc.' }
]
