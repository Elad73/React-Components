import React from 'react';

import Social from './Social';
import Logo from './Logo';
import Links from './Links';

const Navbar = () => {
    return (
        <nav className='navbar navbar-default navbar-fixed no-background dark bootsnav on no-full'>
            <div className='container'>
                <Social />
                <Logo />
                <Links />
            </div>
        </nav>
    );
};

export default Navbar;
