const mongoose = require('mongoose')
const {Schema,model} = mongoose

const schemaTarea = new Schema({
    titulo: String,
    descripcion: String, 
    fechaCreacion: Date,
    fechaComplemento: Date,
    nombrePersonaAsignada: String,
    estadoTarea: String
})

schemaTarea.set('toJSON', {
    transform: (document,returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Tarea = new model('Tarea',schemaTarea)


module.exports = Tarea 