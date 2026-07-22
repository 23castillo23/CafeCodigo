/* ============================================
   CAFÉ </> · GUÍA DE APRENDIZAJE
   script.js — Lógica, PWA e interactividad
   ============================================ */

// ============================================
// DATOS — Temas y capítulos
// Para agregar contenido solo modifica aquí
// ============================================

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
// DATOS — Datos curiosos
// Misma estructura que TEMAS, pero para la pestaña
// "🧠 Datos curiosos" (hardware, software, internet...)
// Para agregar contenido solo modifica aquí
// ============================================

const TEMAS_CURIOSOS = [
  {
    id:     'hardware',
    numero: '01',
    titulo: 'Hardware y arquitectura',
    desc:   'Cómo piensa un procesador, qué diferencia una RAM de otra, por qué existen tantos tipos de chips. Curiosidad pura sobre lo que hay detrás de la pantalla.',
    bloqueado: false,
    capitulos: [
      {
        id:        'cur01-computadora',
        numero:    '01',
        titulo:    'Cómo funciona una computadora',
        desc:      'Del interruptor eléctrico hasta la imagen en pantalla: transistores, bits, cómo se guardan texto e imágenes, y cómo el procesador ejecuta todo — reloj, núcleos y caché incluidos.',
        categoria: 'hardware',
        archivo:   'datos-curiosos/guia-como-funciona-una-computadora.html',
        lecciones: ['⚡ Electricidad y bits', '🧮 Reloj, núcleos y caché', '💡 Sin código'],
        bloqueado: false
      },
      {
        id:        'cur02-ram',
        numero:    '02',
        titulo:    'Tipos de RAM',
        desc:      'DDR3, DDR4, DDR5 — qué cambia entre generaciones y por qué no puedes mezclar tipos en la misma tarjeta madre.',
        categoria: 'hardware',
        archivo:   '#',
        lecciones: [],
        bloqueado: true
      },
      {
        id:        'cur03-procesadores',
        numero:    '03',
        titulo:    'Tipos de procesadores',
        desc:      'Intel vs AMD, procesadores de escritorio vs móviles, y qué son los ARM que usan los celulares y las Mac M1/M2/M3.',
        categoria: 'hardware',
        archivo:   '#',
        lecciones: [],
        bloqueado: true
      }
    ]
  }
  // ➕ Agrega aquí nuevos temas de datos curiosos (software, internet, etc.)
  // siguiendo la misma estructura: { id, numero, titulo, desc, bloqueado, capitulos: [...] }
]

// ============================================
// DATOS — Guías adicionales
// Misma estructura que TEMAS, pero para la pestaña
// "🧩 Adicionales" (terminal, control de versiones,
// bases de datos... todo lo que no es HTML/CSS/JS)
// Para agregar contenido solo modifica aquí
// ============================================

