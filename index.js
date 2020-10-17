const express = require('express');
const routes = require('./src/routes.manager');
const path = require('path');

/* creo una app de express */
const app = express();

/* static files 
app.set(express.static('public')); */

/* view engine */
app.set('view engine','pug');

/* views folder */
app.set('views', path.join(__dirname, './views'))

/* rutas */
app.use('/', routes());

/* defino el puerto de escucha */
app.listen(80);
