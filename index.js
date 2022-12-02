//Servidor de Express
const express = require("express");
const { addAbortSignal } = require("stream");
const app = express();

//Servidor de Socket
const server = require("http").createServer(app);

//Configuración del Socket Server
const io = require("socket.io")(server);

//Desplegar el directorio público
app.use( express.static(__dirname + "/public") );

io.on("connection", () => {
  /* … */
  console.log("cliente conectado");
});

server.listen(8080, () => {
  console.log("Server corriendo en puerto :8080");
});
