import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/taleforge-logo.svg';
import { ReactComponent as ReactIconCart } from '../../assets/icon-cart.svg';
import { ReactComponent as ReactIconSearch } from '../../assets/icon-search.svg';
import { ReactComponent as ReactIconNotification } from '../../assets/icon-notifications.svg';

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <Link className={css.header__logo} to="/">
                <ReactLogo />
            </Link>
            <Link className={css.header__label} to="/newRelease">
                New release
            </Link>
            <Link className={css.header__label} to="/lastest">
                Lastest
            </Link>
            <Link className={css.header__label} to="/authors">
                Authors
            </Link>
            <Link className={css.header__label} to="/filters">
                Filters
            </Link>
            <ReactIconSearch className={`${css.header__icon} ${css.header__icon_first}`} />
            <ReactIconNotification className={css.header__icon} />
            <ReactIconCart className={css.header__icon} />
            <h2 className={`${css.header__label} ${css.header__label_auth}`}>Login</h2>
            <h2 className={`${css.header__label} ${css.header__label_auth}`}>Register</h2>
        </header>
    );
};

export default Header;
