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
      }
    ]
  }
]

// ============================================
// FUNCIÓN: Construir biblioteca de capítulos
// Solo se ejecuta en capitulos.html
// ============================================

function construirBiblioteca() {
  const contenedor = document.getElementById('temasContainer')
  if (!contenedor) return

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
      <div class="caps-grid" id="grid-${tema.id}"></div>
    `
    contenedor.appendChild(bloque)

    // Llenar el grid de este tema
    const grid = document.getElementById(`grid-${tema.id}`)
    tema.capitulos.forEach(cap => {
      const card = document.createElement('a')

      // El cap00 usa 'gen' como lang — asignamos clase css especial
      const langClass = cap.lang === 'gen' ? 'gen' : cap.lang
      card.className = `cap-card ${langClass} ${cap.bloqueado ? 'bloqueada' : ''}`
      card.href = cap.bloqueado ? '#' : cap.archivo

      // Estilo borde hover para cap gen
      if (cap.lang === 'gen' && !cap.bloqueado) {
        card.style.setProperty('--hover-border', 'var(--gen)')
      }

      const pills = cap.lecciones
        .map(l => `<span class="leccion-pill">${l}</span>`)
        .join('')

      // Badge especial para cap gen
      const badgeHtml = cap.lang === 'gen'
        ? `<span class="badge" style="background:var(--gen-bg);color:var(--gen);border:1px solid var(--gen-border);">INTRO</span>`
        : `<span class="badge badge-${cap.lang}">${cap.lang.toUpperCase()}</span>`

      card.innerHTML = `
        <div class="cap-card-num">${cap.numero}</div>
        ${badgeHtml}
        <h4 class="cap-card-titulo">${cap.titulo}</h4>
        <p class="cap-card-desc">${cap.desc}</p>
        <div class="cap-card-lecciones">${pills}</div>
        ${cap.bloqueado ? '<span class="cap-card-lock">🔒</span>' : ''}
      `
      grid.appendChild(card)
    })
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
  iniciarObservador()
  iniciarMenuMovil()
  iniciarBannerInstalacion()
  registrarSW()
})
