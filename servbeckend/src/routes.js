// importando o express
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentCrontroller');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



// desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router();

routes.post('/sessions', SessionController.create);

// criando uma rota com o metodo get
routes.get('/ongs', OngController.index); 
// criando uma rota post
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


//exporta as rotas
module.exports = routes;