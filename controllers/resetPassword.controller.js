exports.showResetPasswordForm = (req, res) => {
    res.render('reset-password/request-reset-password', { title: 'Reset Password', layout: false });
}

exports.processLogin = async (req, res) => {
    // const { email, password } = req.body;
    res.send('here resetting the password')
}