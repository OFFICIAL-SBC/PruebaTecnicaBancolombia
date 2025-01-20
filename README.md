# Prueba Técnica Bancolombia

Este proyecto es una solución técnica desarrollada con un stack moderno que incluye Angular para el frontend y Node.js para el backend. A continuación, encontrarás la información necesaria para instalar, ejecutar y acceder a la aplicación.

---

## Stack de Desarrollo

### Frontend:
- **Framework:** Angular 19
- **Lenguaje:** TypeScript
- **Estilos:** SASS

### Backend:
- **Framework:** Node.js con Express
- **Lenguaje:** JavaScript

### Almacenamiento de Datos:
- **Almacenamiento:** LocalStorage

### Autenticación:
- **Protocolo:** JWT (JSON Web Tokens)

---

## Instalación

### Frontend:
1. Clona el repositorio.
2. Navega a la carpeta del proyecto `frontend` desde la terminal.
3. Ejecuta el comando:
   ```bash
   npm install
   ```

### Backend:
1. Navega a la carpeta del proyecto `backend` desde la terminal.
2. Instala las dependencias necesarias con el siguiente comando:
   ```bash
   npm install express cors body-parser jsonwebtoken dotenv
   ```
3. Instala `nodemon` como dependencia de desarrollo:
   ```bash
   npm install nodemon --save-dev
   ```
4. Instala `concurrently` para ejecutar frontend y backend simultáneamente:
   ```bash
   npm install concurrently
   ```

---

## Ejecución del Proyecto

1. Desde la carpeta raíz del backend, navega a la carpeta `src`.
2. Ejecuta el siguiente comando para iniciar tanto el frontend como el backend:
   ```bash
   npm start
   ```

---

## Acceso a la Aplicación

### Usuarios de prueba:
- **Usuario 1**:
  - **Username:** sebastian
  - **Password:** sebastian

- **Usuario 2**:
  - **Username:** pablo
  - **Password:** pablo

---

## Notas adicionales
- Asegúrate de tener instalado [Node.js](https://nodejs.org) y [npm](https://www.npmjs.com/) en tu sistema.
- La aplicación utiliza `LocalStorage` para gestionar los datos, por lo que no es necesario configurar una base de datos externa.
- Para cualquier duda o problema, por favor, contacta al desarrollador.

---

