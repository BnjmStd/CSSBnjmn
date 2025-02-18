# Capa Anticorrupción en JavaScript al manejar respuestas de APIs

Una Capa Anticorrupción es un patrón arquitectónico que actúa como una barrera entre sistemas, asegurando que los datos externos (como respuestas de APIs) sean transformados a un formato que nuestro código interno pueda manejar de manera consistente y segura.

# 🏗 Estructura de una Capa Anticorrupción

La capa anticorrupción generalmente incluye:

- Clientes de API: Realizan las solicitudes HTTP.
- Adaptadores/Transformadores: Convierten los datos de la API a un formato interno.
- Repositorios: Proporcionan un acceso limpio a los datos para el dominio.

# Ejemplo Completo de Capa Anticorrupción

Supongamos que tenemos una API externa que devuelve datos de usuarios en un formato inconsistente:

**Respuesta de la API (GET /users/1):**

```js
{
  "id": "1",
  "full_name": "John Doe",
  "emailAddress": "johndoe@example.com",
  "phone": "123-456-7890"
}

```

**Pero nuestro sistema espera el usuario en este formato:**

```js
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phoneNumber": "123-456-7890"
}
```

```js
// 📌 Cliente de API: Encargado de hacer la petición
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error.message);
      return null;
    }
  }
}

// 📌 Transformador: Convierte los datos de la API a nuestro formato interno
class UserTransformer {
  static transform(apiData) {
    return {
      id: parseInt(apiData.id, 10),
      name: apiData.full_name,
      email: apiData.emailAddress,
      phoneNumber: apiData.phone,
    };
  }
}

// 📌 Repositorio: Proporciona datos transformados al dominio
class UserRepository {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getUserById(userId) {
    const apiData = await this.apiClient.get(`/users/${userId}`);
    if (!apiData) return null;
    return UserTransformer.transform(apiData);
  }
}

// 📌 Uso de la Capa Anticorrupción
(async () => {
  const apiClient = new ApiClient("https://api.example.com");
  const userRepository = new UserRepository(apiClient);

  const user = await userRepository.getUserById(1);
  console.log(user);
})();

/*
📝 Salida esperada:
{
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "123-456-7890"
}
*/
```

# Beneficios de esta Capa Anticorrupción

- ✅ Independencia del API Externa: Si la API cambia su estructura, solo hay que modificar UserTransformer, sin tocar el resto del código.
- ✅ Código más limpio y mantenible: Los datos se procesan antes de entrar al sistema, evitando que la lógica de negocio tenga que lidiar con inconsistencias.
- ✅ Facilidad para pruebas: Podemos probar UserTransformer de manera aislada, asegurándonos de que la transformación funciona correctamente.

# solución: Manejar atributos faltantes con valores por defecto

** Podemos modificar nuestro UserTransformer para manejar valores faltantes de forma segura con el operador nullish coalescing (??) o Object.hasOwn().**

```js
class UserTransformer {
  static transform(apiData) {
    return {
      id: apiData.id ? parseInt(apiData.id, 10) : null, // Si id no existe, ponemos null
      name: apiData.full_name ?? "Nombre desconocido", // Si full_name no existe, asignamos valor por defecto
      email: apiData.emailAddress ?? "Sin email",
      phoneNumber: apiData.phone ?? "Sin teléfono",
    };
  }
}
```

# Alternativa: Validar si el atributo existe

Si queremos asegurarnos de que la API realmente devuelve ciertos campos, podemos usar Object.hasOwn():

```js
class UserTransformer {
  static transform(apiData) {
    return {
      id: Object.hasOwn(apiData, "id") ? parseInt(apiData.id, 10) : null,
      name: Object.hasOwn(apiData, "full_name")
        ? apiData.full_name
        : "Nombre desconocido",
      email: Object.hasOwn(apiData, "emailAddress")
        ? apiData.emailAddress
        : "Sin email",
      phoneNumber: Object.hasOwn(apiData, "phone")
        ? apiData.phone
        : "Sin teléfono",
    };
  }
}
```
