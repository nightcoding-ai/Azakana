import React from 'react';
import './Champion.css';
import { Link } from 'react-router-dom';


class Champ extends React.Component {
  state = {
    count: 0,
    champions: [],
    element:'',
  };
  champs = () => {
    
    fetch('http://127.0.0.1:8000/api/Champions/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    .then( data => data.json())
    .then(
      data => {
        let array = [];
        for(const property in data.data){
          array.push([property,data.data[property]]);
          
        }
        this.setState({champions: array});
      }
    )
    .catch( error => console.error(error))
  }

  handleClick = () => {
    window.location.reload(false);
    }

  champSelect = champ => {
    fetch('http://127.0.0.1:8000/api/Champions/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    .then( data => data.json())
    .then(
      data => {
        for(const property in data.data){
          if(property == champ){
            this.setState({champions: []})
            console.log(data.data[property])
            this.setState({element:
              <div>
                <button onClick={this.handleClick}>Retour</button>
                <p>Champion: {data.data[property].id}</p>
                <p>Titre: {data.data[property].title}</p>
                <p>Type: {data.data[property].partype}</p>
                <p>Mp: {data.data[property].stats.mp}</p>
                <p>HP: {data.data[property].stats.hp}</p>
                <p>Hp per lebel: {data.data[property].stats.hpperlevel}</p>
                <p>Hp regen: {data.data[property].stats.hpregen}</p>
                <p>Attack: {data.data[property].stats.attackdamage}</p>
                <p>Attack per level: {data.data[property].stats.attackdamageperlevel}</p>
                <p>Attack range: {data.data[property].stats.attackrange}</p>
              </div>
            })
          }
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
      <>
      <div >
        {this.state.champions.map((champ) => (
            <button onClick={this.champSelect.bind(this, champ[0])}>{champ[0]}</button>
          ))}{this.state.element}
      </div>
      </>
    )
  }
}

export default Champ;