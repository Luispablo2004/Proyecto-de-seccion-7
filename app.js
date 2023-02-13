require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
//Header
hbs.registerPartials(__dirname + '/views/partials');
//Generic

// Medelwears : Funcion que se ejecuta antes de hacer otra cosa

//Servir contenido estatico

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Cursos de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Cursos de Node'
  })
});


app.get('/elements', (req, res) => {
    res.render('element', {
        nombre: 'Fernando Herrera',
        titulo: 'Cursos de Node'
      })
});

//PARA CUALQUIER OTRA RUTA QUE NO SEA NINGUNA DE LAS ANTERIORES
app.get('*', (req, res) => {
  res.sendFile(__dirname +'/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })