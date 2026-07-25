/* ============================================
   CAFÉ </> · CONTADORES DE COMUNIDAD
   contadores-comunidad.js
   Muestra mensajes/likes en tiempo real desde
   Firebase. Se usa en index.html y comunidad.html
   — misma config en un solo lugar.
   ============================================ */

import { initializeApp }  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, collection, onSnapshot, query }
                          from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// ══ Config de Firebase — un solo lugar para todo el sitio ══
const firebaseConfig = {
  apiKey: "AIzaSyAjNUAY81r5rUfwlslE_d9fHsJxZFptvf4",
  authDomain: "cafecodigo-276ba.firebaseapp.com",
  projectId: "cafecodigo-276ba",
  storageBucket: "cafecodigo-276ba.firebasestorage.app",
  messagingSenderId: "924422990613",
  appId: "1:924422990613:web:a7beafb991146549f2571c"
};
// ═════════════════════════════════════════════════════

try {
  const app = initializeApp(firebaseConfig, 'contadores-comunidad');
  const db  = getFirestore(app);

  // Escucha en tiempo real — se actualiza automáticamente
  onSnapshot(query(collection(db, 'mensajes_cafe')), snap => {
    let totalLikes = 0;
    snap.forEach(d => { totalLikes += d.data().likes || 0; });

    const elMensajes = document.getElementById('totalMensajes');
    const elLikes     = document.getElementById('totalLikes');
    if (elMensajes) elMensajes.textContent = snap.size;
    if (elLikes)    elLikes.textContent    = totalLikes;
  });

} catch (e) {
  // Si Firebase no está configurado todavía, muestra guión
  console.warn('Contadores de comunidad: Firebase no configurado aún.');
  const elMensajes = document.getElementById('totalMensajes');
  const elLikes     = document.getElementById('totalLikes');
  if (elMensajes) elMensajes.textContent = '—';
  if (elLikes)    elLikes.textContent    = '—';
}
