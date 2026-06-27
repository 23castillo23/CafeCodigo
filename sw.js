/* ============================================
   CAFÉ </> · SERVICE WORKER
   Hace que la app funcione sin internet
   ============================================ */

const CACHE = 'cafe-codigo-v8'

// Solo cachear lo esencial — si un archivo no existe no bloquea la instalación
const ARCHIVOS_CORE = [
  './',
  './index.html',
  './capitulos.html',
  './css/style.css',
  './js/script.js',
  './manifest.webmanifest'
]

// Instalar — solo archivos core, uno por uno para que un fallo no bloquee todo
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(
        ARCHIVOS_CORE.map(url =>
          cache.add(url).catch(err => console.warn('[SW] No se pudo cachear:', url, err))
        )
      )
    )
  )
  // Toma control inmediatamente sin esperar a que cierren las pestañas viejas
  self.skipWaiting()
})

// Activar — borra TODOS los cachés viejos y toma control de todas las pestañas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log('[SW] Borrando caché viejo:', k)
        return caches.delete(k)
      }))
    ).then(() => self.clients.claim())
  )
})

// Fetch — red primero, caché como respaldo (offline)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return

  // No interceptar requests de otros dominios (fonts, Firebase, etc.)
  const url = new URL(e.request.url)
  if (url.origin !== location.origin) return

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Solo cachear respuestas válidas
        if (res && res.status === 200 && res.type === 'basic') {
          const copia = res.clone()
          caches.open(CACHE).then(cache => cache.put(e.request, copia))
        }
        return res
      })
      .catch(() =>
        caches.match(e.request).then(cached => cached || caches.match('./index.html'))
      )
  )
})
