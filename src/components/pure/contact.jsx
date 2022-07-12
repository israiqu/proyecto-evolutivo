import PropTypes from 'prop-types'
import React from 'react'
import { Contact } from '../../models/contact.class.js'
import { ESTATUS } from '../../models/estado.enum.js'

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h3>
                Nombre: { contact.nombre }
            </h3>
            <h3>
                Apellido: { contact.apellido }
            </h3>
            <h3>
                Email: { contact.email }
            </h3>
            <h4>
                Contacto { contact.estatus ? `${ ESTATUS.CONECTADO }`:`${ ESTATUS.DESCONECTADO }` }
            </h4>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
