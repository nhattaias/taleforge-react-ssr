import React from 'react';
import Header from '../../components/Header';
import PaginationControl from '../../components/PaginationControl';
import AuthorComponent from '../../components/Author';
import FormSearch from '../../components/FormSearch';
import css from './AuthorsPage.module.css';

const AuthorsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.authorsPage}>
                <div className={css.authorsPage__label}>Authors</div>
                <FormSearch type="text" placeholder="Searching by author name" />
                <ul className={css.authorsPage__authors}>
                    <li>
                        <AuthorComponent
                            name="Con đường lên đèn chiều bâng khuâng trên phố dài, từng đàn chim bay theo nhau về cuối bầu trời"
                            comicCount={15}
                        />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                    <li>
                        <AuthorComponent name="Tài Phạm" comicCount={15} />
                    </li>
                </ul>
                <PaginationControl />
            </div>
        </React.Fragment>
    );
};

export default AuthorsPage;
