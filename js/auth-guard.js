// ═══════════════════════════════════════════════════════
//  auth-guard.js  —  Café Código
//  Coloca este archivo en: js/auth-guard.js
//  Agrégalo en cada página protegida antes del </body>
// ═══════════════════════════════════════════════════════

(function () {

  // ── Calcular ruta raíz según profundidad de carpeta ──
  // Raíz  (index.html, acceso.html)      → ''
  // 1 nivel (comunidad/, glosario/, etc) → '../'
  // 2 niveles (Mis-Ejercicios/01Receta/) → '../../'
  const partes   = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
  const archivo  = partes[partes.length - 1] || '';

  // Detectar profundidad real según carpetas conocidas
  const CARPETAS_NIVEL1 = [
    'capitulos', 'comunidad', 'consola', 'glosario',
    'guia-conceptos', 'guia-html-css', 'guia-js', 'guia-vscode',
    'Ejercicios', 'practica', 'tablero-terminos'
  ];
  const CARPETAS_NIVEL2 = ['Mis-Ejercicios-Realizados'];

  let ROOT = '';
  const enNivel1 = CARPETAS_NIVEL1.some(c => partes.includes(c));
  const enNivel2 = CARPETAS_NIVEL2.some(c => partes.includes(c));

  // 01RecetaDeTacos está dentro de Mis-Ejercicios-Realizados → 2 niveles
  const enNivel2b = partes.includes('01RecetaDeTacos');

  if (enNivel2b)    ROOT = '../../';
  else if (enNivel2) ROOT = '../../';
  else if (enNivel1) ROOT = '../';
  else               ROOT = '';       // raíz del proyecto

  // ── Páginas que NO necesitan protección ──
  const PUBLICAS = ['acceso.html', 'admin-accesos.html'];
  if (PUBLICAS.includes(archivo)) return;

  // ── Verificar sesión ──
  const raw = localStorage.getItem('cafe_user');
  if (!raw) {
    window.location.replace(ROOT + 'acceso.html');
    return;
  }

  let user;
  try {
    user = JSON.parse(raw);
    if (!user?.email) throw new Error('sin email');
  } catch {
    localStorage.removeItem('cafe_user');
    window.location.replace(ROOT + 'acceso.html');
    return;
  }

  // ── Inyectar chip de usuario cuando el DOM esté listo ──
  function inyectar() {
    // Evitar doble inyección
    if (document.getElementById('cafeUserChip')) return;

    const header = document.querySelector('.header-inner, .com-header, header');
    if (!header) return;

    const inicial = (user.nombre || user.email).charAt(0).toUpperCase();

    const wrap = document.createElement('div');
    wrap.id = 'cafeUserChip';
    wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center;';

    wrap.innerHTML = `
      <div id="cafeChipBtn" style="
        display:flex;align-items:center;gap:0.5rem;
        background:rgba(196,74,42,0.08);
        border:1px solid rgba(196,74,42,0.22);
        border-radius:999px;padding:0.28rem 0.75rem 0.28rem 0.32rem;
        cursor:pointer;user-select:none;
      ">
        ${user.foto
          ? `<img src="${user.foto}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;flex-shrink:0;" alt="">`
          : `<div style="width:26px;height:26px;border-radius:50%;background:#c44a2a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">${inicial}</div>`
        }
        <span style="font-size:0.8rem;font-weight:500;color:var(--ink,#1a1814);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          ${(user.nombre || 'Usuario').split(' ')[0]}
        </span>
        <span style="font-size:0.6rem;color:var(--ink-muted,#6b6560);">▾</span>
      </div>

      <!-- Dropdown -->
      <div id="cafeDropdown" style="
        display:none;position:absolute;top:calc(100% + 6px);right:0;
        background:#fff;border:1.5px solid #e5e0d8;
        border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.1);
        min-width:190px;z-index:9999;overflow:hidden;
      ">
        <div style="padding:0.8rem 1rem;border-bottom:1px solid #e5e0d8;">
          <div style="font-size:0.8rem;font-weight:600;color:#1a1814;">${user.nombre || 'Usuario'}</div>
          <div style="font-size:0.7rem;color:#6b6560;margin-top:2px;word-break:break-all;">${user.email}</div>
        </div>
        <a href="${ROOT}index.html" style="
          display:flex;align-items:center;gap:0.5rem;padding:0.6rem 1rem;
          font-size:0.83rem;color:#1a1814;text-decoration:none;
          transition:background 0.12s;
        " onmouseover="this.style.background='#f4f1ea'" onmouseout="this.style.background='none'">
          ☕ Inicio
        </a>
        <a href="${ROOT}comunidad/comunidad.html" style="
          display:flex;align-items:center;gap:0.5rem;padding:0.6rem 1rem;
          font-size:0.83rem;color:#1a1814;text-decoration:none;
          transition:background 0.12s;
        " onmouseover="this.style.background='#f4f1ea'" onmouseout="this.style.background='none'">
          💬 Comunidad
        </a>
        <div style="height:1px;background:#e5e0d8;margin:0.2rem 0;"></div>
        <button id="cafeBtnSalir" style="
          display:flex;align-items:center;gap:0.5rem;width:100%;
          background:none;border:none;padding:0.6rem 1rem;
          font-family:inherit;font-size:0.83rem;color:#dc2626;
          cursor:pointer;text-align:left;transition:background 0.12s;
        " onmouseover="this.style.background='#fff5f5'" onmouseout="this.style.background='none'">
          🚪 Cerrar sesión
        </button>
      </div>
    `;

    // Insertar en el nav si existe, si no al final del header
    const nav = header.querySelector('.site-nav, nav');
    if (nav) nav.appendChild(wrap);
    else header.appendChild(wrap);

    // Toggle dropdown
    document.getElementById('cafeChipBtn').addEventListener('click', e => {
      e.stopPropagation();
      const dd = document.getElementById('cafeDropdown');
      dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
    });

    // Cerrar al click fuera
    document.addEventListener('click', () => {
      const dd = document.getElementById('cafeDropdown');
      if (dd) dd.style.display = 'none';
    });

    // Cerrar sesión
    document.getElementById('cafeBtnSalir').addEventListener('click', async () => {
      localStorage.removeItem('cafe_user');
      try {
        const { getAuth, signOut } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
        await signOut(getAuth());
      } catch {}
      window.location.replace(ROOT + 'acceso.html');
    });
  }

  // Esperar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inyectar);
  } else {
    inyectar();
  }

})();