const TEMAS_ADICIONALES = [
  {
    id:     'terminal',
    numero: '01',
    titulo: 'Terminal y línea de comandos',
    desc:   'El Símbolo del sistema de Windows y la terminal de Linux (Bash) — de cero a avanzado, con analogías y ejercicios.',
    bloqueado: false,
    capitulos: [
      {
        id:        'ad01-cmd',
        numero:    '01',
        titulo:    'Guía CMD desde Cero',
        desc:      'El Símbolo del sistema de Windows, de cero a avanzado: navegación, archivos, red, procesos y scripts .bat, con analogías y ejercicios.',
        categoria: 'cmd',
        archivo:   'guias-adicionales/guia-terminales/guia-cmd.html',
        lecciones: ['💻 Símbolo del sistema', '🖥️ Windows nativo', '📋 Cheat sheet incluido'],
        bloqueado: false
      },
      {
        id:        'ad02-linux',
        numero:    '02',
        titulo:    'Guía Terminal Linux desde Cero',
        desc:      'La terminal de Linux (Bash) completa: navegación, permisos, pipes, red, procesos, paquetes y scripts .sh, con analogías y ejercicios.',
        categoria: 'linux',
        archivo:   'guias-adicionales/guia-terminales/guia-linux.html',
        lecciones: ['🐧 Bash desde cero', '🔐 Permisos y scripts', '📋 Cheat sheet incluido'],
        bloqueado: false
      },
      {
        id:        'ad03-comparativa',
        numero:    '03',
        titulo:    'Linux vs CMD',
        desc:      'Una vez que conoces ambas terminales, esta tabla lado a lado te ayuda a traducir cualquier comando de un sistema al otro en segundos.',
        categoria: 'comparativa',
        archivo:   'guias-adicionales/guia-terminales/comparativa-linux-cmd.html',
        lecciones: ['📊 Tabla lado a lado', '🔀 +80 comandos', '🐧⇄🪟 Linux ↔ CMD'],
        bloqueado: false
      }
    ]
  },
  {
    id:     'versionado',
    numero: '02',
    titulo: 'Control de versiones',
    desc:   'Commits, ramas, merge, remotos y Pull Requests — la base para guardar tu historial y colaborar sin miedo a romper nada.',
    bloqueado: false,
    capitulos: [
      {
        id:        'ad04-git',
        numero:    '01',
        titulo:    'Git y GitHub desde Cero',
        desc:      'Commits, ramas, merge, remotos y Pull Requests, con analogías y ejercicios. La base para guardar tu historial y colaborar sin miedo a romper nada.',
        categoria: 'git',
        archivo:   'guias-adicionales/guia-git/guia-git.html',
        lecciones: ['📸 Commits y ramas', '☁️ GitHub y Pull Requests', '📋 Cheat sheet incluido'],
        bloqueado: false
      },
      {
        id:        'ad05-github-actions',
        numero:    '02',
        titulo:    'GitHub Actions / GitFlow',
        desc:      'Automatización de flujos de trabajo y estrategias de ramificación en equipo.',
        categoria: 'git',
        archivo:   '#',
        lecciones: [],
        bloqueado: true
      }
    ]
  },
  {
    id:     'basededatos',
    numero: '03',
    titulo: 'Bases de datos',
    desc:   'Bases de datos relacionales, tablas, registros y consultas — de SELECT básico a procedimientos almacenados y triggers.',
    bloqueado: false,
    capitulos: [
      {
        id:        'ad06-sql',
        numero:    '01',
        titulo:    'SQL desde Cero',
        desc:      'Bases de datos relacionales, tablas, registros y consultas — de SELECT básico a procedimientos almacenados y triggers, en 3 partes.',
        categoria: 'sql',
        archivo:   'guias-adicionales/guia-sql/guia-sql-parte-1.html',
        lecciones: ['Parte 1 · Fundamentos', 'Parte 2 · Relaciones y JOIN', 'Parte 3 · Procedimientos y triggers'],
        bloqueado: false
      },
      {
        id:        'ad07-docker',
        numero:    '02',
        titulo:    'Docker',
        desc:      'Contenedores: qué son, por qué existen y cómo empaquetan una app con todo lo que necesita para correr igual en cualquier lado.',
        categoria: 'sql',
        archivo:   '#',
        lecciones: [],
        bloqueado: true
      }
    ]
  }
  // ➕ Agrega aquí nuevos temas de guías adicionales
  // siguiendo la misma estructura: { id, numero, titulo, desc, bloqueado, capitulos: [...] }
]

// ============================================
// FUNCIÓN: Construir biblioteca de capítulos
// Solo se ejecuta en capitulos.html
// ============================================

