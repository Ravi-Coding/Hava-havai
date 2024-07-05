// controllers/airportController.js

const { Airport, City, Country } = require('../models');

// Function to fetch airport data by IATA code
async function getAirportByIataCode(iata_code) {
    try {
        const airport = await Airport.findOne({
            where: { iata_code },
            include: [
                {
                    model: City,
                    include: {
                        model: Country,
                    },
                },
            ],
        });

        return airport;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAirportByIataCode,
};
