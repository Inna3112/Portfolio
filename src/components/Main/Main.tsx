import React from 'react';
import s from './Main.module.css';
import sContainer from './../../common/stiles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <span>Hi there!</span>
                    <h1>I am Inna Fomichova</h1>
                    <p>Frontend developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}