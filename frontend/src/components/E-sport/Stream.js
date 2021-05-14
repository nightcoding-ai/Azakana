import React from 'react';
import '../../App.css';
import './Stream.css';

class Stream extends React.Component {
//51.210.4.115 Lien vers le site en ligne
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
    )
  }
}

export default Stream;