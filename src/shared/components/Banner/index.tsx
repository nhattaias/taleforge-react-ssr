import React from 'react';
import thumbnail from '../../assets/comic-thumnail.png';
import css from './Banner.module.css';

const Banner = () => {
    return (
        <div className={css.banner}>
            <img className={css.banner__background} src={thumbnail} />
            <div className={css.banner__background_gradient} />
        </div>
    );
};

export default Banner;
