import React, { useState, useRef } from "react";
import up from '../img/up.svg';

const Up = () => {

    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
      setScroll(window.scrollY);
    };
  
    const handleUpButton = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  

    return(
        <div className={'up-wrapper'}>
        <button
            className={scroll < 300 ? "" : "show"}
            onClick={handleUpButton}
            >
            <img className={'up-img'} src={up} alt="up" />
        </button>
        </div>
    )
}

export default Up;