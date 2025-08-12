exports.showSignupForm = (req, res) => {
    res.render('signup/signup', { title: 'Sign Up', layout: false });
}

exports.processSignup = async (req, res) => {
    // const { email, password } = req.body;
    res.send('please provide all required informations')
}