## 🚀 ¿Cómo subir mi proyecto a GitHub por primera vez?
1. Preparación en GitHub (Web)
Entra a GitHub y crea un New Repository.

Ponle nombre y NO marques las casillas de README, .gitignore o licencia (deja el repo vacío).

Copia la URL de tu repositorio (la que termina en .git).

2. Comandos en la Terminal (Local)
Ubícate en la carpeta de tu proyecto y ejecuta estos pasos en orden:

Inicializar el repositorio:
git init
(Crea el control de versiones en tu carpeta).

Preparar todos los archivos:
git add .
(Agrega todo el contenido actual).

Crear el primer registro:
git commit -m "Subida inicial del proyecto"

Nombrar la rama principal:
git branch -M main

Conectar con el servidor de GitHub:
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
(Pega aquí la URL que copiaste en el paso 1).

Empujar los archivos a la nube:
git push -u origin main

💡 Tip de importancia
Si al hacer el último paso te pide usuario y contraseña, recuerda que GitHub ya no usa tu contraseña normal en la terminal. Debes usar un Personal Access Token (PAT) o configurar el GitHub Desktop para que lo haga por ti.

⚠️ Nota sobre archivos pesados
Si tienes carpetas como node_modules o archivos de configuración local (como .env), asegúrate de crear un archivo .gitignore ANTES del paso de git add . para evitar subir basura al repositorio.