const express = require('express');
const connectToMongoDB = require('./config/InspectionDB');
const cors = require('cors');
const inspectionRoutes = require('./routes/InspectionRoutes')
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

connectToMongoDB();

app.use(cors());

app.use('/inspection', inspectionRoutes);

app.get('/', async (req, res) => {
    res.status(200).send({message: "Equipment Inspection App is up and running."});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Equipment Inspection App is running on port ${PORT}`);
});