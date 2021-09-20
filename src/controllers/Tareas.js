const express = require('express')
const routeTareas = express.Router()
const service = require('../services/serviceTarea')
const mError = require('../middleware/error')


routeTareas.get('/tareas',(req,res)=>{
        service.getTareas()
            .then((list)=> res.json(list))
            .catch((error)=>next(error))
})

routeTareas.get('/tareas/:id',(req,res,next)=>{
    let {id} = req.params
    service.getOneTarea(id)
    .then((obj) => res.json(obj))
    .catch((error) => next(error))
})

routeTareas.delete('/tareas/:id',(req,res,next)=>{
    let {id} = req.params
    service.deleteOneTarea(id)
    .then((obj) => {
        res.json(obj)
        console.log('Borrado')
    })
    .catch((error) => next(error))
})


routeTareas.post('/tareas',(req,res,next)=>{
    let data = req.body
    console.log(data)

    if (!data.titulo || !data.descripcion || !data.nombrePersonaAsignada){
        res.status(400).json({error:'Bad request: titulo, descripción, nombre de la persona asignada is required'})
        return false;
    }

    service.addTarea(data)
        .then((objguardado)=>{
            console.log('Guardado')
            res.status(201).json(objguardado);
        })
        .catch((error)=>next(error))
    
    
})

routeTareas.patch('/tareas/:id',(req,res,next)=>{
    let {id} = req.params
    let data = req.body
    service.updateTarea(id,data)
    .then((obj) => {
        res.json(obj)
        console.log('actualizado')
    })
    .catch((error) => next(error))
})

routeTareas.use(mError)

module.exports = routeTareas




