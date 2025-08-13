
exports.getAllServices = async (req, res) => {
    res.json([{
        id: 1,
        shortname: 'Keficho Room'
    }, {
        id: 2,
        shortname: 'Gurage Room'
    },
    ])
};

exports.getOneService = async (req, res) => {
    res.send('one service info')
};

exports.createNewService = async (req, res) => {
    // req.files contains array of file objects
    const fileNames = req.files.map(file => file.filename); // only filenames
    const filePaths = req.files.map(file => `/uploads/services/${file.filename}`); // full public path
    console.log('Uploaded file names:', fileNames);
    console.log('Uploaded file paths:', filePaths);
    console.log('Text fields:', req.body);       // username & email

    res.json({
        success: true,
        reason: null,
        message: 'Upload successful',
        fileNames,
        filePaths
    });

};
exports.createNewServiceForm = async (req, res) => {
    res.render('services/create-service', { title: 'Create Service', layout: false });
};

exports.showUpdateServiceForm = async (req, res) => {
    const imagespath = '/uploads/services/';
    const service = {
        shortName: 'Gurage Room',
        fullName: 'Gurage Single Bed Room',
        description: "The Gurage Room is single bed room with wifi, hot shower and Satellite Television Available",
        // photos: [
        //     imagespath + 'one.jpg', imagespath + 'two.jpg', imagespath + 'three.jpg'
        // ],
        amount: 3,
        type: "Room",
        pp_path: imagespath + 'one.jpg'
    }
    res.render('services/update', { layout: false, ...service })
};

exports.updateService = async (req, res) => {
    // req.files contains array of file objects
    const fileNames = req.files.map(file => file.filename); // only filenames
    const filePaths = req.files.map(file => `/uploads/services/${file.filename}`); // full public path
    console.log('Uploaded file names:', fileNames);
    console.log('Uploaded file paths:', filePaths);
    console.log('Text fields:', req.body);       // username & email

    res.json({
        success: true,
        reason: null,
        message: 'Upload successful',
        fileNames,
        filePaths
    });
};

exports.deleteService = async (req, res) => {
    res.send('service deleted')
};
