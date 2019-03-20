import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    eatenSushi: [],
    balance: 100
  }

  componentDidMount(){
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API).then(res => res.json())
    .then(json => {
      this.setState({
        sushis: json
      })
    })
  }

  renderFourMoreSushis = () => {
    this.setState(prevState => ({
      index: prevState.index + 4
    }))
  }

  eatSushi = (id) => {
    let sushi = this.state.sushis.find(sushi => sushi.id === id)
    let currentlyEaten = this.state.eatenSushi
    let currentBalance = this.state.balance
    if(currentBalance - sushi.price >= 0 && !currentlyEaten.includes(sushi)){
      this.setState({
        eatenSushi: [...currentlyEaten, sushi],
        balance: currentBalance - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          eatenSushi={this.state.eatenSushi}
          sushis={this.state.sushis}
          index={this.state.index}
          renderFourMoreSushis={this.renderFourMoreSushis}
          eatSushi={this.eatSushi} />
        <Table balance={this.state.balance} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
