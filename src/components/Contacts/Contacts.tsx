import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {Title} from "../../common/components/title/Title";



export const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} />
                <form className={s.contactForm}>
                    <input className={s.formControl} type='text' placeholder={'Name'}/>
                    <input className={s.formControl} type='text' placeholder={'Email'}/>
                    <textarea className={s.formControl} placeholder={'Comment'}/>
                    <button type='submit'>Send your message</button>
                </form>
            </div>
        </div>
    );
}