let clientCount = 0

function socketApi (socket) {
  // Store the client numer and increase the client count
  let clientNumber = clientCount
  clientCount++

  // Log the connection
  console.log('Client ' + clientNumber.toString() + ' connected')

  // Send the client number
  socket.emit('clientNumber', clientNumber.toString())

  // Send a random number every 5 seconds
  let interval = setInterval(() => {
    // Prepare a random number
    let random = Math.random()
    // Log the number
    console.log('Sending ' + random.toString() + ' to client ' + clientNumber.toString())
    // Send the random number
    socket.emit('dataUpdate', random)
  }, 5000)

  // Log disconnection and clear the interval
  socket.on('disconnect', () => {
    console.log('Client ' + clientNumber.toString() + ' disconnected')
    clearInterval(interval)
  })
}

module.exports = socketApi
