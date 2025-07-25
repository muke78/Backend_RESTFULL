# 🏫 AKT - CRM para Administración de Kinder

## 📘 Descripción

**AKT** es una plataforma CRM construida para administrar eficientemente la información de un jardín de niños, incluyendo usuarios, maestros, padres, alumnos, insumos y más. Esta solución cuenta con una robusta **API RESTful** desarrollada en **Node.js**, conectada a una base de datos **MySQL**, y un **frontend moderno en React** que facilita la gestión desde cualquier navegador.

---

## 🔧 Tecnologías Utilizadas

### 🔙 Backend - Stack y Librerías

Tecnologías y herramientas utilizadas en el backend de este proyecto:

#### 🧠 Core & Framework
- **Node.js** 🟢 – Entorno de ejecución de JavaScript para backend.
- **Express.js** ⚡ – Framework web minimalista para crear APIs y servidores HTTP.

#### 🛡️ Seguridad y Autenticación
- **Argon2** 🔒 – Algoritmo de hashing seguro para contraseñas.
- **jsonwebtoken (JWT)** 🔑 – Autenticación basada en tokens.
- **Google Auth Library** 🔐 – Autenticación con cuentas de Google.
- **helmet** 🛡️ – Configura cabeceras HTTP seguras.
- **express-rate-limit** ⏱️ – Protección contra ataques de fuerza bruta y abuso.
- **cors** 🌐 – Permite solicitudes entre dominios.

#### 🐬 Base de Datos
- **MySQL2** 🐬 – Cliente MySQL para Node.js compatible con promesas.

#### 🪵 Logging y Utilidades
- **morgan** 🪵 – Middleware para registrar peticiones HTTP.

#### 📦 Formateo, Linting y Calidad de Código
- **prettier** ✨ – Formateador de código automático.
- **@trivago/prettier-plugin-sort-imports** 🔀 – Ordenamiento automático de imports.
- **eslint** 🧹 – Linter para mantener un estilo de código consistente.
- **@eslint/js** ⚙️ – Configuración moderna para `eslint`.
- **standard** 📏 – Estilo de código estándar para JavaScript.

#### 🧪 Testing
- **jest** ✅ – Framework de testing.
- **frisby** 🧪 – Librería para pruebas HTTP y APIs REST.
- **@faker-js/faker** 👻 – Generador de datos falsos para pruebas.

#### ⚙️ Automatización y Entorno de Desarrollo
- **nodemon** 🔄 – Reinicio automático del servidor al detectar cambios.
- **concurrently** 🧵 – Ejecuta múltiples comandos en paralelo.
- **dotenv** 🧬 – Carga variables de entorno desde archivos `.env`.
- **husky** 🐶 – Automatiza scripts en Git como pre-commit o pre-push.

#### 📚 Documentación
- **swagger-jsdoc** 📝 – Generador de especificaciones OpenAPI desde JSDoc.
- **swagger-ui-express** 🌐 – Interfaz de usuario Swagger para probar la API.
- **swagger-themes** 🎨 – Temas visuales personalizados para Swagger UI.

---

### 🌐 Frontend (React)

- **React 19** ⚛️
- **React Router DOM 7** 🧭
- **React Hook Form + Zod** 🧾 (Formularios y validación)
- **Zustand** 📦 (Manejo de estado global)
- **Tanstack React Query** 📤📥 (Manejo de peticiones)
- **TailwindCSS + DaisyUI** 🎨 (Estilos)
- **SweetAlert2 + React Hot Toast** 🔔 (Alertas y notificaciones)
- **Recharts** 📊 (Gráficas)
- **JWT Decode** 🪪 (Decodificación de tokens)
- **Axios** ⚡ (Cliente HTTP)
- **Animate.css** 🎞️ (Animaciones)
- **React CountUp** 🔢 (Contadores animados)
- **Vite** ⚡ (Empaquetador moderno)
- **Husky** 🐶 (Hooks de Git)

---

## Modelo relacional de la Base de Datos 🗄️

![Administracion de jardin de niños](/assets/Administracion%20de%20jardin%20de%20niños.svg)

---

## 🗂️ Estructura del Proyecto

