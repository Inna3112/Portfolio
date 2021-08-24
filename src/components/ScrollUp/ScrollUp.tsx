import React from 'react';
import s from './ScrollUp.module.scss';
import {animateScroll as scroll}  from 'react-scroll'



export const ScrollUp = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    };
    return (
        <div onClick={scrollToTop} className={s.scrollUp}>
            <span className={s.tiAngleDoubleUp}>
                <span className={s.arrow}></span>
                <span className={s.arrow}></span>
            </span>
        </div>

    );
}