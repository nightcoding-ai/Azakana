import React, { useState, useEffect } from 'react';


import './Mentions.css';


class Mentions extends React.Component{

    render(){

        return(
            
            <body id="body">
                
                    <div id="developpers">
                        <table>
                            
                            <thead>
                                
                                <tr><th>Nom</th><th>Prénom</th><th>Téléphone</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Fauconnier</td><td>Christopher</td><td>0487/993454</td></tr>
                                <tr><td>Le Noir Martin</td><td>Diego</td><td>0482/213454</td></tr>
                                <tr><td>Periquet</td><td>Simon</td><td>0481/993254</td></tr>
                                <tr><td>Kinet</td><td>Simon</td><td>0484/883454</td></tr>
                                
                            </tbody>

                        </table>
                    </div>
                    <div id="corporation">
                        Le site internet Azakana a été développé dans le cadre d'un projet de 2ème année par des étudiants de la 
                        Haute Ecole Ephec située à Louvain-La-Neuve. Il n'a été développé que dans un but pédagogique et non lucratif.
                        Azakana est sous la juridiction de l'<a  id="liens" href="https://www.ephec.be/" target="blank_">EPHEC</a>.

                        Tout recopiage total ou partiel sans mentionner les auteurs est interdit.
                    </div>
                    <div id="intel">
                        Les informations personnelles des utilisateurs d'Azakana ne sont/seront pas utilisées à des fins commerciales. 
                        Uniquement dans le but technique du site web. 
                        Azakana fait appel aux services d'informations extérieurs(API) de <a id="liens" href="https://www.riotgames.com/" target="blank_">Riot Games</a>.


                    </div>
                    <div id="technologies">
                        Developped with React and Django.
                    </div>
                   
                
            </body>
            
            
           

        )
    }


}

export default Mentions;