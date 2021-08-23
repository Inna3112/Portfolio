import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {Title} from '../../common/components/title/Title';
import {FormInfoItem} from '../../data/data';
import {FormContact} from './Contact/FormContact';


type PropsType = {
    formInfoItems: Array<FormInfoItem>
}

export const Contacts: React.FC<PropsType> = ({formInfoItems}) => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <div className={s.contacts}>
                    <div className={s.contactsFormContainer}>
                        <form className={s.contactForm}>
                            <input className={s.formControl} type='text' placeholder={'Name'}/>
                            <input className={s.formControl} type='text' placeholder={'Email'}/>
                            <textarea className={s.formControl} placeholder={'Comment'}/>
                            <button type='submit'>Send your message</button>
                        </form>
                    </div>
                    <div className={s.contactsInfo}>
                        <h2 className={s.contactsTitle}>Get in touch</h2>
                        <FormContact formInfoItems={formInfoItems}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
