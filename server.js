const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my webpage',
    currentYear: new Date().getFullYear()
  })
});

app.get('/about', (req, res, next) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res, next) => {
  res.send({
    errorMessage: 'Oh Hell No!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
