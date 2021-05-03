import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';

class Patch_notes extends React.Component {
  render(){
    return (
      <>
        <div className='patch-notes'>
          <button onClick={() => window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")} className="btn-patch btn--patch">
            Accéder aux notes de patch
          </button>
        </div>
        <Footer />
      </>
    )
  }
}

export default Patch_notes;