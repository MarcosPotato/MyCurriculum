const Express = require('express')
const Cors = require('cors')
const Routes = require('./router')

const app = Express()

app.use(Cors())
app.use(Express.json())
app.use(Routes)

app.listen(9897)