# 🏫 AKT - CRM para Administración de Kinder

## 📘 Descripción

**AKT** es una plataforma CRM construida para administrar eficientemente la información de un jardín de niños, incluyendo usuarios, maestros, padres, alumnos, insumos y más. Esta solución cuenta con una robusta **API RESTful** desarrollada en **Node.js**, conectada a una base de datos **MySQL**, y un **frontend moderno en React** que facilita la gestión desde cualquier navegador.

---

## 🔧 Tecnologías Utilizadas

### 🔙 Backend

- **Node.js** 🟢
- **Express.js** 🔵
- **MySQL2** 🐬
- **Google Auth Libary** 🔡 (Login con google)
- **Argon2** 🔒 (Hash de contraseñas)
- **JWT** 🔑 (Autenticación)
- **Swagger & Swagger-UI** 📚 (Documentación de la API)
- **Express Rate Limit** ⏱️ (Limitación de peticiones)
- **Helmet** 🛡️ (Seguridad en headers HTTP)
- **CORS** 🌐 (Permite el acceso entre dominios)
- **Morgan** 🪵 (Middleware de logging)
- **Commander & Inquirer** ⚙️ (Comandos CLI)
- **Formkit Tempo** 🕒 (Fechas en formato entendible y legible)
- **Husky** 🐶 (Hooks de Git)

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

![Administracion de jardin de niños](/assets/Administracion%20de%20jardin%20de%20niños.png)

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
yarn install
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

## 🚀 Comandos

| Comando           | Descripción                                         |
| ----------------- | --------------------------------------------------- |
| `yarn dev`        | Inicia el servidor en modo desarrollo 🔄            |
| `yarn start`      | Inicia en modo producción 🚀                        |
| `yarn format`     | Formatea el código con Prettier 💅                  |
| `yarn test`       | Ejecuta pruebas unitarias con Jest ✅               |
| `yarn test:watch` | Ejecuta pruebas automáticamente al hacer cambios 👀 |

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
