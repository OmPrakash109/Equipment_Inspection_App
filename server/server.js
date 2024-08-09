const express = require('express');
const connectToMongoDB = require('./config/inspectionDB');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

connectToMongoDB();

app.get('/', async (req, res) => {
    res.status(200).send({message: "Equipment Inspection App is up and running."});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Equipment Inspection App is running on port ${PORT}`);
});