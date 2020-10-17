const express = require('express');
const router = express.Router();

/* importación de controladores */
const mainController = require('../controllers/mainController');

module.exports = function()
{
    router.get('/', mainController.mainPage);
    router.get('/input', mainController.inputPage);
    router.get('/barcode/:barcode', mainController.barcodePage);
    router.use('**', mainController.error404Page);
    return router;
}
