//importing service model of db
const accountModel = require('../models/accountModel');
const { comparePassword } = require('../utils/authUtils');
const { generateToken } = require('../utils/jwt');
const { check } = require('../utils/account_type')


exports.showLoginForm = async (req, res) => {
    try {
        const type = await check(req);
        if (type == 'customer' | type == 'admin' | type == 'staff')
            return res.redirect('/dashboard')

    } catch (e) {
        //not working jwt token
        console.log(e)
    }

    res.render('login/login', { title: 'Login', layout: false });
}

exports.processLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log({ email, password })
        //we check for account existance

        const thisAccount = await accountModel.checkCredentials({ email });
        // console.log(thisAccount)
        if (thisAccount) {
            //process password checkup
            const similar = await comparePassword(password, thisAccount.Password);
            // console.log({ similar })
            if (similar) {
                //assing cookie and return success: true
                //else return credential error

                //generate and send jwt token
                const token = generateToken(thisAccount.Email);
                res.cookie('token', token)

                res.send({
                    success: true,
                    result: undefined,
                    message: 'The login successfull'
                })
            } else
                return res.send({
                    success: false,
                    result: "Account with this credentials not found ",
                    message: 'Please check your email and password'
                });

        } else
            return res.send({
                success: false,
                result: "Account with this credentials not found ",
                message: 'Please check your email and password'
            })
    } catch (e) {
        return res.send({
            success: false,
            result: "Error found while Loggin in, Error : " + e,
            message: 'Unable to fetch your account, please try again later'
        })
    }

}