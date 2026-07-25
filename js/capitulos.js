
      /* ============================================
       TABS — Lógica de navegación
       ============================================ */
    const tabBtns   = document.querySelectorAll('.tab-btn[data-tab]')
    const tabPanels = document.querySelectorAll('.tab-panel')

    /* ============================================
       MUNDOS — qué pestañas se ven según por dónde
       entraste desde el portal (?mundo=cafe|aprendizaje|datos)
       ============================================ */
    const params = new URLSearchParams(window.location.search)

    // Primero pestaña por defecto de cada mundo, para inferir el mundo
    // si solo llega ?tab= sin ?mundo= (compatibilidad con links viejos)
    const primeraTabPorMundo = { cafe: 'capitulos', aprendizaje: 'adicionales', datos: 'datoscuriosos' }

    let mundoActual = params.get('mundo')
    if (!mundoActual) {
      const tabParam = params.get('tab')
      const btnDelTab = tabParam ? document.querySelector(`.tab-btn[data-tab="${tabParam}"]`) : null
      mundoActual = btnDelTab ? btnDelTab.dataset.mundo : 'cafe'
    }

    tabBtns.forEach(btn => {
      if (btn.dataset.mundo !== mundoActual) btn.style.display = 'none'
    })

    /* Scroll horizontal de la barra de pestañas: difuminados + rueda del mouse */
    const tabsInner     = document.getElementById('tabsInner')
    const tabsFadeLeft  = document.getElementById('tabsFadeLeft')
    const tabsFadeRight = document.getElementById('tabsFadeRight')

    function actualizarFadesTabs() {
      if (!tabsInner) return
      const { scrollLeft, scrollWidth, clientWidth } = tabsInner
      tabsFadeLeft.classList.toggle('visible', scrollLeft > 4)
      tabsFadeRight.classList.toggle('visible', scrollLeft + clientWidth < scrollWidth - 4)
    }

    if (tabsInner) {
      actualizarFadesTabs()
      tabsInner.addEventListener('scroll', actualizarFadesTabs)
      window.addEventListener('resize', actualizarFadesTabs)

      // Permite desplazar la barra con la rueda vertical del mouse (más natural en escritorio)
      tabsInner.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault()
          tabsInner.scrollLeft += e.deltaY
        }
      }, { passive: false })

      // Al activar una pestaña, asegúrate de que quede visible dentro del scroll
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        })
      })
    }

    function activarTab(target) {
      const panel = document.getElementById(`panel-${target}`)
      if (!panel) return
      tabBtns.forEach(b => b.classList.remove('activa'))
      tabPanels.forEach(p => p.classList.remove('visible'))
      const btn = document.querySelector(`.tab-btn[data-tab="${target}"]`)
      if (btn) btn.classList.add('activa')
      panel.classList.add('visible')
    }

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab
        activarTab(target)
        // Actualizar la URL sin recargar, conservando el mundo actual
        history.replaceState(null, '', `?mundo=${mundoActual}&tab=${target}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    })

    // Al cargar la página, leer el parámetro ?tab= de la URL
    // Si no viene, usar la pestaña por defecto del mundo actual
    const tabInicial = params.get('tab') || primeraTabPorMundo[mundoActual] || 'capitulos'
    activarTab(tabInicial)
  
