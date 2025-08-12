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

exports.createNewAccount = async (req, res) => {
    res.send('Acount information created')
}

exports.updateAccount = async (req, res) => {
    res.send('Account inform updated')
}

exports.deleteAccount = async (req, res) => {
    res.send('Account inform deleted')
}