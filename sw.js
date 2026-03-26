/* ============================================
   CAFÉ </> · SERVICE WORKER
   Hace que la app funcione sin internet
   ============================================ */

const CACHE = 'cafe-codigo-v1'

const ARCHIVOS = [
  './',
  './index.html',
  './capitulos.html',
  './css/style.css',
  './js/script.js',
  './manifest.webmanifest',
  './capitulos/cap01-html.html',
  './capitulos/cap02-javascript.html'
]

// Instalar — guarda todos los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  )
  self.skipWaiting()
})

// Activar — borra cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch — red primero, caché como respaldo
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copia = res.clone()
        caches.open(CACHE).then(cache => cache.put(e.request, copia))
        return res
      })
      .catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
  )
})
