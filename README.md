# Una noche para celebrar

Tarjeta de cumpleaños con un pastel, un murciélago animado y un pequeño guiño a Hot Freaks. HTML, CSS y JavaScript; sin dependencias de compilación.

## Desarrollo

Desde el repositorio:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Abre el servidor en tu navegador. El regalo central se abre para revelar una carta y el pastel. Personaliza el párrafo `letter-message` en `index.html` con tu texto. El botón «Pide un deseo» apaga las velas; «Otro deseo» vuelve a encenderlas. Se respeta la preferencia de movimiento reducido.

El texto se personaliza en `index.html` y los colores en `style.css`. Las fuentes de Google son opcionales: hay fuentes locales de respaldo. La tarjeta no reproduce música ni necesita credenciales.

## Publicar gratis en GitHub Pages

Esta web está lista para publicarse directamente, sin compilación.

1. Sube estos archivos a la rama `main` del repositorio `DevCavac/regalo`.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama **main**, la carpeta **/ (root)** y pulsa **Save**.
5. Espera a que GitHub complete la publicación. La dirección prevista es `https://devcavac.github.io/regalo/`.

Comparte la dirección de la página publicada. La dirección del repositorio muestra el código. La tarjeta y su carta serán públicas; evita incluir información privada.

## Música

Coloca el archivo de audio elegido en `assets/music.mp3` (con permiso para usarlo). En `index.html`, cambia `data-src="assets/music.mp3"` por `src="assets/music.mp3"`. La música empezará con el clic que abre el regalo y tendrá un botón para pausarla. Hasta añadirla no hay sonido ni se solicita un archivo inexistente.
