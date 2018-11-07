import io from 'socket.io-client'

// Log the connection to the server
const socket = io()
socket.on('connect', () => {
  console.log('Connected to server.')
})

// Retrieve the client number
export function clientNumber (callback) {
  socket.on('clientNumber', (number) => {
    callback(null, number)
  })
  socket.on('disconnect', () => {
    callback(new Error('Connection Lost'))
  })
}

// Retrieve the information from the server
export function dataUpdate (callback) {
  socket.on('dataUpdate', (data) => {
    callback(null, data)
  })
}
