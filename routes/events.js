const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = Router();

/** Todas tienen que pasar la validacion del JWT */
/** Obtener Eventos */
router.get("/", [validarJWT], getEventos);

/** Crear Evento */
router.post("/", [validarJWT], crearEvento);

/** Actualizar Evento */
router.put("/:id", [validarJWT], actualizarEvento);

/** Eliminar Evento */
router.delete("/:id", [validarJWT], eliminarEvento);

module.exports = router;
