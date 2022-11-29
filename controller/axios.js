const axios = require('axios');

exports.getCars = async (req, res, next) => {
    const CarResult = await axios.get('https://private-anon-f04b0679b4-carsapi1.apiary-mock.com/cars');
    if (CarResult && CarResult.data) {
        res.json(CarResult.data);
    } else {
        res.status(400).json({success: false, message: 'Cannot get car result'});
    }
}

exports.postBook = async (req, res, next) => {
    axios.post('http://localhost:3000/cars', {
        mark: req.body.mark,
        model: req.body.model,
        price: req.body.price
    }).then((result) => {
        if (result && result.data) {
            res.status(result.status).json(result.data);
        }
    }).catch((e) => {
        if (e.response && e.response.status && e.response.data) {
            res.status(e.response.status).json(e.response.data);
        } else {
            next(e);
        }
    });
}