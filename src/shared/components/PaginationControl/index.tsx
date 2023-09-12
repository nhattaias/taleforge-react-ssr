import React from 'react';
import Pagination from '../Pagination';
import css from './PaginationControl.module.css';

const PaginationControl = () => {
    return (
        <div className={css.paginationControl}>
            <div className={css.paginationControl__paginations}>
                <Pagination index={1} isSelected={false} />
                <Pagination index={2} isSelected={true} />
                <Pagination index={3} isSelected={false} />
                <Pagination index={4} isSelected={false} />
                <Pagination index={5} isSelected={false} />
                <Pagination index={6} isSelected={false} />
                <Pagination index={7} isSelected={false} />
            </div>
            <div className={css.paginationControl__navigations}>
                <span>Next</span>
                <span>Last</span>
            </div>
        </div>
    );
};

export default PaginationControl;
