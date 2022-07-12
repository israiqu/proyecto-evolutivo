
export class Contact{
    nombre = ''
    apellido = ''
    email = ''
    estatus = false

    constructor(nombre, apellido, email, estatus) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.estatus = estatus
    }
}