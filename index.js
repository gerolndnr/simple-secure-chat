const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

const port = process.env.SSC_PORT || 8080;

server.listen(port, () => {
    console.log(`Webserver running on :${port}`);
});

io.on("connection", (socket) => {

});