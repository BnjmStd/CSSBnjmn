=> se usa para autenticar y validar autenticidad
cadena de texto, puede estar comp numeros letras y simbolos
usa metodos criptograficos, se puede inscriptar con llave publica o priv
con rsa o ecdsa la llave se almacena del lado del cliente y es de tipo publica y el servidor tiene la otra llave que es privada

# estructura

cada parte del texto se separa por `.`
teniendo esto en cuenta

## header

la cabecera tiene dos elemento

{
"alg": "HS256", # ALGORITMO DE CIFRADO
"typ": "jwt" # tipo de token
}

## payload

donde va la info
el primer elemento del json es donde va la info de `claim` un claim
son parametros reservados paraa la información para añadir información contextual

sub, destinatario del token
exp, expiración
y luego la info que viajará

## signature

toma el json del header y del payload y los transforma a base64 y en conjunto a un secret todo junto conforma la firma

HMACSHA256(
base64UrlEncode(header)+"."+base64UrlEncode(payload)+"."+secret
)
