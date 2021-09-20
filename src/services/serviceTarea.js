const Tarea = require('../models/tareaModel')

function getTareas(){
    return Tarea.find({})
}


async function getOneTarea(id) {
    const tarea = await Tarea.exists({ _id: id })
    if (tarea) return Tarea.findById(id)
    else throw new Error('El registro no existe')
}


async function deleteOneTarea(id) {
    const tarea = await Tarea.exists({ _id: id })
    if (tarea) return Tarea.findByIdAndDelete(id)
    else throw new Error('El registro no existe')
}

function addTarea(data){
    let tarea = new Tarea({
        titulo: data.titulo,
        descripcion: data.descripcion,
        fechaCreacion: new Date(),
        fechaComplemento: data.fechaComplemento || "",
        nombrePersonaAsignada: data.nombrePersonaAsignada,
        estadoTarea: data.estadoTarea
    })

    return tarea.save()
}

async function updateTarea(id, data) {
    let tarea = await Tarea.findById(id)
    if (tarea) {

        if(data.titulo) tarea.titulo = data.titulo
        
        if(data.descripcion) tarea.descripcion = data.descripcion
        if(data.nombrePersonaAsignada) tarea.nombrePersonaAsignada = data.nombrePersonaAsignada
        if(data.estadoTarea) tarea.estadoTarea = data.estadoTarea

      
        return tarea.save()
    }
    else throw new Error('El registro no existe')
}



module.exports = {
    getTareas,addTarea,getOneTarea,deleteOneTarea,updateTarea
}