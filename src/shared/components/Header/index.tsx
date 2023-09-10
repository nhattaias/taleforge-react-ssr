import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/taleforge-logo.svg';
import { ReactComponent as ReactIconCart } from '../../assets/icon-cart.svg';
import { ReactComponent as ReactIconSearch } from '../../assets/icon-search.svg';
import { ReactComponent as ReactIconNotification } from '../../assets/icon-notifications.svg';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <ReactLogo className={css.header__logo} />
            <h2 className={css.header__label}>New release</h2>
            <h2 className={css.header__label}>Lastest</h2>
            <h2 className={css.header__label}>Authors</h2>
            <h2 className={css.header__label}>Tags</h2>
            <ReactIconSearch className={`${css.header__icon} ${css.header__icon_first}`} />
            <ReactIconNotification className={css.header__icon} />
            <ReactIconCart className={css.header__icon} />
            <h2 className={`${css.header__label} ${css.header__label_auth}`}>Login</h2>
            <h2 className={`${css.header__label} ${css.header__label_auth}`}>Register</h2>
        </div>
    );
};

export default Header;
