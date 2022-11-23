import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1>The Button has been clicked 0 times</h1>
        <h1 className="head">
          This Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.incrementCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
