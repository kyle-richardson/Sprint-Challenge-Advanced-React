import React, {Component} from 'react';
import axios from "axios"
import PlayerList from "./components/PlayerList"
// country: "United States"
// id: 0
// name: "Alex Morgan"
// searches: 100

class App extends Component {
  state= {
    playerList:[]
  }
  componentDidMount=()=> {
    axios
      .get('http://localhost:5000/api/players')
      .then(res=> {
        console.log(res.data)
        this.setState({
          playerList: res.data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return(
      <div className="App">
        <PlayerList playerList={this.state.playerList}/>
      </div>
    )
  }
}

export default App;
