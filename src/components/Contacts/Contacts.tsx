import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {Title} from "../../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} />
                {/*<h2 className={s.title}>Contacts</h2>*/}
                <form className={s.contactForm}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'Email'}/>
                    <textarea placeholder={'Comment'}/>
                    <button className={s.contactBtn} type="submit"> Send </button>
                </form>
            </div>
        </div>
    );
}