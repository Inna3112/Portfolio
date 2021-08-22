import React from 'react';
import s from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
    let arr =[
        {name: 'main', id: 'main'},
        {name: 'skills', id: 'skills'},
        {name: 'projects', id: 'projects'},
        {name: 'contacts', id: 'contacts'}
    ]
    let navLinks = arr.map((el, i) => {
        return (
            <span key={i}>
                {/*<a href= {el.id}> {el.name} </a>*/}
                <Link
                    activeClass={s.active}
                    to={el.id}
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > {el.name} </Link>
            </span>
        )
    })
    return (
        <div className={s.nav}>
            {navLinks}
        </div>
    );
}
