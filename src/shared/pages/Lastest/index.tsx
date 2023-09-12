import React from 'react';
import ComicCard from '../../components/ComicCard';
import Header from '../../components/Header';
import PaginationControl from '../../components/PaginationControl';
import css from './Lastest.module.css';

const Lastest = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.wrapper}>
                <p className={css.lastest__label}>Lastest</p>
                <ul className={css.lastest__listComic}>
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

export default Lastest;
