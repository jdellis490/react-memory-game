import React, { useEffect, useState } from "react";

export const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

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

  return (
    <div className="timekeeper">
      Timer: {seconds}
      <br />
        <button className="btn btn-block" onClick={()=>{setIsActive(true)}}>Start</button>
        <button className="btn-reset btn-block">Reset</button>      
    </div>
  );
};
