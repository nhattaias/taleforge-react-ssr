import React from 'react';
import Header from '../../components/Header';
import ComicCard from '../../components/ComicCard';
import Banner from '../../components/Banner';
import PaginationControl from '../../components/PaginationControl';
import css from './Home.module.css';

const App: React.FC<any> = () => {
    // const { t } = useTranslation();
    // const dispatch = useDispatch();
    // const handleLocaleChange = useCallback(
    //     (e: React.FormEvent<HTMLButtonElement>) => {
    //         dispatch(setLocale(e.currentTarget.value as Locale));
    //     },
    //     [dispatch]
    // );

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
                </ul>
                <h2 className={css.home__newRelease_label}>Lastest</h2>
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

export default App;
