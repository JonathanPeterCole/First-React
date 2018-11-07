// React
import React from 'react'

// Style
import './style.css'

// Style
import { clientNumber, dataUpdate } from '../../api'

class Connection extends React.Component {
  constructor (props) {
    super(props)

    // Set the initial state
    this.state = {
      status: 'Attempting to connect...',
      data: 'Awaiting data...'
    }

    // Update the status
    clientNumber((err, number) => {
      if (!err) {
        this.setState({ status: 'Connected as client ' + number })
      } else {
        this.setState({ status: 'Attempting to reconnect...' })
      }
    })

    // Update the data
    dataUpdate((err, data) => {
      if (!err) this.setState({ data: 'Recieved ' + data })
    })
  }

  render () {
    return (
      <div className='connection'>
        <div className='connection-status'>{this.state.status}</div>
        <div className='data'>{this.state.data}</div>
      </div>
    )
  }
}

export default Connection
