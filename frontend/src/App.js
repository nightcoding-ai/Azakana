import React,{ Component} from 'react';
import CookieConsent from "react-cookie-consent";
import Nav from './components/Navbar/Navbar';
import './App.css';
import Middle from './components/Body_home/Middle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Statistiques from './components/pages/Statistiques';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Patch_notes from './components/pages/Patch_notes';
import Team from './components/pages/Team';
import Champions from './components/pages/Champions';
import E_sport from './components/pages/E_sport';
import Connected from './components/pages/Connected';
import Cookies from 'js-cookie';
import Add_team from './components/Team/Add_team';
import Join_team from './components/Team/Join_team';
import Mentions from './components/Mentions/Mentions';
import Contact from './components/Contact/Contact';

class App extends React.Component{
  render(){
  return (
    <>
      <CookieConsent
      buttonText='Je comprends'
      buttonStyle={{color:'white', background:'orange'}}
      location='top'>
        Nous utilisons des cookies pour améliorer l'expérience utilisateur.
      </CookieConsent>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Middle} />
          <Route path='/statistiques' component={Statistiques} />
          <Route path='/team' component={Team} />
          <Route path='/patch-notes' component={Patch_notes} />
          <Route path='/champions' component={Champions} />
          <Route path='/e-sport' component={E_sport} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/connected' component={Connected} />
          <Route path='/Add_team' component={Add_team} />
          <Route path='/Join_team' component={Join_team} />
          <Route path='/mentions' component={Mentions} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>

  );
 }
}


export default App;
