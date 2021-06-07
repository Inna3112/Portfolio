import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../../common/stiles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Contacts</h3>
                <form className={s.contacts}>
                    <input className={s.contact} type="text"/>
                    <input className={s.contact} type="text"/>
                    <textarea className={s.contact}></textarea>
                </form>
                <input className={s.button} type="submit"/>
            </div>
        </div>
    );
}