import React from 'react';
import bird from '../img/bird.svg';
import shadow from '../img/bottom-shadow.png';
const Footer = () => {
    return(
        <div id="contacts" className={'foot-wrapper'}>
            <div className={'foot-title'}>
                <h2>Hit me up for <br /> Future Project.</h2>
                <a href="mailto:alexandre.mosiakin@yandex.ru">alexandre.mosiakin@yandex.ru</a>
            </div>
            <div className={'foot-social'}>
                <a href="tel:+7(902)78025-25">Tel +7 (902) 780 25-25</a>
                <img src={bird} alt="bird" />
                <a href="https://github.com/AlexMosiakin">Github</a>
                <a href="https://t.me/AleksandrMoss">Telegram</a>
                <a href="#">WhatUp</a>
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