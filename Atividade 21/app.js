var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render("home/index")

})
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");
})
app.get('/historia', function(req,res){
    res.render("informacao/historia");
})
app.get('/cursos', function(req,res){
    res.render("informacao/cursos");

})
app.get('/professores', function(req,res){
    res.render("informacao/professores");

})

app.listen(3333, () => {
  console.log(`Servidor rodando`);
});

app.get('/sobre', function(req,res){
    res.render("sobre.ejs");
})