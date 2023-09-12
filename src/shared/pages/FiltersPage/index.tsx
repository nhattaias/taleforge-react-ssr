import React from 'react';
import Header from '../../components/Header';
import css from './Filters.module.css';

const FiltersPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.wrapper}>FiltersPage</div>
        </React.Fragment>
    );
};

export default FiltersPage;
