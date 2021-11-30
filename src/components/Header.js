import React, { useState, useRef, useEffect } from "react";
import logo from '../img/logo.svg';
import { gsap } from "gsap";
import {Link} from 'react-scroll';

const Header = () => {

    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };

    const [headerScroll, setHeaderScroll] = React.useState(0);

    const handleHeaderScroll = () => {
        setHeaderScroll(window.scrollY);
    };
  
    React.useEffect(() => {
        window.addEventListener("scroll", handleHeaderScroll);
        return () => window.removeEventListener("scroll", handleHeaderScroll);
      }, []);



    return(
        <div className={headerScroll < 300 ? "header-wrapper" : "header-wrapper show"}>

            <div className={'header-body'}>
                <svg className={'header-logo'} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.54443 16.4155L9.7294 22.6031L7.27592 33.3265L4.22543 27.1102L7.54443 16.4155Z" fill="white"/>
                    <path d="M25.1338 16.4155L27.3188 22.6031L24.8653 33.3265L21.8148 27.1102L25.1338 16.4155Z" fill="white"/>
                    <path d="M33.0176 42.4951L27.0433 44.74L16.7101 42.1601L22.7151 39.0177L33.0176 42.4951Z" fill="white"/>
                    <path d="M33.0176 7.84021L27.0433 10.0852L16.7101 7.50521L22.7151 4.36281L33.0176 7.84021Z" fill="white"/>
                    <path d="M42.7231 16.4155L44.9081 22.6031L42.4546 33.3265L39.4041 27.1102L42.7231 16.4155Z" fill="white"/>
                </svg>

                <button className={isActive ? 'burger burger2 on': 'burger burger2'}  onClick={toggleClass}>
                    <span></span>
                </button>

                <div className={'header-nav'}>
                    <li className={'scroll-link'}><Link activeClass="active" to="works" spy={true} smooth={true}>Works</Link></li>
                    <li className={'scroll-link'}><Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li className={'scroll-link'}><Link to="contacts" spy={true} smooth={true}>Contacts</Link></li>
                </div>

                <div className={'header-country'}>
                    <a href="#">RUS - MSK</a>
                </div>
            </div>

        </div>
    )
}

export default Header;