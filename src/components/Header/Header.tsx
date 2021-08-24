import React from 'react';
import s from './Header.module.scss';
import {Nav} from './Nav/Nav';
import {BurgerNav} from './BurgerNav/BurgerNav';


export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.fixed}>
                <Nav />
                <BurgerNav />
            </div>
        // </header>

    );
}