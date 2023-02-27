// Write your code here
/* eslint-disable react/button-has-type */

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isLoggedIn: true}

  onSubscribe = () => {
    this.state.isLoggedIn = false
  }

  onSubscribed = () => {
    this.state.isLoggedIn = true
  }

  render() {
    const {isLoggedIn} = this.state

    let authButton
    if (isLoggedIn) {
      authButton = (
        <button onClick={this.onSubscribe} className="button">
          Subscribe
        </button>
      )
    } else {
      authButton = (
        <button onClick={this.onSubscribed} className="button">
          Subscribed
        </button>
      )
    }

    return (
      <div className="background">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
