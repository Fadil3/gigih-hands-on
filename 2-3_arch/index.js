const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const {
  getCustomer,
  getAllCustomers,
  createCustomer,
} = require('./customers.js')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getCustomer)
app.post('/customers', createCustomer)
