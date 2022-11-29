const axios = require('axios');

exports.getCarsAPI = async (req, res, next) => {
    const CarResult = await axios.get('https://private-anon-f04b0679b4-carsapi1.apiary-mock.com/cars');
    if (CarResult && CarResult.data) {
        res.json(CarResult.data);
    } else {
        res.status(400).json({success: false, message: 'Cannot get car result'});
    }
}

