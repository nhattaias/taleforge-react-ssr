import React from 'react';
import ButtonSearch from '../ButtonSearch';
import css from './FormSearch.module.css';

interface FormSearchProps {
    placeholder: string;
    type: string;
}

const FormSearch: React.FC<FormSearchProps> = ({ placeholder, type }) => {
    return (
        <form>
            <input type={type} placeholder={placeholder} />
            <ButtonSearch />
        </form>
    );
};

export default FormSearch;
