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
        desc:      'Selectores, colores, tipografía y diseño responsive.',
        lang:      'css',
        archivo:   'capitulos/cap03-css.html',
        lecciones: ['🎨 Selector', '🖌️ Propiedad', '📐 Box Model', '📱 Responsive'],
        bloqueado: true
      }
    ]
  },
  {
    id:     'intermedio',
    numero: '02',
    titulo: 'Nivel Intermedio',
    desc:   'Lógica de programación, manipulación del DOM, formularios y conexión con APIs.',
    bloqueado: true,
    capitulos: [
      {
        id:        'cap04-control',
        numero:    '04',
        titulo:    'Estructuras de control',
        desc:      'if/else, bucles y cómo tomar decisiones en código.',
        lang:      'js',
        archivo:   'capitulos/cap04-control.html',
        lecciones: ['🔀 if / else', '🔁 for', '🔄 while'],
        bloqueado: true
      },
      {
        id:        'cap05-datos',
        numero:    '05',
        titulo:    'Arreglos y objetos',
        desc:      'Cómo guardar y organizar muchos datos a la vez.',
        lang:      'js',
        archivo:   'capitulos/cap05-datos.html',
        lecciones: ['📚 Arreglos', '🗃️ Objetos', '🔍 Métodos'],
        bloqueado: true
      }
    ]
  },
  {
    id:     'proyectos',
    numero: '03',
    titulo: 'Proyectos Reales',
    desc:   'Construir apps completas, conectar con APIs, bases de datos y más.',
    bloqueado: true,
    capitulos: [
      {
        id:        'cap06-api',
        numero:    '06',
        titulo:    'Conexión con APIs',
        desc:      'Cómo tu app habla con servidores externos.',
        lang:      'js',
        archivo:   'capitulos/cap06-api.html',
        lecciones: ['🌐 fetch', '📡 JSON', '⏳ async/await'],
        bloqueado: true
      },
      {
        id:        'cap07-firebase',
        numero:    '07',
        titulo:    'Base de datos',
        desc:      'Firebase y Firestore — como en tu FotoApuntes.',
        lang:      'js',
        archivo:   'capitulos/cap07-firebase.html',
        lecciones: ['🔥 Firebase', '💾 Firestore', '🔐 Auth'],
        bloqueado: true
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
      card.className = `cap-card ${cap.lang} ${cap.bloqueado ? 'bloqueada' : ''}`
      card.href = cap.bloqueado ? '#' : cap.archivo

      const pills = cap.lecciones
        .map(l => `<span class="leccion-pill">${l}</span>`)
        .join('')

      card.innerHTML = `
        <div class="cap-card-num">${cap.numero}</div>
        <span class="badge badge-${cap.lang}">${cap.lang.toUpperCase()}</span>
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
