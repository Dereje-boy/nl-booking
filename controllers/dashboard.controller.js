//importing service model of db
const accountModel = require('../models/accountModel');
const { check } = require('../utils/account_type')

exports.showDashboard = async (req, res) => {
    // console.log('request coming')
    //check type here and decide whichi dashboard to render
    const type = await check(req);
    // console.log(type)
    if (type == 'customer') {
        res.render('newbooking', { title: 'Dashboard', layout: false });
    } else if (type == 'admin' | type == 'staff') {
        res.render('dashboard', { title: 'Dashboard', layout: false });
    } else res.redirect('/login')
}