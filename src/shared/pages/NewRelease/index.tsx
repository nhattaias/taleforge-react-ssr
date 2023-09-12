import React from 'react';
import ComicCard from '../../components/ComicCard';
import Header from '../../components/Header';
import PaginationControl from '../../components/PaginationControl';
import css from './NewRelease.module.css';

const NewRealease = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.wrapper}>
                <p className={css.newRelease_label}>New Release</p>
                <ul className={css.newRelease__listComic}>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                    <li>
                        <ComicCard />
                    </li>
                </ul>
            </div>
            <PaginationControl />
        </React.Fragment>
    );
};

export default NewRealease;
