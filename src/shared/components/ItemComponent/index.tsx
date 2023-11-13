import React from 'react';
import css from './ItemComponent.module.css';

interface ItemComponent {
    name: string;
    comicCount: number;
}

const ItemComponent: React.FC<ItemComponent> = ({ name, comicCount }) => {
    return (
        <div className={css.item}>
            <p>
                {name} ({comicCount})
            </p>
        </div>
    );
};

export default ItemComponent;
