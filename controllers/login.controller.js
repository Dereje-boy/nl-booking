exports.showLoginForm = (req, res) => {
    res.render('login/login', { title: 'Login', layout: false });
    // res.send("<h1> Rendering Login page</h1>")
}

exports.processLogin = async (req, res) => {
    // const { email, password } = req.body;
    res.send('please provide email and password this login post route')
}