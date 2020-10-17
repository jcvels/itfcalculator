const express = require('express');
const router = express.Router();

/* importación de controladores */
const mainController = require('../controllers/mainController');

module.exports = function()
{
    router.get('/', mainController.mainPage);
    router.get('**', mainController.error404Page);
    return router;
}
