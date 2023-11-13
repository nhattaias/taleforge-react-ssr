import React from 'react';
import Header from '../../components/Header';
import PaginationControl from '../../components/PaginationControl';
import ItemComponent from '../../components/ItemComponent';
import FormSearch from '../../components/FormSearch';
import Divider from '../../components/Divider';
import css from './AuthorsPage.module.css';

const AuthorsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.authorsPage}>
                <h2 className={css.authorsPage__label}>Authors</h2>
                <FormSearch type="text" placeholder="Searching by author name" />
                <Divider marginTop="32px" marginBottom="16px" />
                <ul className={css.authorsPage__authors}>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <ItemComponent name="Tài Phạm" comicCount={15} />
                    </li>
                </ul>
            </div>
            <PaginationControl />
        </React.Fragment>
    );
};

export default AuthorsPage;