function construirBiblioteca() {
  const contenedor = document.getElementById('temasContainer')
  if (!contenedor) return

  const THUMB = {
    html: { bg: 'linear-gradient(135deg,#1a0f1a 60%,#2a1230)', badge: 'background:rgba(230,80,80,0.2);color:#f4a0a0;border:1px solid rgba(230,80,80,0.3)' },
    css:  { bg: 'linear-gradient(135deg,#0a1820 60%,#0e2030)', badge: 'background:rgba(40,140,220,0.2);color:#80c8f0;border:1px solid rgba(40,140,220,0.3)' },
    js:   { bg: 'linear-gradient(135deg,#1a1a08 60%,#282810)', badge: 'background:rgba(200,180,40,0.2);color:#e8d870;border:1px solid rgba(200,180,40,0.3)' },
    gen:  { bg: 'linear-gradient(135deg,#0e180e 60%,#122012)', badge: 'background:rgba(40,180,80,0.2);color:#80e0a0;border:1px solid rgba(40,180,80,0.3)' },
  }
  const BADGE_LABEL = { html: 'HTML', css: 'CSS', js: 'JS', gen: 'INTRO' }

  TEMAS.forEach(tema => {
    const bloque = document.createElement('div')
    bloque.className = `tema-bloque ${tema.bloqueado ? 'tema-bloqueado' : ''}`
    bloque.id = `tema-${tema.id}`

    const disponibles = tema.capitulos.filter(c => !c.bloqueado).length
    const total       = tema.capitulos.length

    bloque.innerHTML = `
      <div class="tema-header">
        <div>
          <p class="tema-eyebrow">Tema ${tema.numero}${tema.bloqueado ? ' · 🔒 Próximamente' : ''}</p>
          <h2 class="tema-titulo">${tema.titulo}</h2>
          <p class="tema-desc">${tema.desc}</p>
        </div>
        ${!tema.bloqueado ? `<p class="tema-progreso">${disponibles}/${total} disponibles</p>` : ''}
      </div>
      <div class="misguias-grid" id="grid-${tema.id}"></div>
    `
    contenedor.appendChild(bloque)

    const grid = document.getElementById(`grid-${tema.id}`)

    tema.capitulos.forEach(cap => {
      const paleta = THUMB[cap.lang] || THUMB.gen
      const label  = BADGE_LABEL[cap.lang] || cap.lang.toUpperCase()
      const pills  = cap.lecciones.map(l => `<span class="misguias-stat">${l}</span>`).join('')

      const card = document.createElement(cap.bloqueado ? 'div' : 'a')
      card.className = 'misguias-card-main'
      if (!cap.bloqueado) card.href = cap.archivo
      if (cap.bloqueado) card.style.cssText = 'opacity:0.5;pointer-events:none;cursor:default;'

      card.innerHTML = `
        <div class="misguias-card-thumb" style="background:${paleta.bg};">
          <div style="font-family:var(--font-code);font-size:1.5rem;font-weight:700;color:rgba(255,255,255,0.4);line-height:1;">${cap.numero}</div>
          <span class="misguias-card-badge" style="${paleta.badge};">${cap.bloqueado ? '🔒 BLOQUEADO' : label}</span>
        </div>
        <div class="misguias-card-body">
          <h3 class="misguias-card-titulo">${cap.titulo}</h3>
          <p class="misguias-card-desc">${cap.desc}</p>
          <div class="misguias-card-stats">${pills}</div>
        </div>
        ${!cap.bloqueado ? `<div class="misguias-card-cta"><span>Ver capítulo</span><div class="arrow">→</div></div>` : ''}
      `
      grid.appendChild(card)
    })

    // Card "próximo capítulo" al final del último tema
    if (TEMAS.indexOf(tema) === TEMAS.length - 1 && !tema.bloqueado) {
      const soon = document.createElement('div')
      soon.className = 'misguias-card-soon'
      soon.innerHTML = `
        <div class="misguias-card-soon-icon">➕</div>
        <h4>Próximo capítulo</h4>
        <p>Agrega un nuevo objeto en <code>TEMAS</code> dentro de <code>script.js</code> y aparece aquí automáticamente.</p>
      `
      grid.appendChild(soon)
    }
  })
}

// ============================================
// FUNCIÓN: Construir grid de Guías Adicionales
// Solo se ejecuta en capitulos.html (pestaña 🧩 Adicionales)
// Mismo patrón que construirBiblioteca()/construirCuriosos(),
// con su propia paleta de colores por categoría.
// ============================================

