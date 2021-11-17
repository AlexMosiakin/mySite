import React from 'react';
import btnb from '../img/btn-b.svg';
import btna from '../img/btn-a.svg';

const Cv = () => {
    return(
        <div id="about" className={'cv-wrapper'}>
            <div className={'cv-text ux'}>
                A front-end developper driven by ideas and enthusiasm. I always keep an eye for clean code and trying to make more than just a website or application.
            </div>
            <div className={'cv-row'}>
                <b className={'cv-text'}>2020<br/>- Present</b>
                <p className={'cv-text design'}>The main thing in my work is understood that front is continuation of design.
                I’m well-versed in producing mobile/desktop applications or websites and this is my passion</p>
            </div>
            <div className={'cv-button-wrapper'}>
            <a href="#" className={'cv-btn'}>
                <img src={btnb} alt={"btnb"} className={'cv-btn-img b'}/>
                <span className={'cv-text'}>DOWNLOAD CV</span>
                <img src={btna} alt={"btna"} className={'cv-btn-img a'}/>
            </a>
            </div>
        </div>
    )
}

export default Cv;