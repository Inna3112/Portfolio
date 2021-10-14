import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import ReactTypingEffect from 'react-typing-effect';
import MainPhoto from './../../assets/images/photo.jpeg'


// const mainBackground = {
//     backgroundImage: `url(${wallImg})`,
// }

export const Main = () => {
    return (
        <div id='main' className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <h6>Hi there, I'm</h6>
                    <h1>Inna Fomichova</h1>
                    <ReactTypingEffect text='Frontend developer.' />
                </div>
                <div className={s.photo}>
                    <img src={MainPhoto} alt="MainPhoto"/>
                </div>
            </div>
        </div>
    );
}