import React from 'react';
import css from './Author.module.css';

interface Author {
    name: string;
    comicCount: number;
}

const AuthorComponent: React.FC<Author> = ({ name, comicCount }) => {
    return (
        <div className={css.author}>
            <p>
                {name} ({comicCount})
            </p>
        </div>
    );
};

export default AuthorComponent;
