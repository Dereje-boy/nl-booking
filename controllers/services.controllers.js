//importing service model of db
const serviceModel = require('../models/serviceModel');


exports.getAllServices = async (req, res) => {
    let services = []
    try {
        services = await serviceModel.getAllServices();
        return res.send({
            success: true,
            reason: undefined,
            message: 'Services fetched Successfully',
            data: services
        })
    } catch (err) {
        console.error(err);
        return res.send({
            success: false,
            reason: "Error found while fetching services from DB, Error : " + err,
            message: 'Unable to fetch the service, please try again later'
        })
    }

    // res.json([{
    //     id: 1,
    //     shortname: 'Keficho Room'
    // }, {
    //     id: 2,
    //     shortname: 'Gurage Room'
    // },
    // ])
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
    console.log('Text fields:', req.body);

    const photos = fileNames.join(',')

    try {
        const newServiceId = await serviceModel.createService({
            shortname: req.body.shortName,
            fullname: req.body.fullName,
            description: req.body.description,
            photos: photos,
            price: parseFloat(req.body.price),
            amount: req.body.amount ? parseInt(req.body.amount) : undefined,
            type: req.body.type
        });

        console.log('New Service ID:', newServiceId);

        res.json({
            success: true,
            reason: null,
            message: 'Service Create successful',
            fileNames,
            filePaths
        });
    } catch (err) {
        let reason = 'Database error'//generic reason as it isn't know yet
        if (err.code === 'ER_BAD_NULL_ERROR') {
            reason = (`Missing required field: ${err.sqlMessage}`);
        } else if (err.code === 'ER_DUP_ENTRY') {
            reason = ('Duplicate entry detected.');
        } else {
            reason = ('Unexpected database error.');
        }

        res.json({
            success: false,
            reason,
            message: 'Service Creation failed',
            fileNames,
            filePaths
        });
    }

    // res.json({
    //     success: true,
    //     reason: null,
    //     message: 'Upload successful',
    //     fileNames,
    //     filePaths
    // });


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
