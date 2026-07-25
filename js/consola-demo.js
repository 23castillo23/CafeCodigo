/* ============================================
   CAFÉ </> · CONSOLA DEMO "HOLA MUNDO"
   consola-demo.js
   Widget interactivo exclusivo del index —
   solo se activa si encuentra sus elementos.
   ============================================ */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('hmEditor');
    const output = document.getElementById('hmOutput');
    const btn    = document.getElementById('hmRun');

    if (!editor || !output || !btn) return;

    // Sincronizar número de líneas
    function syncLines() {
      const lineas = document.querySelector('.hm-lineas');
      const n = editor.value.split('\n').length;
      lineas.innerHTML = Array.from({length: Math.max(n, 5)}, (_,i) => `<span>${i+1}</span>`).join('');
    }
    editor.addEventListener('input', syncLines);
    syncLines();

    // Ejecutar código de forma segura
    btn.addEventListener('click', function() {
      output.innerHTML = '';
      btn.textContent  = '▶ Ejecutar';

      const logs = [];
      const safeConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
        error: (...args) => logs.push('⛔ ' + args.join(' ')),
        warn:  (...args) => logs.push('⚠️ ' + args.join(' ')),
      };

      try {
        const fn = new Function('console', editor.value);
        fn(safeConsole);

        if (!logs.length) {
          output.innerHTML = '<span class="hm-output-placeholder">El código corrió pero no imprimió nada.<br>Prueba con console.log("algo")</span>';
        } else {
          // Efecto de tipeo letra por letra
          const texto = logs.join('\n');
          typeOut(output, texto, 'hm-output-success');
        }
      } catch(e) {
        output.innerHTML = `<span class="hm-output-error">⛔ Error: ${e.message}</span>`;
      }
    });

    function typeOut(el, text, cls) {
      el.innerHTML = '';
      const span = document.createElement('span');
      span.className = cls;
      el.appendChild(span);
      const cursor = document.createElement('span');
      cursor.className = 'hm-cursor';
      el.appendChild(cursor);

      let i = 0;
      const speed = Math.max(12, Math.min(40, 800 / text.length));
      const t = setInterval(() => {
        if (i < text.length) {
          span.textContent += text[i++];
        } else {
          clearInterval(t);
          setTimeout(() => cursor.remove(), 1200);
        }
      }, speed);
    }

    // Ejecutar automáticamente al cargar para mostrar el efecto
    setTimeout(() => btn.click(), 800);
  });
})();
