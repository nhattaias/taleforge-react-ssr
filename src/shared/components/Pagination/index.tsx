import React from 'react';
import css from './Pagination.module.css';

interface PaginationProps {
    index: number;
    isSelected: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ index, isSelected }) => {
    return (
        <div className={`${css.pagination}  ${isSelected ? css.pagination_transparent : ''}`}>
            <span className={css.pagination__index}>{index}</span>
        </div>
    );
};

export default Pagination;
