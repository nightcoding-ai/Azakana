import React, { Component} from "react";
import "./Offline.css";
import { Link } from 'react-router-dom';

class Offline extends Component {

    render(){
        return(
           <div className='Offline'>
               <h3>Veuillez-vous connecter ou créer un compte pour avoir accès à cette page.</h3>
               <Link to='/sign-in'>
                   <button className="button-connect"  to='/sign-in'>Connexion</button>
               </Link>
           </div>
        );
    }
}

export default Offline;
