const express = require('express');
const app = express();
app.use(express.static('public'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuarios = [];

app.post('/cadastrar', function(req, res) {

    //var id = req.body.id;
    let nome = req.body.usuario;
    let senha = req.body.senha;

    const cadastro = {user: nome, password: senha};
    usuarios.push(cadastro);

    res.redirect(`/index.html`);
});

app.post('/login', function(req, res) {

    for(let i=0; i < usuarios.length; i++){
        if(usuarios[i].user == req.body.usuario && usuarios[i].password == req.body.senha){
            res.send('Logado com sucesso!');
            break;
        }
    } 
    res.send('Falha ao logar! Confirme sua senha ou nome.'); 
       
});

app.listen(3001);