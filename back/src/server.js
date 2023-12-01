const http = require('http');


const responsePetition = (req, res)=>{
	res.end("Hola Mundo")
}


let server = http.createServer(responsePetition);


server.listen(3000);