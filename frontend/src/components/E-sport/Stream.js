import React from 'react';
import '../../App.css';
import './Stream.css';

class Stream extends React.Component {
//51.210.4.115 Lien vers le site en ligne
    state = {
        streamer: [
          { url: 'https://player.twitch.tv/?channel=solary&parent=127.0.0.1',nom: "Solary" },
          { url: 'https://player.twitch.tv/?channel=ogaminglol&parent=127.0.0.1',nom: "Ogaming" },
          { url: 'https://player.twitch.tv/?channel=gobgg&parent=127.0.0.1',nom: "GoBGG" },
          { url: 'https://player.twitch.tv/?channel=sixentv&parent=127.0.0.1',nom: "SixenTV" },
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
                  <button className="stream-link" onClick={() => this.onAdd(streamer.url)}>{streamer.nom}</button>
              ))}
           </ul>
                  <iframe src={this.state.encours} frameborder="0" allowfullscreen="true" scrolling="no" height="600" width="1066" className='streaming'></iframe>
       </div>
    )
  }
}

export default Stream;