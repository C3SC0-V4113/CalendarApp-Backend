const { response, request } = require("express");

const crearUsuario = (req = request, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUsuario = (req = request, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
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
