const { CityService } = require('../services/index');

const cityService = new CityService();

// POST -> req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(202).json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(502).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(203).json({
            data: city,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            data: {},
            success: false,
            message: "Not able to fetch the city",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(203).json({
            data: cities,
            success: true,
            message: "Successfully fetched all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(504).json({
            data: {},
            success: false,
            message: "Not able to fetch all the cities",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};