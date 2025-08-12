
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
    res.send('new service created')
};

exports.updateService = async (req, res) => {
    res.send('service inform updated')
};

exports.deleteService = async (req, res) => {
    res.send('service deleted')
};
