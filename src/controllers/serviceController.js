const services = require("../data/services.json");

// Obtener todos los servicios (versión resumida)
const getAllServices = (req, res) => {
  try {
    // Crear una versión resumida de los servicios para la lista
    const servicesList = services.map(
      ({ id, name, slug, description, icon }) => ({
        id,
        name,
        slug,
        description,
        icon,
      })
    );

    res.json(servicesList);
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Obtener un servicio por ID
const getServiceById = (req, res) => {
  try {
    const { id } = req.params;
    const service = services.find((s) => s.id === parseInt(id));

    if (!service) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    res.json(service);
  } catch (error) {
    console.error("Error al obtener servicio por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Obtener un servicio por slug
const getServiceBySlug = (req, res) => {
  try {
    const { slug } = req.params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }

    res.json(service);
  } catch (error) {
    console.error("Error al obtener servicio por slug:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  getServiceBySlug,
};
