import React from 'react';
import ReactDOM from "react-dom";
import '../../App.css';
import './Champion.css';

class Champ extends React.Component {
  state = {
    count: 0,
    champions: [],
  };
  champs = () => {
    fetch('http://127.0.0.1:8000/api/Champions/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    .then( data => data.json())
    .then(
      data => {
        for(const property in data.data){
          this.state.champions.push([property,data.data[property]]);
        }
      }
    )
    .catch( error => console.error(error))
  }

  render(){
    if(this.state.count == 0){
      this.champs();
      this.setState({count: 1});
    }
   
    return (
      <div>
        {this.state.champions.map((champ) => (
            <p>{champ[0]}</p>
          ))}
      </div>
    )
  }
}

export default Champ;