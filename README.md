# Backend REST_FULL_API

## Seguimiento 

- Se hara uso de express para poder desarrollar un backend de cierto nivel de complejidad con varios CRUD's llevando al maximo la capacidad en cuanto a interaccion con el servidor
- Posteriormente se hara la interfaz en React o Vue o Next para poder montar el Backend en algun framework y hacer la arquitectura de cliente servidor
- En el frontend se ocuparan tecnologias como:
  - Zustand (Como manejador de estado global)
  - Tanstack Query(Como manejador de peticiones y respuestas)
  - Algunalibreria donde monte la interfaz del diseño como Boostrap, Tailwind o shadcn/ui o styled-components para algo mas personalizado

## Segunda fase
- Se hara  el backend en Nest de la misma forma solo que migrandolo a un nuevo esquema de desarrollo, en la primera fase estara construido con MySQL, pero en esta fase se hara con MongoDB, GraphQL, Apollo
- Se haria un nuevo frontend pero ahora con este esquema de NO-SQL

## Ejecucion
- Se ocupa yarn en vez de npm para la ejecucion de dependencias y posteriormente se puede migrar a pnmp para que baje un poco el peso de las dependencias
- Se ocupara postman para hacer las pruebas de que el CRUD y cualquier funcionalidad este correecta en el backend antes de iniciar con el frontend
- Se omitio el archivo .env por seguridad siempre en los proyectos de git no mostrar credenciales

```bash
  yarn dev
```

# Backend SOAP_API

## Seguimiento
- Se hara el mismo backend solo que se migrara toda la funcioonalidad a una arquitectura SOAP en vez de REST para tener dos tipos de Backend uno con XML y otro con JSON

## Seguimiento aumentar la complejidad (Opcional)
- Se hara la construccion en AWS y su despliegue para ocupar los servicios y poder guardar y actualizar o borrar cosas desde el backend, como archivos o fotos o informacion que se guarde ampliando la arquitectura a cloud
