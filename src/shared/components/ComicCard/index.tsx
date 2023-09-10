import React from 'react';
import thumbnail from '../../assets/comic-thumnail.png';
import css from './ComicCard.module.css';

const ComicCard = () => {
    return (
        <div className={css.card}>
            <img className={css.card__thumbnail} src={thumbnail} alt="Comic Thumbnail" />
            <span className={css.card__title}>One piece</span>
            <span className={css.card__author}>Oda eiichiro</span>
        </div>
    );
};

export default ComicCard;
