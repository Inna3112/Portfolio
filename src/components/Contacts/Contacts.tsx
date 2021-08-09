import React from 'react';
import s from './Contacts.module.css';
import sContainer from './../../common/stiles/Container.module.css'
import {Title} from "../../common/components/title/Title";
import {Button} from "../../common/components/Button/Button";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} />
                {/*<h2 className={s.title}>Contacts</h2>*/}
                <form className={s.contactForm}>
                    <input className={s.formControl} type='text' placeholder={'Name'}/>
                    <input className={s.formControl} type='text' placeholder={'Email'}/>
                    <textarea className={s.formControl} placeholder={'Comment'}/>
                    <Button title={'Send your message'} type='submit' />
                    {/*<button className={s.contactBtn} type="submit"> Send </button>*/}
                </form>
            </div>
        </div>
    );
}