import React from 'react';
import btnb from '../img/btn-b.svg';
import btna from '../img/btn-a.svg';

const Cv = () => {
    return(
        <div id="about" className={'cv-wrapper'}>
            <div className={'cv-text ux'}>
                A UI UX designer driven by ideas and enthusiasm. I always keep an eye for clean
                nice visual design for website and applications.
            </div>
            <div className={'cv-row'}>
                <b className={'cv-text'}>2018<br/>- Present</b>
                <p className={'cv-text design'}>My design style is simplistic yet effective and I design with a 
                purpose! I’m well-versed in producing mobile/desktop applications and websites which satisfy clients and keep users happy.</p>
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