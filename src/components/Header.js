import {React, useRef, useEffect} from 'react';
import logo from '../img/logo.svg';
import { gsap } from "gsap";
import {Link} from 'react-scroll';

const Header = () => {

    return(
        <div className={'header-wrapper'}>
            <img className={'header-logo'} alt={'logo'} src={logo}></img>
            <div className={'header-nav'}>
                <li className={'scroll-link'}><Link activeClass="active" to="works" spy={true} smooth={true}>Works</Link></li>
                <li className={'scroll-link'}><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li className={'scroll-link'}><Link to="contacts" spy={true} smooth={true}>Contacts</Link></li>
            </div>
            <div className={'header-country'}>
                <a href="#">RUS - MSK</a>
            </div>
        </div>
    )
}

export default Header;