const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const router = Router();

/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

router.post(
  "/new",
  [
    /** Middlewares */
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/",
  [
    /** Middlewares */
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
