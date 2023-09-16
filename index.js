const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnection } = require("./database/config");

/** Crear el servidor de express */
const app = express();

/** Base de datos */
dbConnection();

/** CORS */
app.use(cors());

/** Directorio Publico */
app.use(express.static("public"));

/** Lectura y parseo del Body */
app.use(express.json());

/** Rutas */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

/** Escuchar Peticiones */
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en ${process.env.PORT}`);
});
