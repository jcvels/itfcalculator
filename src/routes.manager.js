const express = require('express');
const router = express.Router();

/* importación de controladores */
const mainController = require('../controllers/mainController');

module.exports = function()
{
    /* system routes */
    router.get('/', mainController.mainPage);
    //router.use('*', mainController.error404Page);

    /* routes for calc14 module */
    router.get('/calc14', mainController.calc14InputPage);
    router.post('/calc14', mainController.calc14OutputPage);
        
    /* routes for gen14 module */
    router.get('/gen14Download/:barcode', mainController.gen14Download);

    /* routes for gen13 module */
        
    return router;
}
