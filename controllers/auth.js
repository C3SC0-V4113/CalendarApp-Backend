const { response, request } = require("express");

const crearUsuario = (req = request, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "Invalid username, must be at least 5 characters",
    });
  }
  res.json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUsuario = (req = request, res = response) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
