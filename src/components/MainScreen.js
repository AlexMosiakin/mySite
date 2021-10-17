import React from 'react';
import mountain from '../img/mountain.png';

const MainScreen = () => {
    return(
        <div className={'main-screen'}>
            <svg className={'main-stars'} width="1920" height="505" viewBox="0 0 1920 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className={'bulb blink-1'} cx="334.5" cy="86.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-2'} cx="1109.5" cy="213.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-3'} cx="147.5" cy="481.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-4'} cx="866.5" cy="61.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-5'} cx="1791.5" cy="502.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-6'} cx="1627.5" cy="56.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-7'} cx="1741.5" cy="245.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-8'} cx="1577.5" cy="178.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-9'} cx="1514.5" cy="431.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-10'} cx="1677.5" cy="364.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-1'} cx="1114.5" cy="2.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-2'} cx="1405.5" cy="289.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-3'} cx="1380.5" cy="127.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-4'} cx="1400.5" cy="22.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-3'} cx="1857.5" cy="81.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-2'} cx="1903.5" cy="320.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-1'} cx="227.5" cy="245.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-10'} cx="47.5" cy="341.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-9'} cx="82.5" cy="145.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-8'} cx="2.5" cy="76.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-7'} cx="1917.5" cy="476.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-6'} cx="531.5" cy="463.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-5'} cx="714.5" cy="150.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-4'} cx="516.5" cy="183.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-3'} cx="378.5" cy="359.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-2'} cx="591.5" cy="38.5" r="2.5" fill="white"/>
                <circle className={'bulb blink-1'} cx="930.5" cy="183.5" r="2.5" fill="white"/>
            </svg>
            <div className={'main-text'}>
                <h1>Hi, my name is <span>AlexMosiakin</span> and I am front-end developper </h1>
            </div>
            <img className={'mountain'} src={mountain} alt={mountain}/>
        </div>
    )
}

export default MainScreen;