import React from 'react';
import s from './Main.module.css';
import sContainer from './../../common/stiles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <h6>Hi there!</h6>
                    <h1>I'm Inna Fomichova</h1>
                    <h2>Frontend developer.</h2>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}