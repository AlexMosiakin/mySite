import React from 'react';
import bird from '../img/bird.svg';
import shadow from '../img/bottom-shadow.png';
const Footer = () => {
    return(
        <div id="contacts" className={'foot-wrapper'}>
            <div className={'foot-title'}>
                <h2>Hit me up for <br /> Future Project.</h2>
                <a href="#">alexandre.mosiakin@yandex.ru</a>
            </div>
            <div className={'foot-social'}>
                <a href="#">Tel +7 (902) 780 25-25</a>
                <img src={bird} alt="bird" />
                <a href="#">Github</a>
                <a href="#">Behance</a>
                <a href="#">Dribble</a>
                <a href="#">Instagram</a>
            </div>
            <div className={'foot-copy'}>
                <p>© 2021 ALEXMOSS.COM. ALL RIGHTS RESERVED.</p>
                <img className={'foot-img'} src={shadow} alt="" />
            </div>
        </div>
    )
}

export default Footer;