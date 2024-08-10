import React, { useState } from 'react';
import jsPDF from 'jspdf';

const FormElement = () => {
  const [formData, setFormData] = useState({
    truckSerialNumber: '',
    truckModel: '',
    inspectorName: '',
    inspectionEmployeeID: '',
    dateTime: '',
    location: '',
    geoCoordinates: '',
    serviceMeterHours: '',
    inspectorSignature: '',
    customerName: '',
    catCustomerID: '',

    tires: {
      leftFrontPressure: '',
      rightFrontPressure: '',
      leftFrontCondition: '',
      rightFrontCondition: '',
      leftRearPressure: '',
      rightRearPressure: '',
      leftRearCondition: '',
      rightRearCondition: '',
      overallSummary: '',
      images: [],
    },

    battery: {
      make: '',
      replacementDate: '',
      voltage: '',
      waterLevel: '',
      condition: '',
      leakOrRust: '',
      overallSummary: '',
      images: [],
    },

    exterior: {
      rustOrDamage: '',
      oilLeakSuspension: '',
      overallSummary: '',
      images: [],
    },

    brakes: {
      fluidLevel: '',
      frontCondition: '',
      rearCondition: '',
      emergencyBrake: '',
      overallSummary: '',
      images: [],
    },

    engine: {
      rustOrDamage: '',
      oilCondition: '',
      oilColor: '',
      fluidCondition: '',
      fluidColor: '',
      oilLeak: '',
      overallSummary: '',
      images: [],
    },

    voiceOfCustomer: {
      feedback: '',
      images: [],
    },
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;

    if (section) {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e, section) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        images: [...prevState[section].images, ...files],
      },
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Truck Inspection Form", 10, 10);
    doc.text(`Truck Serial Number: ${formData.truckSerialNumber}`, 10, 20);
    // Add other fields similarly to the PDF
    doc.save('inspection-form.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
    // Logic to store the form data in MongoDB goes here
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Truck Inspection Form</h2>

        <fieldset>
          <legend>Header</legend>

          <label>Truck Serial Number</label>
          <input
            type="text"
            name="truckSerialNumber"
            value={formData.truckSerialNumber}
            onChange={handleInputChange}
          />
          <br />

          <label>Truck Model</label>
          <input
            type="text"
            name="truckModel"
            value={formData.truckModel}
            onChange={handleInputChange}
          />
          <br />

          <label>Inspector Name</label>
          <input
            type="text"
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleInputChange}
          />
          <br />

          <label>Inspection Employee ID</label>
          <input
            type="text"
            name="inspectionEmployeeID"
            value={formData.inspectionEmployeeID}
            onChange={handleInputChange}
          />
          <br />

          <label>Date & Time of Inspection</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
          />
          <br />

          <label>Location of Inspection</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <br />

          <label>Geo Coordinates</label>
          <input
            type="text"
            name="geoCoordinates"
            value={formData.geoCoordinates}
            onChange={handleInputChange}
          />
          <br />

          <label>Service Meter Hours</label>
          <input
            type="number"
            name="serviceMeterHours"
            value={formData.serviceMeterHours}
            onChange={handleInputChange}
          />
          <br />

          <label>Inspector Signature</label>
          <input
            type="text"
            name="inspectorSignature"
            value={formData.inspectorSignature}
            onChange={handleInputChange}
          />
          <br />

          <label>Customer Name / Company Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
          <br />

          <label>CAT Customer ID</label>
          <input
            type="text"
            name="catCustomerID"
            value={formData.catCustomerID}
            onChange={handleInputChange}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Tires</legend>

          <label>Left Front Tire Pressure</label>
          <input
            type="text"
            name="leftFrontPressure"
            value={formData.tires.leftFrontPressure}
            onChange={(e) => handleInputChange(e, 'tires')}
          />
          <br />

          <label>Right Front Tire Pressure</label>
          <input
            type="text"
            name="rightFrontPressure"
            value={formData.tires.rightFrontPressure}
            onChange={(e) => handleInputChange(e, 'tires')}
          />
          <br />

          <label>Left Front Tire Condition</label>
          <select
            name="leftFrontCondition"
            value={formData.tires.leftFrontCondition}
            onChange={(e) => handleInputChange(e, 'tires')}
          >
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Needs Replacement">Needs Replacement</option>
          </select>
          <br />

          <label>Right Front Tire Condition</label>
          <select
            name="rightFrontCondition"
            value={formData.tires.rightFrontCondition}
            onChange={(e) => handleInputChange(e, 'tires')}
          >
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Needs Replacement">Needs Replacement</option>
          </select>
          <br />

          <label>Left Rear Tire Pressure</label>
          <input
            type="text"
            name="leftRearPressure"
            value={formData.tires.leftRearPressure}
            onChange={(e) => handleInputChange(e, 'tires')}
          />
          <br />

          <label>Right Rear Tire Pressure</label>
          <input
            type="text"
            name="rightRearPressure"
            value={formData.tires.rightRearPressure}
            onChange={(e) => handleInputChange(e, 'tires')}
          />
          <br />

          <label>Left Rear Tire Condition</label>
          <select
            name="leftRearCondition"
            value={formData.tires.leftRearCondition}
            onChange={(e) => handleInputChange(e, 'tires')}
          >
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Needs Replacement">Needs Replacement</option>
          </select>
          <br />

          <label>Right Rear Tire Condition</label>
          <select
            name="rightRearCondition"
            value={formData.tires.rightRearCondition}
            onChange={(e) => handleInputChange(e, 'tires')}
          >
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Needs Replacement">Needs Replacement</option>
          </select>
          <br />

          <label>Overall Tire Summary</label>
          <textarea
            name="overallSummary"
            value={formData.tires.overallSummary}
            onChange={(e) => handleInputChange(e, 'tires')}
          />
          <br />

          <label>Upload Tire Images</label>
          <input
            type="file"
            name="tireImages"
            multiple
            onChange={(e) => handleImageChange(e, 'tires')}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Battery</legend>

          <label>Battery Make</label>
          <input
            type="text"
            name="make"
            value={formData.battery.make}
            onChange={(e) => handleInputChange(e, 'battery')}
          />
          <br />

          <label>Battery Replacement Date</label>
          <input
            type="date"
            name="replacementDate"
            value={formData.battery.replacementDate}
            onChange={(e) => handleInputChange(e, 'battery')}
          />
          <br />

          <label>Battery Voltage</label>
          <input
            type="number"
            name="voltage"
            value={formData.battery.voltage}
            onChange={(e) => handleInputChange(e, 'battery')}
          />
          <br />

          <label>Battery Water Level</label>
          <input
            type="text"
            name="waterLevel"
            value={formData.battery.waterLevel}
            onChange={(e) => handleInputChange(e, 'battery')}
          />
          <br />

          <label>Battery Condition</label>
          <select
            name="condition"
            value={formData.battery.condition}
            onChange={(e) => handleInputChange(e, 'battery')}
          >
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Needs Replacement">Needs Replacement</option>
          </select>
          <br />

          <label>Battery Leak or Rust</label>
          <select
            name="leakOrRust"
            value={formData.battery.leakOrRust}
            onChange={(e) => handleInputChange(e, 'battery')}
          >
            <option value="None">None</option>
            <option value="Leak">Leak</option>
            <option value="Rust">Rust</option>
            <option value="Leak and Rust">Leak and Rust</option>
          </select>
          <br />

          <label>Overall Battery Summary</label>
          <textarea
            name="overallSummary"
            value={formData.battery.overallSummary}
            onChange={(e) => handleInputChange(e, 'battery')}
          />
          <br />

          <label>Upload Battery Images</label>
          <input
            type="file"
            name="batteryImages"
            multiple
            onChange={(e) => handleImageChange(e, 'battery')}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Exterior</legend>

          <label>Rust or Damage to Exterior</label>
          <input
            type="text"
            name="rustOrDamage"
            value={formData.exterior.rustOrDamage}
            onChange={(e) => handleInputChange(e, 'exterior')}
          />
          <br />

          <label>Oil Leak in Suspension</label>
          <input
            type="text"
            name="oilLeakSuspension"
            value={formData.exterior.oilLeakSuspension}
            onChange={(e) => handleInputChange(e, 'exterior')}
          />
          <br />

          <label>Overall Exterior Summary</label>
          <textarea
            name="overallSummary"
            value={formData.exterior.overallSummary}
            onChange={(e) => handleInputChange(e, 'exterior')}
          />
          <br />

          <label>Upload Exterior Images</label>
          <input
            type="file"
            name="exteriorImages"
            multiple
            onChange={(e) => handleImageChange(e, 'exterior')}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Brakes</legend>

          <label>Brake Fluid Level</label>
          <input
            type="text"
            name="fluidLevel"
            value={formData.brakes.fluidLevel}
            onChange={(e) => handleInputChange(e, 'brakes')}
          />
          <br />

          <label>Front Brake Condition</label>
          <input
            type="text"
            name="frontCondition"
            value={formData.brakes.frontCondition}
            onChange={(e) => handleInputChange(e, 'brakes')}
          />
          <br />

          <label>Rear Brake Condition</label>
          <input
            type="text"
            name="rearCondition"
            value={formData.brakes.rearCondition}
            onChange={(e) => handleInputChange(e, 'brakes')}
          />
          <br />

          <label>Emergency Brake Condition</label>
          <input
            type="text"
            name="emergencyBrake"
            value={formData.brakes.emergencyBrake}
            onChange={(e) => handleInputChange(e, 'brakes')}
          />
          <br />

          <label>Overall Brakes Summary</label>
          <textarea
            name="overallSummary"
            value={formData.brakes.overallSummary}
            onChange={(e) => handleInputChange(e, 'brakes')}
          />
          <br />

          <label>Upload Brake Images</label>
          <input
            type="file"
            name="brakeImages"
            multiple
            onChange={(e) => handleImageChange(e, 'brakes')}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Engine</legend>

          <label>Rust or Damage to Engine</label>
          <input
            type="text"
            name="rustOrDamage"
            value={formData.engine.rustOrDamage}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Engine Oil Condition</label>
          <input
            type="text"
            name="oilCondition"
            value={formData.engine.oilCondition}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Engine Oil Color</label>
          <input
            type="text"
            name="oilColor"
            value={formData.engine.oilColor}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Engine Fluid Condition</label>
          <input
            type="text"
            name="fluidCondition"
            value={formData.engine.fluidCondition}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Engine Fluid Color</label>
          <input
            type="text"
            name="fluidColor"
            value={formData.engine.fluidColor}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Engine Oil Leak</label>
          <select
            name="oilLeak"
            value={formData.engine.oilLeak}
            onChange={(e) => handleInputChange(e, 'engine')}
          >
            <option value="None">None</option>
            <option value="Minor">Minor</option>
            <option value="Major">Major</option>
          </select>
          <br />

          <label>Overall Engine Summary</label>
          <textarea
            name="overallSummary"
            value={formData.engine.overallSummary}
            onChange={(e) => handleInputChange(e, 'engine')}
          />
          <br />

          <label>Upload Engine Images</label>
          <input
            type="file"
            name="engineImages"
            multiple
            onChange={(e) => handleImageChange(e, 'engine')}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Voice of Customer</legend>

          <label>Customer Feedback</label>
          <textarea
            name="feedback"
            value={formData.voiceOfCustomer.feedback}
            onChange={(e) => handleInputChange(e, 'voiceOfCustomer')}
          />
          <br />

          <label>Upload Voice of Customer Images</label>
          <input
            type="file"
            name="customerImages"
            multiple
            onChange={(e) => handleImageChange(e, 'voiceOfCustomer')}
          />
          <br />
        </fieldset>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default FormElement;
