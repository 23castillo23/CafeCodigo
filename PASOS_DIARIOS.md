## 🚀 ¿Cómo subir mi proyecto a GitHub por primera vez?
Cómo subir un proyecto local a GitHub
1. Preparación en GitHub
- Inicia sesión en tu cuenta de GitHub.
- Haz clic en el botón "+" en la esquina superior derecha y selecciona New repository.
- Ponle un nombre a tu repositorio (ej. mi-proyecto).
- Déjalo como Public o Private según prefieras.
## IMPORTANTE: No selecciones ninguna de las 💡 opciones de "Initialize this repository with..." (ni ⚠️ README, ni .gitignore, ni licencia) si ya tienes archivos en tu computadora. Queremos un repositorio vacío.
- Haz clic en Create repository.

2. Comandos en la Terminal (Local)
Abre la terminal o CMD y navega hasta la carpeta de tu proyecto. Luego, ejecuta los siguientes comandos:

Inicializar el repositorio:
git init
## Esto crea una carpeta oculta .git que empezará a rastrear tus cambios.

Preparar todos los archivos:
git add .
## El punto . indica que quieres agregar todos los archivos de la carpeta.

Crear el primer registro:
git commit -m "Primer commit: Subida inicial del proyecto"

Nombrar la rama principal:
git branch -M main
- Con -m (minúscula): Git es precavido. Si ya existe una rama que se llame main, te dirá: "Oye, no puedo renombrar esto a 'main' porque ya tengo una que se llama así".
- Con -M (mayúscula): Git no pregunta. Borra cualquier rastro del nombre anterior y le pone main a la fuerza.

Conectar con el servidor de GitHub:
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
(Pega aquí la URL que copiaste en el paso 1).

Empujar los archivos a la nube:
git push -u origin main
- ¿Cuándo usarlo? Solo la primera vez que subes el proyecto.
- ¿Qué hace? Sube todo y "conecta" tu PC con GitHub para que en el futuro solo uses git push.

💡 Tip de importancia
Si al hacer el último paso te pide usuario y contraseña, recuerda que GitHub ya no usa tu contraseña normal en la terminal. Debes usar un Personal Access Token (PAT) o configurar el GitHub Desktop para que lo haga por ti.

⚠️ Nota sobre archivos pesados
Si tienes carpetas como node_modules o archivos de configuración local (como .env), asegúrate de crear un archivo .gitignore ANTES del paso de git add . para evitar subir basura al repositorio.

## nombre del proyecto
El nombre en tu PC (Carpeta Local) y El nombre en GitHub (Repositorio Remoto)
💡 ¿Qué pasa si son diferentes?
Nada técnico. Git funcionará perfectamente.
- Tu carpeta local se puede llamar: proyecto_clase_lunes
- Tu repo en GitHub se puede llamar: sistema-inventario-v1
Cuando hagas el comando git remote add origin https://github.com/usuario/sistema-inventario-v1.git, Git creará el puente entre ambos sin importar que los nombres no coincidan.

✅ Recomendación de "Buena Práctica"
Aunque no sea obligatorio, lo ideal es que sean iguales o muy parecidos por estas razones:
- Evitas confusiones: Si tienes 20 proyectos, es más fácil saber cuál carpeta de tu PC corresponde a cuál repositorio en la nube.
- Orden profesional: Te ayuda a mantener una estructura limpia si en el futuro trabajas en equipo.
## Un tip extra: En GitHub, se acostumbra usar minúsculas y guiones (ejemplo: mi-proyecto-web), mientras que en tu PC puedes usar el formato que más te guste.

⚠️ cuando creaste el repositorio en la web de GitHub, marcaste la casilla de "Add a README file", "Add .gitignore" o una licencia. Ahora GitHub tiene un archivo (el README) que tú no tienes en tu computadora, y por eso te dice: rejected (fetch first).

Para solucionarlo y que tus archivos suban, tienes dos opciones:

## Opción A: La más rápida (Forzar la subida) 🚀
Como es tu primera subida y quieres que lo de tu PC mande, puedes obligar a GitHub a aceptar tus archivos:

Ejecuta este comando:
- git push -u origin main --force
⚠️ Nota: Esto borrará cualquier archivo que se haya creado automáticamente en GitHub (como el README vacío) y lo reemplazará por tus archivos reales.

## Opción B: La forma "correcta" (Traer y luego subir) 📥
Si quieres conservar lo que hay en GitHub (el README) y juntarlo con lo tuyo:

Trae los cambios de GitHub:
- git pull origin main --rebase
Ahora sí, sube tus archivos:
- git push -u origin main