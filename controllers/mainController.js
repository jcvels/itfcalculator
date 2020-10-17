exports.mainPage = (req, res) => 
{
    res.render('index');
};
exports.inputPage = (req, res) =>
{
    res.render('input');
}
exports.barcodePage = (req, res) =>
{
    res.render('barcode');
}
exports.error404Page = (req, res) =>
{
    res.render('404');
};
