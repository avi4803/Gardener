import React, { useRef, useEffect, useState } from "react";
import Cards from "./Cards";
import { ref as firebaseRef, onValue, getDatabase } from "firebase/database";
import { useFirebase } from "../Firebase/FirebaseConfig";

function Container() {
  const containerRef = useRef(null);
  const [humidityData, setHumidityData] = useState(null);
  const [tempData, settempData] = useState(null);
  const [moistureData, setmoistureData] = useState(null); // State variable to store data

  const firebase = useFirebase();

  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "humidity");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        setHumidityData(data); // Update the state with the humidity data
        console.log(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);


  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "temperature");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        settempData(data); // Update the state with the humidity data
        console.log(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);



  useEffect(() => {
    const database = getDatabase();
    const dataRef = firebaseRef(database, "moisture");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        setmoistureData(data); // Update the state with the humidity data
        console.log(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);


  return (
    
    <div className="absolute rounded-[20px] flex flex-cols-3 gap-12 justify-center md:flex-nowrap flex-wrap z-30  border-inherit bg-inherit min-w-60 md:h-screen   h-[100rem]  w-screen bg-green-400 sm:bg-transparent  ">
      <Cards 
        tempData={humidityData ? `${humidityData}%` : "Loading..."} // Pass humidity data to Cards component
        title="Humidity"
        description="Real-time humidity data streamed directly "
        url="https://imgs.search.brave.com/2ksGhWJmwxmPd5-zC4z-0QTbDvCW8lksqqWFpncFUmA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNzUxLzM3NTEy/OTEucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
      />
      <Cards
        tempData={tempData ? `${tempData} °C ` : "Loading..."} // Pass temp data to Cards component
        title="Temperature"
        description="Real-time Temperature data streamed directly "
        url="https://cdn-icons-png.flaticon.com/512/566/566675.png"
      />
      <Cards
        tempData={moistureData ? `${moistureData}%` : "Loading..."} // Pass moisture data to Cards component
        title="Plant Moisture"
        description="Real-time Plant Moisture data streamed directly "
        url="https://cdn-icons-png.flaticon.com/512/8809/8809827.png"
      />
    </div>
   
  );
}

export default Container;
