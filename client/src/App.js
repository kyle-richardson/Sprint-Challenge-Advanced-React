import React, {Component} from 'react';
import axios from "axios"
import PlayerList from "./components/PlayerList"
import Header from "./components/Header"
import PlayerGraph from "./components/PlayerGraph"
// country: "United States"
// id: 0
// name: "Alex Morgan"
// searches: 100

class App extends Component {
  state= {
    playerList:[],
    countryList: []
  }
  componentDidMount=()=> {
    axios
      .get('http://localhost:5000/api/players')
      .then(res=> {
        this.setState({
          playerList: res.data
        })
      })
      .then(()=>{
        const countries = [...new Set(this.state.playerList.map(ele=>ele.country))]

        const countryData = countries.map(country=> {
          return {
            country: `${country}`,
            players: this.state.playerList.filter(player=> player.country===country).length
          }
        })
        const dataSorted = countryData.sort((a,b)=>b.players-a.players)
        this.setState({
          countryList: dataSorted
        })
      })
      // .then(()=> {
      //   console.log(this.state)
      // })
      .catch(err => console.log(err))
  }
  render() {
    return(
      <div className="App">
        <Header />
        <PlayerGraph countryList = {this.state.countryList}/>
        <PlayerList playerList={this.state.playerList}/>
      </div>
    )
  }
}

export default App;
