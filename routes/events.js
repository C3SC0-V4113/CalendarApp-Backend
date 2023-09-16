const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

/** Todas las rutas deben ser validadas del JWT */
router.use(validarJWT);

/** Todas tienen que pasar la validacion del JWT */
/** Obtener Eventos */
router.get("/", getEventos);

/** Crear Evento */
router.post(
  "/",
  [
    /** Middlewares */
    check("title", "Titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

/** Actualizar Evento */
router.put("/:id", actualizarEvento);

/** Eliminar Evento */
router.delete("/:id", eliminarEvento);

module.exports = router;
