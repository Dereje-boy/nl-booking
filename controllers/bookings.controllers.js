
exports.getAllBookings = async (req, res) => {
    res.json([{
        id: 1,
        s_id: 2,
        aid: 29
    }, {
        id: 2,
        s_id: 16,
        aid: 184
    }]);
};

exports.getOneBooking = async (req, res) => {
    res.send('one booking info')
};

exports.createNewBooking = async (req, res) => {
    res.send('new booking')
};

exports.updateBooking = async (req, res) => {
    res.send('service inform updated')
};

exports.deleteBooking = async (req, res) => {
    res.send('booking deleted')
};