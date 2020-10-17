const express = require('express');
const routes = require('./src/routes.manager');
const path = require('path');

/* creo una app de express */
const app = express();

/* static files */
app.use(express.static('public')); 

/* view engine */
app.set('view engine','pug');

/* views folder */
app.set('views', path.join(__dirname, './views'))

/* rutas */
app.use('/', routes());

/* defino el puerto de escucha */
var port;
if(process.env.PORT) { port = process.env.PORT; }
else { port = 80; }

/* informo por consola el puerto de escucha */
console.warn("APP listen port: #" +  port );

/* inicio el listering */
app.listen(port);
