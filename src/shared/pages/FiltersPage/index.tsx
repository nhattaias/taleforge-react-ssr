import React from 'react';
import Header from '../../components/Header';
import FilterOptionComponent from '../../components/FilterOptionComponent';
import { FilterType } from '../../constant';
import css from './Filters.module.css';

const FiltersPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={css.wrapper}>
                <div className={css.tips}>
                    <h2 className={css.tips__title}>Tips</h2>
                    <div className={css.tips__tip}>
                        <FilterOptionComponent
                            name="Action"
                            option={FilterType.NO_FILTER}
                            clickable={false}
                        />
                        <p>unfilter</p>
                    </div>
                    <div className={css.tips__tip}>
                        <FilterOptionComponent
                            name="Action"
                            option={FilterType.HAVE_FILTER}
                            clickable={false}
                        />
                        <p>filter</p>
                    </div>
                    <div className={css.tips__tip}>
                        <FilterOptionComponent
                            name="Action"
                            option={FilterType.REMOVE_WHEN_FILTER}
                            clickable={false}
                        />
                        <p>removed</p>
                    </div>
                </div>
                <ul className={css.genrerGroup}>
                    <li>
                        <div>genre group 1</div>
                    </li>
                    <li>
                        <div>genre group 2</div>
                    </li>
                    <li>
                        <div>genre group 3</div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div>drop down list 1</div>
                    </li>
                    <li>
                        <div>drop down list 2</div>
                    </li>
                </ul>
                <div>search component - apply button</div>
                <div>divider</div>
                <div>list manga</div>
                <div>pagecontroller</div>
            </div>
        </React.Fragment>
    );
};

export default FiltersPage;
