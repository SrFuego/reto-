Reto Frontend Openlab 2018
==========================

Puedes tener una vista previa de los archivos ya compilados abriendo en el navegador el archivo `public/index.html`


Desarrollo:
----------

Primero debe tener instalado node (este repositorio fue probado con la version `v8.11.1`).

Probablemente para las instalaciones de manera global en sistemas linux debera dar permisos de super usuario antes de instalar (`sudo` antes del `npm install --global`)

1. Instalar glup-cli:

    ```bash
    npm install --global gulp-cli

2. Instalar bower:

    ```bash
    npm install --global bower

3. Instalar dependencias de npm:

    ```bash
    npm install

4. Instalar dependencias de bower:

    ```bash
    bower install

5. Copiar manualmente las dependencias de javascript y css de `bower_components` en

    ```bash
    source/scripts/vendor/
    source/styles/vendor/

6. Limpiar y copiar los recursos (imagenes, iconos, etc):

    ```bash
    gulp start

7. Compilar y lanzar el servidor de desarrollo:

    ```bash
    gulp
