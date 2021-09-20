require('./mongo')

const app = require('./src/app')

const PORT = process.env.PORT || 3001

const routeUsers = require('./src/controllers/Tareas')

app.listen(PORT,()=>{
    console.log(`Listing in port ${PORT}`)
})