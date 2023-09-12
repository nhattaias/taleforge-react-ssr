import React from 'react';
import Header from '../../components/Header';
import css from './FiltersPages.module.css';

const AuthorsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.wrapper}>AuthorsPage</div>
        </React.Fragment>
    );
};

export default AuthorsPage;
