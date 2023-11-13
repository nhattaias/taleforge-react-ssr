import React from 'react';
import css from './Divider.module.css';

interface DividerProps {
    width?: string;
    marginTop?: string;
    marginBottom?: string;
    backgroundColor?: string;
}

const Divider: React.FC<DividerProps> = ({
    width = '80%',
    marginTop = '0',
    marginBottom = '0',
    backgroundColor = 'white',
}) => {
    const dividerStyle: React.CSSProperties = {
        width,
        marginTop,
        marginBottom,
        backgroundColor,
    };

    return (
        <div className={css.divider}>
            <div className={css.divider__line} style={dividerStyle} />
        </div>
    );
};

export default Divider;
