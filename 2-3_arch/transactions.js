let transactions = [
  {
    transactionId: '123456789',
    sourceId: '12345',
    destinationId: '67890',
    amount: 5.0,
    timestamp: '2023-06-01T00:00:00.000Z',
  },
]

const createTransaction = (req, res) => {
  const { sourceId, destinationId, amount } = req.body
  const transaction = {
    transactionId: generateTransactionId(),
    sourceId,
    destinationId,
    amount,
    timestamp: new Date().toISOString(),
  }
  transactions.push(transaction)
  return res.json(transaction)
}

// Helper function to generate a unique transaction ID
const generateTransactionId = () => {
  // Generate a random string or use a unique ID generation algorithm
  return Math.random().toString(36).substr(2, 9)
}

const transfer = (req, res) => {
  const { sourceId, destinationId, amount } = req.body
  sourceAccount = getCustomer(sourceId)
  destinationAccount = getCustomer(destinationId)
  if (!sourceAccount || !destinationAccount) {
    throw new Error('Invalid source or destination account')
  }
  if (sourceAccount.balance < amount) {
    throw new Error('Insufficient balance in the source account')
  }
  sourceAccount.balance -= amount
  destinationAccount.balance += amount
  createTransaction(
    sourceAccount.customerId,
    destinationAccount.destinationId,
    amount
  )
  return
}

module.exports = {
  createTransaction,
  transfer,
}
