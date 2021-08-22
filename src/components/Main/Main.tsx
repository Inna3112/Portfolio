import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'


export const Main = () => {
    return (
        <div id='main' className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <h6>Hi there, I'm</h6>
                    <h1>Inna Fomichova</h1>
                    <h2>Frontend developer.</h2>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}