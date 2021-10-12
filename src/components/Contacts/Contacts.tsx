import React, {FormEvent, useState} from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {Title} from '../../common/components/title/Title';
import {FormInfoItem} from '../../data/data';
import {FormContact} from './Contact/FormContact';
import axios from 'axios';


type PropsType = {
    formInfoItems: Array<FormInfoItem>
}

export const Contacts: React.FC<PropsType> = ({formInfoItems}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSend, setIsSend] = useState(false)

    const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = axios.post('http://localhost:3010/sendMessage', {name, email, message})
        setName('')
        setEmail('')
        setMessage('')
        setIsSend(true)
            result.then(()=> {
                setIsSend(false)
            })
    }

    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <div className={s.contacts}>
                    <form className={s.contactForm} onSubmit={onSubmitHandler}>
                        <input className={s.formControl} type='text' placeholder={'Name'}
                               value={name}
                               onChange={(e) => setName(e.currentTarget.value)}/>
                        <input className={s.formControl} type='text' placeholder={'Email'}
                               value={email}
                               onChange={(e) => setEmail(e.currentTarget.value)}/>
                        <textarea className={s.formControl} placeholder={'Comment'}
                                  value={message}
                                  onChange={(e) => setMessage(e.currentTarget.value)}/>
                        <button type='submit'>Send your message</button>
                    </form>
                    <div className={s.infoMessage}>
                        {isSend && 'Your message send'}
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