function construirAdicionales() {
  const contenedor = document.getElementById('adicionalesContainer')
  if (!contenedor) return

  const THUMB_ADICIONALES = {
    cmd:         { bg: 'linear-gradient(135deg,#1a0f0a 60%,#241408)', badge: 'background:rgba(196,74,42,0.25);color:#f4a68a;border:1px solid rgba(196,74,42,0.35)' },
    linux:       { bg: 'linear-gradient(135deg,#0a1f12 60%,#0f2b19)', badge: 'background:rgba(26,122,26,0.25);color:#7ed47e;border:1px solid rgba(26,122,26,0.35)' },
    comparativa: { bg: 'linear-gradient(135deg,#14120a 60%,#1e1a10)', badge: 'background:rgba(83,74,183,0.25);color:#b4aef5;border:1px solid rgba(83,74,183,0.35)' },
    git:         { bg: 'linear-gradient(135deg,#1f0f0a 60%,#2b130a)', badge: 'background:rgba(217,73,31,0.25);color:#ff9d73;border:1px solid rgba(217,73,31,0.35)' },
    sql:         { bg: 'linear-gradient(135deg,#0a1420 60%,#0f1e30)', badge: 'background:rgba(26,95,165,0.25);color:#86bef5;border:1px solid rgba(26,95,165,0.35)' },
  }
  const BADGE_LABEL_ADICIONALES = { cmd: '💻 CMD', linux: '🐧 LINUX', comparativa: '🔀 COMPARATIVA', git: '⑂ GIT', sql: '🗄️ SQL' }

  TEMAS_ADICIONALES.forEach(tema => {
    const bloque = document.createElement('div')
    bloque.className = `adicional-bloque ${tema.bloqueado ? 'adicional-bloqueado' : ''}`
    bloque.id = `adicional-${tema.id}`

    const disponibles = tema.capitulos.filter(c => !c.bloqueado).length
    const total       = tema.capitulos.length

    bloque.innerHTML = `
      <div class="adicional-header">
        <div>
          <p class="adicional-eyebrow">Tema ${tema.numero}${tema.bloqueado ? ' · 🔒 Próximamente' : ''}</p>
          <h2 class="adicional-titulo">${tema.titulo}</h2>
          <p class="adicional-desc">${tema.desc}</p>
        </div>
        ${!tema.bloqueado ? `<p class="adicional-progreso">${disponibles}/${total} disponibles</p>` : ''}
      </div>
      <div class="misguias-grid" id="grid-adicional-${tema.id}"></div>
    `
    contenedor.appendChild(bloque)

    const grid = document.getElementById(`grid-adicional-${tema.id}`)

    tema.capitulos.forEach(cap => {
      const paleta = THUMB_ADICIONALES[cap.categoria] || THUMB_ADICIONALES.sql
      const label  = BADGE_LABEL_ADICIONALES[cap.categoria] || cap.categoria.toUpperCase()
      const pills  = cap.lecciones.map(l => `<span class="misguias-stat">${l}</span>`).join('')

      const card = document.createElement(cap.bloqueado ? 'div' : 'a')
      card.className = 'misguias-card-main'
      if (!cap.bloqueado) card.href = cap.archivo
      if (cap.bloqueado) card.style.cssText = 'opacity:0.5;pointer-events:none;cursor:default;'

      card.innerHTML = `
        <div class="misguias-card-thumb" style="background:${paleta.bg};">
          <div style="font-family:var(--font-code);font-size:1.5rem;font-weight:700;color:rgba(255,255,255,0.4);line-height:1;">${cap.numero}</div>
          <span class="misguias-card-badge" style="${paleta.badge};">${cap.bloqueado ? '🔒 PRÓXIMAMENTE' : label}</span>
        </div>
        <div class="misguias-card-body">
          <h3 class="misguias-card-titulo">${cap.titulo}</h3>
          <p class="misguias-card-desc">${cap.desc}</p>
          <div class="misguias-card-stats">${pills}</div>
        </div>
        ${!cap.bloqueado ? `<div class="misguias-card-cta"><span>Ver guía</span><div class="arrow">→</div></div>` : ''}
      `
      grid.appendChild(card)
    })

    // Card "próximo tema" al final del último tema
    if (TEMAS_ADICIONALES.indexOf(tema) === TEMAS_ADICIONALES.length - 1 && !tema.bloqueado) {
      const soon = document.createElement('div')
      soon.className = 'misguias-card-soon'
      soon.innerHTML = `
        <div class="misguias-card-soon-icon">➕</div>
        <h4>Próxima guía adicional</h4>
        <p>Agrega un nuevo objeto en <code>TEMAS_ADICIONALES</code> dentro de <code>script.js</code> y aparece aquí automáticamente.</p>
      `
      grid.appendChild(soon)
    }
  })
}

