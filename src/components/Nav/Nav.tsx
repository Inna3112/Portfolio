import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    let arr =[
        {name: 'main'},
        {name: 'skills'},
        {name: 'projects'},
        {name: 'contacts'}
    ]
    let navLinks = arr.map((el, i) => {
        return (
            <span key={i}>
                <a
                    href=''
                >{el.name}</a>
            </span>
        )
    })
    return (
        <div className={s.nav}>
            {navLinks}
        </div>
    );
}