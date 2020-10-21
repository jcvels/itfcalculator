const express = require('express');
const router = express.Router();

/* importación de controladores */
const mainController = require('../controllers/mainController');

module.exports = function()
{
    /* system routes */
    router.get('/', mainController.mainPage);
    //router.get('/*', mainController.error404Page);

    /* routes for calc14 module */
    router.get('/calc14', mainController.calc14InputPage);
    router.post('/calc14', mainController.calc14OutputPage);
        
    /* routes for gen14 module */
    router.get('/gen14', mainController.gen14Input);
    router.post('/gen14', mainController.gen14Output);    
    router.get('/gen14/:barcode', mainController.gen14Download);

    /* routes for gen13 module */
    router.get('/gen13', mainController.gen13Input);    
    router.post('/gen13', mainController.gen13Output);

    return router;
}
