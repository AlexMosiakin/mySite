import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return(
        <div className={'header-wrapper'}>
            <img className={'header-logo'} alt={'logo'} src={logo}></img>
            <div className={'header-nav'}>
                <a href="#">Works</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
            </div>
            <div className={'header-country'}>
                <a href="#">RUS - MSK</a>
            </div>
        </div>
    )
}

export default Header;