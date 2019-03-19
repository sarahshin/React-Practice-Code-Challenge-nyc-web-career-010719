import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    buttonPressed: false,
    moneyStart: 100,
    moneySpent: 0
  }

  componentDidMount(){
    this.fetchSushis()
  }

  fetchSushis(){
    fetch(API)
    .then(res => res.json())
    .then(json => {
      this.setState({
        sushis: json
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} buttonPressed={this.buttonPressed}/>
        <Table moneyStart={this.state.moneyStart} moneySpent={this.state.moneySpent}/>
      </div>
    );
  }
}

export default App;
