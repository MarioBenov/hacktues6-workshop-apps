import React from 'react';
import moment from 'moment';
import './App.css';

const targetTime = moment('2020-10-04T23:59:59')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  }

  updateCountdown() {
    const currTime = moment()
    const diffTime = moment.duration(targetTime.diff(currTime))

    this.setState({
      days: diffTime.days(),
      hours: diffTime.hours(),
      minutes: diffTime.minutes(),
      seconds: diffTime.seconds()
    })
  }

  render() {
    return (
      <div className="cont">
        <div className="countdown">
          <div>
            <span >{this.state.days}</span>
            <span>дена</span>
          </div>
          <div>
            <span>{this.state.hours}</span>
            <span>часа</span>
          </div>
          <div>
            <span>{this.state.minutes}</span>
            <span>минути</span>
          </div>
          <div>
            <span>{this.state.seconds}</span>
            <span>секунди</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