// ============================================
// FUNCIÓN: Construir grid de Datos Curiosos
// Solo se ejecuta en capitulos.html (pestaña 🧠 Datos curiosos)
// Mismo patrón que construirBiblioteca(), pero con su
// propia paleta de colores para que se note que es
// una sección distinta a los capítulos de aprendizaje.
// ============================================

function construirCuriosos() {
  const contenedor = document.getElementById('curiososContainer')
  if (!contenedor) return

  const THUMB_CURIOSOS = {
    hardware: { bg: 'linear-gradient(135deg,#0a1420 60%,#0f1e30)', badge: 'background:rgba(26,95,165,0.25);color:#86bef5;border:1px solid rgba(26,95,165,0.35)' },
    software: { bg: 'linear-gradient(135deg,#12102a 60%,#1a1638)', badge: 'background:rgba(110,80,220,0.25);color:#c0b0f8;border:1px solid rgba(110,80,220,0.35)' },
    internet: { bg: 'linear-gradient(135deg,#0a1f1c 60%,#0e2a26)', badge: 'background:rgba(20,150,130,0.25);color:#7ee0c8;border:1px solid rgba(20,150,130,0.35)' },
    general:  { bg: 'linear-gradient(135deg,#1a1420 60%,#241a30)', badge: 'background:rgba(150,80,180,0.25);color:#e0a0f0;border:1px solid rgba(150,80,180,0.35)' },
  }
  const BADGE_LABEL_CURIOSOS = { hardware: '🖥️ HARDWARE', software: '💾 SOFTWARE', internet: '🌐 INTERNET', general: '🧠 CURIOSIDAD' }

  TEMAS_CURIOSOS.forEach(tema => {
    const bloque = document.createElement('div')
    bloque.className = `curioso-bloque ${tema.bloqueado ? 'curioso-bloqueado' : ''}`
    bloque.id = `curioso-${tema.id}`

    const disponibles = tema.capitulos.filter(c => !c.bloqueado).length
    const total       = tema.capitulos.length

    bloque.innerHTML = `
      <div class="curioso-header">
        <div>
          <p class="curioso-eyebrow">Tema ${tema.numero}${tema.bloqueado ? ' · 🔒 Próximamente' : ''}</p>
          <h2 class="curioso-titulo">${tema.titulo}</h2>
          <p class="curioso-desc">${tema.desc}</p>
        </div>
        ${!tema.bloqueado ? `<p class="curioso-progreso">${disponibles}/${total} disponibles</p>` : ''}
      </div>
      <div class="misguias-grid" id="grid-curioso-${tema.id}"></div>
    `
    contenedor.appendChild(bloque)

    const grid = document.getElementById(`grid-curioso-${tema.id}`)

    tema.capitulos.forEach(cap => {
      const paleta = THUMB_CURIOSOS[cap.categoria] || THUMB_CURIOSOS.general
      const label  = BADGE_LABEL_CURIOSOS[cap.categoria] || cap.categoria.toUpperCase()
      const pills  = cap.lecciones.map(l => `<span class="misguias-stat">${l}</span>`).join('')

      const card = document.createElement(cap.bloqueado ? 'div' : 'a')
      card.className = 'misguias-card-main'
      if (!cap.bloqueado) card.href = cap.archivo
      if (cap.bloqueado) card.style.cssText = 'opacity:0.5;pointer-events:none;cursor:default;'

      card.innerHTML = `
        <div class="misguias-card-thumb" style="background:${paleta.bg};">
          <div style="font-family:var(--font-code);font-size:1.5rem;font-weight:700;color:rgba(255,255,255,0.4);line-height:1;">${cap.numero}</div>
          <span class="misguias-card-badge" style="${paleta.badge};">${cap.bloqueado ? '🔒 PRÓXIMAMENTE' : label}</span>
        </div>
        <div class="misguias-card-body">
          <h3 class="misguias-card-titulo">${cap.titulo}</h3>
          <p class="misguias-card-desc">${cap.desc}</p>
          <div class="misguias-card-stats">${pills}</div>
        </div>
        ${!cap.bloqueado ? `<div class="misguias-card-cta"><span>Ver guía</span><div class="arrow">→</div></div>` : ''}
      `
      grid.appendChild(card)
    })

    // Card "próximo tema" al final del último tema
    if (TEMAS_CURIOSOS.indexOf(tema) === TEMAS_CURIOSOS.length - 1 && !tema.bloqueado) {
      const soon = document.createElement('div')
      soon.className = 'misguias-card-soon'
      soon.innerHTML = `
        <div class="misguias-card-soon-icon">➕</div>
        <h4>Próximo dato curioso</h4>
        <p>Agrega un nuevo objeto en <code>TEMAS_CURIOSOS</code> dentro de <code>script.js</code> y aparece aquí automáticamente.</p>
      `
      grid.appendChild(soon)
    }
  })
}

