import React, {FormEvent, useState} from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/stiles/Container.module.scss'
import {Title} from '../../common/components/title/Title';
import {FormInfoItem} from '../../data/data';
import {FormContact} from './Contact/FormContact';
import {api} from '../../dal/api';



type PropsType = {
    formInfoItems: Array<FormInfoItem>
}

export const Contacts: React.FC<PropsType> = ({formInfoItems}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState('')
    const [isDisable, setIsDisable] = useState(false)

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsDisable(true)
        api.createMessage(name, email, message)
            .then(() => {
                setIsSent(true)
            })
            .catch(() => {
                setError('An error occurred')
            })
            .finally(() => {
                setName('')
                setEmail('')
                setMessage('')
                setIsDisable(false)
                setTimeout(() => {
                    setIsSent(false)
                    setError('')
                }, 5000)

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
                        <button type='submit' disabled={isDisable} >Send your message</button>
                        <div className={!error ? s.infoMessage : `${s.infoMessage} ${s.error}`}>
                            {isSent ? 'Your message has been sent' : error}
                        </div>
                    </form>
                    <div className={s.contactsInfo}>
                        <h2 className={s.contactsTitle}>Get in touch</h2>
                        <FormContact formInfoItems={formInfoItems}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
