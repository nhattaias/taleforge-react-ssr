import React from 'react';
import thumbnail from '../../assets/comic-thumnail.png';
import css from './Banner.module.css';

const Banner = () => {
    return (
        <div className={css.banner}>
            <img className={css.banner__background} src={thumbnail} />
            <div className={css.banner__background_gradient} />
            <button className={css.banner__button}>READ NOW</button>
            <div className={css.banner__info}>
                <span className={css.banner__title}>One piece</span>
                <span className={css.banner__author}>Oda Eiichiro</span>
            </div>
        </div>
    );
};

export default Banner;