// ============================================
// FUNCIÓN: Stats en la portada
// ============================================

function llenarStats() {
  const el = document.getElementById('heroStats')
  if (!el) return

  const caps = TEMAS.flatMap(t => t.capitulos).filter(c => !c.bloqueado).length
  const lecs = TEMAS.flatMap(t => t.capitulos).filter(c => !c.bloqueado)
                    .reduce((a, c) => a + c.lecciones.length, 0)

  el.innerHTML = `
    <div class="stat-item">
      <div class="stat-num">${caps}</div>
      <div class="stat-label">Capítulos</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${lecs}</div>
      <div class="stat-label">Lecciones</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">∞</div>
      <div class="stat-label">Por venir</div>
    </div>
  `
}

// ============================================
// FUNCIÓN: Lección activa en sidebar (scroll)
// ============================================

function iniciarObservador() {
  const enlaces = document.querySelectorAll('.nav-item a')
  if (!enlaces.length) return

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id   = e.target.id
          const lang = e.target.closest('[data-lang]')?.dataset.lang
          enlaces.forEach(a => a.classList.remove('activo', 'html-activo'))
          const activo = document.querySelector(`.nav-item a[href="#${id}"]`)
          if (activo) {
            activo.classList.add('activo')
            if (lang === 'html') activo.classList.add('html-activo')
          }
        }
      })
    },
    { threshold: 0.35, rootMargin: '-70px 0px 0px 0px' }
  )

  document.querySelectorAll('.leccion').forEach(el => obs.observe(el))
}

// ============================================
// FUNCIÓN: Menú lateral en móvil
// ============================================

function iniciarMenuMovil() {
  const sidebar = document.querySelector('.sidebar')
  if (!sidebar) return

  // Crear botón flotante
  const btn = document.createElement('button')
  btn.className = 'btn-menu-movil'
  btn.innerHTML = '☰'
  btn.setAttribute('aria-label', 'Abrir menú')
  document.body.appendChild(btn)

  // Crear overlay
  const overlay = document.createElement('div')
  overlay.className = 'sidebar-overlay'
  document.body.appendChild(overlay)

  function abrirMenu() {
    sidebar.classList.add('visible')
    overlay.classList.add('visible')
    btn.innerHTML = '×'
  }

  function cerrarMenu() {
    sidebar.classList.remove('visible')
    overlay.classList.remove('visible')
    btn.innerHTML = '☰'
  }

  btn.addEventListener('click', () => {
    sidebar.classList.contains('visible') ? cerrarMenu() : abrirMenu()
  })

  overlay.addEventListener('click', cerrarMenu)

  // Cerrar al hacer clic en un enlace del sidebar
  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', cerrarMenu)
  })
}

