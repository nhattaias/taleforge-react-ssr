import React, { useState } from 'react';
import { FilterType, nextOption } from '../../constant';
import css from './FilterOptionComponent.module.css';

interface ItemComponent {
    name: string;
    option: FilterType;
    clickable: boolean;
}

const FilterOptionComponent: React.FC<ItemComponent> = ({ name, option, clickable = true }) => {
    const [optionState, setOptionState] = useState<FilterType>(option);
    const getBackgroundCss = (option: FilterType) => {
        switch (option) {
            case FilterType.HAVE_FILTER:
                return css['item--filter'];
            case FilterType.NO_FILTER:
                return css['item--noFilter'];
            case FilterType.REMOVE_WHEN_FILTER:
                return css['item--remove'];
            default:
                return '';
        }
    };
    const handleClick = () => {
        console.log(clickable);
        if (!clickable) {
            return;
        }
        setOptionState(nextOption(optionState));
    };

    return (
        <div className={`${css.item} ${getBackgroundCss(optionState)}`} onClick={handleClick}>
            <p>{name}</p>
        </div>
    );
};

export default FilterOptionComponent;
