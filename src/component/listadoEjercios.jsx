import React from "react";
import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";



const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/garri93/free-exercise-db-es/refs/heads/main/dist/exercises_es.json');
        const result = await response.json(); 
        setData(result); 
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div>
    {data.map(item => (
        <div key={item.id}>
    <div>
        <h3>{item.name}</h3>
      <h3>{item.images}</h3>
    </div>
    <div className="gif-css">
        <img src={'https://raw.githubusercontent.com/garri93/free-exercise-db-es/main/exercises/'+item.id+'/0.jpg'} alt="" />
        <img src={'https://raw.githubusercontent.com/garri93/free-exercise-db-es/main/exercises/'+item.id+'/1.jpg'} alt="" />
        
    </div>
    <div>
        <h4>Nivel:</h4> {item.level}
        <h4>Fuerza:</h4> {item.force}
        <h4>Mecánica del movimiento: </h4> {item.mechanic}
        <h4>Equipamiento: </h4> {item.equipment}
        <h4>Musculo Primario: </h4> {item.primaryMuscles}
        <h4>Musculo Secundario: </h4> {item.secondaryMuscles}
        <h4>Instrucciones: </h4>
        <p>{item.instructions}</p>
    </div>
     </div>
      
        ))}

    </div>;
};

export default DataFetcher;
