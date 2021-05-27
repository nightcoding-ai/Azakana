import React from 'react';
import '../../App.css';
import './Mid.css';
import Cookies from 'js-cookie';
import Offline from '../Offline/Offline';

class Mid extends React.Component {

   state = {
        token: Cookies.get('Token'),
        pseudo: Cookies.get('Pseudo'),
        str:"",
        count: 0,
    }
    
    render_token = () => {
        if (typeof(this.state.token) != 'undefined') {
            this.setState({str:<h3>Vous êtes connecté.</h3>})
          }else{
            this.setState({str:<Offline/>})
          }
    };

    render(){
        if(this.state.count == 0){
            this.render_token();
            this.setState({count: 1});
          }
          
    return (
            <div>
                {this.state.str}
            </div>
    )
  }
}

export default Mid;