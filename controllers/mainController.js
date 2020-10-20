const barcoder = require('../models/barcoder');

exports.mainPage = (req, res) => 
{
    console.log('--> rendering main page')
    res.render('mainPage');
};

exports.calc14InputPage = (req, res) =>
{
    res.render('calc14InputPage');
};

exports.calc14OutputPage = (req, res) =>
{
    /* pido al modelo todos los valores de ITF para el EAN especificado */
    let itf14s = barcoder.calculateITF14( req.body.barcode14Value );

    /* envio la el objeto devuelto a la vista para mostrar el resultado */
    res.render('calc14OutputPage', { itf14s } );
};

exports.gen14Download = (req, res) =>
{
    res.send( barcoder.svgMakerITF14( req.params.barcode ) );
};

exports.error404Page = (req, res) =>
{
    res.render('404');
};
