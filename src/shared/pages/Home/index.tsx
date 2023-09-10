import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Features from 'shared/components/Features';
import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';
import Header from '../../components/Header';
import ComicCard from '../../components/ComicCard';
import Banner from '../../components/Banner';
import css from './Home.module.css';

const App: React.FC<any> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleLocaleChange = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            dispatch(setLocale(e.currentTarget.value as Locale));
        },
        [dispatch]
    );

    return (
        <React.Fragment>
            <Header />
            <Banner />
            <div className={css.home}>
                <h2 className={css.home__newRelease_label}>New release</h2>
                <ul className={css.home__newRelease}>
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

            <Features />
            <h2>{t('i18n-example')}</h2>
            <p>
                <button value="de_DE" onClick={handleLocaleChange}>
                    Deutsch
                </button>
                <button value="en_US" onClick={handleLocaleChange}>
                    English
                </button>
            </p>
        </React.Fragment>
    );
};

export default App;
