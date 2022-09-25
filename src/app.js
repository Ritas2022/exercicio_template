/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Rita
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo


/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', aboutHandler);

app.get('/portfolio', listProjectHandler);



function aboutHandler(req, res){
    res.render('sobre_mim.ejs');
}


app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("Elite-Academy Desenvolvimento de um site para produtos educacionais.",2020,2020,2020); 
    let projeto_2 = new Projeto("Evo - Desenvolvimento de uma aplicação Web para solucionar problemas causados por fontes de dados diferentes",2021,2021,2021);
    let projeto_3 = new Projeto("Target -Business Solutions -Desenvolver uma aplicação Web para gestão de Relacionamento com o cliente para organização dos processos comercias,oferencendo suporte adequado ás áreas de vendas para empresas parceiras.",2022,2022,2022);   
    let projeto_4 = new Projeto("SrSoja- Criação de um Aplicativo colaborativo para produtores rurais.",2022,2022,2022); 
    let projeto_5 = new Projeto("OP-Criação de uma aplicação mobile para coleta de dados públicos,de acordo com o conceito citizen, para auxilio da secretaria de obras e serviços públicos",2022,2022,2022);  
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    projetos.push(projeto_4);
    projetos.push(projeto_5);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}