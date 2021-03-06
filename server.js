const next = require('next')
const routes = require('./config/routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare()
.then(() => {
  const server = express()

  server.use(handler).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
