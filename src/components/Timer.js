import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export const Timer = () => {
    let [isActive, setIsActive] = useState(false);
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timer = null;
        if(isActive){
            timer = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    });
    
    const handleReset = () => {
     console.log('Reset')
     setSeconds(seconds = 0);
     setIsActive(isActive = false);
    };
    
  return (
    <div className="timekeeper">
      Timer: {seconds}
      <br />
        <button className="btn btn-block" onClick={()=>{setIsActive(true)}}>Start</button>
        <button className="btn-reset btn-block" onClick={handleReset}>Reset</button>      
    </div>
  );
};
