//importing service model of db
const accountModel = require('../models/accountModel');
const { check } = require('../utils/account_type');

exports.getAllAccounts = async (req, res) => {

    let accounts = []
    try {
        accounts = await accountModel.getAllAccounts();
        return res.send({
            success: true,
            reason: undefined,
            message: 'Accounts fetched Successfully',
            data: accounts
        })
    } catch (err) {
        console.error(err);
        return res.send({
            success: false,
            reason: "Error found while fetching accounts from DB, Error : " + err,
            message: 'Unable to fetch the accounts, please try again later'
        })
    }
};

exports.getOneAccount = async (req, res) => {
    res.send('one acc info')
};

exports.showCreateNewAccountForm = async (req, res) => {
    res.render('accounts/create-account', { layout: false })
}
exports.createNewAccount = async (req, res) => {
    console.log('Text fields:', req.body);
    console.log('Uploaded file:', req.file);     // File info
    //if cookie==user.type===admin consider using it
    const cookieType = await check(req);
    let Type = 'customer';

    if (cookieType == 'admin')
        Type = req.body.userType

    try {
        const newAccountId = await accountModel.createAccount({
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Password: req.body.password,
            Pp_path: req.file ? req.file['filename'] : null,
            Phone: req.body.phone,
            Type: Type.toLowerCase()
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

    // res.json({
    //     success: true,
    //     reason: null,
    //     message: 'You are not admin, to create new account'
    // })

}

exports.showUpdateAccountForm = async (req, res) => {
    const id = req.params.id;
    // Validation:
    if (!id || isNaN(id) || parseInt(id) <= 0) {
        const message = `Account ID seems invalid, ID : ${id}`
        return res.render('accounts/account-404', { layout: false, message })
    }

    //1. fetch the account info from db
    const thisAccount = await accountModel.getById({ id });
    console.log(`Controller ===== account with Id: ${id}:`)
    console.log(thisAccount)

    //2. if account not found with passed id
    if (!thisAccount) {
        const message = `Account with ID = ${id} NOT FOUND`
        return res.render('accounts/account-404', { layout: false, message })
    }

    //3.organize the account for handlebars
    const user = {
        id,
        firstname: thisAccount['Firstname'],
        lastname: thisAccount['Lastname'],
        email: thisAccount['Email'],
        password: thisAccount['Password'],
        pp_path: thisAccount['Pp_path'],
        phone: thisAccount['Phone'],
        type: thisAccount['Type']
    }

    //4. insert the info into handlebars and render
    res.render('accounts/update', { layout: false, ...user })
}
exports.updateAccount = async (req, res) => {

    const id = req.body != undefined ? req.body['id'] : undefined;
    //1. validate the id first
    if (!id || isNaN(id) || parseInt(id) <= 0) {
        const message = `Account ID seems invalid, ID : ${id}`
        return res.render('accounts/account-404', { layout: false, message })
    }
    //2. fetch the account with id from db
    const thisAccount = await accountModel.getById({ id });
    console.log(thisAccount)

    //3. if account not found with passed id
    if (!thisAccount) {
        const message = `Account with ID = ${id} NOT FOUND`
        return res.render('accounts/account-404', { layout: false, message })
    }

    //4. update to the record table 
    try {
        const accInfo = {
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Password: req.body.password,
            Pp_path: req.file ? req.file['filename'] : null,
            Phone: req.body.phone,
        }
        const updatedAccount = await accountModel.updateAccount({ id, accInfo });
        console.log('Updated acc :', updatedAccount.affectedRows);
        if (updatedAccount.affectedRows == 1) {
            return res.json({
                success: true,
                reason: null,
                message: 'Account Updated successfully'
            });
        }

        return res.json({
            success: false,
            reason: "Please check the account existance first",
            message: 'Account Update failed',
        });

    } catch (err) {
        let reason = 'Database error'//generic reason as it isn't known yet
        let message = 'Account Update failed';
        if (err.code === 'ER_BAD_NULL_ERROR') {
            reason = (`Missing required field: ${err.sqlMessage}`);
            message = 'Please provide all information required';
        } else {
            reason = ('Unexpected database error.');
            message = "Account Update Failed, Try Again Later"
        }
        console.log(err)

        res.json({
            success: false,
            reason,
            message
        });

    }

    /**
     * 
     
    console.log('account updated')

    console.log('Text fields:', req.body);       // username & email
    console.log('Uploaded file:', req.file);     // File info

    res.json({
        success: true,
        reason: null,
        message: 'Account info updated'
    })
     */

}

exports.deleteAccount = (req, res) => {
    console.log("delete account using put http method with req.body")
    console.log('Text fields:', req.body);
    res.json({
        success: true,
        reason: null,
        message: 'The Account Deleted'
    })
}