```bash
Backend_Node_REST/
├── config/                  # Configuración de la base de datos y Swagger
├── controllers/             # Controladores para cada entidad
│   ├── maestrosControllers.js
│   ├── padresControllers.js
│   ├── studentsController.js
│   ├── catAssetsControllers.js
│   ├── catInventarioControllers.js
│   ├── catSuppliesControllers.js
│   ├── googleControllers.js
│   └── users/
├── helpers/                 # Funciones auxiliares y lógica reutilizable
│   ├── connection.helper.js
│   ├── jwt.js
│   ├── jwtGoogle.js
│   ├── apiCreateToken.js
│   └── usersHelpers/
├── lib/                     # Librerías externas o personalizadas
│   └── clientGoogle.js
├── middleware/              # Middlewares personalizados
├── models/                  # Modelos de la base de datos
├── router/                  # Definición de rutas
├── server/                  # Servidor Express y configuración
├── services/                # Lógica de negocio / servicios externos
├── tests/                   # Pruebas unitarias
│   ├── teachers/
│   └── users/
├── .env                     # Variables de entorno (no incluido en repo)
├── server.js                # Punto de entrada
```

---

## 🧱 Estructura de la Base de Datos

La base de datos cuenta con una versión espejo (entorno local) de la base de datos de producción.  
Esta arquitectura garantiza la seguridad e integridad de los datos reales, permitiendo hacer pruebas sin afectar el entorno principal.

Cada entorno (producción y local) utiliza un archivo `.env` con las configuraciones adecuadas, asegurando un manejo controlado y seguro de las credenciales y parámetros de conexión.

---

## ⚙️ Instalación y Ejecución

1. Clonar el repositorio

```bash
git clone https://github.com/muke78/Backend_RESTFULL.git
cd Backend_RESTFULL
```

2. Instalar las dependencias

```
pnpm install
```

3. Crear un archivo .env con las siguientes variables:
   ⚠️ Este archivo no está incluido en el repositorio por razones de seguridad.
   Solicita una versión válida al desarrollador si es necesario.

```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=akt_kinder
JWT_SECRET=your_jwt_secret
```

---

## 📦 Scripts disponibles

Estos son los scripts definidos en el archivo `package.json`, los cuales automatizan tareas comunes de desarrollo y pruebas.

| Script                 | Comando                                                                                     | Descripción                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `start`                | `nodemon server.js`                                                                         | Inicia el servidor en modo desarrollo usando `nodemon`.                                                         |
| `dev`                  | `nodemon server.js`                                                                         | Alias de `start`. Ideal para entornos de desarrollo.                                                             |
| `format`               | `prettier 'src/**/*.{js,ts,jsx,tsx,json}' server.js package.json --write`                   | Formatea el código en la carpeta `src`, `server.js` y `package.json` usando Prettier.                           |
| `prepare`              | `husky`                                                                                     | Configura los hooks de Git mediante Husky (se ejecuta automáticamente al instalar dependencias).                |
| `test`                 | `jest`                                                                                      | Ejecuta los tests unitarios utilizando Jest.                                                                     |
| `test:watch`           | `jest --watchAll`                                                                           | Ejecuta los tests y observa cambios en tiempo real para repetir automáticamente las pruebas.                    |
| `test:with-server`     | `concurrently --kill-others --success first "pnpm dev" "pnpm test"`                         | Ejecuta el servidor de desarrollo y las pruebas en paralelo. Se detiene si uno de ellos finaliza o falla.       |


---

## 📬 Documentación Swagger

- URL Base: http://localhost:3000/api/v1
- Documentación: http://localhost:3000/api-docs/

Puedes probar los endpoints directamente desde Swagger en tu navegador.

---

## 🧪 Pruebas

- Se utilizan Jest y Frisby para pruebas unitarias.
- Se realiza testing manual con Postman para verificar:
  - CRUD completo
  - Autenticación local y con Google
  - Roles y permisos

---

## 💡 Funcionalidades Clave

- ✅ Autenticación local y con Google
- 👨‍🏫 Gestión de maestros, padres y alumnos
- 🏫 Administración de insumos, activos e inventario
- 🧠 Documentación automática con Swagger
- 🛡️ Seguridad con Helmet, Rate Limit y hashing de contraseñas
- 🌐 Soporte para frontend moderno (React)

## 📈 Estado del Desarrollo

- [x] Backend funcional con autenticación
- [x] Documentación de endpoints con Swagger
- [x] CRUD de usuarios, maestros, padres y estudiantes
- [ ] Mejorar los CRUDS para maestos, padres, estudiantes y google etc
- [ ] Integración completa con el frontend (en progreso)
- [ ] Panel de administración con reportes y gráficas
- [ ] Roles y permisos sobre logica de modulos (en progreso)

---

## 📁 Repositorio

🔗 Backend: https://github.com/muke78/Backend_RESTFULL