// ============================================
// PWA — Registro del Service Worker
// ============================================

function registrarSW() {
  if ('serviceWorker' in navigator) {
    // Detectar la raíz del proyecto correctamente
    const base = location.pathname.includes('/capitulos/')
      ? '../sw.js'
      : './sw.js'

    navigator.serviceWorker.register(base)
      .then(() => console.log('☕ Service Worker registrado'))
      .catch(err => console.log('SW error:', err))
  }
}

// ============================================
// PWA — Banner de instalación
// ============================================

let promptInstalacion = null

function iniciarBannerInstalacion() {
  const banner   = document.getElementById('installBanner')
  const btnInst  = document.getElementById('btnInstalar')
  const btnCerrar = document.getElementById('btnInstalarCerrar')
  if (!banner) return

  // El navegador dispara este evento cuando la app es instalable
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    promptInstalacion = e
    banner.style.display = 'block'
  })

  if (btnInst) {
    btnInst.addEventListener('click', () => {
      if (!promptInstalacion) return
      promptInstalacion.prompt()
      promptInstalacion.userChoice.then(() => {
        banner.style.display = 'none'
        promptInstalacion = null
      })
    })
  }

  if (btnCerrar) {
    btnCerrar.addEventListener('click', () => {
      banner.style.display = 'none'
    })
  }
}

// ============================================
// INICIO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  llenarStats()
  construirBiblioteca()
  construirAdicionales()
  construirCuriosos()
  iniciarObservador()
  iniciarMenuMovil()
  iniciarBannerInstalacion()
  registrarSW()
})

// ============================================
// EXPORTAR DATOS PARA MI PROGRESO
// Mi Progreso lee estas variables automáticamente.
// Si agregas capítulos o ejercicios aquí arriba,
// aparecen solos en Mi Progreso sin tocar nada más.
// ============================================

window.CAPITULOS = TEMAS.flatMap(tema =>
  tema.capitulos.map(cap => ({
    id:     cap.id,           // ej. 'cap00-conceptos'
    num:    cap.numero,       // ej. '00'
    nombre: cap.titulo        // ej. 'Antes de empezar'
  }))
)

window.EJERCICIOS = [
  { id: 'ej01', nombre: 'Ejercicio 01 · Receta de Tacos' },
  { id: 'ej02', nombre: 'Ejercicio 02 · Página de Negocio' },
  { id: 'ej03', nombre: 'Ejercicio 03 · Perfil de Fútbol' },
  { id: 'ej04', nombre: 'Ejercicio 04 · Página de Contacto' },
  { id: 'ej05', nombre: 'Ejercicio 05 · Portfolio Responsive' },
  { id: 'ej06', nombre: 'Ejercicio 06 · Dashboard de Métricas' },
  // ➕ Agrega aquí los nuevos ejercicios cuando los tengas
]

window.PRACTICA = [
  { id: 'pr01', nombre: 'Nivel 01 · Variables' },
  { id: 'pr02', nombre: 'Nivel 02 · Condicionales' },
  { id: 'pr03', nombre: 'Nivel 03 · Funciones' },
  { id: 'pr04', nombre: 'Nivel 04 · Bucles y Arreglos' },
  { id: 'pr05', nombre: 'Nivel 05 · DOM — La página viva' },
  { id: 'pr06', nombre: 'Nivel 06 · Lista de Tareas (Proyecto)' },
  // ➕ Agrega aquí los nuevos niveles de práctica cuando los tengas
]
