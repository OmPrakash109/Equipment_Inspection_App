import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [inspectionData, setInspectionData] = useState([]);
  const [newData, setNewData] = useState("");
  const [editId, seteditId] = useState(null);
  
  const getAllData = async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/inspection',
      headers: {
        accept: 'application/json'
      }
    }
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const addData = async () => {
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/inspection',
      headers: {
        accept: 'application/json'
      },
      data: {
        truckSerialNumber: newData,
        inspectionID: Date.now(),
      }
    }
    try {
      const response = await axios.request(options);
      const newInspection = response.data;
      setInspectionData((prevData => [...prevData, newInspection]));
      setNewData("");
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const updateData = async () => {

  }

  const deleteData = async () => {

  }

  useEffect(() => {
    const fetchInspectionData = async () => {
      const apiData = await getAllData();
      setInspectionData(apiData);
    };
    fetchInspectionData();
  }, []);

  return(
    <>
    <input type = 'text' value={newData} onChange={(e) => {setNewData(e.target.value)}} />
    <button onClick={addData}>Add data</button>
    {inspectionData.map((data, index) => {
      return(
        <>
        <p>{data.truckSerialNumber}</p>
        </>
      );
    })}
    </>
  );
}

export default App;