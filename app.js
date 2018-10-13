const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3005

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const snackRoutes = require('./src/routes/snackroutes.js')
app.use('/snacks', snackRoutes)

// any other route is not allowed
app.all('*', (req, res, next) => res.sendStatus(404))

// app.use((err, req, res, next) => {
//   res.status(err.status).json(err)
// })

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } })
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The Snack Shop is open on port ${port}!`)
  })
}

module.exports = app;
