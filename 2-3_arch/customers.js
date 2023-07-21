let customers = [
  {
    customerId: '12345',
    name: 'John Doe',
    email: 'johndoe@example.com',
    balance: 5000.0,
  },
]

const getAllCustomers = (req, res) => {
  return res.json(customers)
}

const getCustomer = (req, res) => {
  const customerId = req.params.customerId
  return res.json(
    customers.find((customer) => customer.customerId === customerId)
  )
}

const generateCustomerId = () => {
  return Math.random().toString(10).substr(2, 6)
}

const createCustomer = (req, res) => {
  const { name, email, balance } = req.body
  const customer = {
    customerId: generateCustomerId(),
    name,
    email,
    balance,
  }
  customers.push(customer)
  return res.json(customer)
}

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
}
