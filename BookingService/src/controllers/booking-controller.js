const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index')

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully your booking completed',
            success: true,
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            err: error.explanation,
            success: false,
            data: {}
        })
    }
}

module.exports = {
    create
}