#

> [!IMPORTANT]
> si no indico que metodo https es, default es GET

- VERBOS HTTPS SIEMPRE EN MAYUS

```bash
    curl https://api.github.com
    curl -X GET https://jsonplaceholder.typicode.com/posts/1
    curl -X POST https://jsonplaceholder.typicode.com/posts \
        -H "Content-tpye: application/json" \
        -d '{ "title": "Mi post", "body": "hola mundo, "userId": 1 }'
```

si necesitamos authentication

```bash
curl -H "Authorization: Bearer <token>" https://api.secrets.com
```

```bash
source .env &&
curl -H "Authorization: Bearer $ACCESS_TOKEN" https://api.secrets.com
```

si el acceso a la api requiere usuario y contraseña en lugar de un token

```bash
curl -u usuario:contraseña https://ejemplo.com

(
    source .env &&
    curl -u $USER:$PWD https://ejemplo.com
)
```

download file

```bash
curl -O https://ejemplo.com/file.zip

curl -o ~/download/file.zip https://ejemplo.com/file.zip
```

para ver

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh
```

- fsSl:

-f: Falla silenciosamente (sin mostrar errores) en peticiones HTTP con código de error del servidor (4xx, 5xx).
-s: Modo silencioso. No muestra la barra de progreso ni mensajes de error (útil para scripts).
-S: Muestra los errores del servidor si ocurren (complementa a -s).
-L: Sigue las redirecciones HTTP.

¿cómo subir archivos?
asume un form > input["type=["file"]"]
```bash
curl -F "archivo=@imagen.png" https://api.de.imagenes.com/upload
```


```bash
curl -X POST https://example.com/formulario \
    -H "Content-Type: application/x-www-form--urlencoded" \
    -d "user=benja&email=matias@donweb.com"
```

encabezados

```bash

curl -I https://downweb.com
curl -LI https://downweb.cloud
```


Ejemplo con token en el cuerpo (menos común para GET, pero posible):

```bash
curl -G --data "token=<tu_token>" https://api.example.com/recursos_protegidos
```

```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <tu_token>" -d '{"nombre": "nuevo", "valor": 123}' https://api.example.com/recursos_protegidos
```

# put 

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"valor_actualizado": 456}' https://api.example.com/recursos/123
```

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <tu_token>" -d '{"valor_actualizado": 456}' https://api.example.com/recursos_protegidos/123
```

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"valor_actualizado": 456, "token": "<tu_token>"}' https://api.example.com/recursos_protegidos/123
```

# delete

```bash
curl -X DELETE https://api.example.com/recursos/123
```

```bash
curl -X DELETE -H "Authorization: Bearer <tu_token>" https://api.example.com/recursos_protegidos/123
```

```bash
curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -d "token=<tu_token>" https://api.example.com/recursos_protegidos/123
```