const inspectionModels = require('../models/InspectionModel');

exports.getAllInspectionData = async (req, res) => {
    try {
        const getAllData = await inspectionModels.find();
        console.log({message: 'Data Fetched successfuly'})
        return res.status(200).send(getAllData);
    } catch (err) {
        console.log(err.message)
        res.status(400).send({message: 'Error fetching the data'});
    }
}

exports.getOneInspectionData = async (req, res) => {
    try {
        const getOneData = await inspectionModels.findOne();
        return res.status(200).send(getAllData);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send({message: 'Error fetching the data'});
    }
}

exports.addInspectionData = async (req, res) => {
    try {
        const newData = await inspectionModels.create(req.body);
        return res.status(200).send(newData);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send({message: 'Error adding the data'});
    }
}

exports.updateInspectionData = async (req, res) => {
    try {
        const updatedData = await inspectionModels.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(400).send(updatedData);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({message: 'Error updating the data'});
    }
}

exports.deleteInspectionData = async (req, res) => {
    try {
        const deletedData = await inspectionModels.findByIdAndDelete(req.params.id);
        return res.status(200).send(deletedData);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send({message: 'Error deleting the data'});

    }
}

