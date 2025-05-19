const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const servicesRoutes = require("./routes/services");

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;
// Configuración de CORS para producción
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [
          "https://goikode-web.netlify.app",
          "https://goikode-web.vercel.app",
          "https://flourishing-kitsune-26cd13.netlify.app",
        ]
      : "*",
  optionsSuccessStatus: 200,
};

// Middlewares
app.use(cors(corsOptions));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());

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
  console.log(`Entorno: ${process.env.NODE_ENV || "desarrollo"}`);
});
