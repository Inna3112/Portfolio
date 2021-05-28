import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../../common/stiles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Contacts</h3>
                <form className={s.contacts}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <input type="submit"/>
            </div>
        </div>
    );
}