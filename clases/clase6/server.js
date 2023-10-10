const http = require('http');

const server = http.createServer((request, response) =>{
    response.end('Hello World\n');
})

server.listen(8080, () =>{
    console.log("Servidor escuchando el puerto 8080");
})

