import React from 'react';
import {ContactType} from '../../../data/data';
import {Contact} from './Contact/Contact';


type LinksPropsType = {
    contacts: Array<ContactType>
}

export const Links: React.FC<LinksPropsType> = ({contacts}) => {
    return (
        <span>
            {contacts.map((el,index) =>(
                <Contact
                    key={index}
                    image={el.image}
                    imgAlt={el.imgAlt}
                    link={el.link} /> ))}
        </span>
    )
}
