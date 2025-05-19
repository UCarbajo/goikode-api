const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const servicesRoutes = require("./routes/services");

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(morgan("dev")); // Registrar solicitudes HTTP
app.use(express.json()); // Parsear solicitudes con JSON

// Rutas
app.use("/api/services", servicesRoutes);

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API de Goikode",
    version: "1.0.0",
    endpoints: {
      services: "/api/services",
      serviceDetail: "/api/services/:id",
    },
  });
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
