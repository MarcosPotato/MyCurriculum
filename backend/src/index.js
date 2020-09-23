const Express = require('express')
const Cors = require('cors')
const Routes = require('./Routes')

const app = Express()

app.use(Cors())
app.use(Express.json())
app.use(Routes)

app.listen(9897, () => console.log('Server Started !!!'))