import React from 'react';
import '../../App.css';


class Patch_notes extends React.Component {
  render(){
    return (
      <>
        <body className='patch-notes'>
          <button onClick={() => window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")} className="btn-patch btn--patch">
            Accéder aux notes de patch
          </button>
        </body>
      </>
    )
  }
}

export default Patch_notes;