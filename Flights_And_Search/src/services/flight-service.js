const flights = require('../models/flights');
const { FlightRepository, AirplaneRespository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRespository = new AirplaneRespository();
        this.flightRespository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightRespository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlightData(flightId) {
        try {
            const flight = await this.flightRespository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlightsData(data) {
        try {
            const flights = await this.flightRespository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;

/**
 * {
 *   flightNumber,
 *   airplaneId,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price,
 *   totalSeats -> airplane
 * }
 */