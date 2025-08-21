const accountModel = require('../models/accountModel');
const { verifyToken } = require('./jwt');

exports.check = async (req) => {
    //if found return account type (customer, emlployee, admin)
    //else return empty string

    const token = req.cookies['token']

    //if found, check validity
    try {
        if (!token || !token.length) return '';

        const email = verifyToken(token).payload
        const user = await accountModel.getByEmail({ email })

        return user.Type;
    } catch (e) {
        //not working jwt token
        console.log(e)
        return '';
    }

}