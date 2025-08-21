



exports.logout = (req, res) => {
    res.cookie('token', '')
    res.redirect('/login');
}