exports.showSignupForm = (req, res) => {
    res.render('signup/signup', { title: 'Sign Up', layout: false });
}

exports.processSignup = async (req, res) => {
    // const { email, password } = req.body;
    // console.log(req.body)

    console.log('Text fields:', req.body);       // username & email
    console.log('Uploaded file:', req.file);     // File info

    res.json({
        success: false,
        reason: null,
        message: 'Database failed to connect, Please try again later'
    })

    // res.json({
    //     message: 'Upload successful',
    //     data: req.body,
    //     file: req.file
    // });
}