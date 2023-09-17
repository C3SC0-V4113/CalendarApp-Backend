const { response, request } = require("express");
const Evento = require("../models/Evento");

const getEventos = async (req = request, res = response) => {
  try {
    const eventos = await Evento.find().populate("user", "name");

    res.status(201).json({
      ok: true,
      eventos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const crearEvento = async (req = request, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    res.status(201).json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = async (req = request, res = response) => {
  const eventoID = req.params.id;

  try {
    const evento = await Evento.findById(eventoID);
    const uid = req.uid;

    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: "Evento no existe",
      });
    }

    /** Validar que solo el usuario creador pueda editar */
    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoID,
      nuevoEvento,
      { new: true }
    );

    res.status(201).json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
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
