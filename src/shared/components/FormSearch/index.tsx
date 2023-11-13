import React, { useState } from 'react';
import ButtonSearch from '../ButtonSearch';
import { ReactComponent as ReactIconSearch } from '../../assets/icon-search.svg';
import css from './FormSearch.module.css';

interface FormSearchProps {
    placeholder: string;
    type: string;
}

const FormSearch: React.FC<FormSearchProps> = ({ placeholder, type }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <form className={css.inputSearch}>
            <ReactIconSearch
                className={`${css.inputSearch__inputText_icon} ${isFocused ? css.focused : ''}`}
            />
            <input
                className={css.inputSearch__inputText}
                type={type}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <ButtonSearch />
        </form>
    );
};

export default FormSearch;
