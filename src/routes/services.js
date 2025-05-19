const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// Obtener todos los servicios
router.get("/", serviceController.getAllServices);

// Obtener servicio por ID
router.get("/id/:id", serviceController.getServiceById);

// Obtener servicio por slug
router.get("/slug/:slug", serviceController.getServiceBySlug);

module.exports = router;
