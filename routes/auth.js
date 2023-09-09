const { Router } = require("express");
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

router.post("/new", crearUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
