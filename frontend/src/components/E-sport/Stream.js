import React from 'react';
import '../../App.css';
import './Stream.css';

class Stream extends React.Component {
    state = {
        streamer: [
          { url: 'https://player.twitch.tv/?channel=solary&parent=Azakana.fr',nom: "Solary" },
          { url: 'https://player.twitch.tv/?channel=ogaminglol&parent=Azakana.fr',nom: "Ogaming" },
          { url: 'https://player.twitch.tv/?channel=gobgg&parent=Azakana.fr',nom: "GoBGG" },
          { url: 'https://player.twitch.tv/?channel=sixentv&parent=Azakana.fr',nom: "SixenTV" },
        ],
        encours: "https://player.twitch.tv/?channel=solary&parent=Azakana.fr"
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