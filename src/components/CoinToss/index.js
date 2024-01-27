// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onResult = () => {
    const coinResult = Math.floor(Math.random() * 2)
    console.log(coinResult)

    if (coinResult === 0) {
      this.setState(prevSate => ({headsCount: prevSate.headsCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevSate => ({tailsCount: prevSate.tailsCount + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevSate => ({totalCount: prevSate.totalCount + 1}))
  }

  render() {
    const {totalCount, headsCount, tailsCount, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="tossImage" />
          <button type="button" className="button" onClick={this.onResult}>
            Toss Coin
          </button>
          <div className="resultContainer">
            <p className="description">Total:{totalCount}</p>
            <p className="description">Heads:{headsCount}</p>
            <p className="description">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
