// routes/airportRoutes.js

const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportController');

// GET /api/airport/:iata_code
router.get('/:iata_code', async (req, res) => {
    const iata_code = req.params.iata_code;

    try {
        const airport = await airportController.getAirportByIataCode(iata_code);

        if (!airport) {
            return res.status(404).json({ error: 'Airport not found' });
        }

        res.json({ airport });
    } catch (error) {
        console.error('Error fetching airport:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
