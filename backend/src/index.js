const express = require ('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * TIPOS DE PARÂMETROS
 * 
 * Query Params: parâmetros nomeados enviados na rota após '?'
 * Route Params: utilizados para identificar recursos
 * Request Body: corpo da requisição utilizado para criar ou alter recursos
 * 
 */


app.listen(3333);