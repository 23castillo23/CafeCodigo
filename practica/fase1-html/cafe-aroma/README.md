# Café Aroma — proyecto final de la Fase 1

Una página de cafetería que se fue armando bloque por bloque. Cada bloque continuó el código del anterior (desde el Bloque 4); este proyecto es el resultado final, separado en archivos.

## Estructura

```
cafe-aroma/
├── index.html      la página (HTML)
├── estilos.css     el aspecto (antes era <style>)
├── script.js       el comportamiento (antes era <script>)
├── portada.jpg     imagen de muestra (poster del video)
├── cafe.mp4        video de muestra
├── ambiente.mp3    audio de muestra
└── README.md       este mapa
```

Para verlo, abre `index.html` con doble clic. Reemplaza los tres archivos de muestra por los tuyos conservando el nombre.

## Qué bloque aportó cada parte

| Parte de la página | Bloque | Etiquetas |
|---|---|---|
| Esqueleto, título de la pestaña, título y párrafos | B1 Primera página | `<body>` `<head>` `<title>` `<h1>` `<p>` |
| Formato de texto, saltos de línea, citas | B2 Títulos y textos | `<hr>` `<strong>` `<em>` `<br>` `<small>` `<mark>` `<del>` `<blockquote>` |
| Lista de enlaces del menú, imágenes | B3 Listas, enlaces, imágenes | `<ul>` `<ol>` `<li>` `<a>` `<img>` |
| Header, nav, main, secciones, artículos, aside, footer | B4 Estructura | `<div>` `<section>` `<header>` `<nav>` `<main>` `<article>` `<aside>` `<footer>` `<span>` |
| Formulario «Reserva tu mesa» | B5 Formularios | `<form>` `<input>` `<label>` `<textarea>` `<button>` |
| Tablas de precios y horario | B6 Tablas | `<table>` `<tr>` `<td>` `<th>` |
| Video, audio, estilos y saludo | B7 Multimedia y código | `<video>` `<audio>` `<script>` `<style>` |

Dentro de `index.html` hay comentarios `<!-- B4 · ... -->` que marcan de qué bloque viene cada parte.

## Cómo se fue construyendo

1. **B1–B3** fueron práctica con páginas sueltas («Hola, mundo»).
2. **B4** empezó Café Aroma: `header` con el `h1` de B1, `nav` con la lista de enlaces de B3, `main`, `footer`.
3. **B5** agregó el formulario dentro de `main`, usando `p` y `br` de B1 y B2 para acomodar los campos.
4. **B6** agregó las tablas de precios y horario, coherentes con el horario del `footer`.
5. **B7** agregó video y audio, sacó el aspecto a `style` (incluidos los bordes de las tablas del B6) y puso un `script` que usa el `id` que aprendiste con `label` en B5. Aquí se separaron CSS y JavaScript en sus archivos.

## Etiquetas

Esta página usa 30 de las 40 etiquetas del curso en su HTML. Las que no aparecen en `index.html` son nueve de los bloques 2 y 3, que quedaron como práctica: `<hr>` `<strong>` `<em>` `<small>` `<mark>` `<del>` `<blockquote>` `<ol>` `<img>`. La décima, `<style>`, sí se usó en el Bloque 7, pero al separar el CSS pasó a `estilos.css` y se enlaza con `<link>`.

## Pendiente

Estos archivos todavía no existen y los enlaces no llevan a ningún lado: `inicio.html`, `menu.html`, `contacto.html` y `reservar.html` (a donde enviaría el formulario).
