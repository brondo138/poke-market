# PokeCards Market

PokeCards Market es una aplicación web de tienda de cartas Pokémon desarrollada con React para el frontend y Node.js con Express para el backend.

El sistema permite mostrar cartas Pokémon, visualizar su información, simular compras con la api de PayPal y guardar las cartas adquiridas de manera local por el usuario en una colección.

---

## Tecnologías utilizadas

### Frontend

- React
- Vite
- JavaScript
- CSS
- lucide-react

### Backend

- Node.js
- Express
- Nodemon

### API externa

- PokéAPI
- PayPal

---

## Estructura general del proyecto

```
POKECARDS-MARKET/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package-lock.json
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
└── .gitignore
```

---

# Instalación del proyecto

Para ejecutar el proyecto de forma local, se deben instalar las dependencias tanto del frontend como del backend.

---

# Configuración del Backend

El backend se encarga de levantar un servidor con Express. Esta parte puede utilizarse para manejar rutas, procesar compras, conectar con APIs externas en esta caso solo PayPal.

---

## 1. Configurar la carpeta del backend
Una vez clonado el repositorio entramos en el backend

```bash
cd backend
```

---

## 2. Inicializar el proyecto con npm

```bash
npm init -y
```

Este comando crea el archivo `package.json`, donde se guardan las configuraciones del proyecto y las dependencias instaladas.

---

## 3. Instalar Express

```bash
npm install express
```

Express permite crear el servidor del backend y manejar rutas HTTP.

---

## 4. Instalar Nodemon

```bash
npm install nodemon -D
```

Nodemon se instala como dependencia de desarrollo y sirve para reiniciar automáticamente el servidor cada vez que se realizan cambios en el código.

---

## 5. Configurar el servidor básico

Archivo:

```bash
backend/src/server.js
```

Código base del servidor:

```js
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(`Servidor backend corriendo en http://localhost:${PORT}`);

});
```

---

## 6. Configurar los scripts del backend

En el archivo `package.json` del backend debe quedar asi:

```json
{

"name": "backend",

"version": "1.0.0",

"type": "module",

"description": "",

"main": "index.js",

"scripts": {

"dev": "nodemon src/server.js",

"start": "node src/server.js"

},

"keywords": [],

"author": "",

"license": "ISC",

"dependencies": {

"cors": "^2.8.6",

"dotenv": "^17.4.2",

"express": "^5.2.1"

},

"devDependencies": {

"nodemon": "^3.1.14"

}

}
```

El script `dev` ejecuta el servidor usando Nodemon.

El script `start` ejecuta el servidor usando Node.

---

## 7. Ejecutar el backend

```bash
npm run dev
```

El backend quedará disponible en:

```bash
http://localhost:3000
```

---

# Configuración del Frontend

El frontend está desarrollado con React y Vite. Esta parte contiene la interfaz visual de la tienda, las cartas Pokémon, los modales, la colección y los botones de interacción.

---

## 1. Instalar las dependencias iniciales

```bash
npm install
```

Este comando instala las dependencias base del proyecto React.

---

## 2. Instalar lucide-react

```bash
npm install lucide-react
```

La librería `lucide-react` se utiliza para agregar iconos al proyecto.

---

## 3. Ejecutar el frontend

```bash
npm run dev
```

La aplicación normalmente se ejecutará en:

```bash
http://localhost:5173
```

---
# Funcionalidades principales

## Visualización de cartas Pokémon

La aplicación consume información de la PokéAPI para mostrar cartas Pokémon.

Cada carta muestra información como:

- Nombre del Pokémon
- Imagen
- Tipo
- Precio
- Rareza reflejado en el diseñio de la card

---

## Modal de información y compra

Al seleccionar una carta, se abre un modal con información más detallada del Pokémon.

---

## Compra de cartas

El usuario puede simular la compra de una carta Pokémon usando la api de PayPal en modalidad SandBox es decir compras simuladas para demostrar funcionalidad.

Después de realizar la compra, la carta pasa a formar parte de la colección del usuario.

---

## Colección de cartas

La sección de colección permite visualizar las cartas que el usuario ha comprado y las almacena en local storage.

Esto permite separar las cartas disponibles en la tienda de las cartas ya adquiridas.

---

## Almacenamiento de cartas compradas

Para guardar las cartas adquiridas se puede utilizar almacenamiento del navegador `sessionStorage`.

---

# Flujo del sistema

1. El usuario entra a la tienda de cartas.
2. El sistema carga cartas Pokémon desde la PokéAPI.
3. El usuario visualiza las cartas disponibles.
4. El usuario selecciona una carta.
5. Se abre un modal con la carta.
6. El usuario puede comprar la carta.
7. La carta comprada se guarda en el almacenamiento del navegador.
8. El usuario puede entrar a la sección de colección.
9. La colección muestra las cartas adquiridas previamente.

---
# Autor

Proyecto desarrollado por Alex Francisco Lovos Argueta, como examen parcial académico para reforzar conocimientos de desarrollo de componentes web con React.
