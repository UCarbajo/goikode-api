# API de Servicios de Goikode

API REST desarrollada con Node.js y Express que proporciona información sobre los servicios ofrecidos por Goikode.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:

git clone https://github.com/tu-usuario/goikode-api.git
cd goikode-api

2. Instala las dependencias:

npm install

3. Inicia el servidor en modo desarrollo:

npm run dev

El servidor estará disponible en http://localhost:3000

## Endpoints disponibles

- `GET /` - Información de bienvenida y endpoints disponibles
- `GET /api/services` - Obtener lista de todos los servicios (versión resumida)
- `GET /api/services/id/:id` - Obtener detalle de un servicio por ID
- `GET /api/services/slug/:slug` - Obtener detalle de un servicio por slug

## Estructura del proyecto

- `src/index.js` - Punto de entrada de la aplicación
- `src/routes/` - Definiciones de rutas
- `src/controllers/` - Controladores para manejar la lógica de negocio
- `src/data/` - Datos JSON para los servicios

## Scripts disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor en modo desarrollo con recarga automática
