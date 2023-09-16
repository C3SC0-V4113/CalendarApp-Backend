const { response, request } = require("express");

const getEventos = async (req = request, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = async (req = request, res = response) => {
  console.log(req.body);
  res.status(201).json({
    ok: true,
    msg: "crearEvento",
  });
};

const actualizarEvento = async (req = request, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "actualizarEvento",
  });
};

const eliminarEvento = async (req = request, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
