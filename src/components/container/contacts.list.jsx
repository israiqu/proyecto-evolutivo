import React from 'react'
/* import PropTypes from 'prop-types' */
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

function ContactsListComponent() {

    const defaultContact = new Contact("Israel", "Munguia", "isra.dev@outlook.com", false)

    return (
    <div>
        <h2>Tus Contactos:</h2>
        <ContactComponent contact={ defaultContact }></ContactComponent>
    </div>
    );
}

/* ContactsListComponent.propTypes = {} */

export default ContactsListComponent
