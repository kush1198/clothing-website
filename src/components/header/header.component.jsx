import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo clasName='logo'/>
        </Link>
        <div className='options'>
            <Link clasName='option' to='/shop'>
                SHOP           
            </Link>
            <Link clasName='option' to='/'>
                CONTACT           
            </Link>
        </div>
    </div>
)

export default Header;