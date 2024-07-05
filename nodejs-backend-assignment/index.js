// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Import Sequelize instance
const airportRoutes = require('./routes/airportRoutes'); // Import routes

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());

// Routes
app.use('/api/airport', airportRoutes); // Example route for airports

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
