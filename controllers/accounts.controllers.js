exports.getAllAccounts = async (req, res) => {
    res.json([
        {
            "name": 'Dereje',
            lastname: 'boy'
        }, {
            name: 'Beti',
            lastname: 'Fekadu'
        }
    ]);
};

exports.getOneAccount = async (req, res) => {
    res.send('one acc info')
};

exports.showCreateNewAccountForm = async (req, res) => {
    res.render('accounts/create-account', { layout: false })
}
exports.createNewAccount = async (req, res) => {
    console.log('Text fields:', req.body);       // username & email
    console.log('Uploaded file:', req.file);     // File info

    res.json({
        success: true,
        reason: null,
        message: 'You are not admin, to create new account'
    })

}

exports.showUpdateAccountForm = async (req, res) => {
    //1. fetch the account info from db
    //2. organize important info to send
    //3. insert the info into handlebars
    //4. render/send the handlebar to frontend
    const user = {
        firstname: 'dere',
        lastname: "boy",
        email: 'dere@yahoo.com',
        pp_path: '/uploads/users/1755089731617.jpg',
        phone: '08955668844',
        password: "125125"
    }
    res.render('accounts/update', { layout: false, ...user })
}
exports.updateAccount = async (req, res) => {
    //1. fetch the account info from db
    //2. organize important info to send
    //3. insert the info into handlebars
    //4. render/send the handlebar to frontend

    console.log('account updated')

    console.log('Text fields:', req.body);       // username & email
    console.log('Uploaded file:', req.file);     // File info

    res.json({
        success: true,
        reason: null,
        message: 'Account info updated'
    })
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