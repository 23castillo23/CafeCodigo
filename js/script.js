/* ============================================
   CAFÉ </> · GUÍA DE APRENDIZAJE
   script.js — Lógica, PWA e interactividad
   Usa TEMAS, definido en datos-cursos.js
   (cárgalo antes que este archivo en el HTML)
   ============================================ */

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
        <p>Agrega un nuevo objeto en <code>TEMAS</code> dentro de <code>datos-cursos.js</code> y aparece aquí automáticamente.</p>
      `
      grid.appendChild(soon)
    }
  })
}

// ============================================
// FUNCIÓN: Construir panel "Mis Guías"
// Solo se ejecuta en capitulos.html
// Lee GUIAS desde datos-cursos.js
// ============================================

function construirGuias() {
  const contenedor = document.getElementById('guiasContainer')
  if (!contenedor) return

  GUIAS.forEach(grupo => {
    const bloque = document.createElement('div')
    bloque.className = 'guias-grupo'

    bloque.innerHTML = `
      <p class="guias-grupo-label">${grupo.grupo}</p>
      <div class="misguias-grid"></div>
    `
    contenedor.appendChild(bloque)

    const grid = bloque.querySelector('.misguias-grid')

    grupo.items.forEach(item => {
      if (item.tipo === 'soon') {
        const soon = document.createElement('div')
        soon.className = 'misguias-card-soon'
        soon.innerHTML = `
          <div class="misguias-card-soon-icon">${item.icono}</div>
          <h4>${item.titulo}</h4>
          <p>${item.desc}</p>
        `
        grid.appendChild(soon)
        return
      }

      const pills = item.stats.map(s => `<span class="misguias-stat">${s}</span>`).join('')

      const card = document.createElement('a')
      card.className = 'misguias-card-main'
      card.href = item.href
      card.innerHTML = `
        <div class="misguias-card-thumb" style="background:${item.gradiente};">
          <div class="misguias-card-icon">${item.icono}</div>
          <span class="misguias-card-badge" style="${item.badgeEstilo}">${item.badge}</span>
        </div>
        <div class="misguias-card-body">
          <h3 class="misguias-card-titulo">${item.titulo}</h3>
          <p class="misguias-card-desc">${item.desc}</p>
          <div class="misguias-card-stats">${pills}</div>
        </div>
        <div class="misguias-card-cta"><span>Ver guía</span><div class="arrow">→</div></div>
      `
      grid.appendChild(card)
    })
  })
}

// ============================================
// HELPER: Crear una tarjeta (link / bloqueada / soon)
// Usado por todos los paneles nuevos de abajo.
// tipo "link"      → tarjeta normal con href
// tipo "bloqueada" → tarjeta con candado, sin href
// tipo "soon"      → placeholder "próximamente"
// ============================================

function crearTarjetaGuia(item) {
  if (item.tipo === 'soon') {
    const soon = document.createElement('div')
    soon.className = 'misguias-card-soon'
    soon.innerHTML = `
      <div class="misguias-card-soon-icon">${item.icono || '➕'}</div>
      <h4>${item.titulo}</h4>
      <p>${item.desc}</p>
    `
    return soon
  }

  const bloqueada = item.tipo === 'bloqueada'
  const el = document.createElement(bloqueada ? 'div' : 'a')
  el.className = 'misguias-card-main' + (bloqueada ? ' misguias-card-bloqueada' : '')
  if (!bloqueada) el.href = item.href

  const thumbStyle = item.gradiente   ? ` style="background:${item.gradiente};"` : ''
  const badgeStyle = item.badgeEstilo ? ` style="${item.badgeEstilo}"` : ''
  const badgeTexto = bloqueada ? '🔒 PRÓXIMAMENTE' : item.badge
  const stats = (item.stats && item.stats.length)
    ? `<div class="misguias-card-stats">${item.stats.map(s => `<span class="misguias-stat">${s}</span>`).join('')}</div>`
    : ''
  const cta = bloqueada
    ? `<div class="misguias-card-cta"><span>Próximamente</span></div>`
    : `<div class="misguias-card-cta"><span>${item.cta || 'Ver guía'}</span><div class="arrow">→</div></div>`

  el.innerHTML = `
    <div class="misguias-card-thumb"${thumbStyle}>
      <div class="misguias-card-icon">${item.icono}</div>
      <span class="misguias-card-badge"${badgeStyle}>${badgeTexto}</span>
    </div>
    <div class="misguias-card-body">
      <h3 class="misguias-card-titulo">${item.titulo}</h3>
      <p class="misguias-card-desc">${item.desc}</p>
      ${stats}
    </div>
    ${cta}
  `
  return el
}

// Llena un contenedor .misguias-grid con una lista plana de tarjetas
function pintarGridPlano(contenedorId, items) {
  const grid = document.getElementById(contenedorId)
  if (!grid) return
  items.forEach(item => grid.appendChild(crearTarjetaGuia(item)))
}

// Llena un contenedor con varios grupos (label + grid cada uno)
function pintarGrupos(contenedorId, grupos) {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return
  grupos.forEach(grupo => {
    const bloque = document.createElement('div')
    bloque.className = 'guias-grupo'
    bloque.innerHTML = `<p class="guias-grupo-label">${grupo.grupo}</p><div class="misguias-grid"></div>`
    contenedor.appendChild(bloque)
    const grid = bloque.querySelector('.misguias-grid')
    grupo.items.forEach(item => grid.appendChild(crearTarjetaGuia(item)))
  })
}

// ============================================
// FUNCIONES: Construir cada panel restante
// Cada una revisa que su contenedor exista antes
// de dibujar, así que es seguro llamarlas todas
// aunque la página no tenga ese panel.
// ============================================

function construirEjercicios()    { pintarGrupos('ejerciciosContainer', EJERCICIOS) }
function construirPractica()      { pintarGridPlano('practicaContainer', PRACTICA) }
function construirVideos()        { pintarGridPlano('videosContainer', VIDEOS) }
function construirAdicionales()   { pintarGrupos('adicionalesContainer', ADICIONALES) }
function construirDatosCuriosos() { pintarGrupos('datosCuriososContainer', DATOS_CURIOSOS) }
function construirGlosario() {
  pintarGridPlano('glosarioAccesosContainer', GLOSARIO_ACCESOS)
  pintarGrupos('glosarioGruposContainer', GLOSARIO_GRUPOS)
}
function construirConsola()  { pintarGridPlano('consolaContainer', CONSOLA) }
function construirProgresoAcceso() { pintarGridPlano('progresoAccesoContainer', PROGRESO) }


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
// FUNCIÓN: Menú hamburguesa del header
// ============================================

function iniciarMenuHeader() {
  const hamburger = document.getElementById('navHamburger')
  const nav       = document.getElementById('siteNav')
  if (!hamburger || !nav) return

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    nav.classList.toggle('open')
  })

  // Cerrar al hacer click en un enlace
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open')
      nav.classList.remove('open')
    })
  })
}

// ============================================
// INICIO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  llenarStats()
  construirBiblioteca()
  construirGuias()
  construirEjercicios()
  construirPractica()
  construirVideos()
  construirAdicionales()
  construirDatosCuriosos()
  construirGlosario()
  construirConsola()
  construirProgresoAcceso()
  iniciarObservador()
  iniciarMenuMovil()
  iniciarMenuHeader()
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
