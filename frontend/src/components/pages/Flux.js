import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
class Flux extends React.Component {
    state = {
        streamer: [
          { url: 'https://player.twitch.tv/?channel=solary&parent=127.0.0.1',nom: "solary" },
          { url: 'https://player.twitch.tv/?channel=ogaminglol&parent=127.0.0.1',nom: "ogaminglol" },
          { url: 'https://player.twitch.tv/?channel=gobgg&parent=127.0.0.1',nom: "gobgg" },
          { url: 'https://player.twitch.tv/?channel=sixentv&parent=127.0.0.1',nom: "sixentv" },
        ],
        encours: "https://player.twitch.tv/?channel=solary&parent=127.0.0.1"
      };
    onAdd = streamer => {
        
        this.setState({encours: streamer});
    };

  render(){
    return (
      <>
       <div className='flux'>
       <ul>
          {this.state.streamer.map(streamer => (
            <li>
              <button className="form-control" onClick={() => this.onAdd(streamer.url)}>{streamer.nom}</button>
            </li>
          ))}
        </ul>
        <iframe src={this.state.encours} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Flux;