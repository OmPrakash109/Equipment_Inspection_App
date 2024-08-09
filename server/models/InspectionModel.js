const mongoose = require('mongoose');

const inspectionSchema = new mongoose.Schema({
  truckSerialNumber: { type: String, required: true },
  truckModel: { type: String, required: true },
  inspectionID: { type: Number, required: true, unique: true },
  inspectorName: { type: String, required: true },
  inspectionEmployeeID: { type: String, required: true },
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  geoCoordinates: { 
    latitude: { type: Number },
    longitude: { type: Number }
  },
  serviceMeterHours: { type: Number, required: true },
  inspectorSignature: { type: String, required: true },
  customerName: { type: String, required: true },
  catCustomerID: { type: String, required: true },

  tires: {
    tirePressure: {
      leftFront: { type: Number, required: true },
      rightFront: { type: Number, required: true },
      leftRear: { type: Number, required: true },
      rightRear: { type: Number, required: true },
    },
    tireCondition: {
      leftFront: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
      rightFront: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
      leftRear: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
      rightRear: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
    },
    overallSummary: { type: String, maxlength: 1000 },
    images: [String],
  },

  battery: {
    make: { type: String, required: true },
    replacementDate: { type: Date, required: true },
    voltage: { type: String, required: true },
    waterLevel: { type: String, enum: ['Good', 'Ok', 'Low'], required: true },
    condition: { type: String, enum: ['Y', 'N'], required: true },
    leakOrRust: { type: String, enum: ['Y', 'N'], required: true },
    overallSummary: { type: String, maxlength: 1000 },
    images: [String],
  },

  exterior: {
    rustOrDamage: { type: String, enum: ['Y', 'N'], required: true },
    oilLeakSuspension: { type: String, enum: ['Y', 'N'], required: true },
    overallSummary: { type: String, maxlength: 1000 },
    images: [String],
  },

  brakes: {
    fluidLevel: { type: String, enum: ['Good', 'Ok', 'Low'], required: true },
    frontCondition: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
    rearCondition: { type: String, enum: ['Good', 'Ok', 'Needs Replacement'], required: true },
    emergencyBrake: { type: String, enum: ['Good', 'Ok', 'Low'], required: true },
    overallSummary: { type: String, maxlength: 1000 },
    images: [String],
  },

  engine: {
    rustOrDamage: { type: String, enum: ['Y', 'N'], required: true },
    oilCondition: { type: String, enum: ['Good', 'Bad'], required: true },
    oilColor: { type: String, enum: ['Clean', 'Brown', 'Black'], required: true },
    fluidCondition: { type: String, enum: ['Good', 'Bad'], required: true },
    fluidColor: { type: String, enum: ['Clean', 'Brown', 'Black'], required: true },
    oilLeak: { type: String, enum: ['Y', 'N'], required: true },
    overallSummary: { type: String, maxlength: 1000 },
    images: [String],
  },

  voiceOfCustomer: {
    feedback: { type: String },
    images: [String],
  }
});

module.exports = mongoose.model('Inspection', inspectionSchema);