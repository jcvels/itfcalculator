exports.mainPage = (req, res) =>
{
    res.render('index');
};

exports.error404Page = (req, res) =>
{
    res.render('404');
};
