//importing service model of db
const accountModel = require('../models/accountModel');

exports.showSignupForm = (req, res) => {
    res.render('signup/signup', { title: 'Sign Up', layout: false });
}

exports.processSignup = async (req, res) => {
    console.log('Text fields:', req.body);       // username & email
    console.log('Uploaded file:', req.file);     // File info

    try {
        const newAccountId = await accountModel.createAccount({
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Password: req.body.password,
            Pp_path: req.file ? req.file['filename'] : null,
            Phone: req.body.phone
        });

        console.log('New Account ID:', newAccountId);

        res.json({
            success: true,
            reason: null,
            message: 'Account Create successful'
        });
    } catch (err) {
        let reason = 'Database error'//generic reason as it isn't known yet
        let message = 'Account Creation failed';
        if (err.code === 'ER_BAD_NULL_ERROR') {
            reason = (`Missing required field: ${err.sqlMessage}`);
            message = 'Please provide all information required';
        } else if (err.code === 'ER_DUP_ENTRY') {
            reason = ('Email already used');
            message = 'Please use another emial or try recoverring your password';
        } else {
            reason = ('Unexpected database error.');
            message = "Account Creation Failed, Try Again Later"
        }
        console.log(err)

        res.json({
            success: false,
            reason,
            message
        });
    }
}