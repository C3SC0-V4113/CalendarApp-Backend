const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = Router();

/** Todas las rutas deben ser validadas del JWT */
router.use(validarJWT);

/** Todas tienen que pasar la validacion del JWT */
/** Obtener Eventos */
router.get("/", getEventos);

/** Crear Evento */
router.post("/", crearEvento);

/** Actualizar Evento */
router.put("/:id", actualizarEvento);

/** Eliminar Evento */
router.delete("/:id", eliminarEvento);

module.exports = router;
