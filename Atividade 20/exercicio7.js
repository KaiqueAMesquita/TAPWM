var http = require('http');
var server = http.createServer(function(req,res){
    var opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><body><h1>História da Fatec Sorocaba</h1></body></html>");
    }
    else if(opcao=='/cursos'){
        res.end("<html><body><h1>Cursos da Fatec Sorocaba</h1></body></html>");
    }
    else if(opcao=='/professores'){
        res.end("<html><body><h1>Professores da Fatec Sorocaba</h1></body></html>");
    }
    else
        res.end("<html><body><h1>Site da Fatec Sorocaba</h1></body></html>")

});

server.listen(3000);