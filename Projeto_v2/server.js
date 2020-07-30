const express = require('express')
const nunjucks = require('nunjucks')
const info_receitas = require('./data')
const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true
})

// Criando rotas, rendenrizar views
server.get('/', function(req, res){
    res.render('home', {info_receitas})
})

server.get('/receitas', function(req, res){
    res.render('receitas', {info_receitas})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    const index2 = info_receitas.find(function(index2){
          return index2.id == recipeIndex
    })
  
    if(!index2){
        return res.send('page not found!')
    }
    
    return res.render('recipes', {info: index2})
})

server.get('/sobre', function(req, res){
    res.render('sobre')
})

// Iniciando o servidor
server.listen(5000, function(){
    console.log('server is running')
})