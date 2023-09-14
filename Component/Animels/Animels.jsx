import { useEffect } from "react";
import { useState } from "react";
import Animel from "../Animel/Animel";
import './Animels.css'




const Animels = ({handleCart}) => {

    const [animels ,setAnimels]=useState([])
   

    useEffect( () =>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setAnimels(data))
    },[])
     
    
    return (
      
        <div className="box-container">
            <h1>total-Animals:{animels.length}</h1>
            <div className="container">
            {
                animels.map(animel => <Animel key={animel.id} animel={animel} handleCart={handleCart}></Animel>)
            }
            </div>
        </div>
    );
};

export default Animels;