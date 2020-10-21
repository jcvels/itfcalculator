const { response } = require('express');
const barcoder = require('../models/barcoder');

exports.mainPage = (req, res) => 
{
    res.render('mainPage');
};

exports.calc14InputPage = (req, res) =>
{
    res.render('calc14InputPage');
};

exports.calc14OutputPage = (req, res) =>
{
    /* pido al modelo todos los valores de ITF para el EAN especificado */
    let response = barcoder.calculateITF14( req.body.barcode14Value, req.body.barcode14Qtty );

    /* envio la el objeto devuelto a la vista para mostrar el resultado */
    res.render('calc14OutputPage', response );
};

exports.gen14Input = (req, res) =>
{
    res.render('gen14InputPage');
}

exports.gen14Output = (req, res) =>
{
    /* obtengo el valor enviado por la vista */
    let barcode = req.body.barcode14Value

    /* valido que el barcode sea correcto */
    let response = barcoder.validate14(barcode);

    /* envio el resultado a la vista */
    res.render('gen14OutputPage', { code:barcode, notification:response.notification });
};

exports.gen14Download = (req, res) =>
{
    res.render('gen14OutputPage', { code:req.params.barcode });
};

exports.gen13Input = (req, res) =>
{
    res.render('gen13InputPage');
}

exports.gen13Output = (req, res) =>
{
    /* obtengo el valor enviado por la vista */
    let barcode = req.body.barcode13Value

    /* valido que el barcode sea correcto */
    let response = barcoder.validate13(barcode);

    /* envio el resultado a la vista */
    res.render('gen13OutputPage', { code:barcode, notification:response.notification });
};

exports.error404Page = (req, res) =>
{
    res.render('404');
};
