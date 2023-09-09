const { Router } = require("express");
const router = Router();

/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

router.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

module.exports = router;
