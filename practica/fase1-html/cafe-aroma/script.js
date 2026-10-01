// Café Aroma · script
// Antes vivía dentro de <script> en el bloque 7; ahora se enlaza al final del <body>.

// Saludo según la hora, en el <p id="saludo"> del header (B4)
var hora = new Date().getHours();
var saludo = hora < 12 ? "Buenos días" : hora < 19 ? "Buenas tardes" : "Buenas noches";
document.getElementById("saludo").textContent = saludo + ", bienvenido a Café Aroma";
